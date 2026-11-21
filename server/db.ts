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
  `);

  // Safe column upgrades for pre-existing SQLite databases
  ensureColumn('vehicles', 'trims', `TEXT NOT NULL DEFAULT '[]'`);
  ensureColumn('vehicles', 'specs_json', `TEXT NOT NULL DEFAULT '{}'`);
  ensureColumn('vehicles', 'colors', `TEXT NOT NULL DEFAULT '[]'`);
  ensureColumn('vehicles', 'sub_type', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('vehicles', 'service_type', `TEXT NOT NULL DEFAULT 'leasing'`);

  ensureColumn('offers', 'title_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('offers', 'subtitle_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('offers', 'description_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('offers', 'vehicle_id', `INTEGER REFERENCES vehicles(id) ON DELETE SET NULL`);

  ensureColumn('articles', 'title_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('articles', 'author_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('articles', 'excerpt_ar', `TEXT NOT NULL DEFAULT ''`);
  ensureColumn('articles', 'body_ar', `TEXT NOT NULL DEFAULT ''`);

  ensureColumn('quotation_requests', 'selected_trim', `TEXT DEFAULT ''`);

  applyRealDbMigrationIfNeeded();
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
