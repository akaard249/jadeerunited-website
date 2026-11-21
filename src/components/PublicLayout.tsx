import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Lock } from 'lucide-react';
import { BRAND } from '../data/brand';
import { JadeerLogoMark } from './BrandMark';

const HEADER_NAV = [
  { label: 'Showroom', to: '/showroom' },
  { label: 'Used Cars', to: '/used-cars' },
  { label: 'Offers', to: '/offers' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function PublicLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#1B1F1A]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#F8F8F6]/95 backdrop-blur-sm border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[#1B1F1A] font-display text-lg font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3A4338]"
          >
            <JadeerLogoMark className="h-6 w-6 shrink-0" tone="gold" />
            <span>Jadeer United</span>
          </Link>

          {/* Zone 2: 5 Concise Single-Line Nav Links */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
            {HEADER_NAV.map((item) => {
              const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm font-medium whitespace-nowrap shrink-0 pb-0.5 border-b transition-colors duration-150 ${
                    active
                      ? 'text-[#1B1F1A] border-[#3A4338]'
                      : 'text-[#4D544C] border-transparent hover:text-[#1B1F1A] hover:border-[#9A8A6E]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/quotation"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A4338]"
            >
              Request Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 text-[#1B1F1A] rounded-md border border-[#E3E5E0] bg-white"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#E3E5E0] bg-white px-6 py-5 space-y-3">
            <div className="flex flex-col space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                ...HEADER_NAV,
                { label: 'Articles & Insights', to: '/articles' },
                { label: 'Admin Panel', to: '/admin' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-base font-medium text-[#1B1F1A] border-b border-[#F0F1EE] last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                to="/quotation"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-[#3A4338] rounded-md"
              >
                Request a Quotation
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1">{children}</main>

      {/* Quiet, Structured Corporate Footer */}
      <footer className="bg-[#282F27] text-[#E6E5DF] border-t border-[#3A4338]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Statement */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <JadeerLogoMark className="h-7 w-7" tone="gold" />
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  Jadeer United
                </span>
              </div>
              <p className="text-sm text-[#C8CBC4] leading-relaxed max-w-sm">
                {BRAND.primaryTagline}. Founded in {BRAND.foundedYear} with {BRAND.managementExperience} of
                management experience serving corporate and individual clients across Bahrain, Saudi Arabia, and Oman.
              </p>
              <p className="text-xs text-[#B5A486] italic">
                &ldquo;{BRAND.secondaryTagline}&rdquo;
              </p>
              <div className="pt-1">
                <a
                  href={BRAND.profilePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-white/90 hover:text-[#B5A486] transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Company Profile (PDF)</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-display text-sm font-semibold text-white">Navigation</h3>
              <ul className="space-y-2 text-sm text-[#C8CBC4]">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/showroom" className="hover:text-white transition-colors">Showroom</Link></li>
                <li><Link to="/used-cars" className="hover:text-white transition-colors">Used Cars</Link></li>
                <li><Link to="/offers" className="hover:text-white transition-colors">Offers</Link></li>
                <li><Link to="/articles" className="hover:text-white transition-colors">Articles</Link></li>
                <li><Link to="/quotation" className="hover:text-white transition-colors">Request Quotation</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Regional Offices */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-sm font-semibold text-white">Regional Offices</h3>
              <div className="space-y-3 text-sm text-[#C8CBC4]">
                {BRAND.offices.map((office) => (
                  <div key={office.country}>
                    <div className="text-white font-medium">
                      {office.country} — {office.city}
                    </div>
                    <div className="text-xs text-[#A3A89F]">
                      {office.role} ·{' '}
                      <a href={office.telHref} className="font-mono tabular-nums hover:text-white">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emails & Hours */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-sm font-semibold text-white">Direct Desks & Hours</h3>
              <div className="space-y-1.5 text-sm text-[#C8CBC4]">
                <div>
                  <span className="text-[#A3A89F]">Sales: </span>
                  <a href={`mailto:${BRAND.emails.sales}`} className="hover:text-white">
                    {BRAND.emails.sales}
                  </a>
                </div>
                <div>
                  <span className="text-[#A3A89F]">Support: </span>
                  <a href={`mailto:${BRAND.emails.customerSupport}`} className="hover:text-white">
                    {BRAND.emails.customerSupport}
                  </a>
                </div>
                <div>
                  <span className="text-[#A3A89F]">General: </span>
                  <a href={`mailto:${BRAND.emails.general}`} className="hover:text-white">
                    {BRAND.emails.general}
                  </a>
                </div>
              </div>
              <div className="pt-2 space-y-1 text-xs text-[#A3A89F]">
                {BRAND.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-2">
                    <span>{h.days}</span>
                    <span className="font-mono tabular-nums text-[#C8CBC4]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9EA49A]">
            <div>
              © {new Date().getFullYear()} Jadeer United Leasing &amp; Jadeer United Motors · {BRAND.website}
            </div>
            <div className="flex items-center gap-6">
              <span>Aligned with Bahrain, Saudi Arabia &amp; Oman Vision 2030</span>
              <Link
                to="/admin"
                className="inline-flex items-center gap-1.5 text-[#C8CBC4] hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <Lock className="h-3 w-3" />
                <span>Admin Panel</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
