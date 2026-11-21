import express, { type Request, type Response, type NextFunction } from 'express';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { db, initializeDatabase } from './server/db.ts';

dotenv.config();
initializeDatabase();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '2mb' }));

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
  return {
    id: row.id,
    make: row.make,
    model: row.model,
    year: row.year,
    category: row.category,
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
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

function formatOfferRow(row: Record<string, unknown>) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    subtitle: row.subtitle,
    category: row.category,
    monthly_rate_from: row.monthly_rate_from,
    currency: row.currency,
    countries: parseJsonSafe<string[]>(row.countries as string, []),
    valid_until: row.valid_until,
    is_active: Boolean(row.is_active),
    highlights: parseJsonSafe<string[]>(row.highlights as string, []),
    description: row.description,
    image_url: row.image_url || '',
    created_at: row.created_at,
  };
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
  admin?: { id: number; email: string; name: string };
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
  req.admin = { id: session.admin_id, email: session.email, name: session.name };
  next();
}

// ============================================================
// PUBLIC API ROUTES
// ============================================================

app.get('/api/home', (_req: Request, res: Response) => {
  const showroomFeatured = db
    .prepare(
      `SELECT * FROM vehicles WHERE listing_type = 'showroom' AND status != 'sold' ORDER BY is_featured DESC, id ASC LIMIT 4`
    )
    .all()
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  const usedFeatured = db
    .prepare(
      `SELECT * FROM vehicles WHERE listing_type = 'used' AND status != 'sold' ORDER BY is_featured DESC, id ASC LIMIT 3`
    )
    .all()
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  const offers = db
    .prepare(`SELECT * FROM offers WHERE is_active = 1 ORDER BY id ASC LIMIT 3`)
    .all()
    .map((r) => formatOfferRow(r as Record<string, unknown>));

  const articles = db
    .prepare(`SELECT * FROM articles ORDER BY published_at DESC LIMIT 3`)
    .all();

  res.json({ showroomFeatured, usedFeatured, offers, articles });
});

app.get('/api/vehicles', (req: Request, res: Response) => {
  const listingType = typeof req.query.listing_type === 'string' ? req.query.listing_type.trim() : '';
  const category = typeof req.query.category === 'string' ? req.query.category.trim() : '';
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
    conditions.push('category = ?');
    params.push(category);
  }
  if (fuelType && fuelType !== 'All') {
    conditions.push('fuel_type = ?');
    params.push(fuelType);
  }
  if (transmission && transmission !== 'All') {
    conditions.push('transmission = ?');
    params.push(transmission);
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
    conditions.push('(LOWER(make) LIKE ? OR LOWER(model) LIKE ? OR LOWER(description) LIKE ? OR LOWER(category) LIKE ?)');
    const like = `%${search}%`;
    params.push(like, like, like, like);
  }

  const whereSql = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const rows = db
    .prepare(`SELECT * FROM vehicles ${whereSql} ORDER BY is_featured DESC, year DESC, id DESC`)
    .all(...params)
    .map((r) => formatVehicleRow(r as Record<string, unknown>));

  res.json({ vehicles: rows });
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
    conditions.push('(LOWER(title) LIKE ? OR LOWER(excerpt) LIKE ? OR LOWER(body) LIKE ?)');
    const like = `%${search}%`;
    params.push(like, like, like);
  }

  const whereSql = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const rows = db
    .prepare(`SELECT * FROM articles ${whereSql} ORDER BY published_at DESC`)
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
    .prepare('SELECT id, title, slug, category, published_at, read_time_minutes FROM articles WHERE slug != ? ORDER BY published_at DESC LIMIT 3')
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
        country, city, vehicle_id, offer_id, fleet_quantity, lease_term_months,
        add_ons, notes, status, routing_email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)`
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
      .prepare(`INSERT INTO admin_users (name, email, password_hash, is_admin) VALUES (?, ?, ?, 1)`)
      .run(name || 'Jadeer Fleet Admin', email, passwordHash);
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
    admin: { id: adminId, email, name: name || 'Jadeer Fleet Admin' },
  });
});

app.post('/api/admin/auth/login', (req: Request, res: Response) => {
  const body = req.body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  const envPasscode = getEnvPasscode();
  if (envPasscode.length > 0) {
    if (!timingSafeStringEqual(password, envPasscode)) {
      res.status(401).json({ error: 'Invalid admin credentials.' });
      return;
    }
    const adminEmail = EMAIL_REGEX.test(email) ? email : 'admin@jadeerunited.com';
    const token = createAdminSession(0, adminEmail, 'Jadeer Administrator');
    res.json({
      token,
      admin: { id: 0, email: adminEmail, name: 'Jadeer Administrator' },
    });
    return;
  }

  const user = db
    .prepare(`SELECT id, name, email, password_hash, is_admin FROM admin_users WHERE LOWER(email) = ?`)
    .get(email) as
    | { id: number; name: string; email: string; password_hash: string; is_admin: number }
    | undefined;

  if (!user || !user.is_admin || !verifyPassword(password, user.password_hash)) {
    res.status(401).json({ error: 'Invalid email or password.' });
    return;
  }

  const token = createAdminSession(user.id, user.email, user.name);
  res.json({
    token,
    admin: { id: user.id, email: user.email, name: user.name },
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

app.get('/api/admin/dashboard', requireAdmin, (_req: AuthenticatedRequest, res: Response) => {
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

  const recentQuotations = db
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
    .map((r) => formatQuotationRow(r as Record<string, unknown>));

  res.json({
    stats: {
      totalShowroom,
      totalUsed,
      totalQuotations,
      pendingQuotations,
      unreadMessages,
    },
    recentQuotations,
  });
});

// Admin Vehicles CRUD
const VALID_LISTING_TYPES = new Set(['showroom', 'used']);
const VALID_VEHICLE_STATUSES = new Set(['available', 'reserved', 'leased', 'sold']);
const VALID_CATEGORIES = new Set(['SUV', 'Sedan', 'Fleet', 'Hybrid', 'Limousine', 'Commercial']);

app.get('/api/admin/vehicles', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
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
  const currency = ['BHD', 'SAR', 'OMR'].includes(String(b.currency || 'BHD')) ? String(b.currency) : 'BHD';
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

app.post('/api/admin/vehicles', requireAdmin, upload.single('image'), (req: AuthenticatedRequest, res: Response) => {
  const parsed = parseVehiclePayload(req);
  if ('error' in parsed) {
    res.status(422).json({ error: parsed.error });
    return;
  }
  const d = parsed.data;
  const info = db
    .prepare(
      `INSERT INTO vehicles (
        make, model, year, category, listing_type, fuel_type, transmission,
        mileage_km, price_or_monthly_rate, currency, country_availability,
        is_featured, status, image_url, description, safety_telematics_specs
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      d.make,
      d.model,
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

app.put('/api/admin/vehicles/:id', requireAdmin, upload.single('image'), (req: AuthenticatedRequest, res: Response) => {
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

  db.prepare(
    `UPDATE vehicles SET
      make = ?, model = ?, year = ?, category = ?, listing_type = ?,
      fuel_type = ?, transmission = ?, mileage_km = ?, price_or_monthly_rate = ?,
      currency = ?, country_availability = ?, is_featured = ?, status = ?,
      image_url = ?, description = ?, safety_telematics_specs = ?, updated_at = datetime('now')
     WHERE id = ?`
  ).run(
    d.make,
    d.model,
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

app.patch('/api/admin/vehicles/:id/quick', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
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

app.delete('/api/admin/vehicles/:id', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
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

app.get('/api/admin/quotations', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
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

app.patch('/api/admin/quotations/:id', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
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

app.delete('/api/admin/quotations/:id', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
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
app.get('/api/admin/messages', requireAdmin, (_req: AuthenticatedRequest, res: Response) => {
  const messages = db.prepare(`SELECT * FROM contact_messages ORDER BY created_at DESC`).all();
  res.json({ messages });
});

app.patch('/api/admin/messages/:id', requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id);
  const status = String(req.body?.status || '').trim();
  if (!Number.isInteger(id) || !['unread', 'read', 'archived'].includes(status)) {
    res.status(422).json({ error: 'Invalid status update' });
    return;
  }
  db.prepare(`UPDATE contact_messages SET status = ? WHERE id = ?`).run(status, id);
  res.json({ ok: true });
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
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Jadeer United full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
