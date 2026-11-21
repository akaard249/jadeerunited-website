import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { BRAND } from '../data/brand';
import { VehicleImage } from '../components/BrandMark';

export function AboutPage() {
  return (
    <div>
      {/* Header & Corporate Background */}
      <section className="bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-[#7B6C53]">About Jadeer United</p>
                <h1
                  className="mt-3 font-display font-bold tracking-tight text-[#1B1F1A] text-balance leading-[1.12]"
                  style={{ fontSize: 'clamp(2rem, 3.6vw, 3.1rem)' }}
                >
                  A premier GCC transportation partner since 2009.
                </h1>
                <p className="mt-5 text-base text-[#4D544C] leading-relaxed">
                  Founded in 2009, Jadeer United stands as a premier transportation solution
                  provider across Bahrain, Saudi Arabia, and Oman. We specialize in delivering
                  high-quality, sustainable, and innovative transportation services tailored to the
                  needs of both corporate enterprises and individual clients.
                </p>
                <p className="mt-4 text-base text-[#4D544C] leading-relaxed">
                  Our management team brings more than 25 years of industry experience, ensuring
                  operational excellence, fleet safety compliance, and dependable regional support
                  in every contract we manage.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E3E5E0] flex flex-wrap items-center gap-4">
                <Link
                  to="/quotation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md transition-colors whitespace-nowrap"
                >
                  <span>Request Fleet Quotation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={BRAND.profilePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#1B1F1A] bg-[#F8F8F6] hover:bg-[#ECEEE9] border border-[#D8DBD4] rounded-md transition-colors whitespace-nowrap"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Company Profile (PDF)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-lg overflow-hidden bg-[#282F27] min-h-[340px]">
              <VehicleImage
                src="/assets/jadeer/jadeer-hq.jpg"
                alt="Jadeer United Leasing corporate headquarters facade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#F8F8F6] border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E3E5E0] rounded-lg p-8">
            <p className="text-xs font-medium text-[#7B6C53]">Vision</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#1B1F1A]">
              Regional Mobility Leadership
            </h2>
            <p className="mt-4 text-base text-[#4D544C] leading-relaxed">
              &ldquo;{BRAND.vision}&rdquo;
            </p>
          </div>
          <div className="bg-white border border-[#E3E5E0] rounded-lg p-8">
            <p className="text-xs font-medium text-[#7B6C53]">Mission</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#1B1F1A]">
              Quality, Reliability &amp; Sustainability
            </h2>
            <p className="mt-4 text-base text-[#4D544C] leading-relaxed">
              &ldquo;{BRAND.mission}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* All 8 Core Values */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#7B6C53]">Our Guiding Principles</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1B1F1A]">
              Eight core values that govern every kilometer.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E3E5E0]">
            {BRAND.values.map((val) => (
              <div
                key={val.num}
                className="p-6 border-r border-b border-[#E3E5E0] bg-white space-y-2.5"
              >
                <div className="font-mono tabular-nums text-xs text-[#9A8A6E]">{val.num}</div>
                <h3 className="font-display text-base font-semibold text-[#1B1F1A]">
                  {val.title}
                </h3>
                <p className="text-sm text-[#4D544C] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus & Vision 2030 Sustainability */}
      <section className="py-16 lg:py-20 bg-[#282F27] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm font-medium text-[#B5A486]">
              Strategic Focus &amp; Vision 2030 Commitment
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance">
              Advancing digital capabilities, regional expansion, and hybrid vehicle leasing.
            </h2>
            <p className="text-base text-[#D3D6CF] leading-relaxed">
              Our strategic plan focuses on enhancing digital fleet capabilities, expanding market
              penetration across Bahrain, Saudi Arabia, and Oman, and introducing sustainable
              transportation solutions such as hybrid vehicle leasing.
            </p>
            <p className="text-base text-[#D3D6CF] leading-relaxed">
              We are committed to continuous innovation to keep pace with evolving enterprise
              requirements and align directly with global standards alongside Bahrain Vision 2030,
              Saudi Vision 2030, and Oman Vision 2040/2030 sustainability initiatives.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/showroom"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#1B1F1A] bg-[#DDD3C0] hover:bg-white rounded-md transition-colors whitespace-nowrap"
              >
                <span>Explore Hybrid Showroom</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-white/25 hover:border-white/50 rounded-md transition-colors whitespace-nowrap"
              >
                <span>Read Sustainability Insights</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg overflow-hidden aspect-[4/3] bg-[#1B1F1A]">
              <VehicleImage
                src="/assets/jadeer/corolla-cross-hybrid.jpg"
                alt="Jadeer United sustainable hybrid fleet crossover"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#B5A486] italic text-right">
              &ldquo;{BRAND.secondaryTagline}&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
