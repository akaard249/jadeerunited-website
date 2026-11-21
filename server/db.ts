import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const dataDir = path.resolve(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'jadeer_united.sqlite');
export const db = new Database(dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

export function initializeDatabase(): void {
  db.exec(`
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
      currency TEXT NOT NULL DEFAULT 'BHD',
      country_availability TEXT NOT NULL,
      is_featured INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'reserved', 'leased', 'sold')),
      image_url TEXT DEFAULT '',
      description TEXT NOT NULL,
      safety_telematics_specs TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS offers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      subtitle TEXT NOT NULL,
      category TEXT NOT NULL,
      monthly_rate_from REAL,
      currency TEXT NOT NULL DEFAULT 'BHD',
      countries TEXT NOT NULL,
      valid_until TEXT NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 1,
      highlights TEXT NOT NULL DEFAULT '[]',
      description TEXT NOT NULL,
      image_url TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL,
      author TEXT NOT NULL,
      read_time_minutes INTEGER NOT NULL DEFAULT 4,
      excerpt TEXT NOT NULL,
      body TEXT NOT NULL,
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
  `);

  seedInitialData();
}

function seedInitialData(): void {
  const vehicleCount = (db.prepare('SELECT COUNT(*) as count FROM vehicles').get() as { count: number }).count;
  if (vehicleCount === 0) {
    const insertVehicle = db.prepare(`
      INSERT INTO vehicles (
        make, model, year, category, listing_type, fuel_type, transmission,
        mileage_km, price_or_monthly_rate, currency, country_availability,
        is_featured, status, image_url, description, safety_telematics_specs
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const seedVehicles = [
      // Showroom (New / Operational Leasing)
      [
        'Toyota',
        'Land Cruiser 300 VX-R',
        2026,
        'SUV',
        'showroom',
        'Petrol',
        'Automatic',
        0,
        695,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        1,
        'available',
        '/assets/jadeer/land-cruiser-vxr.jpg',
        'Flagship corporate 4x4 engineered for GCC executive transport and remote energy-sector site operations. Available with full manufacturer-schedule maintenance, 700+ quick service facilities, and cross-border comprehensive insurance across Bahrain, Saudi Arabia, and Oman.',
        JSON.stringify([
          'GPS Vehicle Tracking & Fleet Telematics',
          'Blue Key Driver Access Control',
          'USA-Standard Roll Bar & Roll Cage Ready',
          'GCC Comprehensive Insurance (BHR / KSA / OMN)',
          '24/7 Mobile Service & Replacement Vehicle Guarantee',
        ]),
      ],
      [
        'Toyota',
        'Land Cruiser GR Sport',
        2026,
        'SUV',
        'showroom',
        'Twin-Turbo V6',
        'Automatic',
        0,
        745,
        'BHD',
        JSON.stringify(['Saudi Arabia', 'Oman', 'Bahrain']),
        1,
        'available',
        '/assets/jadeer/land-cruiser-gr.jpg',
        'Heavy-duty desert and project-site SUV tailored for EPC contractors operating in NEOM, Jubail, Tabuk, and Ras al Khair. Factory E-KDSS suspension paired with Jadeer United HSE safety outfitting.',
        JSON.stringify([
          'USA-Standard Certified Internal Roll Cage',
          'GPS Tracking & Geofenced Site Telemetry',
          'Blue Key Authorized Driver Immobilizer',
          'Desert Recovery & Dual-Battery Site Package',
          '24/7 GCC Mobile Support Crew',
        ]),
      ],
      [
        'Toyota',
        'Corolla 1.8 Hybrid Executive',
        2026,
        'Hybrid',
        'showroom',
        'Hybrid',
        'CVT Automatic',
        0,
        215,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        1,
        'available',
        '/assets/jadeer/corolla-jadeer.jpg',
        'Core corporate fleet sedan built for Bahrain, Saudi Arabia, and Oman Vision 2030 sustainability mandates. Reduces fleet fuel consumption by up to 42% while maintaining zero downtime via door-to-door servicing.',
        JSON.stringify([
          'Vision 2030 Low-Emission Hybrid Powertrain',
          'GPS Fleet Tracking & Eco-Driving Telemetry',
          'Blue Key Access Control System',
          'Manufacturer-Schedule Maintenance & Spare Parts',
          'Door-to-Door Service & Replacement Vehicle',
        ]),
      ],
      [
        'Toyota',
        'Corolla Cross Hybrid',
        2026,
        'Hybrid',
        'showroom',
        'Hybrid',
        'CVT Automatic',
        0,
        285,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        1,
        'available',
        '/assets/jadeer/corolla-cross-hybrid.jpg',
        'Versatile compact hybrid crossover suited for regional sales teams, engineers, and urban corporate mobility. Combines elevated ground clearance with Vision 2030 emissions alignment.',
        JSON.stringify([
          'Self-Charging Hybrid Electric Drivetrain',
          'GPS Tracking & Usage Management',
          'Blue Key Driver Identification',
          '700+ B2B Quick Service Facilities Access',
          'Comprehensive GCC Insurance Coverage',
        ]),
      ],
      [
        'Toyota',
        'Camry 2.5 Hybrid GLE',
        2026,
        'Sedan',
        'showroom',
        'Hybrid',
        'CVT Automatic',
        0,
        340,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        0,
        'available',
        '/assets/jadeer/corolla-jadeer.jpg',
        'Executive corporate and VIP limousine sedan delivering silent cabin refinement, rear passenger comfort, and hybrid efficiency for senior management and diplomatic delegations.',
        JSON.stringify([
          'Dedicated Chauffeur / Limousine Configuration Available',
          'GPS Tracking & Real-Time Dispatch',
          'Manufacturer-Schedule Preventive Maintenance',
          'Immediate Accident/Breakdown Replacement',
        ]),
      ],
      [
        'Toyota',
        'Hilux 4x4 Double Cab Fleet Spec',
        2026,
        'Fleet',
        'showroom',
        'Diesel',
        'Automatic',
        0,
        365,
        'BHD',
        JSON.stringify(['Saudi Arabia', 'Oman', 'Bahrain']),
        0,
        'available',
        '/assets/jadeer/land-cruiser-gr.jpg',
        'Industrial workhorse engineered for oil, gas, petrochemical, and mega-project contractors across Khobar, Jubail, Yanbu, Jizan, and Muscat. Fully configurable to Aramco and SABIC site safety requirements.',
        JSON.stringify([
          'USA-Standard Roll Bar & External Protection Cage',
          'IVMS / GPS Vehicle Tracking & Speed Limiter',
          'Blue Key Shift-Handover Access Control',
          'High-Visibility Site Safety Beacon & Fire Kit',
        ]),
      ],

      // Certified Used Cars
      [
        'Toyota',
        'Land Cruiser GXR 3.5TT',
        2023,
        'SUV',
        'used',
        'Petrol',
        'Automatic',
        42800,
        24900,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia']),
        1,
        'available',
        '/assets/jadeer/land-cruiser-vxr.jpg',
        'Single-owner Jadeer United ex-corporate executive fleet vehicle. Complete manufacturer-schedule service ledger from day one, accident-free chassis, and full 120-point mechanical inspection.',
        JSON.stringify([
          'Full Manufacturer Maintenance History',
          '120-Point Jadeer Motors Technical Certification',
          'GPS Tracking Pre-Wired',
          'GCC Specifications with Verified Mileage',
        ]),
      ],
      [
        'Toyota',
        'Corolla 1.8 Hybrid XLI',
        2024,
        'Hybrid',
        'used',
        'Hybrid',
        'CVT Automatic',
        31500,
        7650,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        1,
        'available',
        '/assets/jadeer/corolla-jadeer.jpg',
        'Curated low-mileage hybrid sedan from Jadeer United corporate lease return. Serviced exclusively on manufacturer schedule with original parts and verified battery health.',
        JSON.stringify([
          'Certified Hybrid Battery Health Report (98%)',
          'Complete Authorized Service Record',
          'GCC Spec Dual-Zone Climate Control',
          'Immediate Cross-Border Export Documentation',
        ]),
      ],
      [
        'Toyota',
        'Corolla Cross 1.8 Hybrid GLI',
        2023,
        'Hybrid',
        'used',
        'Hybrid',
        'CVT Automatic',
        38200,
        8950,
        'BHD',
        JSON.stringify(['Bahrain', 'Oman']),
        1,
        'available',
        '/assets/jadeer/corolla-cross-hybrid.jpg',
        'Well-maintained corporate crossover featuring hybrid efficiency, rear camera, and complete Jadeer United maintenance documentation.',
        JSON.stringify([
          'Manufacturer-Schedule Spare Parts Ledger',
          'Clean GCC Inspection Certificate',
          'Bluetooth & Fleet Telemetry Compatible',
        ]),
      ],
      [
        'Toyota',
        'Fortuner 4x4 VX',
        2023,
        'SUV',
        'used',
        'Petrol',
        'Automatic',
        51400,
        13400,
        'BHD',
        JSON.stringify(['Saudi Arabia', 'Oman', 'Bahrain']),
        0,
        'available',
        '/assets/jadeer/land-cruiser-gr.jpg',
        'Rugged 7-seater 4x4 maintained by our Khobar fleet engineering team. Ideal for both family travel and site supervision duties.',
        JSON.stringify([
          'Full B2B Partner Service History',
          '4WD Differential Lock & Heavy-Duty Suspension',
          'Available for Cash Sale or Corporate Buyback',
        ]),
      ],
    ];

    const tx = db.transaction(() => {
      for (const v of seedVehicles) {
        insertVehicle.run(...v);
      }
    });
    tx();
  }

  const offerCount = (db.prepare('SELECT COUNT(*) as count FROM offers').get() as { count: number }).count;
  if (offerCount === 0) {
    const insertOffer = db.prepare(`
      INSERT INTO offers (
        title, slug, subtitle, category, monthly_rate_from, currency,
        countries, valid_until, is_active, highlights, description, image_url
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const seedOffers = [
      [
        'Vision 2030 Hybrid Fleet Leasing Package',
        'vision-2030-hybrid-fleet-package',
        'Transition your corporate fleet to self-charging hybrid sedans and crossovers with zero capital expenditure.',
        'Operational Leasing',
        205,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        '2026-12-31',
        1,
        JSON.stringify([
          'Minimum 5-vehicle corporate deployment across GCC',
          'Includes GPS tracking, Blue Key access control & CO2 reporting',
          'Access to 700+ B2B quick service facilities & door-to-door servicing',
          'Immediate replacement vehicle guarantee in case of breakdown or accident',
        ]),
        'Designed for enterprises aligning with Bahrain, Saudi Arabia, and Oman Vision 2030 sustainability objectives. Fixed monthly operational lease covers comprehensive GCC insurance, scheduled manufacturer maintenance, tires, spare parts, and 24/7 mobile assistance.',
        '/assets/jadeer/corolla-cross-hybrid.jpg',
      ],
      [
        'Energy & EPC Site-Ready 4x4 Fleet Program',
        'epc-site-ready-4x4-fleet',
        'Heavy-duty Land Cruiser and Hilux fleets pre-equipped with USA-standard roll bars, roll cages, and IVMS.',
        'Industrial Fleet',
        355,
        'BHD',
        JSON.stringify(['Saudi Arabia', 'Oman', 'Bahrain']),
        '2026-12-31',
        1,
        JSON.stringify([
          'USA-standard certified internal roll cages & external roll bars',
          'GPS tracking and Blue Key shift-access control installed prior to handover',
          'Active field coverage in Khobar, Jubail, NEOM, Tabuk, Yanbu, Jizan & Muscat',
          '24/7 dedicated mobile service crew for remote project zones',
        ]),
        'Built specifically for petrochemical, energy, and mega-project contractors. Eliminate mobilization delays with pre-certified HSE vehicles delivered directly to your project gate.',
        '/assets/jadeer/land-cruiser-gr.jpg',
      ],
      [
        'Executive Limousine & Dedicated Chauffeur Retainer',
        'executive-limousine-chauffeur-retainer',
        'Monthly VIP corporate transportation and vetted professional driver services for board members and delegations.',
        'Limousine & Drivers',
        580,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        '2026-11-30',
        1,
        JSON.stringify([
          'Vetted, bilingual professional corporate drivers',
          'Cross-border Bahrain–Khobar causeway transit coordination',
          'Late-model executive sedans and Land Cruiser VX-R fleet',
          '24/7 priority dispatch and airport protocol support',
        ]),
        'Dependable executive mobility for visiting leadership, diplomatic guests, and corporate summits across Amwaj, Manama, Khobar, Riyadh, and Muscat.',
        '/assets/jadeer/land-cruiser-vxr.jpg',
      ],
      [
        'Certified Used Corporate Fleet Buy-Direct Program',
        'certified-used-fleet-buy-direct',
        'Acquire fully documented, manufacturer-maintained ex-lease vehicles directly from Jadeer United Motors.',
        'Used Car Sales',
        7650,
        'BHD',
        JSON.stringify(['Bahrain', 'Saudi Arabia', 'Oman']),
        '2026-12-15',
        1,
        JSON.stringify([
          'Complete manufacturer-schedule maintenance and spare parts records',
          'Zero-accident chassis verification and 120-point inspection',
          'Fleet volume pricing for SMEs acquiring 3+ vehicles',
          'Streamlined GCC registration and ownership transfer',
        ]),
        'Purchase directly from our curated ex-operational lease inventory with transparent mileage, authorized service history, and dedicated sales consultation.',
        '/assets/jadeer/corolla-jadeer.jpg',
      ],
    ];

    const tx = db.transaction(() => {
      for (const o of seedOffers) {
        insertOffer.run(...o);
      }
    });
    tx();
  }

  const articleCount = (db.prepare('SELECT COUNT(*) as count FROM articles').get() as { count: number }).count;
  if (articleCount === 0) {
    const insertArticle = db.prepare(`
      INSERT INTO articles (
        title, slug, category, author, read_time_minutes, excerpt, body, image_url, published_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const seedArticles = [
      [
        'Accelerating Vision 2030 with Hybrid Operational Leasing Across the GCC',
        'accelerating-vision-2030-hybrid-operational-leasing',
        'Sustainability',
        'Jadeer United Strategy Desk',
        5,
        'How enterprises in Bahrain, Saudi Arabia, and Oman are cutting fleet emissions and fuel expenditure without disrupting field operations.',
        `Organizations operating across Bahrain, Saudi Arabia, and Oman face dual pressures: expanding project footprints across industrial hubs while demonstrating measurable progress toward national Vision 2030 sustainability mandates.\n\nHybrid operational leasing bridges this gap immediately. Unlike full-electric deployments that still face charging infrastructure constraints along remote corridors between Khobar, Jubail, Tabuk, and NEOM, self-charging hybrid vehicles deliver immediate 35–45% fuel and tailpipe CO2 reductions with zero range anxiety.\n\nAt Jadeer United, every hybrid lease integrates real-time GPS telematics, Blue Key driver usage accountability, and manufacturer-schedule preventive maintenance across more than 700 quick service partner facilities. Finance leaders gain predictable fixed monthly opex, while HSE and ESG teams receive auditable fleet efficiency data.`,
        '/assets/jadeer/corolla-cross-hybrid.jpg',
        '2026-10-18',
      ],
      [
        'Why USA-Standard Roll Cages and Blue Key Control Matter for Industrial Fleets',
        'usa-standard-roll-cages-blue-key-industrial-fleets',
        'Safety & HSE',
        'Fleet Safety Engineering Team',
        6,
        'A technical look at rollover protection, driver access governance, and 24/7 mobile response for oil, gas, and mega-project contractors.',
        `When corporate vehicles operate across desert highways, coastal causeways, and active energy project corridors—from Ras al Khair and Khafji to Yanbu and Jizan—standard showroom specifications are not enough.\n\nJadeer United equips industrial 4x4 fleets with certified roll bars and internal roll cages built to USA safety standards. Beyond structural protection, every vehicle is fitted with GPS vehicle tracking and Blue Key access control.\n\nBlue Key authentication ensures that only authorized, safety-briefed personnel can start and operate assigned vehicles, linking trip logs, harsh braking metrics, and speed compliance directly to individual drivers. Combined with our 24/7 mobile service crews and guaranteed replacement vehicles, project directors achieve uncompromising HSE compliance without sacrificing mobilization uptime.`,
        '/assets/jadeer/land-cruiser-gr.jpg',
        '2026-09-24',
      ],
      [
        'Operational Leasing vs. Fleet Ownership: Calculating True 36-Month TCO in the Gulf',
        'operational-leasing-vs-fleet-ownership-gcc-tco',
        'Corporate Leasing',
        'Corporate Advisory Team',
        5,
        'Comparing capital allocation, depreciation exposure, comprehensive cross-border insurance, and maintenance downtime across a 3-year cycle.',
        `Many growing businesses initially purchase corporate vehicles outright, only to discover that acquisition cost represents less than half of total lifecycle expense. Unplanned repairs, cross-border insurance renewals between Bahrain, Saudi Arabia, and Oman, idle replacement costs during accidents, and resale depreciation quickly erode working capital.\n\nOperational leasing with Jadeer United consolidates vehicle acquisition, manufacturer-schedule maintenance, genuine spare parts, 700+ quick service facilities, door-to-door servicing, and replacement vehicle guarantees into a single predictable monthly operating expense.\n\nAs our founding ethos reminds us: "Success is never owned, is leased and the rent is due every day." By preserving balance-sheet capital for core business growth and delegating fleet uptime to a partner with 25+ years of management experience, enterprises scale faster and leaner.`,
        '/assets/jadeer/jadeer-hq.jpg',
        '2026-08-30',
      ],
      [
        'Cross-Border Fleet Logistics: Seamless Mobility from Amwaj to Khobar, Riyadh, and Muscat',
        'cross-border-fleet-logistics-bahrain-ksa-oman',
        'Regional Network',
        'GCC Operations Desk',
        4,
        'How Jadeer United coordinates regional insurance, branch support, and 24/7 mobile service crews across thirteen strategic Gulf hubs.',
        `Regional engineering consultancies and multinational energy providers rarely confine operations to a single border. Teams routinely travel between our Amwaj headquarters in Bahrain, our Eastern Province branch in Khobar, project offices in Riyadh and Jeddah, industrial zones in Jubail and Rabigh, and our branch operations in Muscat, Oman.\n\nJadeer United removes cross-border friction with unified comprehensive insurance coverage spanning Bahrain, Saudi Arabia, and Oman, supported by a network of over 700 B2B quick service facilities. Whether a vehicle needs scheduled servicing in Yanbu or emergency mobile support near Tabuk, a single point of contact keeps your workforce moving.`,
        '/assets/jadeer/land-cruiser-vxr.jpg',
        '2026-08-05',
      ],
    ];

    const tx = db.transaction(() => {
      for (const a of seedArticles) {
        insertArticle.run(...a);
      }
    });
    tx();
  }

  const quoteCount = (db.prepare('SELECT COUNT(*) as count FROM quotation_requests').get() as { count: number }).count;
  if (quoteCount === 0) {
    const insertQuote = db.prepare(`
      INSERT INTO quotation_requests (
        reference_code, full_name, company_name, client_type, email, phone,
        country, city, vehicle_id, offer_id, fleet_quantity, lease_term_months,
        add_ons, notes, status, estimated_monthly_quote, admin_notes, routing_email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const seedQuotes = [
      [
        'JU-2026-1041',
        'Tariq Al-Qahtani',
        'Nesma Industrial Infrastructure',
        'corporate',
        't.alqahtani@nesma-projects.example',
        '+966 55 412 8890',
        'Saudi Arabia',
        'Jubail',
        2,
        2,
        14,
        36,
        JSON.stringify({
          driver_service: false,
          limousine_service: false,
          replacement_vehicle: true,
          tracking_blue_key: true,
          usa_roll_bars_cages: true,
          hybrid_preference: false,
        }),
        'Required for Jubail & Ras al Khair petrochemical expansion phase. All units must include USA-standard internal roll cages and Blue Key shift tracking.',
        'new',
        null,
        'Priority EPC contractor inquiry. Prepare volume tier pricing.',
        'sales@jadeergulf.com',
      ],
      [
        'JU-2026-1042',
        'Nadia Al-Khalifa',
        'Gulf Sustainable Advisory W.L.L.',
        'corporate',
        'nadia.k@gulfsustainable.example',
        '+973 3944 1205',
        'Bahrain',
        'Manama / Amwaj',
        3,
        1,
        8,
        48,
        JSON.stringify({
          driver_service: false,
          limousine_service: false,
          replacement_vehicle: true,
          tracking_blue_key: true,
          usa_roll_bars_cages: false,
          hybrid_preference: true,
        }),
        'Transitioning consultant pool to Corolla Hybrid under our 2026 ESG target. Require Bahrain–KSA cross-border insurance.',
        'in_review',
        1640,
        'Confirmed cross-border causeway insurance coverage included.',
        'sales@jadeergulf.com',
      ],
      [
        'JU-2026-1043',
        'Salim Al-Harthy',
        'Oman Energy Services LLC',
        'corporate',
        's.alharthy@omanenergy.example',
        '+968 9214 5531',
        'Oman',
        'Muscat',
        1,
        3,
        4,
        24,
        JSON.stringify({
          driver_service: true,
          limousine_service: true,
          replacement_vehicle: true,
          tracking_blue_key: true,
          usa_roll_bars_cages: false,
          hybrid_preference: false,
        }),
        'Executive Land Cruiser VX-R units with dedicated bilingual drivers for visiting engineering directors.',
        'quoted',
        3120,
        'Proposal #Q-882 sent by Muscat branch manager on Nov 18.',
        'sales@jadeergulf.com',
      ],
      [
        'JU-2026-1044',
        'Faisal Al-Zahrani',
        '',
        'individual',
        'faisal.z@example.com',
        '+966 50 778 3319',
        'Saudi Arabia',
        'Khobar',
        7,
        4,
        1,
        12,
        JSON.stringify({
          driver_service: false,
          limousine_service: false,
          replacement_vehicle: false,
          tracking_blue_key: false,
          usa_roll_bars_cages: false,
          hybrid_preference: false,
        }),
        'Interested in viewing the certified 2023 Land Cruiser GXR at Khobar or Amwaj showroom this Saturday morning.',
        'approved',
        null,
        'Viewing appointment scheduled for Saturday 10:30 AM.',
        'sales@jadeergulf.com',
      ],
    ];

    const tx = db.transaction(() => {
      for (const q of seedQuotes) {
        insertQuote.run(...q);
      }
    });
    tx();
  }

  const msgCount = (db.prepare('SELECT COUNT(*) as count FROM contact_messages').get() as { count: number }).count;
  if (msgCount === 0) {
    db.prepare(`
      INSERT INTO contact_messages (
        full_name, company_name, email, phone, country, department, subject, message, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      'Hussain Al-Mansoor',
      'Worley Regional Procurement',
      'h.almansoor@worley-vendor.example',
      '+966 54 902 1140',
      'Saudi Arabia',
      'Customer Support',
      'B2B Quick Service Center Directory Update',
      'Could you share the updated list of quick service partner centers near Yanbu and Tabuk for our currently leased 22-vehicle fleet?',
      'unread'
    );
  }
}
