import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import {
  REAL_ARTICLES,
  REAL_BRANCHES,
  REAL_OFFERS,
  REAL_REVIEWS,
  REAL_SITE_CONTENT,
  REAL_VEHICLES,
  REAL_WORKSHOPS,
} from './realDbSeed.ts';

const dataDir = path.resolve(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'jadeer_united.sqlite');
export const db = new Database(dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

function ensureColumn(table: string, column: string, definition: string): void {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all() as Array<{ name: string }>;
  if (!cols.some((c) => c.name === column)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
  }
}

export function slugifySegment(value: string): string {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'item';
}

export function resolveUniqueVehicleSlugs(
  listingType: string,
  make: string,
  model: string,
  year: number,
  excludeId?: number
): { brand_slug: string; model_slug: string } {
  const brandSlug = slugifySegment(make);
  const baseModelSlug = slugifySegment(model);

  const exists = (candidate: string): boolean => {
    const row = excludeId
      ? db
          .prepare(
            `SELECT id FROM vehicles WHERE listing_type = ? AND brand_slug = ? AND model_slug = ? AND id != ? LIMIT 1`
          )
          .get(listingType, brandSlug, candidate, excludeId)
      : db
          .prepare(
            `SELECT id FROM vehicles WHERE listing_type = ? AND brand_slug = ? AND model_slug = ? LIMIT 1`
          )
          .get(listingType, brandSlug, candidate);
    return Boolean(row);
  };

  if (!exists(baseModelSlug)) {
    return { brand_slug: brandSlug, model_slug: baseModelSlug };
  }
  const withYear = `${baseModelSlug}-${year}`;
  if (!exists(withYear)) {
    return { brand_slug: brandSlug, model_slug: withYear };
  }
  let counter = 2;
  while (exists(`${withYear}-${counter}`)) {
    counter++;
  }
  return { brand_slug: brandSlug, model_slug: `${withYear}-${counter}` };
}

function backfillVehicleSlugs(): void {
  const rows = db
    .prepare(`SELECT id, listing_type, make, model, year, brand_slug, model_slug FROM vehicles ORDER BY id ASC`)
    .all() as Array<{
    id: number;
    listing_type: string;
    make: string;
    model: string;
    year: number;
    brand_slug: string;
    model_slug: string;
  }>;

  const missingOrBlank = rows.some((r) => !r.brand_slug || !r.model_slug);
  if (!missingOrBlank) return;

  // Count natural (listing_type, brandSlug, baseModelSlug) collisions so duplicates get clean -year suffixes
  const pairCounts = new Map<string, number>();
  for (const r of rows) {
    const key = `${r.listing_type}::${slugifySegment(r.make)}::${slugifySegment(r.model)}`;
    pairCounts.set(key, (pairCounts.get(key) || 0) + 1);
  }

  const used = new Set<string>();
  const update = db.prepare(`UPDATE vehicles SET brand_slug = ?, model_slug = ? WHERE id = ?`);

  const tx = db.transaction(() => {
    for (const r of rows) {
      const brandSlug = slugifySegment(r.make);
      const baseModelSlug = slugifySegment(r.model);
      const naturalKey = `${r.listing_type}::${brandSlug}::${baseModelSlug}`;

      let candidate =
        (pairCounts.get(naturalKey) || 0) > 1 ? `${baseModelSlug}-${r.year}` : baseModelSlug;
      let uniqueKey = `${r.listing_type}::${brandSlug}::${candidate}`;
      if (used.has(uniqueKey)) {
        candidate = `${baseModelSlug}-${r.year}-${r.id}`;
        uniqueKey = `${r.listing_type}::${brandSlug}::${candidate}`;
      }
      used.add(uniqueKey);
      update.run(brandSlug, candidate, r.id);
    }
  });
  tx();
}

export function initializeDatabase(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      is_admin INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS admin_sessions (
      token_hash TEXT PRIMARY KEY,
      admin_id INTEGER NOT NULL,
      email TEXT NOT NULL,
      name TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS vehicles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      make TEXT NOT NULL,
      model TEXT NOT NULL,
      year INTEGER NOT NULL,
      category TEXT NOT NULL,
      listing_type TEXT NOT NULL CHECK (listing_type IN ('showroom', 'used')),
      fuel_type TEXT NOT NULL,
      transmission TEXT NOT NULL,
      mileage_km INTEGER DEFAULT 0,
      price_or_monthly_rate REAL NOT NULL,
      currency TEXT NOT NULL DEFAULT 'SAR',
      country_availability TEXT NOT NULL,
      is_featured INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'reserved', 'leased', 'sold')),
      image_url TEXT DEFAULT '',
      description TEXT NOT NULL,
      safety_telematics_specs TEXT NOT NULL DEFAULT '[]',
      trims TEXT NOT NULL DEFAULT '[]',
      specs_json TEXT NOT NULL DEFAULT '{}',
      colors TEXT NOT NULL DEFAULT '[]',
      sub_type TEXT NOT NULL DEFAULT '',
      service_type TEXT NOT NULL DEFAULT 'leasing',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS offers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      title_ar TEXT NOT NULL DEFAULT '',
      slug TEXT NOT NULL UNIQUE,
      subtitle TEXT NOT NULL,
      subtitle_ar TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL,
      monthly_rate_from REAL,
      currency TEXT NOT NULL DEFAULT 'SAR',
      countries TEXT NOT NULL,
      valid_until TEXT NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 1,
      highlights TEXT NOT NULL DEFAULT '[]',
      description TEXT NOT NULL,
      description_ar TEXT NOT NULL DEFAULT '',
      image_url TEXT DEFAULT '',
      vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE SET NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      title_ar TEXT NOT NULL DEFAULT '',
      slug TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL,
      author TEXT NOT NULL,
      author_ar TEXT NOT NULL DEFAULT '',
      read_time_minutes INTEGER NOT NULL DEFAULT 4,
      excerpt TEXT NOT NULL,
      excerpt_ar TEXT NOT NULL DEFAULT '',
      body TEXT NOT NULL,
      body_ar TEXT NOT NULL DEFAULT '',
      image_url TEXT DEFAULT '',
      published_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS quotation_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      reference_code TEXT NOT NULL UNIQUE,
      full_name TEXT NOT NULL,
      company_name TEXT DEFAULT '',
      client_type TEXT NOT NULL CHECK (client_type IN ('corporate', 'individual')),
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      country TEXT NOT NULL CHECK (country IN ('Bahrain', 'Saudi Arabia', 'Oman')),
      city TEXT NOT NULL,
      vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE SET NULL,
      selected_trim TEXT DEFAULT '',
      offer_id INTEGER REFERENCES offers(id) ON DELETE SET NULL,
      fleet_quantity INTEGER NOT NULL DEFAULT 1,
      lease_term_months INTEGER NOT NULL DEFAULT 36,
      add_ons TEXT NOT NULL DEFAULT '{}',
      notes TEXT DEFAULT '',
      status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'quoted', 'approved', 'rejected', 'closed')),
      estimated_monthly_quote REAL,
      admin_notes TEXT DEFAULT '',
      routing_email TEXT NOT NULL DEFAULT 'sales@jadeergulf.com',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      company_name TEXT DEFAULT '',
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      country TEXT NOT NULL,
      department TEXT NOT NULL DEFAULT 'General Inquiries',
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived')),
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS site_content (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS client_reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT NOT NULL,
      employee TEXT NOT NULL,
      position TEXT NOT NULL DEFAULT '',
      date_of_service TEXT NOT NULL,
      vehicle_condition INTEGER NOT NULL DEFAULT 5,
      price_satisfaction INTEGER NOT NULL DEFAULT 4,
      staff_behavior INTEGER NOT NULL DEFAULT 5,
      pickup_process INTEGER NOT NULL DEFAULT 4,
      dropoff_process INTEGER NOT NULL DEFAULT 4,
      cleanliness INTEGER NOT NULL DEFAULT 4,
      value_for_money INTEGER NOT NULL DEFAULT 4,
      overall INTEGER NOT NULL DEFAULT 5,
      would_recommend INTEGER NOT NULL DEFAULT 1,
      comment TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS branches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      name_ar TEXT NOT NULL DEFAULT '',
      country TEXT NOT NULL,
      city TEXT NOT NULL,
      phone TEXT NOT NULL,
      is_hq INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS workshops (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      name_ar TEXT NOT NULL DEFAULT '',
      branch_name TEXT NOT NULL,
      city TEXT NOT NULL,
      country TEXT NOT NULL,
      phone TEXT NOT NULL,
      hours TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS about_gallery (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      title_ar TEXT NOT NULL DEFAULT '',
      caption TEXT NOT NULL DEFAULT '',
      caption_ar TEXT NOT NULL DEFAULT '',
      image_url TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  // Safe column upgrades for pre-existing SQLite databases
  ensureColumn('vehicles', 'trims', `TEXT NOT NULL DEFAULT '[]'`);
  ensureColumn('vehicles', 'specs_json', `TEXT NOT NULL DEFAULT '{}'`);
  ensureColumn('vehicles', 'colors', `TEXT NOT NULL DEFAULT '[]'`);
  ensureColumn('vehicles', 'sub_type', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('vehicles', 'service_type', `TEXT NOT NULL DEFAULT 'leasing'`);
  ensureColumn('vehicles', 'brand_slug', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('vehicles', 'model_slug', `TEXT NOT NULL DEFAULT ''`);

  ensureColumn('offers', 'title_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('offers', 'subtitle_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('offers', 'description_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('offers', 'vehicle_id', `INTEGER REFERENCES vehicles(id) ON DELETE SET NULL`);

  ensureColumn('articles', 'title_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('articles', 'author_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('articles', 'excerpt_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('articles', 'body_ar', `TEXT NOT NULL DEFAULT ''`);

  ensureColumn('quotation_requests', 'selected_trim', `TEXT DEFAULT ''`);

  ensureColumn('admin_users', 'role', `TEXT NOT NULL DEFAULT 'super_admin'`);
  ensureColumn('admin_users', 'privileges', `TEXT NOT NULL DEFAULT '["vehicles","quotations","website","admins"]'`);
  ensureColumn('admin_users', 'is_active', `INTEGER NOT NULL DEFAULT 1`);

  ensureColumn('branches', 'address', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('branches', 'hours', `TEXT NOT NULL DEFAULT 'Sun–Thu · 8:30 AM – 5:30 PM'`);
  ensureColumn('branches', 'map_x', `REAL NOT NULL DEFAULT 565`);
  ensureColumn('branches', 'map_y', `REAL NOT NULL DEFAULT 256`);
  ensureColumn('branches', 'focus', `TEXT NOT NULL DEFAULT ''`);

  ensureColumn('workshops', 'address', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('workshops', 'map_x', `REAL NOT NULL DEFAULT 554`);
  ensureColumn('workshops', 'map_y', `REAL NOT NULL DEFAULT 274`);

  applyRealDbMigrationIfNeeded();
  backfillVehicleSlugs();
  seedCmsDefaultsIfMissing();
}

function seedCmsDefaultsIfMissing(): void {
  const defaultSiteContent: Record<string, string> = {
    hero_image_url: '/assets/jadeer/land-cruiser-studio.jpg',
    hero_tagline_en: 'Drive Your Business Forward',
    hero_tagline_ar: 'انطلق بأعمالك نحو المستقبل',
    hero_headline_en: 'Transportation solutions that drive ',
    hero_headline_highlight_en: 'business success',
    hero_headline_suffix_en: ' and sustainability.',
    hero_headline_ar: 'حلول نقل مبتكرة تقود ',
    hero_headline_highlight_ar: 'نجاح أعمالك',
    hero_headline_suffix_ar: ' واستدامتها.',
    hero_subtitle_en:
      'Jadeer United delivers corporate operational leasing, Vision 2030 hybrid fleets, short- and long-term rentals, and certified vehicle sales — operating 3,000+ vehicles across Bahrain, Saudi Arabia, and Oman.',
    hero_subtitle_ar:
      'تقدم جدير المتحدة التأجير التشغيلي للشركات، وأساطيل المركبات الهجينة المتوافقة مع رؤية 2030، وتأجير وبيع السيارات الجديدة والمستعملة المعتمدة بأسطول يتجاوز 3,000 مركبة في البحرين والسعودية وعُمان.',
    hero_quote_en: 'Success is never owned, is leased and the rent is due Every day.',
    hero_card_eyebrow_en: 'Corporate Operational Leasing & Site-Ready Fleets',
    hero_card_eyebrow_ar: 'التأجير التشغيلي للشركات والأساطيل المجهزة للمشاريع',
    hero_card_caption_en:
      'Comprehensive GCC Insurance · GPS & Blue Key Control · USA-Standard Roll Cages',
    hero_card_caption_ar:
      'تأمين شامل لدول الخليج · تتبع GPS ومفتاح أزرق · أقفاص حماية بمعايير أمريكية',
    about_hq_image_url: '/assets/jadeer/jadeer-hq.jpg',
    about_vision_image_url: '/assets/jadeer/rav4-studio.jpg',
    about_strategic_title_en:
      'Advancing digital capabilities, regional expansion, and hybrid vehicle leasing.',
    about_strategic_title_ar:
      'تعزيز القدرات الرقمية والتوسع الإقليمي وتأجير المركبات الهجينة.',
    about_strategic_p1_en:
      'Our strategic plan focuses on enhancing digital fleet capabilities, expanding market penetration across Bahrain, Saudi Arabia, and Oman, and introducing sustainable transportation solutions such as hybrid vehicle leasing.',
    about_strategic_p2_en:
      'We are committed to continuous innovation to keep pace with evolving enterprise requirements and align directly with global standards alongside Bahrain, Saudi Arabia, and Oman Vision 2030 sustainability initiatives.',
    contact_sales_email: 'sales@jadeergulf.com',
    contact_support_email: 'Maisara@jadeergulf.com',
    contact_general_email: 'info@jadeergulf.com',
    contact_bahrain_phone: '+973 6666 6064',
    contact_ksa_phone: '+966 56 887 7769',
    contact_oman_phone: '+968 7745 9000',
    contact_ops_phone: '+966 54 316 8080',
    contact_workshop_phone: '+966 54 307 4915',
    contact_hours_en: 'Sun–Thu · 8:30 AM – 5:30 PM | Fri: Closed | Sat · 9:00 AM – 1:00 PM',
    contact_hours_short_en: 'Sun–Thu 8:30–5:30 · Sat 9–1',
    contact_hq_summary_en: 'Amwaj, Bahrain · King Faisal Road, Khobar · Muscat, Oman',
    contact_sales_lead: 'Hatem Sabry · GCC Sales Desk',
    contact_ops_lead: 'Tamer Ismaeil · Fleet Operations',
    contact_workshop_lead: 'Maisara · Support & 24/7 Mobile Crew',
    contact_hero_title_en: 'Every question deserves an answer.',
    contact_hero_subtitle_en:
      'Reach the right team directly across Bahrain, Saudi Arabia, and Oman. Available Sunday through Thursday, 8:30 AM – 5:30 PM & Saturday 9:00 AM – 1:00 PM.',
  };

  const insertIgnore = db.prepare(`INSERT OR IGNORE INTO site_content (key, value) VALUES (?, ?)`);
  for (const [k, v] of Object.entries(defaultSiteContent)) {
    insertIgnore.run(k, v);
  }

  // Seed About Us Gallery once if empty
  const galleryCount = (db.prepare(`SELECT COUNT(*) as c FROM about_gallery`).get() as { c: number }).c;
  if (galleryCount === 0) {
    const insertGallery = db.prepare(`
      INSERT INTO about_gallery (title, title_ar, caption, caption_ar, image_url, sort_order)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const initialGallery = [
      {
        title: 'Jadeer United Regional Headquarters',
        title_ar: 'المقر الإقليمي لجدير المتحدة',
        caption: 'Corporate operations command serving Bahrain, Saudi Arabia, and Oman since 2009.',
        caption_ar: 'مركز العمليات المؤسسية لخدمة البحرين والسعودية وعُمان منذ عام 2009.',
        image_url: '/assets/jadeer/jadeer-hq.jpg',
        sort_order: 1,
      },
      {
        title: 'Flagship Executive 4x4 Fleet',
        title_ar: 'أسطول الدفع الرباعي التنفيذي',
        caption: 'Toyota Land Cruiser & Nissan Patrol units configured for GCC executive and site transport.',
        caption_ar: 'مركبات لاندكروزر وباترول مجهزة للنقل التنفيذي ومواقع المشاريع الكبرى.',
        image_url: '/assets/jadeer/land-cruiser-studio.jpg',
        sort_order: 2,
      },
      {
        title: 'Vision 2030 Hybrid Mobility',
        title_ar: 'أساطيل الهجين المتوافقة مع رؤية 2030',
        caption: 'Low-emission hybrid SUVs and sedans accelerating corporate ESG fleet transitions.',
        caption_ar: 'سيارات هجينة منخفضة الانبعاثات تدعم التحول المستدام لأساطيل الشركات.',
        image_url: '/assets/jadeer/rav4-studio.jpg',
        sort_order: 3,
      },
      {
        title: 'Industrial & EPC Field Readiness',
        title_ar: 'جاهزية المواقع الصناعية والطاقة',
        caption: 'Site-ready pickup fleets equipped with GPS telematics, Blue Key, and USA-standard roll cages.',
        caption_ar: 'أساطيل بيك أب مجهزة بأنظمة التتبع والمفتاح الأزرق وأقفاص الحماية المعتمدة.',
        image_url: '/assets/jadeer/hilux-studio.jpg',
        sort_order: 4,
      },
      {
        title: 'Executive Sedan & Limousine Class',
        title_ar: 'فئة السيدان والليموزين التنفيذية',
        caption: 'Chauffeur-driven sedans and VIP corporate transfers across major GCC business hubs.',
        caption_ar: 'خدمات النقل التنفيذي والليموزين بسائقين محترفين في أبرز مراكز الأعمال.',
        image_url: '/assets/jadeer/camry-studio.jpg',
        sort_order: 5,
      },
      {
        title: 'Workforce & Shuttle Fleet Operations',
        title_ar: 'أساطيل نقل الكوادر والمشاريع',
        caption: 'Coaster and Hiace shuttle fleets supported by 700+ quick service facilities and 24/7 mobile crews.',
        caption_ar: 'حافلات نقل موثوقة مدعومة بأكثر من 700 مركز خدمة سريعة وصيانة متنقلة 24/7.',
        image_url: '/assets/jadeer/coaster-studio.jpg',
        sort_order: 6,
      },
    ];
    for (const item of initialGallery) {
      insertGallery.run(
        item.title,
        item.title_ar,
        item.caption,
        item.caption_ar,
        item.image_url,
        item.sort_order
      );
    }
  }

  // Backfill branch addresses, coordinates, hours, and focus when empty
  const cityMeta: Record<string, { address: string; hours: string; x: number; y: number; focus: string }> = {
    amwaj: {
      address: 'Amwaj Islands & Southern Governorate, Bahrain',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM · Sat 9:00 AM – 1:00 PM',
      x: 598,
      y: 248,
      focus: 'Regional Headquarters, Corporate Leasing & Executive Mobility',
    },
    khobar: {
      address: 'King Faisal Road, Al Khobar, Eastern Province',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
      x: 565,
      y: 256,
      focus: 'Saudi Arabia HQ, Energy Sector Fleets & Operational Hub',
    },
    muscat: {
      address: 'Al Ghubrah Commercial District, Muscat, Oman',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
      x: 816,
      y: 356,
      focus: 'Oman Operational Leasing, Hybrid Fleets & Project Mobilization',
    },
    riyadh: {
      address: 'King Fahd Corridor, Riyadh',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
      x: 472,
      y: 318,
      focus: 'Central Region Corporate Leasing & Vision 2030 Accounts',
    },
    jeddah: {
      address: 'Al Madinah Road, Jeddah — Western Region',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
      x: 266,
      y: 410,
      focus: 'Western Region Fleet Operations & Red Sea Logistics',
    },
    neom: {
      address: 'NEOM Project Logistics Corridor, Tabuk Region',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM · 24/7 Mobile Crew',
      x: 196,
      y: 174,
      focus: 'Mega-Project Mobilization & HSE-Compliant Site Fleets',
    },
    jizan: {
      address: 'Jizan Economic City & Coastal Fleet Hub',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
      x: 318,
      y: 495,
      focus: 'Southern Industrial & Maritime Fleet Support',
    },
    khafji: {
      address: 'Al Khafji Industrial Zone, Eastern Province',
      hours: 'Sun–Thu · 8:00 AM – 5:30 PM',
      x: 512,
      y: 158,
      focus: 'Northern Eastern Province Energy & EPC Fleet Support',
    },
    turaif: {
      address: 'Northern Borders Energy Logistics Park, Turaif',
      hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
      x: 298,
      y: 108,
      focus: 'Northern Borders Mining & Industrial Mobility',
    },
  };

  const branches = db
    .prepare(`SELECT id, city, country, address FROM branches`)
    .all() as Array<{ id: number; city: string; country: string; address: string }>;
  const updateBranch = db.prepare(
    `UPDATE branches SET address = ?, hours = ?, map_x = ?, map_y = ?, focus = ? WHERE id = ?`
  );
  for (const b of branches) {
    if (!b.address) {
      const key = b.city.toLowerCase().trim();
      const matched = cityMeta[key] || {
        address: `${b.city}, ${b.country}`,
        hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
        x: 472,
        y: 318,
        focus: 'Regional Fleet Operations & Customer Support',
      };
      updateBranch.run(matched.address, matched.hours, matched.x, matched.y, matched.focus, b.id);
    }
  }

  const workshops = db
    .prepare(`SELECT id, name, city, country, address FROM workshops`)
    .all() as Array<{ id: number; name: string; city: string; country: string; address: string }>;
  const updateWs = db.prepare(`UPDATE workshops SET address = ?, map_x = ?, map_y = ? WHERE id = ?`);
  for (const w of workshops) {
    if (!w.address) {
      const lower = `${w.name} ${w.city}`.toLowerCase();
      let x = 554;
      let y = 274;
      if (lower.includes('four lines')) {
        x = 540;
        y = 244;
      } else if (lower.includes('jubail')) {
        x = 542;
        y = 214;
      } else if (lower.includes('yanbu')) {
        x = 230;
        y = 326;
      } else if (lower.includes('tabuk')) {
        x = 248;
        y = 150;
      } else if (lower.includes('riyadh')) {
        x = 472;
        y = 328;
      } else if (lower.includes('jeddah')) {
        x = 276;
        y = 418;
      }
      updateWs.run(`${w.city} Fleet Maintenance & Quick Service Center, ${w.country}`, x, y, w.id);
    }
  }
}

const TARGET_SEED_VERSION = 'real_db_v2';

function applyRealDbMigrationIfNeeded(): void {
  const row = db.prepare(`SELECT value FROM meta WHERE key = 'db_import_version'`).get() as
    | { value: string }
    | undefined;

  if (row?.value === TARGET_SEED_VERSION) {
    return;
  }

  const tx = db.transaction(() => {
    // Refresh catalog, offers, articles, reviews, branches, workshops, site_content from curated real DB
    // Never touch admin_users or admin_sessions
    db.exec(`
      UPDATE quotation_requests SET vehicle_id = NULL, offer_id = NULL;
      DELETE FROM offers;
      DELETE FROM vehicles;
      DELETE FROM articles;
      DELETE FROM client_reviews;
      DELETE FROM branches;
      DELETE FROM workshops;
      DELETE FROM site_content;
      DELETE FROM quotation_requests;
      DELETE FROM contact_messages;
    `);

    const insertSite = db.prepare(`INSERT OR REPLACE INTO site_content (key, value) VALUES (?, ?)`);
    for (const [k, v] of Object.entries(REAL_SITE_CONTENT)) {
      insertSite.run(k, String(v));
    }

    const insertBranch = db.prepare(`
      INSERT INTO branches (name, name_ar, country, city, phone, is_hq)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    for (const b of REAL_BRANCHES) {
      insertBranch.run(b.name, b.name_ar, b.country, b.city, b.phone, b.is_hq);
    }

    const insertWorkshop = db.prepare(`
      INSERT INTO workshops (name, name_ar, branch_name, city, country, phone, hours)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    for (const w of REAL_WORKSHOPS) {
      insertWorkshop.run(w.name, w.name_ar, w.branch_name, w.city, w.country, w.phone, w.hours);
    }

    const insertVehicle = db.prepare(`
      INSERT INTO vehicles (
        make, model, year, category, listing_type, fuel_type, transmission,
        mileage_km, price_or_monthly_rate, currency, country_availability,
        is_featured, status, image_url, description, safety_telematics_specs,
        trims, specs_json, colors, sub_type, service_type
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const sourceIdToNewId = new Map<number, number>();
    for (const v of REAL_VEHICLES) {
      const res = insertVehicle.run(
        v.make,
        v.model,
        v.year,
        v.category,
        v.listing_type,
        v.fuel_type,
        v.transmission,
        v.mileage_km,
        v.price_or_monthly_rate,
        v.currency,
        JSON.stringify(v.country_availability),
        v.is_featured,
        v.status,
        v.image_url,
        v.description,
        JSON.stringify(v.safety_telematics_specs),
        JSON.stringify(v.trims),
        JSON.stringify(v.specs),
        JSON.stringify(v.colors),
        v.sub_type,
        v.service_type
      );
      sourceIdToNewId.set(v.source_id, Number(res.lastInsertRowid));
    }

    const insertOffer = db.prepare(`
      INSERT INTO offers (
        title, title_ar, slug, subtitle, subtitle_ar, category,
        monthly_rate_from, currency, countries, valid_until, is_active,
        highlights, description, description_ar, image_url, vehicle_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertedOfferIds: number[] = [];
    for (const o of REAL_OFFERS) {
      const linkedVehicleId = o.source_car_id ? sourceIdToNewId.get(o.source_car_id) ?? null : null;
      const res = insertOffer.run(
        o.title,
        o.title_ar,
        o.slug,
        o.subtitle,
        o.subtitle_ar,
        o.category,
        o.monthly_rate_from,
        o.currency,
        JSON.stringify(o.countries),
        o.valid_until,
        o.is_active,
        JSON.stringify(o.highlights),
        o.description,
        o.description_ar,
        o.image_url,
        linkedVehicleId
      );
      insertedOfferIds.push(Number(res.lastInsertRowid));
    }

    const insertArticle = db.prepare(`
      INSERT INTO articles (
        title, title_ar, slug, category, author, author_ar,
        read_time_minutes, excerpt, excerpt_ar, body, body_ar,
        image_url, published_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    for (const a of REAL_ARTICLES) {
      insertArticle.run(
        a.title,
        a.title_ar,
        a.slug,
        a.category,
        a.author,
        a.author_ar,
        a.read_time_minutes,
        a.excerpt,
        a.excerpt_ar,
        a.body,
        a.body_ar,
        a.image_url,
        a.published_at
      );
    }

    const insertReview = db.prepare(`
      INSERT INTO client_reviews (
        company, employee, position, date_of_service,
        vehicle_condition, price_satisfaction, staff_behavior,
        pickup_process, dropoff_process, cleanliness, value_for_money,
        overall, would_recommend, comment
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    for (const r of REAL_REVIEWS) {
      insertReview.run(
        r.company,
        r.employee,
        r.position,
        r.date_of_service,
        r.vehicle_condition,
        r.price_satisfaction,
        r.staff_behavior,
        r.pickup_process,
        r.dropoff_process,
        r.cleanliness,
        r.value_for_money,
        r.overall,
        r.would_recommend,
        r.comment
      );
    }

    // Seed sanitized corporate B2B quotations inspired by real organizations in the database
    const landCruiserId = sourceIdToNewId.get(5) ?? null;
    const patrolId = sourceIdToNewId.get(35) ?? null;
    const corollaHybridId = sourceIdToNewId.get(42) ?? null;
    const coasterId = sourceIdToNewId.get(20) ?? null;

    const insertQuote = db.prepare(`
      INSERT INTO quotation_requests (
        reference_code, full_name, company_name, client_type, email, phone,
        country, city, vehicle_id, selected_trim, offer_id, fleet_quantity, lease_term_months,
        add_ons, notes, status, estimated_monthly_quote, admin_notes, routing_email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const sanitizedQuotes = [
      [
        'JU-2026-2041',
        'Procurement Desk',
        'Velan Gulf Manufacturing Company',
        'corporate',
        'procurement@velangulf.example',
        '+966 55 000 4120',
        'Saudi Arabia',
        'Khobar / Dammam',
        patrolId,
        'LE T2',
        insertedOfferIds[3] ?? null,
        6,
        48,
        JSON.stringify({
          driver_service: false,
          limousine_service: false,
          replacement_vehicle: true,
          tracking_blue_key: true,
          usa_roll_bars_cages: false,
          hybrid_preference: false,
        }),
        '4-year operational lease contract inquiry for executive & field management vehicles in the Eastern Province.',
        'new',
        null,
        '48-month corporate lease proposal in preparation by Khobar branch.',
        'sales@jadeergulf.com',
      ],
      [
        'JU-2026-2042',
        'Fleet Operations Coordinator',
        'TotalEnergies — Amiral Project',
        'corporate',
        'fleet.amiral@totalenergies-project.example',
        '+966 54 000 8821',
        'Saudi Arabia',
        'Jubail',
        landCruiserId,
        'GXR-3',
        insertedOfferIds[0] ?? null,
        12,
        36,
        JSON.stringify({
          driver_service: false,
          limousine_service: false,
          replacement_vehicle: true,
          tracking_blue_key: true,
          usa_roll_bars_cages: true,
          hybrid_preference: false,
        }),
        'Amiral petrochemical project fleet mobilization requiring USA-standard roll cages, IVMS tracking, and 24/7 Jubail mobile support.',
        'in_review',
        74400,
        'HSE specifications verified with Jadeer United Khobar workshop.',
        'sales@jadeergulf.com',
      ],
      [
        'JU-2026-2043',
        'Corporate Mobility Manager',
        'Nesma United Industries LTD',
        'corporate',
        'mobility@nesma-united.example',
        '+966 56 000 3319',
        'Saudi Arabia',
        'Riyadh / NEOM',
        corollaHybridId,
        '1.8L XLI Executive Hybrid',
        insertedOfferIds[1] ?? null,
        15,
        36,
        JSON.stringify({
          driver_service: false,
          limousine_service: false,
          replacement_vehicle: true,
          tracking_blue_key: true,
          usa_roll_bars_cages: false,
          hybrid_preference: true,
        }),
        'Expanding Vision 2030 hybrid corporate pool across Riyadh and NEOM project offices with 45,000 km tire maintenance intervals.',
        'quoted',
        34500,
        'Formal SAR quotation delivered to lease unit supervisor.',
        'sales@jadeergulf.com',
      ],
      [
        'JU-2026-2044',
        'Transport Supervisor',
        'Gulf Educational Services',
        'corporate',
        'transport@gulfedu.example',
        '+973 3900 1422',
        'Bahrain',
        'Amwaj / Manama',
        coasterId,
        '23-Seater Diesel STD',
        insertedOfferIds[4] ?? null,
        4,
        36,
        JSON.stringify({
          driver_service: true,
          limousine_service: false,
          replacement_vehicle: true,
          tracking_blue_key: true,
          usa_roll_bars_cages: false,
          hybrid_preference: false,
        }),
        'Requesting safe, high-reliability 23-seater shuttle buses with dedicated vetted drivers and GPS speed monitoring.',
        'approved',
        26800,
        'Approved by Amwaj HQ fleet desk; units scheduled for handover.',
        'sales@jadeergulf.com',
      ],
    ];

    for (const q of sanitizedQuotes) {
      insertQuote.run(...q);
    }

    // Seed sanitized corporate contact messages (zero spam)
    const insertMsg = db.prepare(`
      INSERT INTO contact_messages (
        full_name, company_name, email, phone, country, department, subject, message, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertMsg.run(
      'Amiral Project Fleet Desk',
      'TotalEnergies Amiral Project',
      'fleet.amiral@totalenergies-project.example',
      '+966 54 000 8821',
      'Saudi Arabia',
      'Sales Team',
      'Long-Term Fleet Leasing Proposal — Jubail',
      'We are coordinating new project vehicles for the Amiral Project in Jubail and would like to arrange a commercial review of Jadeer United operational leasing packages.',
      'unread'
    );
    insertMsg.run(
      'Regional Telematics Partnerships',
      'Teltonika Telematics GCC',
      'partnerships@teltonika-gcc.example',
      '+973 1700 4410',
      'Bahrain',
      'General Inquiries',
      'Next-Generation Fleet GPS & Blue Key Hardware Integration',
      'Following up on fleet telematics and driver ID solutions for Jadeer United operational leasing vehicles across Saudi Arabia, Bahrain, and Oman.',
      'read'
    );

    db.prepare(`INSERT OR REPLACE INTO meta (key, value) VALUES ('db_import_version', ?)`).run(
      TARGET_SEED_VERSION
    );
  });

  tx();
}
