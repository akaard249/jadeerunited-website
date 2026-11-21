import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { api } from '../lib/api';
import { BRAND } from '../data/brand';
import type { Article, Offer, Vehicle } from '../types';
import { VehicleCard } from '../components/VehicleCard';
import { VehicleImage } from '../components/BrandMark';

export function HomePage() {
  const [showroomFeatured, setShowroomFeatured] = useState<Vehicle[]>([]);
  const [usedFeatured, setUsedFeatured] = useState<Vehicle[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    api
      .getHome()
      .then((data) => {
        if (!active) return;
        setShowroomFeatured(data.showroomFeatured);
        setUsedFeatured(data.usedFeatured);
        setOffers(data.offers);
        setArticles(data.articles);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      {/* 1. Split Architectural Hero */}
      <section className="border-b border-[#E3E5E0] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <p className="text-sm font-medium text-[#7B6C53]">
                  Bahrain · Saudi Arabia · Oman — Since 2009
                </p>
                <h1
                  className="mt-4 font-display font-bold tracking-tight text-[#1B1F1A] leading-[1.1] text-balance"
                  style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.4rem)' }}
                >
                  Transportation solutions that drive business success and sustainability.
                </h1>
                <p className="mt-5 text-base text-[#4D544C] leading-relaxed max-w-xl">
                  Jadeer United delivers corporate operational leasing, Vision 2030 hybrid fleets,
                  short- and long-term rentals, and certified vehicle sales backed by 25+ years of
                  GCC fleet management expertise.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/quotation"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Request a Quotation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/showroom"
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#1B1F1A] bg-[#F8F8F6] hover:bg-[#ECEEE9] border border-[#D8DBD4] rounded-md transition-colors whitespace-nowrap shrink-0"
                  >
                    Showroom
                  </Link>
                  <Link
                    to="/used-cars"
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A] transition-colors whitespace-nowrap shrink-0"
                  >
                    Used Cars
                  </Link>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#ECEEE9]">
                <p className="text-sm text-[#5E6B5B] italic">
                  &ldquo;{BRAND.secondaryTagline}&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-lg overflow-hidden bg-[#282F27] min-h-[340px] lg:min-h-[460px]">
              <VehicleImage
                src="/assets/jadeer/land-cruiser-vxr.jpg"
                alt="Toyota Land Cruiser corporate fleet vehicle operating across GCC desert terrain"
                className="w-full h-full lg:h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <div className="text-xs text-[#DDD3C0]">Corporate Operational Leasing &amp; Site-Ready Fleets</div>
                <div className="mt-1 font-display text-base font-semibold">
                  Comprehensive GCC Insurance · GPS &amp; Blue Key Control · USA-Standard Roll Cages
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Operational Highlights Strip */}
      <section className="bg-[#F8F8F6] border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E3E5E0]">
            {[
              { value: '2009', label: 'Founded in Bahrain' },
              { value: '25+ Yrs', label: 'Management Experience' },
              { value: '700+', label: 'Quick Service Facilities' },
              { value: '24/7', label: 'GCC Mobile Service Crew' },
              { value: 'Vision 2030', label: 'Hybrid Fleet Focus' },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 first:pl-0">
                <div className="font-mono tabular-nums text-xl lg:text-2xl font-semibold text-[#1B1F1A]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[#5E6B5B]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Services & Fleet Operational Assurances */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <p className="text-sm font-medium text-[#7B6C53]">Core Mobility Divisions</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#1B1F1A] text-balance">
                Integrated fleet services built for GCC enterprise demands.
              </h2>
              <p className="text-sm text-[#4D544C] leading-relaxed">
                From long-term corporate operational leases to executive limousine retainers and
                certified vehicle sales, every division operates under unified quality and HSE governance.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A]"
                >
                  <span>Explore company vision and values</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#E3E5E0] border-t border-b border-[#E3E5E0]">
              {BRAND.coreServices.map((service) => (
                <div key={service.num} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <div className="sm:col-span-4 font-display text-base font-semibold text-[#1B1F1A]">
                    <span className="font-mono tabular-nums text-sm text-[#9A8A6E] mr-2.5">
                      {service.num}.
                    </span>
                    {service.title}
                  </div>
                  <p className="sm:col-span-8 text-sm text-[#4D544C] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Safety, Telematics, Insurance & 24/7 Support Band */}
      <section className="py-16 lg:py-20 bg-[#282F27] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#B5A486]">
                Operational &amp; HSE Standards
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance">
                Engineered for zero-downtime uptime and strict industrial safety.
              </h2>
            </div>
            <Link
              to="/quotation"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#DDD3C0] hover:text-white whitespace-nowrap shrink-0"
            >
              <span>Configure fleet safety specs</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {BRAND.operationalAssurances.map((item, idx) => (
              <div key={item.title} className="space-y-2">
                <div className="font-mono tabular-nums text-xs text-[#B5A486]">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-base font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#C8CBC4] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Showroom Vehicles */}
      <section className="py-16 lg:py-20 bg-[#F8F8F6] border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-medium text-[#7B6C53]">Showroom &amp; Operational Leasing</p>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-[#1B1F1A]">
                Featured Fleet Vehicles
              </h2>
            </div>
            <Link
              to="/showroom"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A] whitespace-nowrap shrink-0"
            >
              <span>Browse full showroom</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-80 bg-white border border-[#E3E5E0] rounded-lg animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {showroomFeatured.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. Featured Used Cars */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-medium text-[#7B6C53]">Jadeer United Motors</p>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-[#1B1F1A]">
                Curated Certified Used Cars
              </h2>
            </div>
            <Link
              to="/used-cars"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A] whitespace-nowrap shrink-0"
            >
              <span>View all used inventory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usedFeatured.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Active Offers & Latest Articles Split */}
      <section className="py-16 lg:py-20 bg-[#F8F8F6] border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Active Offers */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-medium text-[#7B6C53]">Corporate &amp; Seasonal Packages</p>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1B1F1A]">
                  Active Offers
                </h2>
              </div>
              <Link
                to="/offers"
                className="text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A] whitespace-nowrap shrink-0"
              >
                All offers
              </Link>
            </div>

            <div className="space-y-4">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white border border-[#E3E5E0] rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                >
                  <div className="space-y-1.5">
                    <div className="text-xs text-[#5E6B5B]">
                      {offer.category} · {offer.countries.join(' / ')} · Valid until {offer.valid_until}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#1B1F1A]">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-[#4D544C] leading-relaxed max-w-xl">
                      {offer.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2">
                    {offer.monthly_rate_from && (
                      <div className="font-mono tabular-nums text-base font-semibold text-[#1B1F1A]">
                        From {offer.currency} {offer.monthly_rate_from.toLocaleString()}
                      </div>
                    )}
                    <Link
                      to={`/quotation?offer=${offer.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A] whitespace-nowrap"
                    >
                      <span>Request quote</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Articles */}
          <div className="lg:col-span-5">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-medium text-[#7B6C53]">Industry Briefings</p>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1B1F1A]">
                  Latest Articles
                </h2>
              </div>
              <Link
                to="/articles"
                className="text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A] whitespace-nowrap shrink-0"
              >
                All articles
              </Link>
            </div>

            <div className="bg-white border border-[#E3E5E0] rounded-lg divide-y divide-[#ECEEE9]">
              {articles.map((article) => (
                <article key={article.id} className="p-5">
                  <div className="text-xs text-[#5E6B5B]">
                    {article.category} · {article.published_at} · {article.read_time_minutes} min read
                  </div>
                  <Link to={`/articles/${article.slug}`} className="block mt-1.5 group">
                    <h3 className="font-display text-base font-semibold text-[#1B1F1A] group-hover:text-[#3A4338] leading-snug">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="mt-1.5 text-sm text-[#4D544C] line-clamp-2">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Trusted Enterprise Clients & GCC Regional Network */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-16">
          {/* Trusted Clients */}
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#7B6C53]">Trusted Regional Partnerships</p>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-[#1B1F1A]">
                Serving leading energy, engineering, and infrastructure organizations.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-[#E3E5E0]">
              {BRAND.trustedClients.map((client) => (
                <div
                  key={client.name}
                  className="p-6 border-r border-b border-[#E3E5E0] bg-[#FAFBF9] flex flex-col justify-between min-h-[104px]"
                >
                  <div className="font-display text-lg font-bold tracking-tight text-[#282F27]">
                    {client.name}
                  </div>
                  <div className="mt-2 text-xs text-[#5E6B5B]">{client.sector}</div>
                </div>
              ))}
            </div>
          </div>

          {/* GCC Locations & Operational Coverage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#E3E5E0]">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm font-medium text-[#7B6C53]">GCC Operational Footprint</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#1B1F1A]">
                Regional offices &amp; 14-city field coverage.
              </h2>
              <p className="text-sm text-[#4D544C] leading-relaxed">
                Headquartered in Amwaj, Bahrain with branch hubs in Khobar, Saudi Arabia and Muscat,
                Oman — mobilizing vehicles and mobile service crews across major industrial zones.
              </p>
              <div className="pt-2 text-xs text-[#5E6B5B] leading-7">
                {BRAND.coverageCities.join(' · ')}
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A]"
                >
                  <span>View office hours and contact desks</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {BRAND.offices.map((office) => (
                <div
                  key={office.country}
                  className="border border-[#E3E5E0] rounded-lg p-5 bg-[#F8F8F6] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs text-[#7B6C53] font-medium">{office.role}</div>
                    <h3 className="mt-1 font-display text-lg font-semibold text-[#1B1F1A]">
                      {office.country}
                    </h3>
                    <div className="text-sm text-[#4D544C]">{office.city}</div>
                    <p className="mt-3 text-xs text-[#5E6B5B] leading-relaxed">{office.focus}</p>
                  </div>
                  <a
                    href={office.telHref}
                    className="mt-5 inline-flex items-center gap-1.5 font-mono tabular-nums text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A]"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
