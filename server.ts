import express, { type Request, type Response, type NextFunction } from 'express';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { db, initializeDatabase, resolveUniqueVehicleSlugs, slugifySegment } from './server/db.ts';
import { buildLlmsTxt, buildRobotsTxt, buildSitemapXml, injectRouteSeoHtml } from './server/seo.ts';

dotenv.config();
initializeDatabase();

const app = express();
const PORT = 3000;

app.set('trust proxy', 1);
app.use(express.json({ limit: '2mb' }));

function getOrigin(req: Request): string {
  const configured = (process.env.APP_URL || '').trim().replace(/\/+$/, '');
  if (configured && /^https?:\/\//i.test(configured) && !configured.includes('MY_APP_URL')) {
    return configured;
  }
  const proto = req.headers['x-forwarded-proto']
    ? String(req.headers['x-forwarded-proto']).split(',')[0].trim()
    : req.protocol || 'http';
  const host = req.get('host') || `localhost:${PORT}`;
  return `${proto}://${host}`;
}

// Block search engines & AI crawlers from indexing /admin and /api/admin
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path === '/admin' || req.path.startsWith('/admin/') || req.path.startsWith('/api/admin')) {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }
  next();
});

// ============================================================
// SEARCH ENGINE & AI CRAWLER DISCOVERY ROUTES
// ============================================================

app.get('/robots.txt', (req: Request, res: Response) => {
  res.type('text/plain; charset=utf-8').send(buildRobotsTxt(getOrigin(req)));
});

app.get('/sitemap.xml', (req: Request, res: Response) => {
  res.type('application/xml; charset=utf-8').send(buildSitemapXml(getOrigin(req)));
});

app.get('/llms.txt', (req: Request, res: Response) => {
  res.type('text/markdown; charset=utf-8').send(buildLlmsTxt(getOrigin(req), false));
});

app.get('/llms-full.txt', (req: Request, res: Response) => {
  res.type('text/markdown; charset=utf-8').send(buildLlmsTxt(getOrigin(req), true));
});

// Ensure uploads directory exists
const uploadsDir = path.resolve(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Allowed MIME types and strict extensions for vehicle image uploads
const MIME_TO_EXT: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
};

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = MIME_TO_EXT[file.mimetype];
    if (!ext) {
      return cb(new Error('Unsupported image format. Only JPG, PNG, and WEBP are allowed.'), '');
    }
    const safeName = `${crypto.randomBytes(16).toString('hex')}${ext}`;
    cb(null, safeName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (MIME_TO_EXT[file.mimetype]) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG, and WEBP images up to 5MB are allowed.'));
    }
  },
});

// Safe static serving for uploaded vehicle images with strict path confinement
app.get('/uploads/:filename', (req: Request, res: Response) => {
  const filename = String(req.params.filename || '');
  if (!/^[a-f0-9]{32}\.(jpg|png|webp)$/.test(filename)) {
    res.status(400).json({ error: 'Invalid filename' });
    return;
  }
  const resolvedPath = path.resolve(uploadsDir, filename);
  if (!resolvedPath.startsWith(uploadsDir + path.sep)) {
    res.status(403).json({ error: 'Access denied' });
    return;
  }
  if (!fs.existsSync(resolvedPath)) {
    res.status(404).json({ error: 'File not found' });
    return;
  }
  res.sendFile(resolvedPath);
});

// Security helper functions
function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const derived = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${derived}`;
}

function verifyPassword(password: string, storedHash: string): boolean {
  const parts = storedHash.split(':');
  if (parts.length !== 2) return false;
  const [salt, keyHex] = parts;
  const derived = crypto.scryptSync(password, salt, 64);
  const storedBuf = Buffer.from(keyHex, 'hex');
  if (derived.length !== storedBuf.length) return false;
  return crypto.timingSafeEqual(derived, storedBuf);
}

function sha256(value: string): string {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const digestA = crypto.createHash('sha256').update(a).digest();
  const digestB = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(digestA, digestB);
}

function getEnvPasscode(): string {
  return (process.env.ADMIN_PASSCODE || '').trim();
}

function sanitizeImageUrl(url: unknown): string {
  if (typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('/assets/jadeer/') && !trimmed.includes('..')) {
    return trimmed;
  }
  if (/^\/uploads\/[a-f0-9]{32}\.(jpg|png|webp)$/.test(trimmed)) {
    return trimmed;
  }
  return '';
}

function parseJsonSafe<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function formatVehicleRow(row: Record<string, unknown>) {
  const brandSlug = String(row.brand_slug || '').trim() || slugifySegment(String(row.make || 'vehicle'));
  const modelSlug = String(row.model_slug || '').trim() || slugifySegment(String(row.model || 'model'));
  const section = row.listing_type === 'showroom' ? 'showroom' : 'used-cars';
  return {
    id: row.id,
    make: row.make,
    model: row.model,
    brand_slug: brandSlug,
    model_slug: modelSlug,
    canonical_path: `/${section}/${brandSlug}/${modelSlug}`,
    year: row.year,
    category: row.category,
    sub_type: row.sub_type || '',
    service_type: row.service_type || 'leasing',
    listing_type: row.listing_type,
    fuel_type: row.fuel_type,
    transmission: row.transmission,
    mileage_km: row.mileage_km ?? 0,
    price_or_monthly_rate: row.price_or_monthly_rate,
    currency: row.currency,
    country_availability: parseJsonSafe<string[]>(row.country_availability as string, []),
    is_featured: Boolean(row.is_featured),
    status: row.status,
    image_url: row.image_url || '',
    description: row.description,
    safety_telematics_specs: parseJsonSafe<string[]>(row.safety_telematics_specs as string, []),
    trims: parseJsonSafe<Array<{ trim: string; price: number }>>(row.trims as string, []),
    specs: parseJsonSafe<Record<string, string | null>>(row.specs_json as string, {}),
    colors: parseJsonSafe<string[]>(row.colors as string, []),
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

function formatOfferRow(row: Record<string, unknown>) {
  return {
    id: row.id,
    title: row.title,
    title_ar: row.title_ar || '',
    slug: row.slug,
    subtitle: row.subtitle,
    subtitle_ar: row.subtitle_ar || '',
    category: row.category,
    monthly_rate_from: row.monthly_rate_from,
    currency: row.currency,
    countries: parseJsonSafe<string[]>(row.countries as string, []),
    valid_until: row.valid_until,
    is_active: Boolean(row.is_active),
    highlights: parseJsonSafe<string[]>(row.highlights as string, []),
    description: row.description,
    description_ar: row.description_ar || '',
    image_url: row.image_url || '',
    vehicle_id: row.vehicle_id ?? null,
    created_at: row.created_at,
  };
}

function formatReviewRow(row: Record<string, unknown>) {
  return {
    id: row.id,
    company: row.company,
    employee: row.employee,
    position: row.position || '',
    date_of_service: row.date_of_service,
    vehicle_condition: row.vehicle_condition,
    price_satisfaction: row.price_satisfaction,
    staff_behavior: row.staff_behavior,
    pickup_process: row.pickup_process,
    dropoff_process: row.dropoff_process,
    cleanliness: row.cleanliness,
    value_for_money: row.value_for_money,
    overall: row.overall,
    would_recommend: Boolean(row.would_recommend),
    comment: row.comment || '',
    created_at: row.created_at,
  };
}

function getSiteContentMap(): Record<string, string> {
  const rows = db.prepare(`SELECT key, value FROM site_content`).all() as Array<{
    key: string;
    value: string;
  }>;
  const map: Record<string, string> = {};
  for (const r of rows) {
    map[r.key] = r.value;
  }
  return map;
}

function formatQuotationRow(row: Record<string, unknown>) {
  return {
    id: row.id,
    reference_code: row.reference_code,
    full_name: row.full_name,
    company_name: row.company_name || '',
    client_type: row.client_type,
    email: row.email,
    phone: row.phone,
    country: row.country,
    city: row.city,
    vehicle_id: row.vehicle_id ?? null,
    selected_trim: row.selected_trim || '',
    vehicle_label: row.vehicle_make ? `${row.vehicle_year} ${row.vehicle_make} ${row.vehicle_model}` : null,
    vehicle_listing_type: row.vehicle_listing_type ?? null,
    offer_id: row.offer_id ?? null,
    offer_title: row.offer_title ?? null,
    fleet_quantity: row.fleet_quantity,
    lease_term_months: row.lease_term_months,
    add_ons: parseJsonSafe<Record<string, boolean>>(row.add_ons as string, {}),
    notes: row.notes || '',
    status: row.status,
    estimated_monthly_quote: row.estimated_monthly_quote ?? null,
    admin_notes: row.admin_notes || '',
    routing_email: row.routing_email || 'sales@jadeergulf.com',
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

type AdminPrivilege = 'vehicles' | 'quotations' | 'website' | 'admins';
const ALL_PRIVILEGES: AdminPrivilege[] = ['vehicles', 'quotations', 'website', 'admins'];
const VALID_PRIVILEGE_SET = new Set<string>(ALL_PRIVILEGES);

function normalizePrivileges(raw: unknown, role: string): AdminPrivilege[] {
  if (role === 'super_admin') return [...ALL_PRIVILEGES];
  let list: unknown[] = [];
  if (Array.isArray(raw)) {
    list = raw;
  } else if (typeof raw === 'string') {
    list = parseJsonSafe<unknown[]>(raw, []);
  }
  const clean = Array.from(
    new Set(list.map((p) => String(p).trim()).filter((p) => VALID_PRIVILEGE_SET.has(p)))
  ) as AdminPrivilege[];
  return clean;
}

function hasPrivilege(
  admin: { role: 'super_admin' | 'staff'; privileges: AdminPrivilege[] } | undefined,
  priv: AdminPrivilege
): boolean {
  if (!admin) return false;
  return admin.role === 'super_admin' || admin.privileges.includes(priv);
}

function createAdminSession(adminId: number, email: string, name: string): string {
  const token = crypto.randomBytes(32).toString('hex');
  const tokenHash = sha256(token);
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  db.prepare(
    `INSERT INTO admin_sessions (token_hash, admin_id, email, name, expires_at) VALUES (?, ?, ?, ?, ?)`
  ).run(tokenHash, adminId, email, name, expiresAt);
  return token;
}

interface AuthenticatedRequest extends Request {
  admin?: {
    id: number;
    email: string;
    name: string;
    role: 'super_admin' | 'staff';
    privileges: AdminPrivilege[];
  };
}

function requireAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required' });
    return;
  }
  const rawToken = authHeader.slice(7).trim();
  if (!rawToken || rawToken.length < 32) {
    res.status(401).json({ error: 'Invalid session token' });
    return;
  }
  const tokenHash = sha256(rawToken);
  const session = db
    .prepare(
      `SELECT token_hash, admin_id, email, name, expires_at FROM admin_sessions WHERE token_hash = ?`
    )
    .get(tokenHash) as
    | { token_hash: string; admin_id: number; email: string; name: string; expires_at: string }
    | undefined;

  if (!session) {
    res.status(401).json({ error: 'Session expired or invalid' });
    return;
  }
  if (new Date(session.expires_at).getTime() < Date.now()) {
    db.prepare(`DELETE FROM admin_sessions WHERE token_hash = ?`).run(tokenHash);
    res.status(401).json({ error: 'Session expired. Please sign in again.' });
    return;
  }

  if (session.admin_id === 0) {
    req.admin = {
      id: 0,
      email: session.email,
      name: session.name,
      role: 'super_admin',
      privileges: [...ALL_PRIVILEGES],
    };
    next();
    return;
  }

  const dbUser = db
    .prepare(
      `SELECT id, name, email, role, privileges, is_admin, is_active FROM admin_users WHERE id = ?`
    )
    .get(session.admin_id) as
    | {
        id: number;
        name: string;
        email: string;
        role: string;
        privileges: string;
        is_admin: number;
        is_active: number;
      }
    | undefined;

  if (!dbUser || !dbUser.is_admin || !dbUser.is_active) {
    db.prepare(`DELETE FROM admin_sessions WHERE token_hash = ?`).run(tokenHash);
    res.status(401).json({ error: 'Administrator account is inactive or no longer exists.' });
    return;
  }

  const role: 'super_admin' | 'staff' = dbUser.role === 'super_admin' ? 'super_admin' : 'staff';
  req.admin = {
    id: dbUser.id,
    email: dbUser.email,
    name: dbUser.name,
    role,
    privileges: normalizePrivileges(dbUser.privileges, role),
  };
  next();
}

function requirePrivilege(priv: AdminPrivilege) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!hasPrivilege(req.admin, priv)) {
      res.status(403).json({ error: 'Access denied: your account does not have permission for this section.' });
      return;
    }
    next();
  };
}

function listAvailableStudioAssets(): string[] {
  const jadeerDir = path.resolve(process.cwd(), 'public', 'assets', 'jadeer');
  if (!fs.existsSync(jadeerDir)) return [];
  return fs
    .readdirSync(jadeerDir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/assets/jadeer/${f}`);
}

function cleanupUploadedImage(imageUrl: string): void {
  if (imageUrl && /^\/uploads\/[a-f0-9]{32}\.(jpg|png|webp)$/.test(imageUrl)) {
    const filename = imageUrl.replace('/uploads/', '');
    const targetPath = path.resolve(uploadsDir, filename);
    if (targetPath.startsWith(uploadsDir + path.sep) && fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }
  }
}

// ============================================================
// PUBLIC API ROUTES
// ============================================================

app.get('/api/home', (_req: Request, res: Response) => {
  const showroomFeatured = db
    .prepare(
      `SELECT * FROM vehicles WHERE listing_type = 'showroom' AND status != 'sold' ORDER BY is_featured DESC, id ASC LIMIT 6`
    )
    .all()
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  const usedFeatured = db
    .prepare(
      `SELECT * FROM vehicles WHERE listing_type = 'used' AND status = 'available' ORDER BY is_featured DESC, id ASC LIMIT 3`
    )
    .all()
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  const offers = db
    .prepare(`SELECT * FROM offers WHERE is_active = 1 ORDER BY id ASC LIMIT 4`)
    .all()
    .map((r) => formatOfferRow(r as Record<string, unknown>));

  const articles = db
    .prepare(`SELECT * FROM articles ORDER BY published_at DESC, id DESC LIMIT 4`)
    .all();

  const reviews = db
    .prepare(`SELECT * FROM client_reviews ORDER BY overall DESC, id DESC LIMIT 6`)
    .all()
    .map((r) => formatReviewRow(r as Record<string, unknown>));

  const branches = db
    .prepare(`SELECT * FROM branches ORDER BY is_hq DESC, id ASC`)
    .all()
    .map((b) => ({
      ...(b as Record<string, unknown>),
      is_hq: Boolean((b as Record<string, unknown>).is_hq),
    }));

  const siteContent = getSiteContentMap();

  res.json({ showroomFeatured, usedFeatured, offers, articles, reviews, branches, siteContent });
});

app.get('/api/site-content', (_req: Request, res: Response) => {
  const content = getSiteContentMap();
  const branches = db
    .prepare(`SELECT * FROM branches ORDER BY is_hq DESC, id ASC`)
    .all()
    .map((b) => ({
      ...(b as Record<string, unknown>),
      is_hq: Boolean((b as Record<string, unknown>).is_hq),
    }));
  const workshops = db.prepare(`SELECT * FROM workshops ORDER BY id ASC`).all();
  const gallery = db.prepare(`SELECT * FROM about_gallery ORDER BY sort_order ASC, id ASC`).all();
  const reviews = db
    .prepare(`SELECT * FROM client_reviews ORDER BY id DESC`)
    .all()
    .map((r) => formatReviewRow(r as Record<string, unknown>));
  res.json({ content, branches, workshops, gallery, reviews });
});

app.get('/api/reviews', (_req: Request, res: Response) => {
  const reviews = db
    .prepare(`SELECT * FROM client_reviews ORDER BY id DESC`)
    .all()
    .map((r) => formatReviewRow(r as Record<string, unknown>));
  res.json({ reviews });
});

app.post('/api/reviews', (req: Request, res: Response) => {
  const b = req.body || {};
  const company = String(b.company || '').trim().slice(0, 120);
  const employee = String(b.employee || '').trim().slice(0, 100);
  const position = String(b.position || 'Fleet Coordinator').trim().slice(0, 100);
  const dateOfService = String(b.date_of_service || new Date().toISOString().slice(0, 10)).slice(0, 10);
  const comment = String(b.comment || '').trim().slice(0, 1500);
  const clamp = (v: unknown, def = 5) => Math.max(1, Math.min(5, Number(v) || def));

  if (company.length < 2 || employee.length < 2 || comment.length < 8) {
    res.status(422).json({ error: 'Please provide company name, your name, and feedback comment.' });
    return;
  }

  const info = db
    .prepare(
      `INSERT INTO client_reviews (
        company, employee, position, date_of_service,
        vehicle_condition, price_satisfaction, staff_behavior,
        pickup_process, dropoff_process, cleanliness, value_for_money,
        overall, would_recommend, comment
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      company,
      employee,
      position,
      dateOfService,
      clamp(b.vehicle_condition, 5),
      clamp(b.price_satisfaction, 4),
      clamp(b.staff_behavior, 5),
      clamp(b.pickup_process, 5),
      clamp(b.dropoff_process, 5),
      clamp(b.cleanliness, 5),
      clamp(b.value_for_money, 4),
      clamp(b.overall, 5),
      b.would_recommend === false ? 0 : 1,
      comment
    );

  const created = db
    .prepare(`SELECT * FROM client_reviews WHERE id = ?`)
    .get(info.lastInsertRowid) as Record<string, unknown>;
  res.status(201).json({ review: formatReviewRow(created) });
});

app.get('/api/vehicles', (req: Request, res: Response) => {
  const listingType = typeof req.query.listing_type === 'string' ? req.query.listing_type.trim() : '';
  const category = typeof req.query.category === 'string' ? req.query.category.trim() : '';
  const make = typeof req.query.make === 'string' ? req.query.make.trim() : '';
  const country = typeof req.query.country === 'string' ? req.query.country.trim() : '';
  const fuelType = typeof req.query.fuel_type === 'string' ? req.query.fuel_type.trim() : '';
  const transmission = typeof req.query.transmission === 'string' ? req.query.transmission.trim() : '';
  const year = req.query.year ? Number(req.query.year) : 0;
  const maxPrice = req.query.max_price ? Number(req.query.max_price) : 0;
  const search = typeof req.query.search === 'string' ? req.query.search.trim().toLowerCase() : '';

  const conditions: string[] = [];
  const params: unknown[] = [];

  if (listingType === 'showroom' || listingType === 'used') {
    conditions.push('listing_type = ?');
    params.push(listingType);
  }
  if (category && category !== 'All') {
    if (category === 'Hybrid') {
      conditions.push("(category = 'Hybrid' OR LOWER(fuel_type) LIKE '%hybrid%' OR LOWER(model) LIKE '%hybrid%')");
    } else {
      conditions.push('category = ?');
      params.push(category);
    }
  }
  if (make && make !== 'All') {
    conditions.push('LOWER(make) = ?');
    params.push(make.toLowerCase());
  }
  if (fuelType && fuelType !== 'All') {
    conditions.push('LOWER(fuel_type) LIKE ?');
    params.push(`%${fuelType.toLowerCase()}%`);
  }
  if (transmission && transmission !== 'All') {
    conditions.push('LOWER(transmission) LIKE ?');
    params.push(`%${transmission.toLowerCase()}%`);
  }
  if (year > 2000) {
    conditions.push('year = ?');
    params.push(year);
  }
  if (maxPrice > 0) {
    conditions.push('price_or_monthly_rate <= ?');
    params.push(maxPrice);
  }
  if (country && country !== 'All') {
    conditions.push('country_availability LIKE ?');
    params.push(`%"${country}"%`);
  }
  if (search) {
    conditions.push('(LOWER(make) LIKE ? OR LOWER(model) LIKE ? OR LOWER(description) LIKE ? OR LOWER(category) LIKE ? OR LOWER(trims) LIKE ?)');
    const like = `%${search}%`;
    params.push(like, like, like, like, like);
  }

  const whereSql = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const rows = db
    .prepare(
      `SELECT * FROM vehicles ${whereSql}
       ORDER BY CASE WHEN status = 'available' THEN 0 WHEN status = 'reserved' THEN 1 ELSE 2 END,
                is_featured DESC, year DESC, id ASC`
    )
    .all(...params)
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  res.json({ vehicles: rows });
});

app.get('/api/vehicles/by-slug/:section/:brand/:model', (req: Request, res: Response) => {
  const section = String(req.params.section || '').trim().toLowerCase();
  const brandSlug = slugifySegment(String(req.params.brand || ''));
  const modelSlug = slugifySegment(String(req.params.model || ''));

  if (section !== 'showroom' && section !== 'used-cars') {
    res.status(400).json({ error: 'Invalid section. Use showroom or used-cars.' });
    return;
  }
  const listingType = section === 'showroom' ? 'showroom' : 'used';

  const row = db
    .prepare(
      `SELECT * FROM vehicles WHERE listing_type = ? AND brand_slug = ? AND model_slug = ? LIMIT 1`
    )
    .get(listingType, brandSlug, modelSlug) as Record<string, unknown> | undefined;

  if (!row) {
    res.status(404).json({ error: 'Vehicle not found' });
    return;
  }

  const related = db
    .prepare(
      `SELECT * FROM vehicles WHERE listing_type = ? AND id != ? ORDER BY CASE WHEN brand_slug = ? THEN 0 ELSE 1 END, is_featured DESC LIMIT 3`
    )
    .all(listingType, row.id, brandSlug)
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  res.json({ vehicle: formatVehicleRow(row), related });
});

app.get('/api/vehicles/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid vehicle ID' });
    return;
  }
  const row = db.prepare('SELECT * FROM vehicles WHERE id = ?').get(id) as Record<string, unknown> | undefined;
  if (!row) {
    res.status(404).json({ error: 'Vehicle not found' });
    return;
  }
  const related = db
    .prepare(`SELECT * FROM vehicles WHERE listing_type = ? AND id != ? ORDER BY is_featured DESC LIMIT 3`)
    .all(row.listing_type, id)
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  res.json({ vehicle: formatVehicleRow(row), related });
});

app.get('/api/offers', (_req: Request, res: Response) => {
  const rows = db
    .prepare(`SELECT * FROM offers WHERE is_active = 1 ORDER BY id ASC`)
    .all()
    .map((r) => formatOfferRow(r as Record<string, unknown>));
  res.json({ offers: rows });
});

app.get('/api/articles', (req: Request, res: Response) => {
  const category = typeof req.query.category === 'string' ? req.query.category.trim() : '';
  const search = typeof req.query.search === 'string' ? req.query.search.trim().toLowerCase() : '';
  const conditions: string[] = [];
  const params: unknown[] = [];

  if (category && category !== 'All') {
    conditions.push('category = ?');
    params.push(category);
  }
  if (search) {
    conditions.push(
      '(LOWER(title) LIKE ? OR LOWER(title_ar) LIKE ? OR LOWER(excerpt) LIKE ? OR LOWER(body) LIKE ? OR LOWER(body_ar) LIKE ?)'
    );
    const like = `%${search}%`;
    params.push(like, like, like, like, like);
  }

  const whereSql = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const rows = db
    .prepare(`SELECT * FROM articles ${whereSql} ORDER BY published_at DESC, id DESC`)
    .all(...params);
  res.json({ articles: rows });
});

app.get('/api/articles/:slug', (req: Request, res: Response) => {
  const slug = String(req.params.slug || '').trim();
  const article = db.prepare('SELECT * FROM articles WHERE slug = ?').get(slug);
  if (!article) {
    res.status(404).json({ error: 'Article not found' });
    return;
  }
  const more = db
    .prepare(
      'SELECT id, title, title_ar, slug, category, published_at, read_time_minutes FROM articles WHERE slug != ? ORDER BY published_at DESC LIMIT 4'
    )
    .all(slug);
  res.json({ article, more });
});

// Public Quotation Submission
const VALID_COUNTRIES = new Set(['Bahrain', 'Saudi Arabia', 'Oman']);
const VALID_CLIENT_TYPES = new Set(['corporate', 'individual']);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/api/quotations', (req: Request, res: Response) => {
  const body = req.body || {};
  const fullName = String(body.full_name || '').trim();
  const companyName = String(body.company_name || '').trim();
  const clientType = String(body.client_type || 'corporate').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const country = String(body.country || '').trim();
  const city = String(body.city || '').trim();
  const vehicleId = body.vehicle_id ? Number(body.vehicle_id) : null;
  const selectedTrim = String(body.selected_trim || '').trim().slice(0, 120);
  const offerId = body.offer_id ? Number(body.offer_id) : null;
  const fleetQuantity = Math.max(1, Math.min(500, Number(body.fleet_quantity) || 1));
  const leaseTermMonths = Math.max(1, Math.min(84, Number(body.lease_term_months) || 36));
  const notes = String(body.notes || '').trim().slice(0, 2000);

  if (fullName.length < 2 || fullName.length > 120) {
    res.status(422).json({ error: 'Please enter your full name (2–120 characters).' });
    return;
  }
  if (!VALID_CLIENT_TYPES.has(clientType)) {
    res.status(422).json({ error: 'Client type must be corporate or individual.' });
    return;
  }
  if (clientType === 'corporate' && companyName.length < 2) {
    res.status(422).json({ error: 'Company name is required for corporate quotations.' });
    return;
  }
  if (!EMAIL_REGEX.test(email) || email.length > 150) {
    res.status(422).json({ error: 'Please provide a valid email address.' });
    return;
  }
  if (phone.length < 7 || phone.length > 35) {
    res.status(422).json({ error: 'Please provide a valid contact phone number.' });
    return;
  }
  if (!VALID_COUNTRIES.has(country)) {
    res.status(422).json({ error: 'Please select Bahrain, Saudi Arabia, or Oman.' });
    return;
  }
  if (city.length < 2 || city.length > 80) {
    res.status(422).json({ error: 'Please enter the city or operational zone.' });
    return;
  }

  let validVehicleId: number | null = null;
  if (vehicleId && Number.isInteger(vehicleId)) {
    const found = db.prepare('SELECT id FROM vehicles WHERE id = ?').get(vehicleId);
    if (found) validVehicleId = vehicleId;
  }

  let validOfferId: number | null = null;
  if (offerId && Number.isInteger(offerId)) {
    const found = db.prepare('SELECT id FROM offers WHERE id = ?').get(offerId);
    if (found) validOfferId = offerId;
  }

  const rawAddOns = typeof body.add_ons === 'object' && body.add_ons !== null ? body.add_ons : {};
  const addOns = {
    driver_service: Boolean(rawAddOns.driver_service),
    limousine_service: Boolean(rawAddOns.limousine_service),
    replacement_vehicle: Boolean(rawAddOns.replacement_vehicle),
    tracking_blue_key: Boolean(rawAddOns.tracking_blue_key),
    usa_roll_bars_cages: Boolean(rawAddOns.usa_roll_bars_cages),
    hybrid_preference: Boolean(rawAddOns.hybrid_preference),
  };

  const refSuffix = crypto.randomInt(1000, 9999);
  const referenceCode = `JU-2026-${refSuffix}`;
  const routingEmail = 'sales@jadeergulf.com';

  const result = db
    .prepare(
      `INSERT INTO quotation_requests (
        reference_code, full_name, company_name, client_type, email, phone,
        country, city, vehicle_id, selected_trim, offer_id, fleet_quantity, lease_term_months,
        add_ons, notes, status, routing_email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)`
    )
    .run(
      referenceCode,
      fullName,
      companyName,
      clientType,
      email,
      phone,
      country,
      city,
      validVehicleId,
      selectedTrim,
      validOfferId,
      fleetQuantity,
      leaseTermMonths,
      JSON.stringify(addOns),
      notes,
      routingEmail
    );

  const created = db
    .prepare(
      `SELECT q.*, v.make AS vehicle_make, v.model AS vehicle_model, v.year AS vehicle_year,
              v.listing_type AS vehicle_listing_type, o.title AS offer_title
       FROM quotation_requests q
       LEFT JOIN vehicles v ON v.id = q.vehicle_id
       LEFT JOIN offers o ON o.id = q.offer_id
       WHERE q.id = ?`
    )
    .get(result.lastInsertRowid) as Record<string, unknown>;

  res.status(201).json({
    message: 'Quotation request submitted and routed to the Jadeer United Sales Team (sales@jadeergulf.com).',
    quotation: formatQuotationRow(created),
  });
});

// Public Contact Message Submission
const VALID_DEPARTMENTS = new Set(['Sales Team', 'Customer Support', 'General Inquiries']);

app.post('/api/contact', (req: Request, res: Response) => {
  const body = req.body || {};
  const fullName = String(body.full_name || '').trim();
  const companyName = String(body.company_name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const country = String(body.country || 'Bahrain').trim();
  const department = VALID_DEPARTMENTS.has(String(body.department || ''))
    ? String(body.department)
    : 'General Inquiries';
  const subject = String(body.subject || '').trim();
  const message = String(body.message || '').trim();

  if (fullName.length < 2 || fullName.length > 120) {
    res.status(422).json({ error: 'Please enter your full name.' });
    return;
  }
  if (!EMAIL_REGEX.test(email)) {
    res.status(422).json({ error: 'Please enter a valid email address.' });
    return;
  }
  if (phone.length < 7) {
    res.status(422).json({ error: 'Please enter a valid phone number.' });
    return;
  }
  if (subject.length < 3 || subject.length > 160) {
    res.status(422).json({ error: 'Please enter a brief subject.' });
    return;
  }
  if (message.length < 10 || message.length > 3000) {
    res.status(422).json({ error: 'Please enter a message (at least 10 characters).' });
    return;
  }

  const routedTo =
    department === 'Customer Support'
      ? 'Maisara@jadeergulf.com'
      : department === 'Sales Team'
        ? 'sales@jadeergulf.com'
        : 'info@jadeergulf.com';

  db.prepare(
    `INSERT INTO contact_messages (full_name, company_name, email, phone, country, department, subject, message)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(fullName, companyName, email, phone, country, department, subject, message);

  res.status(201).json({
    message: `Your inquiry has been logged and routed to ${department} (${routedTo}).`,
    routed_to: routedTo,
  });
});

// ============================================================
// ADMIN AUTHENTICATION ROUTES
// ============================================================

app.get('/api/admin/auth/status', (_req: Request, res: Response) => {
  const envPasscodeActive = getEnvPasscode().length > 0;
  const adminCount = (db.prepare('SELECT COUNT(*) as count FROM admin_users').get() as { count: number }).count;
  res.json({
    envPasscodeActive,
    needsSetup: !envPasscodeActive && adminCount === 0,
  });
});

app.post('/api/admin/auth/setup', (req: Request, res: Response) => {
  if (getEnvPasscode().length > 0) {
    res.status(403).json({ error: 'Admin access is managed via server environment configuration.' });
    return;
  }

  const body = req.body || {};
  const name = String(body.name || 'Jadeer Fleet Admin').trim().slice(0, 80);
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  if (!EMAIL_REGEX.test(email)) {
    res.status(422).json({ error: 'Please enter a valid admin email address.' });
    return;
  }
  if (password.length < 8) {
    res.status(422).json({ error: 'Admin password must be at least 8 characters.' });
    return;
  }

  const setupTx = db.transaction(() => {
    const count = (db.prepare('SELECT COUNT(*) as count FROM admin_users').get() as { count: number }).count;
    if (count > 0) {
      return null;
    }
    const passwordHash = hashPassword(password);
    const info = db
      .prepare(
        `INSERT INTO admin_users (name, email, password_hash, is_admin, role, privileges, is_active)
         VALUES (?, ?, ?, 1, 'super_admin', ?, 1)`
      )
      .run(name || 'Jadeer Fleet Admin', email, passwordHash, JSON.stringify(ALL_PRIVILEGES));
    return Number(info.lastInsertRowid);
  });

  const adminId = setupTx();
  if (adminId === null) {
    res.status(409).json({ error: 'An administrator account has already been configured. Please sign in.' });
    return;
  }

  const token = createAdminSession(adminId, email, name || 'Jadeer Fleet Admin');
  res.status(201).json({
    token,
    admin: {
      id: adminId,
      email,
      name: name || 'Jadeer Fleet Admin',
      role: 'super_admin' as const,
      privileges: [...ALL_PRIVILEGES],
    },
  });
});

app.post('/api/admin/auth/login', (req: Request, res: Response) => {
  const body = req.body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  const envPasscode = getEnvPasscode();
  if (envPasscode.length > 0 && timingSafeStringEqual(password, envPasscode)) {
    const adminEmail = EMAIL_REGEX.test(email) ? email : 'admin@jadeerunited.com';
    const token = createAdminSession(0, adminEmail, 'Jadeer Administrator');
    res.json({
      token,
      admin: {
        id: 0,
        email: adminEmail,
        name: 'Jadeer Administrator',
        role: 'super_admin' as const,
        privileges: [...ALL_PRIVILEGES],
      },
    });
    return;
  }

  const user = db
    .prepare(
      `SELECT id, name, email, password_hash, is_admin, role, privileges, is_active FROM admin_users WHERE LOWER(email) = ?`
    )
    .get(email) as
    | {
        id: number;
        name: string;
        email: string;
        password_hash: string;
        is_admin: number;
        role: string;
        privileges: string;
        is_active: number;
      }
    | undefined;

  if (!user || !user.is_admin || !user.is_active || !verifyPassword(password, user.password_hash)) {
    res.status(401).json({ error: 'Invalid email or password.' });
    return;
  }

  const role: 'super_admin' | 'staff' = user.role === 'super_admin' ? 'super_admin' : 'staff';
  const privileges = normalizePrivileges(user.privileges, role);
  const token = createAdminSession(user.id, user.email, user.name);
  res.json({
    token,
    admin: { id: user.id, email: user.email, name: user.name, role, privileges },
  });
});

app.post('/api/admin/auth/logout', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  const rawToken = (req.headers.authorization || '').slice(7).trim();
  if (rawToken) {
    db.prepare(`DELETE FROM admin_sessions WHERE token_hash = ?`).run(sha256(rawToken));
  }
  res.json({ ok: true });
});

app.get('/api/admin/me', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  res.json({ admin: req.admin });
});

// ============================================================
// PROTECTED ADMIN PANEL ROUTES
// ============================================================

app.get('/api/admin/dashboard', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  const totalShowroom = (
    db.prepare(`SELECT COUNT(*) as c FROM vehicles WHERE listing_type = 'showroom'`).get() as { c: number }
  ).c;
  const totalUsed = (
    db.prepare(`SELECT COUNT(*) as c FROM vehicles WHERE listing_type = 'used'`).get() as { c: number }
  ).c;
  const totalQuotations = (
    db.prepare(`SELECT COUNT(*) as c FROM quotation_requests`).get() as { c: number }
  ).c;
  const pendingQuotations = (
    db.prepare(`SELECT COUNT(*) as c FROM quotation_requests WHERE status IN ('new', 'in_review')`).get() as {
      c: number;
    }
  ).c;
  const unreadMessages = (
    db.prepare(`SELECT COUNT(*) as c FROM contact_messages WHERE status = 'unread'`).get() as { c: number }
  ).c;
  const totalReviews = (
    db.prepare(`SELECT COUNT(*) as c FROM client_reviews`).get() as { c: number }
  ).c;

  const recentQuotations = hasPrivilege(req.admin, 'quotations')
    ? db
        .prepare(
          `SELECT q.*, v.make AS vehicle_make, v.model AS vehicle_model, v.year AS vehicle_year,
                  v.listing_type AS vehicle_listing_type, o.title AS offer_title
           FROM quotation_requests q
           LEFT JOIN vehicles v ON v.id = q.vehicle_id
           LEFT JOIN offers o ON o.id = q.offer_id
           ORDER BY q.created_at DESC
           LIMIT 6`
        )
        .all()
        .map((r) => formatQuotationRow(r as Record<string, unknown>))
    : [];

  res.json({
    stats: {
      totalShowroom,
      totalUsed,
      totalQuotations,
      pendingQuotations,
      unreadMessages,
      totalReviews,
    },
    recentQuotations,
  });
});

// Admin Vehicles CRUD
const VALID_LISTING_TYPES = new Set(['showroom', 'used']);
const VALID_VEHICLE_STATUSES = new Set(['available', 'reserved', 'leased', 'sold']);
const VALID_CATEGORIES = new Set([
  'SUV',
  'Sedan',
  'Hybrid',
  'Pick-Up',
  'Bus',
  'Cross-Over',
  'Fleet',
  'Limousine',
  'Commercial',
]);

app.get('/api/admin/vehicles', requireAdmin, requirePrivilege('vehicles'), (req: AuthenticatedRequest, res: Response) => {
  const listingType = typeof req.query.listing_type === 'string' ? req.query.listing_type.trim() : '';
  const search = typeof req.query.search === 'string' ? req.query.search.trim().toLowerCase() : '';
  const conditions: string[] = [];
  const params: unknown[] = [];

  if (listingType === 'showroom' || listingType === 'used') {
    conditions.push('listing_type = ?');
    params.push(listingType);
  }
  if (search) {
    conditions.push('(LOWER(make) LIKE ? OR LOWER(model) LIKE ? OR LOWER(category) LIKE ?)');
    const like = `%${search}%`;
    params.push(like, like, like);
  }
  const whereSql = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const rows = db
    .prepare(`SELECT * FROM vehicles ${whereSql} ORDER BY updated_at DESC, id DESC`)
    .all(...params)
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  res.json({ vehicles: rows });
});

function parseVehiclePayload(req: Request) {
  const b = req.body || {};
  const make = String(b.make || '').trim();
  const model = String(b.model || '').trim();
  const year = Number(b.year);
  const category = String(b.category || 'SUV').trim();
  const listing_type = String(b.listing_type || 'showroom').trim();
  const fuel_type = String(b.fuel_type || 'Petrol').trim();
  const transmission = String(b.transmission || 'Automatic').trim();
  const mileage_km = Math.max(0, Number(b.mileage_km) || 0);
  const price_or_monthly_rate = Number(b.price_or_monthly_rate);
  const currency = ['SAR', 'BHD', 'OMR'].includes(String(b.currency || 'SAR')) ? String(b.currency) : 'SAR';
  const status = String(b.status || 'available').trim();
  const is_featured = b.is_featured === true || b.is_featured === 'true' || b.is_featured === '1' || b.is_featured === 1 ? 1 : 0;
  const description = String(b.description || '').trim();

  let countries: string[] = [];
  if (Array.isArray(b.country_availability)) {
    countries = b.country_availability.filter((c: unknown) => typeof c === 'string' && VALID_COUNTRIES.has(c));
  } else if (typeof b.country_availability === 'string') {
    const parsed = parseJsonSafe<string[]>(b.country_availability, []);
    countries = parsed.filter((c) => VALID_COUNTRIES.has(c));
  }
  if (countries.length === 0) countries = ['Bahrain'];

  let specs: string[] = [];
  if (Array.isArray(b.safety_telematics_specs)) {
    specs = b.safety_telematics_specs.map((s: unknown) => String(s).trim()).filter(Boolean).slice(0, 12);
  } else if (typeof b.safety_telematics_specs === 'string') {
    const trimmed: string = b.safety_telematics_specs.trim();
    if (trimmed.startsWith('[')) {
      specs = parseJsonSafe<string[]>(trimmed, []).map((s: string) => String(s).trim()).filter(Boolean).slice(0, 12);
    } else {
      specs = trimmed
        .split('\n')
        .map((s: string) => s.trim())
        .filter(Boolean)
        .slice(0, 12);
    }
  }

  if (make.length < 2 || model.length < 1) {
    return { error: 'Vehicle make and model are required.' };
  }
  if (!Number.isInteger(year) || year < 2010 || year > 2028) {
    return { error: 'Year must be between 2010 and 2028.' };
  }
  if (!VALID_CATEGORIES.has(category)) {
    return { error: 'Invalid vehicle category.' };
  }
  if (!VALID_LISTING_TYPES.has(listing_type)) {
    return { error: 'Listing type must be showroom or used.' };
  }
  if (!VALID_VEHICLE_STATUSES.has(status)) {
    return { error: 'Invalid vehicle status.' };
  }
  if (!Number.isFinite(price_or_monthly_rate) || price_or_monthly_rate <= 0) {
    return { error: 'Price or monthly lease rate must be a positive number.' };
  }
  if (description.length < 10) {
    return { error: 'Please provide a vehicle description (at least 10 characters).' };
  }

  let image_url = sanitizeImageUrl(b.image_url);
  if (req.file) {
    image_url = `/uploads/${req.file.filename}`;
  }

  return {
    data: {
      make,
      model,
      year,
      category,
      listing_type,
      fuel_type,
      transmission,
      mileage_km,
      price_or_monthly_rate,
      currency,
      country_availability: JSON.stringify(countries),
      is_featured,
      status,
      image_url,
      description,
      safety_telematics_specs: JSON.stringify(specs),
    },
  };
}

app.post('/api/admin/vehicles', requireAdmin, requirePrivilege('vehicles'), upload.single('image'), (req: AuthenticatedRequest, res: Response) => {
  const parsed = parseVehiclePayload(req);
  if ('error' in parsed) {
    res.status(422).json({ error: parsed.error });
    return;
  }
  const d = parsed.data;
  const { brand_slug, model_slug } = resolveUniqueVehicleSlugs(
    d.listing_type,
    d.make,
    d.model,
    d.year
  );
  const info = db
    .prepare(
      `INSERT INTO vehicles (
        make, model, brand_slug, model_slug, year, category, listing_type, fuel_type, transmission,
        mileage_km, price_or_monthly_rate, currency, country_availability,
        is_featured, status, image_url, description, safety_telematics_specs
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      d.make,
      d.model,
      brand_slug,
      model_slug,
      d.year,
      d.category,
      d.listing_type,
      d.fuel_type,
      d.transmission,
      d.mileage_km,
      d.price_or_monthly_rate,
      d.currency,
      d.country_availability,
      d.is_featured,
      d.status,
      d.image_url,
      d.description,
      d.safety_telematics_specs
    );

  const row = db.prepare('SELECT * FROM vehicles WHERE id = ?').get(info.lastInsertRowid) as Record<string, unknown>;
  res.status(201).json({ vehicle: formatVehicleRow(row) });
});

app.put('/api/admin/vehicles/:id', requireAdmin, requirePrivilege('vehicles'), upload.single('image'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid vehicle ID' });
    return;
  }
  const existing = db.prepare('SELECT * FROM vehicles WHERE id = ?').get(id) as Record<string, unknown> | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Vehicle not found' });
    return;
  }

  const parsed = parseVehiclePayload(req);
  if ('error' in parsed) {
    res.status(422).json({ error: parsed.error });
    return;
  }
  const d = parsed.data;
  const finalImageUrl = req.file
    ? `/uploads/${req.file.filename}`
    : d.image_url || String(existing.image_url || '');
  const { brand_slug, model_slug } = resolveUniqueVehicleSlugs(
    d.listing_type,
    d.make,
    d.model,
    d.year,
    id
  );

  db.prepare(
    `UPDATE vehicles SET
      make = ?, model = ?, brand_slug = ?, model_slug = ?, year = ?, category = ?, listing_type = ?,
      fuel_type = ?, transmission = ?, mileage_km = ?, price_or_monthly_rate = ?,
      currency = ?, country_availability = ?, is_featured = ?, status = ?,
      image_url = ?, description = ?, safety_telematics_specs = ?, updated_at = datetime('now')
     WHERE id = ?`
  ).run(
    d.make,
    d.model,
    brand_slug,
    model_slug,
    d.year,
    d.category,
    d.listing_type,
    d.fuel_type,
    d.transmission,
    d.mileage_km,
    d.price_or_monthly_rate,
    d.currency,
    d.country_availability,
    d.is_featured,
    d.status,
    finalImageUrl,
    d.description,
    d.safety_telematics_specs,
    id
  );

  const updated = db.prepare('SELECT * FROM vehicles WHERE id = ?').get(id) as Record<string, unknown>;
  res.json({ vehicle: formatVehicleRow(updated) });
});

app.patch('/api/admin/vehicles/:id/quick', requireAdmin, requirePrivilege('vehicles'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid vehicle ID' });
    return;
  }
  const existing = db.prepare('SELECT * FROM vehicles WHERE id = ?').get(id) as Record<string, unknown> | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Vehicle not found' });
    return;
  }

  const nextStatus =
    typeof req.body?.status === 'string' && VALID_VEHICLE_STATUSES.has(req.body.status)
      ? req.body.status
      : existing.status;
  const nextFeatured =
    typeof req.body?.is_featured === 'boolean' ? (req.body.is_featured ? 1 : 0) : existing.is_featured;

  db.prepare(`UPDATE vehicles SET status = ?, is_featured = ?, updated_at = datetime('now') WHERE id = ?`).run(
    nextStatus,
    nextFeatured,
    id
  );

  const updated = db.prepare('SELECT * FROM vehicles WHERE id = ?').get(id) as Record<string, unknown>;
  res.json({ vehicle: formatVehicleRow(updated) });
});

app.delete('/api/admin/vehicles/:id', requireAdmin, requirePrivilege('vehicles'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid vehicle ID' });
    return;
  }
  const existing = db.prepare('SELECT image_url FROM vehicles WHERE id = ?').get(id) as
    | { image_url: string }
    | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Vehicle not found' });
    return;
  }

  db.prepare('DELETE FROM vehicles WHERE id = ?').run(id);

  // Clean up uploaded file if stored under /uploads/
  if (existing.image_url && /^\/uploads\/[a-f0-9]{32}\.(jpg|png|webp)$/.test(existing.image_url)) {
    const filename = existing.image_url.replace('/uploads/', '');
    const targetPath = path.resolve(uploadsDir, filename);
    if (targetPath.startsWith(uploadsDir + path.sep) && fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }
  }

  res.json({ deleted: true });
});

// Admin Quotations Management
const VALID_QUOTATION_STATUSES = new Set(['new', 'in_review', 'quoted', 'approved', 'rejected', 'closed']);

app.get('/api/admin/quotations', requireAdmin, requirePrivilege('quotations'), (req: AuthenticatedRequest, res: Response) => {
  const status = typeof req.query.status === 'string' ? req.query.status.trim() : '';
  const country = typeof req.query.country === 'string' ? req.query.country.trim() : '';
  const search = typeof req.query.search === 'string' ? req.query.search.trim().toLowerCase() : '';

  const conditions: string[] = [];
  const params: unknown[] = [];

  if (status && VALID_QUOTATION_STATUSES.has(status)) {
    conditions.push('q.status = ?');
    params.push(status);
  }
  if (country && VALID_COUNTRIES.has(country)) {
    conditions.push('q.country = ?');
    params.push(country);
  }
  if (search) {
    conditions.push(
      '(LOWER(q.full_name) LIKE ? OR LOWER(q.company_name) LIKE ? OR LOWER(q.email) LIKE ? OR LOWER(q.reference_code) LIKE ?)'
    );
    const like = `%${search}%`;
    params.push(like, like, like, like);
  }

  const whereSql = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const rows = db
    .prepare(
      `SELECT q.*, v.make AS vehicle_make, v.model AS vehicle_model, v.year AS vehicle_year,
              v.listing_type AS vehicle_listing_type, o.title AS offer_title
       FROM quotation_requests q
       LEFT JOIN vehicles v ON v.id = q.vehicle_id
       LEFT JOIN offers o ON o.id = q.offer_id
       ${whereSql}
       ORDER BY q.created_at DESC`
    )
    .all(...params)
    .map((r) => formatQuotationRow(r as Record<string, unknown>));

  res.json({ quotations: rows });
});

app.patch('/api/admin/quotations/:id', requireAdmin, requirePrivilege('quotations'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid quotation ID' });
    return;
  }
  const existing = db.prepare('SELECT * FROM quotation_requests WHERE id = ?').get(id) as
    | Record<string, unknown>
    | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Quotation request not found' });
    return;
  }

  const status = String(req.body?.status || existing.status).trim();
  if (!VALID_QUOTATION_STATUSES.has(status)) {
    res.status(422).json({ error: 'Invalid quotation status' });
    return;
  }

  let estimatedQuote: number | null = existing.estimated_monthly_quote as number | null;
  if (req.body?.estimated_monthly_quote === '' || req.body?.estimated_monthly_quote === null) {
    estimatedQuote = null;
  } else if (req.body?.estimated_monthly_quote !== undefined) {
    const parsedNum = Number(req.body.estimated_monthly_quote);
    if (!Number.isFinite(parsedNum) || parsedNum < 0) {
      res.status(422).json({ error: 'Estimated monthly quote must be a non-negative number.' });
      return;
    }
    estimatedQuote = parsedNum;
  }

  const adminNotes =
    req.body?.admin_notes !== undefined
      ? String(req.body.admin_notes).trim().slice(0, 2000)
      : String(existing.admin_notes || '');

  db.prepare(
    `UPDATE quotation_requests
     SET status = ?, estimated_monthly_quote = ?, admin_notes = ?, updated_at = datetime('now')
     WHERE id = ?`
  ).run(status, estimatedQuote, adminNotes, id);

  const updated = db
    .prepare(
      `SELECT q.*, v.make AS vehicle_make, v.model AS vehicle_model, v.year AS vehicle_year,
              v.listing_type AS vehicle_listing_type, o.title AS offer_title
       FROM quotation_requests q
       LEFT JOIN vehicles v ON v.id = q.vehicle_id
       LEFT JOIN offers o ON o.id = q.offer_id
       WHERE q.id = ?`
    )
    .get(id) as Record<string, unknown>;

  res.json({ quotation: formatQuotationRow(updated) });
});

app.delete('/api/admin/quotations/:id', requireAdmin, requirePrivilege('quotations'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid quotation ID' });
    return;
  }
  const info = db.prepare('DELETE FROM quotation_requests WHERE id = ?').run(id);
  if (info.changes === 0) {
    res.status(404).json({ error: 'Quotation request not found' });
    return;
  }
  res.json({ deleted: true });
});

// Admin Contact Messages
app.get('/api/admin/messages', requireAdmin, requirePrivilege('website'), (_req: AuthenticatedRequest, res: Response) => {
  const messages = db.prepare(`SELECT * FROM contact_messages ORDER BY created_at DESC`).all();
  res.json({ messages });
});

app.patch('/api/admin/messages/:id', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  const status = String(req.body?.status || '').trim();
  if (!Number.isInteger(id) || !['unread', 'read', 'archived'].includes(status)) {
    res.status(422).json({ error: 'Invalid status update' });
    return;
  }
  db.prepare(`UPDATE contact_messages SET status = ? WHERE id = ?`).run(status, id);
  res.json({ ok: true });
});

// Admin Client Reviews Moderation
app.get('/api/admin/reviews', requireAdmin, requirePrivilege('website'), (_req: AuthenticatedRequest, res: Response) => {
  const reviews = db
    .prepare(`SELECT * FROM client_reviews ORDER BY id DESC`)
    .all()
    .map((r) => formatReviewRow(r as Record<string, unknown>));
  res.json({ reviews });
});

app.delete('/api/admin/reviews/:id', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid review ID' });
    return;
  }
  db.prepare(`DELETE FROM client_reviews WHERE id = ?`).run(id);
  res.json({ deleted: true });
});

// ============================================================
// WEBSITE MANAGEMENT CMS ROUTES (privilege: 'website')
// ============================================================

const ALLOWED_SITE_CONTENT_KEYS = new Set([
  'hero_image_url',
  'hero_tagline_en',
  'hero_tagline_ar',
  'hero_headline_en',
  'hero_headline_highlight_en',
  'hero_headline_suffix_en',
  'hero_headline_ar',
  'hero_headline_highlight_ar',
  'hero_headline_suffix_ar',
  'hero_subtitle_en',
  'hero_subtitle_ar',
  'hero_quote_en',
  'hero_card_eyebrow_en',
  'hero_card_eyebrow_ar',
  'hero_card_caption_en',
  'hero_card_caption_ar',
  'about_headline_en',
  'about_headline_ar',
  'about_p1_en',
  'about_p1_ar',
  'about_p2_en',
  'about_p2_ar',
  'about_quote_en',
  'about_quote_ar',
  'vision_en',
  'vision_ar',
  'mission_en',
  'mission_ar',
  'about_hq_image_url',
  'about_vision_image_url',
  'about_strategic_title_en',
  'about_strategic_title_ar',
  'about_strategic_p1_en',
  'about_strategic_p2_en',
  'contact_sales_email',
  'contact_support_email',
  'contact_general_email',
  'contact_bahrain_phone',
  'contact_ksa_phone',
  'contact_oman_phone',
  'contact_ops_phone',
  'contact_workshop_phone',
  'contact_hours_en',
  'contact_hours_short_en',
  'contact_hq_summary_en',
  'contact_sales_lead',
  'contact_ops_lead',
  'contact_workshop_lead',
  'contact_hero_title_en',
  'contact_hero_subtitle_en',
]);

const IMAGE_SITE_CONTENT_KEYS = new Set([
  'hero_image_url',
  'about_hq_image_url',
  'about_vision_image_url',
]);

app.post(
  '/api/admin/upload',
  requireAdmin,
  requirePrivilege('website'),
  upload.single('image'),
  (req: AuthenticatedRequest, res: Response) => {
    if (!req.file) {
      res.status(422).json({ error: 'Please select a JPG, PNG, or WEBP image file (max 5MB).' });
      return;
    }
    res.status(201).json({ image_url: `/uploads/${req.file.filename}` });
  }
);

app.get('/api/admin/site-content', requireAdmin, requirePrivilege('website'), (_req: AuthenticatedRequest, res: Response) => {
  const content = getSiteContentMap();
  const gallery = db.prepare(`SELECT * FROM about_gallery ORDER BY sort_order ASC, id ASC`).all();
  const branches = db
    .prepare(`SELECT * FROM branches ORDER BY is_hq DESC, id ASC`)
    .all()
    .map((b) => ({
      ...(b as Record<string, unknown>),
      is_hq: Boolean((b as Record<string, unknown>).is_hq),
    }));
  const workshops = db.prepare(`SELECT * FROM workshops ORDER BY id ASC`).all();
  const availableAssets = listAvailableStudioAssets();
  res.json({ content, gallery, branches, workshops, availableAssets });
});

app.put('/api/admin/site-content', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const updates = req.body?.content;
  if (!updates || typeof updates !== 'object' || Array.isArray(updates)) {
    res.status(422).json({ error: 'Invalid site content payload.' });
    return;
  }

  const upsert = db.prepare(`INSERT OR REPLACE INTO site_content (key, value) VALUES (?, ?)`);
  const tx = db.transaction(() => {
    for (const [key, rawVal] of Object.entries(updates as Record<string, unknown>)) {
      if (!ALLOWED_SITE_CONTENT_KEYS.has(key)) continue;
      if (IMAGE_SITE_CONTENT_KEYS.has(key)) {
        const cleanUrl = sanitizeImageUrl(rawVal);
        if (cleanUrl) {
          upsert.run(key, cleanUrl);
        }
      } else {
        const cleanText = String(rawVal ?? '').trim().slice(0, 2000);
        upsert.run(key, cleanText);
      }
    }
  });
  tx();

  res.json({ content: getSiteContentMap() });
});

// About Us Gallery CRUD
app.post(
  '/api/admin/gallery',
  requireAdmin,
  requirePrivilege('website'),
  upload.single('image'),
  (req: AuthenticatedRequest, res: Response) => {
    const b = req.body || {};
    const title = String(b.title || '').trim().slice(0, 140);
    const titleAr = String(b.title_ar || '').trim().slice(0, 140);
    const caption = String(b.caption || '').trim().slice(0, 400);
    const captionAr = String(b.caption_ar || '').trim().slice(0, 400);
    const sortOrder = Number.isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 0;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : sanitizeImageUrl(b.image_url);

    if (title.length < 2) {
      res.status(422).json({ error: 'Please provide a gallery photo title.' });
      return;
    }
    if (!imageUrl) {
      res.status(422).json({ error: 'Please upload an image or choose an existing studio asset.' });
      return;
    }

    const info = db
      .prepare(
        `INSERT INTO about_gallery (title, title_ar, caption, caption_ar, image_url, sort_order)
         VALUES (?, ?, ?, ?, ?, ?)`
      )
      .run(title, titleAr, caption, captionAr, imageUrl, sortOrder);

    const item = db.prepare(`SELECT * FROM about_gallery WHERE id = ?`).get(info.lastInsertRowid);
    res.status(201).json({ item });
  }
);

app.put(
  '/api/admin/gallery/:id',
  requireAdmin,
  requirePrivilege('website'),
  upload.single('image'),
  (req: AuthenticatedRequest, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({ error: 'Invalid gallery item ID' });
      return;
    }
    const existing = db.prepare(`SELECT * FROM about_gallery WHERE id = ?`).get(id) as
      | { id: number; image_url: string; title: string; title_ar: string; caption: string; caption_ar: string; sort_order: number }
      | undefined;
    if (!existing) {
      res.status(404).json({ error: 'Gallery item not found' });
      return;
    }

    const b = req.body || {};
    const title = String(b.title ?? existing.title).trim().slice(0, 140);
    const titleAr = String(b.title_ar ?? existing.title_ar).trim().slice(0, 140);
    const caption = String(b.caption ?? existing.caption).trim().slice(0, 400);
    const captionAr = String(b.caption_ar ?? existing.caption_ar).trim().slice(0, 400);
    const sortOrder = b.sort_order !== undefined && Number.isFinite(Number(b.sort_order))
      ? Number(b.sort_order)
      : existing.sort_order;

    let imageUrl = existing.image_url;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    } else if (typeof b.image_url === 'string' && b.image_url.trim()) {
      const clean = sanitizeImageUrl(b.image_url);
      if (clean) imageUrl = clean;
    }

    if (title.length < 2) {
      res.status(422).json({ error: 'Please provide a gallery photo title.' });
      return;
    }

    db.prepare(
      `UPDATE about_gallery SET title = ?, title_ar = ?, caption = ?, caption_ar = ?, image_url = ?, sort_order = ? WHERE id = ?`
    ).run(title, titleAr, caption, captionAr, imageUrl, sortOrder, id);

    if (imageUrl !== existing.image_url) {
      cleanupUploadedImage(existing.image_url);
    }

    const item = db.prepare(`SELECT * FROM about_gallery WHERE id = ?`).get(id);
    res.json({ item });
  }
);

app.delete('/api/admin/gallery/:id', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid gallery item ID' });
    return;
  }
  const existing = db.prepare(`SELECT image_url FROM about_gallery WHERE id = ?`).get(id) as
    | { image_url: string }
    | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Gallery item not found' });
    return;
  }
  db.prepare(`DELETE FROM about_gallery WHERE id = ?`).run(id);
  cleanupUploadedImage(existing.image_url);
  res.json({ deleted: true });
});

// Branches CRUD
app.post('/api/admin/branches', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const b = req.body || {};
  const name = String(b.name || '').trim().slice(0, 120);
  const nameAr = String(b.name_ar || '').trim().slice(0, 120);
  const country = String(b.country || 'Saudi Arabia').trim();
  const city = String(b.city || '').trim().slice(0, 80);
  const phone = String(b.phone || '').trim().slice(0, 40);
  const address = String(b.address || '').trim().slice(0, 200);
  const hours = String(b.hours || 'Sun–Thu · 8:30 AM – 5:30 PM').trim().slice(0, 120);
  const focus = String(b.focus || '').trim().slice(0, 200);
  const isHq = b.is_hq ? 1 : 0;
  const mapX = Math.max(50, Math.min(950, Number(b.map_x) || 565));
  const mapY = Math.max(50, Math.min(580, Number(b.map_y) || 256));

  if (name.length < 2 || city.length < 2 || phone.length < 6) {
    res.status(422).json({ error: 'Branch name, city, and phone are required.' });
    return;
  }
  if (!VALID_COUNTRIES.has(country)) {
    res.status(422).json({ error: 'Country must be Bahrain, Saudi Arabia, or Oman.' });
    return;
  }

  const info = db
    .prepare(
      `INSERT INTO branches (name, name_ar, country, city, phone, is_hq, address, hours, map_x, map_y, focus)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(name, nameAr, country, city, phone, isHq, address || `${city}, ${country}`, hours, mapX, mapY, focus);

  const row = db.prepare(`SELECT * FROM branches WHERE id = ?`).get(info.lastInsertRowid) as Record<string, unknown>;
  res.status(201).json({ branch: { ...row, is_hq: Boolean(row.is_hq) } });
});

app.put('/api/admin/branches/:id', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid branch ID' });
    return;
  }
  const existing = db.prepare(`SELECT * FROM branches WHERE id = ?`).get(id) as Record<string, unknown> | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Branch not found' });
    return;
  }
  const b = req.body || {};
  const name = String(b.name ?? existing.name).trim().slice(0, 120);
  const nameAr = String(b.name_ar ?? existing.name_ar).trim().slice(0, 120);
  const country = String(b.country ?? existing.country).trim();
  const city = String(b.city ?? existing.city).trim().slice(0, 80);
  const phone = String(b.phone ?? existing.phone).trim().slice(0, 40);
  const address = String(b.address ?? existing.address).trim().slice(0, 200);
  const hours = String(b.hours ?? existing.hours).trim().slice(0, 120);
  const focus = String(b.focus ?? existing.focus).trim().slice(0, 200);
  const isHq = b.is_hq !== undefined ? (b.is_hq ? 1 : 0) : Number(existing.is_hq || 0);
  const mapX = b.map_x !== undefined ? Math.max(50, Math.min(950, Number(b.map_x) || 565)) : Number(existing.map_x || 565);
  const mapY = b.map_y !== undefined ? Math.max(50, Math.min(580, Number(b.map_y) || 256)) : Number(existing.map_y || 256);

  if (name.length < 2 || city.length < 2 || phone.length < 6) {
    res.status(422).json({ error: 'Branch name, city, and phone are required.' });
    return;
  }
  if (!VALID_COUNTRIES.has(country)) {
    res.status(422).json({ error: 'Country must be Bahrain, Saudi Arabia, or Oman.' });
    return;
  }

  db.prepare(
    `UPDATE branches SET name = ?, name_ar = ?, country = ?, city = ?, phone = ?, is_hq = ?, address = ?, hours = ?, map_x = ?, map_y = ?, focus = ? WHERE id = ?`
  ).run(name, nameAr, country, city, phone, isHq, address, hours, mapX, mapY, focus, id);

  const row = db.prepare(`SELECT * FROM branches WHERE id = ?`).get(id) as Record<string, unknown>;
  res.json({ branch: { ...row, is_hq: Boolean(row.is_hq) } });
});

app.delete('/api/admin/branches/:id', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid branch ID' });
    return;
  }
  db.prepare(`DELETE FROM branches WHERE id = ?`).run(id);
  res.json({ deleted: true });
});

// Workshops CRUD
app.post('/api/admin/workshops', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const b = req.body || {};
  const name = String(b.name || '').trim().slice(0, 120);
  const nameAr = String(b.name_ar || '').trim().slice(0, 120);
  const branchName = String(b.branch_name || b.city || '').trim().slice(0, 100);
  const city = String(b.city || '').trim().slice(0, 80);
  const country = String(b.country || 'Saudi Arabia').trim();
  const phone = String(b.phone || '').trim().slice(0, 40);
  const hours = String(b.hours || 'Sun–Thu · 8:00 AM – 6:00 PM').trim().slice(0, 120);
  const address = String(b.address || '').trim().slice(0, 200);
  const mapX = Math.max(50, Math.min(950, Number(b.map_x) || 554));
  const mapY = Math.max(50, Math.min(580, Number(b.map_y) || 274));

  if (name.length < 2 || city.length < 2 || phone.length < 6) {
    res.status(422).json({ error: 'Workshop name, city, and phone are required.' });
    return;
  }
  if (!VALID_COUNTRIES.has(country)) {
    res.status(422).json({ error: 'Country must be Bahrain, Saudi Arabia, or Oman.' });
    return;
  }

  const info = db
    .prepare(
      `INSERT INTO workshops (name, name_ar, branch_name, city, country, phone, hours, address, map_x, map_y)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(name, nameAr, branchName, city, country, phone, hours, address || `${city}, ${country}`, mapX, mapY);

  const workshop = db.prepare(`SELECT * FROM workshops WHERE id = ?`).get(info.lastInsertRowid);
  res.status(201).json({ workshop });
});

app.put('/api/admin/workshops/:id', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid workshop ID' });
    return;
  }
  const existing = db.prepare(`SELECT * FROM workshops WHERE id = ?`).get(id) as Record<string, unknown> | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Workshop not found' });
    return;
  }
  const b = req.body || {};
  const name = String(b.name ?? existing.name).trim().slice(0, 120);
  const nameAr = String(b.name_ar ?? existing.name_ar).trim().slice(0, 120);
  const branchName = String(b.branch_name ?? existing.branch_name).trim().slice(0, 100);
  const city = String(b.city ?? existing.city).trim().slice(0, 80);
  const country = String(b.country ?? existing.country).trim();
  const phone = String(b.phone ?? existing.phone).trim().slice(0, 40);
  const hours = String(b.hours ?? existing.hours).trim().slice(0, 120);
  const address = String(b.address ?? existing.address).trim().slice(0, 200);
  const mapX = b.map_x !== undefined ? Math.max(50, Math.min(950, Number(b.map_x) || 554)) : Number(existing.map_x || 554);
  const mapY = b.map_y !== undefined ? Math.max(50, Math.min(580, Number(b.map_y) || 274)) : Number(existing.map_y || 274);

  if (name.length < 2 || city.length < 2 || phone.length < 6) {
    res.status(422).json({ error: 'Workshop name, city, and phone are required.' });
    return;
  }
  if (!VALID_COUNTRIES.has(country)) {
    res.status(422).json({ error: 'Country must be Bahrain, Saudi Arabia, or Oman.' });
    return;
  }

  db.prepare(
    `UPDATE workshops SET name = ?, name_ar = ?, branch_name = ?, city = ?, country = ?, phone = ?, hours = ?, address = ?, map_x = ?, map_y = ? WHERE id = ?`
  ).run(name, nameAr, branchName, city, country, phone, hours, address, mapX, mapY, id);

  const workshop = db.prepare(`SELECT * FROM workshops WHERE id = ?`).get(id);
  res.json({ workshop });
});

app.delete('/api/admin/workshops/:id', requireAdmin, requirePrivilege('website'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid workshop ID' });
    return;
  }
  db.prepare(`DELETE FROM workshops WHERE id = ?`).run(id);
  res.json({ deleted: true });
});

// ============================================================
// ADMIN TEAM & SECTION PRIVILEGES CRUD (privilege: 'admins')
// ============================================================

function formatAdminUserRow(row: Record<string, unknown>) {
  const role: 'super_admin' | 'staff' = row.role === 'super_admin' ? 'super_admin' : 'staff';
  return {
    id: Number(row.id),
    name: String(row.name || ''),
    email: String(row.email || ''),
    role,
    privileges: normalizePrivileges(row.privileges, role),
    is_active: Boolean(row.is_active ?? 1),
    created_at: String(row.created_at || ''),
  };
}

app.get('/api/admin/users', requireAdmin, requirePrivilege('admins'), (_req: AuthenticatedRequest, res: Response) => {
  const rows = db
    .prepare(`SELECT id, name, email, role, privileges, is_active, created_at FROM admin_users ORDER BY id ASC`)
    .all()
    .map((r) => formatAdminUserRow(r as Record<string, unknown>));
  res.json({ users: rows });
});

app.post('/api/admin/users', requireAdmin, requirePrivilege('admins'), (req: AuthenticatedRequest, res: Response) => {
  const b = req.body || {};
  const name = String(b.name || '').trim().slice(0, 80);
  const email = String(b.email || '').trim().toLowerCase();
  const password = String(b.password || '');
  const role: 'super_admin' | 'staff' = b.role === 'super_admin' ? 'super_admin' : 'staff';
  const privileges = normalizePrivileges(b.privileges, role);

  if (name.length < 2) {
    res.status(422).json({ error: 'Please provide the administrator name (at least 2 characters).' });
    return;
  }
  if (!EMAIL_REGEX.test(email) || email.length > 150) {
    res.status(422).json({ error: 'Please enter a valid email address.' });
    return;
  }
  if (password.length < 8) {
    res.status(422).json({ error: 'Password must be at least 8 characters.' });
    return;
  }
  if (privileges.length === 0) {
    res.status(422).json({ error: 'Select at least one section privilege for this administrator.' });
    return;
  }

  const existing = db.prepare(`SELECT id FROM admin_users WHERE LOWER(email) = ?`).get(email);
  if (existing) {
    res.status(409).json({ error: 'An administrator account with this email already exists.' });
    return;
  }

  const passwordHash = hashPassword(password);
  const info = db
    .prepare(
      `INSERT INTO admin_users (name, email, password_hash, is_admin, role, privileges, is_active)
       VALUES (?, ?, ?, 1, ?, ?, 1)`
    )
    .run(name, email, passwordHash, role, JSON.stringify(privileges));

  const created = db
    .prepare(`SELECT id, name, email, role, privileges, is_active, created_at FROM admin_users WHERE id = ?`)
    .get(info.lastInsertRowid) as Record<string, unknown>;
  res.status(201).json({ user: formatAdminUserRow(created) });
});

app.put('/api/admin/users/:id', requireAdmin, requirePrivilege('admins'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid administrator ID' });
    return;
  }
  const existing = db
    .prepare(`SELECT id, name, email, role, privileges, is_active FROM admin_users WHERE id = ?`)
    .get(id) as
    | { id: number; name: string; email: string; role: string; privileges: string; is_active: number }
    | undefined;
  if (!existing) {
    res.status(404).json({ error: 'Administrator account not found' });
    return;
  }

  const b = req.body || {};
  const name = String(b.name ?? existing.name).trim().slice(0, 80);
  const email = String(b.email ?? existing.email).trim().toLowerCase();
  const role: 'super_admin' | 'staff' = b.role === 'super_admin' ? 'super_admin' : 'staff';
  const privileges = normalizePrivileges(b.privileges ?? existing.privileges, role);
  const isActive = b.is_active !== undefined ? (b.is_active ? 1 : 0) : existing.is_active;
  const newPassword = typeof b.password === 'string' ? b.password : '';

  if (name.length < 2) {
    res.status(422).json({ error: 'Administrator name must be at least 2 characters.' });
    return;
  }
  if (!EMAIL_REGEX.test(email)) {
    res.status(422).json({ error: 'Please provide a valid email address.' });
    return;
  }
  if (privileges.length === 0) {
    res.status(422).json({ error: 'Select at least one section privilege.' });
    return;
  }
  if (newPassword && newPassword.length < 8) {
    res.status(422).json({ error: 'New password must be at least 8 characters.' });
    return;
  }

  const duplicate = db
    .prepare(`SELECT id FROM admin_users WHERE LOWER(email) = ? AND id != ?`)
    .get(email, id);
  if (duplicate) {
    res.status(409).json({ error: 'Another administrator already uses this email address.' });
    return;
  }

  // Prevent locking out the last active super admin / admin manager
  const willStillManageAdmins = isActive === 1 && (role === 'super_admin' || privileges.includes('admins'));
  if (!willStillManageAdmins) {
    const otherManagers = db
      .prepare(
        `SELECT id, role, privileges FROM admin_users WHERE id != ? AND is_active = 1 AND is_admin = 1`
      )
      .all(id) as Array<{ id: number; role: string; privileges: string }>;
    const hasAnotherManager = otherManagers.some(
      (u) => u.role === 'super_admin' || normalizePrivileges(u.privileges, u.role).includes('admins')
    );
    if (!hasAnotherManager && getEnvPasscode().length === 0) {
      res.status(422).json({
        error: 'At least one active administrator with Admin Management privileges must remain.',
      });
      return;
    }
  }

  if (newPassword) {
    const passwordHash = hashPassword(newPassword);
    db.prepare(
      `UPDATE admin_users SET name = ?, email = ?, role = ?, privileges = ?, is_active = ?, password_hash = ? WHERE id = ?`
    ).run(name, email, role, JSON.stringify(privileges), isActive, passwordHash, id);
    // Invalidate existing sessions on password change
    db.prepare(`DELETE FROM admin_sessions WHERE admin_id = ?`).run(id);
  } else {
    db.prepare(
      `UPDATE admin_users SET name = ?, email = ?, role = ?, privileges = ?, is_active = ? WHERE id = ?`
    ).run(name, email, role, JSON.stringify(privileges), isActive, id);
    if (isActive === 0) {
      db.prepare(`DELETE FROM admin_sessions WHERE admin_id = ?`).run(id);
    }
  }

  const updated = db
    .prepare(`SELECT id, name, email, role, privileges, is_active, created_at FROM admin_users WHERE id = ?`)
    .get(id) as Record<string, unknown>;
  res.json({ user: formatAdminUserRow(updated) });
});

app.delete('/api/admin/users/:id', requireAdmin, requirePrivilege('admins'), (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'Invalid administrator ID' });
    return;
  }
  if (req.admin?.id === id) {
    res.status(422).json({ error: 'You cannot delete your own active administrator account.' });
    return;
  }
  const otherManagers = db
    .prepare(`SELECT id, role, privileges FROM admin_users WHERE id != ? AND is_active = 1 AND is_admin = 1`)
    .all(id) as Array<{ id: number; role: string; privileges: string }>;
  const hasAnotherManager = otherManagers.some(
    (u) => u.role === 'super_admin' || normalizePrivileges(u.privileges, u.role).includes('admins')
  );
  if (!hasAnotherManager && getEnvPasscode().length === 0) {
    res.status(422).json({ error: 'Cannot delete the last remaining administrator.' });
    return;
  }

  db.prepare(`DELETE FROM admin_sessions WHERE admin_id = ?`).run(id);
  const info = db.prepare(`DELETE FROM admin_users WHERE id = ?`).run(id);
  if (info.changes === 0) {
    res.status(404).json({ error: 'Administrator account not found' });
    return;
  }
  res.json({ deleted: true });
});

// Multer & Express JSON error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err) {
    res.status(400).json({ error: err.message || 'Request failed' });
    return;
  }
  res.status(500).json({ error: 'Internal server error' });
});

// ============================================================
// VITE MIDDLEWARE (DEV) OR STATIC DIST (PROD)
// ============================================================

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.get('*', async (req: Request, res: Response, next: NextFunction) => {
      if (
        req.path.startsWith('/api/') ||
        req.path.startsWith('/uploads/') ||
        req.path.startsWith('/assets/') ||
        /\.[a-z0-9]{2,6}$/i.test(req.path)
      ) {
        next();
        return;
      }
      try {
        const indexPath = path.resolve(process.cwd(), 'index.html');
        let template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
        const html = injectRouteSeoHtml(template, req.originalUrl, getOrigin(req));
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(html);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    const indexPath = path.join(distDir, 'index.html');
    const templateHtml = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf-8') : '';
    app.use(express.static(distDir, { index: false }));
    app.get('*', (req: Request, res: Response, next: NextFunction) => {
      if (req.path.startsWith('/api/') || req.path.startsWith('/uploads/')) {
        next();
        return;
      }
      const html = templateHtml
        ? injectRouteSeoHtml(templateHtml, req.originalUrl, getOrigin(req))
        : '';
      res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(html);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Jadeer United full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
