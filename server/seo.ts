import { db } from './db.ts';

interface VehicleRow {
  id: number;
  make: string;
  model: string;
  brand_slug: string;
  model_slug: string;
  year: number;
  category: string;
  listing_type: 'showroom' | 'used';
  fuel_type: string;
  transmission: string;
  mileage_km: number;
  price_or_monthly_rate: number;
  currency: string;
  country_availability: string;
  status: string;
  image_url: string;
  description: string;
  trims: string;
  specs_json: string;
  colors: string;
  updated_at: string;
}

interface ArticleRow {
  id: number;
  title: string;
  title_ar: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  body: string;
  image_url: string;
  published_at: string;
}

interface OfferRow {
  id: number;
  title: string;
  slug: string;
  category: string;
  monthly_rate_from: number | null;
  currency: string;
  valid_until: string;
  description: string;
  image_url: string;
}

interface BranchRow {
  name: string;
  country: string;
  city: string;
  phone: string;
  is_hq: number;
}

interface WorkshopRow {
  name: string;
  city: string;
  country: string;
  phone: string;
  hours: string;
}

interface ReviewSummary {
  count: number;
  avg: number;
}

function parseJsonSafe<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function escapeHtml(str: string): string {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeXml(str: string): string {
  return escapeHtml(str);
}

function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export function getVehicleCanonicalPath(v: Pick<VehicleRow, 'listing_type' | 'brand_slug' | 'model_slug'>): string {
  const section = v.listing_type === 'showroom' ? 'showroom' : 'used-cars';
  return `/${section}/${v.brand_slug}/${v.model_slug}`;
}

function getReviewSummary(): ReviewSummary {
  const row = db
    .prepare(`SELECT COUNT(*) AS count, AVG(overall) AS avg FROM client_reviews`)
    .get() as { count: number; avg: number | null } | undefined;
  return {
    count: row?.count || 0,
    avg: row?.avg ? Number(row.avg.toFixed(2)) : 4.5,
  };
}

function getOrganizationSchema(origin: string): Record<string, unknown> {
  const reviews = getReviewSummary();
  const org: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'AutoRental', 'AutoDealer'],
    '@id': `${origin}/#organization`,
    name: 'Jadeer United',
    alternateName: ['Jadeer United Leasing', 'Jadeer United Motors', 'جدير المتحدة'],
    url: origin,
    logo: `${origin}/assets/jadeer/jadeer-hq.jpg`,
    image: `${origin}/assets/jadeer/land-cruiser-studio.jpg`,
    foundingDate: '2009',
    description:
      'Founded in 2009 with 25+ years of management experience, Jadeer United provides B2B operational leasing, Vision 2030 hybrid fleets, corporate rentals, certified used cars, limousine services, and 24/7 mobile fleet support across Bahrain, Saudi Arabia, and Oman.',
    slogan: 'Transportation Solutions That Drive Business Success and Sustainability',
    email: 'info@jadeergulf.com',
    telephone: '+97366666064',
    areaServed: [
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Oman' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Amwaj Islands',
      addressLocality: 'Amwaj',
      addressCountry: 'BH',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+973-6666-6064',
        email: 'info@jadeergulf.com',
        contactType: 'headquarters',
        areaServed: 'BH',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+966-56-887-7769',
        email: 'sales@jadeergulf.com',
        contactType: 'sales',
        areaServed: 'SA',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+968-7745-9000',
        email: 'Maisara@jadeergulf.com',
        contactType: 'customer support',
        areaServed: 'OM',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:30',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    knowsAbout: [
      'Corporate Operational Leasing',
      'Commercial Fleet Management',
      'Hybrid & Vision 2030 Sustainable Fleets',
      'Certified Pre-Owned Vehicle Sales',
      'GPS Telematics & Blue Key Access Control',
      'USA-Standard Roll Bars & Roll Cages for Oil & Gas Fleets',
      'Cross-Border GCC Fleet Insurance (Saudi Arabia, Bahrain, Oman)',
    ],
  };

  if (reviews.count > 0) {
    org.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: reviews.avg,
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviews.count,
    };
  }
  return org;
}

function getFaqSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in Jadeer United corporate operational leasing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Jadeer United operational leases include manufacturer-schedule maintenance and genuine spare parts, access to 700+ B2B quick service facilities across Saudi Arabia, Bahrain, and Oman, comprehensive GCC insurance, accident and breakdown replacement vehicles, door-to-door servicing, and 24/7 mobile crew support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which countries and cities does Jadeer United cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Jadeer United operates across Bahrain (Amwaj HQ), Saudi Arabia (Khobar HQ, Riyadh, Jeddah/Western Region, Jubail, NEOM, Tabuk, Turaif, Khafji, Ras al Khair, Yanbu, Rabigh, and Jizan), and Oman (Muscat branch).',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Jadeer United offer hybrid vehicles and Vision 2030 sustainable fleets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Jadeer United provides Toyota Camry Hybrid, Corolla Hybrid, Corolla Cross Hybrid, RAV4 Hybrid, Highlander Hybrid, and Innova Hybrid fleets aligned with Bahrain, Saudi Arabia, and Oman Vision 2030 ESG targets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Jadeer United equip fleet vehicles for oil, gas, and EPC project HSE compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Vehicles can be outfitted with GPS fleet tracking, Blue Key authorized driver access control, and USA-standard roll bars and internal roll cages tailored for energy, mining, and mega-project contractors.',
        },
      },
    ],
  };
}

export function buildRobotsTxt(origin: string): string {
  return [
    '# Jadeer United — Search Engine & AI Crawler Policy',
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /admin/',
    'Disallow: /api/admin',
    'Disallow: /api/admin/',
    '',
    '# Explicitly welcome AI Search & Answer Engines on public catalog & articles',
    'User-agent: GPTBot',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /api/admin',
    '',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /api/admin',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /api/admin',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /api/admin',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /api/admin',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /api/admin',
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    `# Machine-readable AI overview: ${origin}/llms.txt`,
  ].join('\n');
}

export function buildSitemapXml(origin: string): string {
  const today = new Date().toISOString().slice(0, 10);
  const vehicles = db
    .prepare(
      `SELECT id, make, model, brand_slug, model_slug, year, listing_type, image_url, updated_at
       FROM vehicles ORDER BY listing_type ASC, is_featured DESC, id ASC`
    )
    .all() as VehicleRow[];

  const articles = db
    .prepare(`SELECT slug, title, image_url, published_at FROM articles ORDER BY published_at DESC`)
    .all() as ArticleRow[];

  const urls: string[] = [];

  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/showroom', priority: '0.95', changefreq: 'daily' },
    { path: '/used-cars', priority: '0.90', changefreq: 'daily' },
    { path: '/offers', priority: '0.85', changefreq: 'weekly' },
    { path: '/articles', priority: '0.80', changefreq: 'weekly' },
    { path: '/about', priority: '0.75', changefreq: 'monthly' },
    { path: '/quotation', priority: '0.85', changefreq: 'monthly' },
    { path: '/contact', priority: '0.75', changefreq: 'monthly' },
  ];

  for (const page of staticPages) {
    urls.push(
      `  <url>\n    <loc>${escapeXml(origin + page.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`
    );
  }

  // Unique brand collection landing pages per section (/showroom/:brand, /used-cars/:brand)
  const brandPages = new Set<string>();
  for (const v of vehicles) {
    const section = v.listing_type === 'showroom' ? 'showroom' : 'used-cars';
    brandPages.add(`/${section}/${v.brand_slug}`);
  }
  for (const bp of brandPages) {
    urls.push(
      `  <url>\n    <loc>${escapeXml(origin + bp)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.80</priority>\n  </url>`
    );
  }

  // Individual /section/brand/model vehicle detail URLs with image sitemap tags
  for (const v of vehicles) {
    const loc = origin + getVehicleCanonicalPath(v);
    const lastmod = (v.updated_at || today).slice(0, 10);
    const imageTag = v.image_url
      ? `\n    <image:image>\n      <image:loc>${escapeXml(origin + v.image_url)}</image:loc>\n      <image:title>${escapeXml(`${v.year} ${v.make} ${v.model} — Jadeer United`)}</image:title>\n    </image:image>`
      : '';
    urls.push(
      `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${v.listing_type === 'showroom' ? '0.85' : '0.80'}</priority>${imageTag}\n  </url>`
    );
  }

  // Articles
  for (const a of articles) {
    const loc = `${origin}/articles/${a.slug}`;
    const lastmod = (a.published_at || today).slice(0, 10);
    const imageTag = a.image_url
      ? `\n    <image:image>\n      <image:loc>${escapeXml(origin + a.image_url)}</image:loc>\n      <image:title>${escapeXml(a.title)}</image:title>\n    </image:image>`
      : '';
    urls.push(
      `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.70</priority>${imageTag}\n  </url>`
    );
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urls,
    '</urlset>',
  ].join('\n');
}

export function buildLlmsTxt(origin: string, full = false): string {
  const vehicles = db
    .prepare(`SELECT * FROM vehicles ORDER BY listing_type ASC, is_featured DESC, make ASC, model ASC`)
    .all() as VehicleRow[];
  const offers = db
    .prepare(`SELECT * FROM offers WHERE is_active = 1 ORDER BY id ASC`)
    .all() as OfferRow[];
  const articles = db
    .prepare(`SELECT * FROM articles ORDER BY published_at DESC`)
    .all() as ArticleRow[];
  const branches = db.prepare(`SELECT * FROM branches ORDER BY id ASC`).all() as BranchRow[];
  const workshops = db.prepare(`SELECT * FROM workshops ORDER BY id ASC`).all() as WorkshopRow[];
  const reviewSummary = getReviewSummary();

  const showroom = vehicles.filter((v) => v.listing_type === 'showroom');
  const used = vehicles.filter((v) => v.listing_type === 'used');

  const lines: string[] = [
    '# Jadeer United (Jadeer United Leasing / Jadeer United Motors)',
    '',
    '> Transportation Solutions That Drive Business Success and Sustainability. Founded in 2009 with 25+ years of management experience, operating 3,000+ fleet vehicles across Bahrain, Saudi Arabia, and Oman.',
    '',
    '## Core Business & Value Proposition',
    '- **Services**: B2B Operational Leasing, Short- & Long-Term Car Rentals, New & Certified Used Car Sales, Executive Limousine Services, Dedicated Driver Services.',
    '- **Operational Inclusions**: Manufacturer-schedule maintenance & genuine spare parts, 700+ B2B quick service facilities, comprehensive cross-border GCC insurance (Bahrain, Saudi Arabia, Oman), accident & breakdown replacement vehicles, door-to-door servicing, and 24/7 mobile service crews.',
    '- **Safety & HSE Capabilities**: GPS vehicle tracking, Blue Key authorized driver access control, and USA-standard roll bars & internal roll cages for energy, EPC, and mega-project contractors.',
    '- **Sustainability**: Hybrid vehicle leasing (Camry Hybrid, Corolla Hybrid, Corolla Cross Hybrid, RAV4 Hybrid, Highlander Hybrid, Innova Hybrid) aligned with Bahrain, Saudi Arabia, and Oman Vision 2030.',
    '- **Trusted Enterprise Clients**: Saipem, TotalEnergies, NEOM, Worley, Nesma United Industries, Yokogawa, Naseem Energy Company, Pietro Fiorentini, Snamprogetti.',
    `- **Verified Corporate Client Rating**: ${reviewSummary.avg}/5 across ${reviewSummary.count} published B2B reviews.`,
    '',
    '## Contact & Regional Offices',
    '- **Bahrain Headquarters (Amwaj)**: +973 6666 6064',
    '- **Saudi Arabia HQ (Eastern Region — Khobar)**: +966 56 887 7769',
    '- **Oman Branch (Muscat)**: +968 7745 9000',
    '- **Emails**: Sales (`sales@jadeergulf.com`), Customer Support (`Maisara@jadeergulf.com`), General Inquiries (`info@jadeergulf.com`)',
    '- **Operating Hours**: Sunday–Thursday 8:30 AM – 5:30 PM | Saturday 9:00 AM – 1:00 PM | Friday Closed',
    `- **Branches**: ${branches.map((b) => `${b.name} (${b.country})`).join(', ')}`,
    `- **Workshops**: ${workshops.map((w) => `${w.name} (${w.city}, ${w.phone})`).join('; ')}`,
    '',
    '## Key Public Pages',
    `- [Home](${origin}/): Overview of Jadeer United leasing, featured showroom & used vehicles, offers, and GCC presence`,
    `- [Showroom Fleet](${origin}/showroom): ${showroom.length} new 2025–2026 corporate operational leasing models with trim configurations`,
    `- [Certified Used Cars](${origin}/used-cars): ${used.length} 120-point inspected pre-owned ex-corporate fleet vehicles`,
    `- [Active Offers](${origin}/offers): ${offers.length} current leasing and certified used car packages`,
    `- [Articles & Industry Briefings](${origin}/articles): ${articles.length} bilingual EN/AR news and GCC fleet insights`,
    `- [About Us](${origin}/about): Company story since 2009, Vision, Mission, and 8 core values`,
    `- [Request a Quotation](${origin}/quotation): Configure corporate fleet leases, trims, quantities, and HSE add-ons`,
    `- [Contact & GCC Locations](${origin}/contact): Interactive map of branches, workshops, and direct desks`,
    `- [XML Sitemap](${origin}/sitemap.xml)`,
    '',
    `## Showroom Leasing Catalog (${showroom.length} Models)`,
  ];

  for (const v of showroom) {
    const url = origin + getVehicleCanonicalPath(v);
    const trims = parseJsonSafe<Array<{ trim: string; price: number }>>(v.trims, []);
    const specs = parseJsonSafe<Record<string, string | null>>(v.specs_json, {});
    const trimSummary =
      full && trims.length > 0
        ? ` | Trims: ${trims.map((t) => `${t.trim} (${v.currency} ${t.price.toLocaleString()})`).join(', ')}`
        : trims.length > 0
          ? ` | ${trims.length} trims`
          : '';
    const specSummary = full
      ? [specs.engine_capacity, specs.horsepower, specs.fuel_consumption].filter(Boolean).join(', ')
      : '';
    lines.push(
      `- [${v.year} ${v.make} ${v.model}](${url}): ${v.category}, ${v.fuel_type}, ${v.transmission}, starting ${v.currency} ${v.price_or_monthly_rate.toLocaleString()}${trimSummary}${specSummary ? ` | Specs: ${specSummary}` : ''}`
    );
  }

  lines.push('', `## Certified Used Cars (${used.length} Vehicles)`);
  for (const v of used) {
    const url = origin + getVehicleCanonicalPath(v);
    lines.push(
      `- [${v.year} ${v.make} ${v.model}](${url}): ${v.category}, ${v.fuel_type}, ${v.mileage_km.toLocaleString()} km, ${v.currency} ${v.price_or_monthly_rate.toLocaleString()} (${v.status})`
    );
  }

  lines.push('', `## Active Fleet & Sales Offers (${offers.length})`);
  for (const o of offers) {
    const rate = o.monthly_rate_from ? ` from ${o.currency} ${o.monthly_rate_from.toLocaleString()}` : '';
    lines.push(`- **${o.title}** (${o.category}${rate}, valid until ${o.valid_until}): ${origin}/offers`);
  }

  lines.push('', `## Latest Articles & Briefings (${articles.length})`);
  for (const a of articles.slice(0, full ? articles.length : 10)) {
    lines.push(`- [${a.title}](${origin}/articles/${a.slug}) (${a.category}, ${a.published_at})`);
  }

  if (!full) {
    lines.push('', `For full trim-by-trim pricing and technical specs, see [${origin}/llms-full.txt](${origin}/llms-full.txt).`);
  }

  return lines.join('\n');
}

interface ResolvedSeoMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogType: 'website' | 'article' | 'product';
  image: string;
  robots: string;
  jsonLd: unknown[];
  noscriptHtml: string;
}

function resolveRouteSeo(reqPath: string, origin: string): ResolvedSeoMeta {
  const cleanPath = (reqPath.split('?')[0] || '/').replace(/\/+$/, '') || '/';
  const defaultImage = `${origin}/assets/jadeer/land-cruiser-studio.jpg`;

  // Admin portal must never be indexed by search engines or AI crawlers
  if (cleanPath === '/admin' || cleanPath.startsWith('/admin/')) {
    return {
      title: 'Jadeer United — Administration',
      description: 'Protected fleet administration workspace.',
      canonicalPath: '/admin',
      ogType: 'website',
      image: defaultImage,
      robots: 'noindex, nofollow, noarchive',
      jsonLd: [],
      noscriptHtml: '',
    };
  }

  const orgSchema = getOrganizationSchema(origin);

  // /showroom/:brand/:model or /used-cars/:brand/:model
  const vehicleSlugMatch = cleanPath.match(/^\/(showroom|used-cars)\/([^/]+)\/([^/]+)$/);
  if (vehicleSlugMatch) {
    const section = vehicleSlugMatch[1];
    const listingType = section === 'showroom' ? 'showroom' : 'used';
    const brandSlug = decodeURIComponent(vehicleSlugMatch[2]).toLowerCase();
    const modelSlug = decodeURIComponent(vehicleSlugMatch[3]).toLowerCase();

    const v = db
      .prepare(
        `SELECT * FROM vehicles WHERE listing_type = ? AND brand_slug = ? AND model_slug = ? LIMIT 1`
      )
      .get(listingType, brandSlug, modelSlug) as VehicleRow | undefined;

    if (v) {
      const canonicalPath = getVehicleCanonicalPath(v);
      const trims = parseJsonSafe<Array<{ trim: string; price: number }>>(v.trims, []);
      const specs = parseJsonSafe<Record<string, string | null>>(v.specs_json, {});
      const colors = parseJsonSafe<string[]>(v.colors, []);
      const prices = trims.map((t) => t.price).filter((p) => p > 0);
      const lowPrice = prices.length ? Math.min(...prices) : v.price_or_monthly_rate;
      const highPrice = prices.length ? Math.max(...prices) : v.price_or_monthly_rate;
      const sectionLabel = listingType === 'showroom' ? 'Showroom' : 'Used Cars';

      const title =
        listingType === 'showroom'
          ? `${v.year} ${v.make} ${v.model} Lease & Specs | Jadeer United`
          : `Used ${v.year} ${v.make} ${v.model} (${v.currency} ${v.price_or_monthly_rate.toLocaleString()}) | Jadeer United`;

      const description =
        listingType === 'showroom'
          ? `Lease the ${v.year} ${v.make} ${v.model} (${v.fuel_type}, ${v.transmission}) across Saudi Arabia, Bahrain & Oman from ${v.currency} ${lowPrice.toLocaleString()} with full maintenance & 24/7 support.`
          : `Certified pre-owned ${v.year} ${v.make} ${v.model} with ${v.mileage_km.toLocaleString()} km for ${v.currency} ${v.price_or_monthly_rate.toLocaleString()}. 120-point Jadeer Motors inspection & service history.`;

      const image = v.image_url ? `${origin}${v.image_url}` : defaultImage;
      const vehicleSchema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': ['Car', 'Product'],
        name: `${v.year} ${v.make} ${v.model}`,
        brand: { '@type': 'Brand', name: v.make },
        model: v.model,
        vehicleModelDate: String(v.year),
        bodyType: v.category,
        fuelType: v.fuel_type,
        vehicleTransmission: v.transmission,
        itemCondition:
          listingType === 'showroom'
            ? 'https://schema.org/NewCondition'
            : 'https://schema.org/UsedCondition',
        image,
        url: `${origin}${canonicalPath}`,
        description: v.description.slice(0, 320),
        color: colors.length ? colors : undefined,
        mileageFromOdometer:
          listingType === 'used'
            ? { '@type': 'QuantitativeValue', value: v.mileage_km, unitCode: 'KMT' }
            : undefined,
        offers:
          prices.length > 1
            ? {
                '@type': 'AggregateOffer',
                priceCurrency: v.currency,
                lowPrice,
                highPrice,
                offerCount: trims.length,
                availability:
                  v.status === 'available'
                    ? 'https://schema.org/InStock'
                    : 'https://schema.org/LimitedAvailability',
                url: `${origin}${canonicalPath}`,
              }
            : {
                '@type': 'Offer',
                priceCurrency: v.currency,
                price: lowPrice,
                availability:
                  v.status === 'available'
                    ? 'https://schema.org/InStock'
                    : 'https://schema.org/LimitedAvailability',
                url: `${origin}${canonicalPath}`,
              },
      };

      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: sectionLabel, item: `${origin}/${section}` },
          { '@type': 'ListItem', position: 3, name: v.make, item: `${origin}/${section}/${v.brand_slug}` },
          { '@type': 'ListItem', position: 4, name: `${v.year} ${v.make} ${v.model}`, item: `${origin}${canonicalPath}` },
        ],
      };

      const specList = Object.entries(specs)
        .filter(([, val]) => Boolean(val))
        .map(([k, val]) => `<li>${escapeHtml(k.replace(/_/g, ' '))}: ${escapeHtml(String(val))}</li>`)
        .join('');

      return {
        title,
        description: description.slice(0, 160),
        canonicalPath,
        ogType: 'product',
        image,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1',
        jsonLd: [orgSchema, vehicleSchema, breadcrumbSchema],
        noscriptHtml: `<main><h1>${escapeHtml(`${v.year} ${v.make} ${v.model}`)}</h1><p>${escapeHtml(v.description)}</p><p>Price: ${escapeHtml(v.currency)} ${v.price_or_monthly_rate.toLocaleString()}</p>${specList ? `<ul>${specList}</ul>` : ''}<a href="/quotation?vehicle=${v.id}">Request Quotation</a></main>`,
      };
    }
  }

  // /showroom/:brand or /used-cars/:brand (brand landing page)
  const brandMatch = cleanPath.match(/^\/(showroom|used-cars)\/([^/]+)$/);
  if (brandMatch && !/^\d+$/.test(brandMatch[2])) {
    const section = brandMatch[1];
    const listingType = section === 'showroom' ? 'showroom' : 'used';
    const brandSlug = decodeURIComponent(brandMatch[2]).toLowerCase();
    const vehicles = db
      .prepare(`SELECT * FROM vehicles WHERE listing_type = ? AND brand_slug = ? ORDER BY is_featured DESC, year DESC`)
      .all(listingType, brandSlug) as VehicleRow[];

    if (vehicles.length > 0) {
      const brandName = vehicles[0].make;
      const sectionLabel = listingType === 'showroom' ? 'Showroom' : 'Used Cars';
      const title = `${brandName} ${sectionLabel} Fleet | Jadeer United GCC`;
      const description = `Explore ${vehicles.length} ${brandName} ${listingType === 'showroom' ? 'operational leasing models' : 'certified used vehicles'} across Saudi Arabia, Bahrain, and Oman with full Jadeer United service.`;
      const itemList = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${origin}/${section}/${brandSlug}`,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: vehicles.length,
          itemListElement: vehicles.map((v, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `${v.year} ${v.make} ${v.model}`,
            url: `${origin}${getVehicleCanonicalPath(v)}`,
          })),
        },
      };
      const linksHtml = vehicles
        .map((v) => `<li><a href="${escapeHtml(getVehicleCanonicalPath(v))}">${escapeHtml(`${v.year} ${v.make} ${v.model}`)}</a></li>`)
        .join('');
      return {
        title,
        description: description.slice(0, 160),
        canonicalPath: `/${section}/${brandSlug}`,
        ogType: 'website',
        image: vehicles[0].image_url ? `${origin}${vehicles[0].image_url}` : defaultImage,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1',
        jsonLd: [orgSchema, itemList],
        noscriptHtml: `<main><h1>${escapeHtml(`${brandName} ${sectionLabel}`)}</h1><ul>${linksHtml}</ul></main>`,
      };
    }
  }

  // /articles/:slug
  const articleMatch = cleanPath.match(/^\/articles\/([^/]+)$/);
  if (articleMatch) {
    const slug = decodeURIComponent(articleMatch[1]);
    const a = db.prepare(`SELECT * FROM articles WHERE slug = ? LIMIT 1`).get(slug) as ArticleRow | undefined;
    if (a) {
      const image = a.image_url ? `${origin}${a.image_url}` : defaultImage;
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.title,
        description: a.excerpt,
        image,
        datePublished: a.published_at,
        author: { '@type': 'Person', name: a.author },
        publisher: {
          '@type': 'Organization',
          name: 'Jadeer United',
          logo: { '@type': 'ImageObject', url: `${origin}/assets/jadeer/jadeer-hq.jpg` },
        },
        mainEntityOfPage: `${origin}/articles/${a.slug}`,
      };
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Articles', item: `${origin}/articles` },
          { '@type': 'ListItem', position: 3, name: a.title, item: `${origin}/articles/${a.slug}` },
        ],
      };
      return {
        title: `${a.title.slice(0, 44)} | Jadeer United`,
        description: a.excerpt.slice(0, 160),
        canonicalPath: `/articles/${a.slug}`,
        ogType: 'article',
        image,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1',
        jsonLd: [orgSchema, articleSchema, breadcrumbSchema],
        noscriptHtml: `<article><h1>${escapeHtml(a.title)}</h1><p>${escapeHtml(a.excerpt)}</p></article>`,
      };
    }
  }

  // Static public pages
  if (cleanPath === '/showroom') {
    const showroom = db
      .prepare(`SELECT * FROM vehicles WHERE listing_type = 'showroom' ORDER BY is_featured DESC, id ASC`)
      .all() as VehicleRow[];
    return {
      title: 'Showroom Fleet — Corporate Leasing Models | Jadeer United',
      description:
        'Browse 34 new Toyota, Nissan, Hyundai, Chevrolet & GMC models for corporate operational leasing across Saudi Arabia, Bahrain & Oman with trim pricing.',
      canonicalPath: '/showroom',
      ogType: 'website',
      image: defaultImage,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      jsonLd: [
        orgSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Jadeer United Showroom Fleet',
          url: `${origin}/showroom`,
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: showroom.length,
            itemListElement: showroom.slice(0, 34).map((v, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: `${v.year} ${v.make} ${v.model}`,
              url: `${origin}${getVehicleCanonicalPath(v)}`,
            })),
          },
        },
      ],
      noscriptHtml: `<main><h1>Jadeer United Showroom Fleet</h1><ul>${showroom.map((v) => `<li><a href="${escapeHtml(getVehicleCanonicalPath(v))}">${escapeHtml(`${v.year} ${v.make} ${v.model}`)}</a></li>`).join('')}</ul></main>`,
    };
  }

  if (cleanPath === '/used-cars') {
    const used = db
      .prepare(`SELECT * FROM vehicles WHERE listing_type = 'used' ORDER BY is_featured DESC, year DESC`)
      .all() as VehicleRow[];
    return {
      title: 'Certified Used Cars — Ex-Fleet Sales | Jadeer United Motors',
      description:
        'Explore 120-point inspected certified pre-owned Toyota, Nissan, Hyundai & Mitsubishi vehicles with verified mileage and transparent SAR pricing.',
      canonicalPath: '/used-cars',
      ogType: 'website',
      image: `${origin}/assets/jadeer/prado-studio.jpg`,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      jsonLd: [
        orgSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Jadeer United Motors Certified Used Cars',
          url: `${origin}/used-cars`,
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: used.length,
            itemListElement: used.map((v, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: `${v.year} ${v.make} ${v.model}`,
              url: `${origin}${getVehicleCanonicalPath(v)}`,
            })),
          },
        },
      ],
      noscriptHtml: `<main><h1>Certified Used Cars — Jadeer United Motors</h1><ul>${used.map((v) => `<li><a href="${escapeHtml(getVehicleCanonicalPath(v))}">${escapeHtml(`${v.year} ${v.make} ${v.model}`)}</a></li>`).join('')}</ul></main>`,
    };
  }

  if (cleanPath === '/offers') {
    const offers = db.prepare(`SELECT * FROM offers WHERE is_active = 1 ORDER BY id ASC`).all() as OfferRow[];
    return {
      title: 'Corporate Leasing & Fleet Offers | Jadeer United GCC',
      description:
        'View active operational leasing packages, Vision 2030 hybrid fleet programs, and certified used car deals across Saudi Arabia, Bahrain & Oman.',
      canonicalPath: '/offers',
      ogType: 'website',
      image: `${origin}/assets/jadeer/camry-studio.jpg`,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      jsonLd: [
        orgSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: 'Jadeer United Active Leasing & Sales Offers',
          itemListElement: offers.map((o) => ({
            '@type': 'Offer',
            name: o.title,
            description: o.description,
            priceCurrency: o.currency,
            price: o.monthly_rate_from ?? undefined,
            priceValidUntil: o.valid_until,
          })),
        },
      ],
      noscriptHtml: `<main><h1>Active Leasing & Fleet Offers</h1><ul>${offers.map((o) => `<li>${escapeHtml(o.title)}</li>`).join('')}</ul></main>`,
    };
  }

  if (cleanPath === '/articles') {
    const articles = db.prepare(`SELECT * FROM articles ORDER BY published_at DESC`).all() as ArticleRow[];
    return {
      title: 'GCC Fleet Insights, EV & Vision 2030 Articles | Jadeer United',
      description:
        'Read industry briefings on corporate leasing, Vision 2030 hybrid & EV adoption, fleet safety testing, and new vehicle launches across the GCC.',
      canonicalPath: '/articles',
      ogType: 'website',
      image: `${origin}/assets/jadeer/jadeer-hq.jpg`,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      jsonLd: [orgSchema],
      noscriptHtml: `<main><h1>Articles & Industry Briefings</h1><ul>${articles.map((a) => `<li><a href="/articles/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`).join('')}</ul></main>`,
    };
  }

  if (cleanPath === '/about') {
    return {
      title: 'About Jadeer United — GCC Fleet Partner Since 2009',
      description:
        'Founded in 2009 with 25+ years of leadership experience and 3,000+ vehicles across Bahrain, Saudi Arabia & Oman. Vision, Mission, and 8 core values.',
      canonicalPath: '/about',
      ogType: 'website',
      image: `${origin}/assets/jadeer/jadeer-hq.jpg`,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      jsonLd: [orgSchema, getFaqSchema()],
      noscriptHtml:
        '<main><h1>About Jadeer United</h1><p>Founded in 2009, operating 3,000+ fleet vehicles across Bahrain, Saudi Arabia, and Oman.</p></main>',
    };
  }

  if (cleanPath === '/quotation') {
    return {
      title: 'Request a Fleet Lease Quotation | Jadeer United GCC',
      description:
        'Configure your corporate operational lease, vehicle trim, fleet quantity, GPS tracking, Blue Key access, and USA-standard roll cages across the GCC.',
      canonicalPath: '/quotation',
      ogType: 'website',
      image: defaultImage,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      jsonLd: [orgSchema, getFaqSchema()],
      noscriptHtml:
        '<main><h1>Request a Corporate Fleet Quotation</h1><p>Contact sales@jadeergulf.com for tailored operational leasing proposals across Bahrain, Saudi Arabia, and Oman.</p></main>',
    };
  }

  if (cleanPath === '/contact') {
    return {
      title: 'Contact Jadeer United — Bahrain, Saudi Arabia & Oman Branches',
      description:
        'Reach Jadeer United branches in Amwaj Bahrain (+973 6666 6064), Khobar KSA (+966 56 887 7769), Muscat Oman (+968 7745 9000), and Khobar workshops.',
      canonicalPath: '/contact',
      ogType: 'website',
      image: `${origin}/assets/jadeer/jadeer-hq.jpg`,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1',
      jsonLd: [orgSchema, getFaqSchema()],
      noscriptHtml:
        '<main><h1>Contact Jadeer United</h1><p>Bahrain HQ: +973 6666 6064 | KSA HQ (Khobar): +966 56 887 7769 | Oman (Muscat): +968 7745 9000</p></main>',
    };
  }

  // Home (/) and default fallback
  const featured = db
    .prepare(`SELECT * FROM vehicles WHERE listing_type = 'showroom' AND is_featured = 1 LIMIT 6`)
    .all() as VehicleRow[];

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    url: origin,
    name: 'Jadeer United',
    description: 'Corporate operational leasing, showroom fleet, and certified used cars across Bahrain, Saudi Arabia, and Oman.',
    publisher: { '@id': `${origin}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${origin}/showroom?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return {
    title: 'Jadeer United — Corporate Fleet Leasing & Showroom GCC',
    description:
      'Corporate operational leasing, Vision 2030 hybrid fleets, showroom vehicles & certified used cars across Bahrain, Saudi Arabia & Oman since 2009.',
    canonicalPath: '/',
    ogType: 'website',
    image: defaultImage,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: [orgSchema, websiteSchema, getFaqSchema()],
    noscriptHtml: `<main><h1>Jadeer United — Transportation Solutions That Drive Business Success and Sustainability</h1><p>Operational leasing, hybrid fleets, and certified used vehicles across Bahrain, Saudi Arabia, and Oman.</p><ul>${featured.map((v) => `<li><a href="${escapeHtml(getVehicleCanonicalPath(v))}">${escapeHtml(`${v.year} ${v.make} ${v.model}`)}</a></li>`).join('')}</ul></main>`,
  };
}

export function injectRouteSeoHtml(templateHtml: string, reqPath: string, origin: string): string {
  const meta = resolveRouteSeo(reqPath, origin);
  const canonicalUrl = `${origin}${meta.canonicalPath}`;

  const seoHeadBlock = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="${escapeHtml(meta.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeHtml(meta.ogType)}" />`,
    `<meta property="og:site_name" content="Jadeer United" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(meta.image)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:locale:alternate" content="ar_SA" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(meta.image)}" />`,
    ...meta.jsonLd.map(
      (schema, idx) =>
        `<script id="jadeer-jsonld-${idx}" type="application/ld+json">${safeJsonLd(schema)}</script>`
    ),
  ].join('\n    ');

  let out = templateHtml;
  if (out.includes('<!--SEO_HEAD_START-->') && out.includes('<!--SEO_HEAD_END-->')) {
    out = out.replace(
      /<!--SEO_HEAD_START-->[\s\S]*?<!--SEO_HEAD_END-->/,
      `<!--SEO_HEAD_START-->\n    ${seoHeadBlock}\n    <!--SEO_HEAD_END-->`
    );
  }
  if (out.includes('<!--SEO_NOSCRIPT-->') && meta.noscriptHtml) {
    out = out.replace('<!--SEO_NOSCRIPT-->', `<noscript>${meta.noscriptHtml}</noscript>`);
  }
  return out;
}
