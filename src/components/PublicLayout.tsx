import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Lock, MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { BRAND } from '../data/brand';
import { JadeerLogoMark } from './BrandMark';
import { EASE_LUXURY } from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

const HEADER_NAV = [
  { labelEn: 'Showroom', labelAr: 'المعرض', to: '/showroom' },
  { labelEn: 'Used Cars', labelAr: 'المستعملة', to: '/used-cars' },
  { labelEn: 'Offers', labelAr: 'العروض', to: '/offers' },
  { labelEn: 'About', labelAr: 'من نحن', to: '/about' },
  { labelEn: 'Contact', labelAr: 'اتصل بنا', to: '/contact' },
];

export function PublicLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, toggleLang, pick } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0D] text-[#E4E0D8]">
      {/* Strict 3-Zone Obsidian & Champagne Gold Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight whitespace-nowrap shrink-0 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A45D]"
          >
            <JadeerLogoMark className="h-6 w-6 shrink-0" tone="gold" />
            <span>{pick('Jadeer United', 'جدير المتحدة')}</span>
          </Link>

          {/* Zone 2: 5 Single-Line Nav Links with gliding gold underline */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
            {HEADER_NAV.map((item) => {
              const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    active ? 'text-white' : 'text-[#B4B0A8] hover:text-white'
                  }`}
                >
                  {pick(item.labelEn, item.labelAr)}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{ duration: 0.28, ease: EASE_LUXURY }}
                      className="absolute inset-x-0 -bottom-[19px] h-[2px] bg-[#C8A45D]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + 1 Primary CTA + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#D4D4DC] hover:text-[#C8A45D] border border-white/10 hover:border-[#C8A45D]/40 bg-[#141418] rounded-md transition-colors whitespace-nowrap shrink-0"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <Globe className="h-3.5 w-3.5 text-[#C8A45D]" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="hidden sm:block">
              <Link
                to="/quotation"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A45D]"
              >
                {pick('Request Quote', 'اطلب عرض سعر')}
              </Link>
            </motion.div>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 text-white rounded-md border border-white/10 bg-[#141418]"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: EASE_LUXURY }}
              className="md:hidden overflow-hidden border-t border-white/[0.08] bg-[#111114]"
            >
              <div className="px-6 py-5 space-y-3">
                <div className="flex flex-col space-y-1">
                  {[
                    { labelEn: 'Home', labelAr: 'الرئيسية', to: '/' },
                    ...HEADER_NAV,
                    { labelEn: 'Articles & Insights', labelAr: 'المقالات والأخبار', to: '/articles' },
                    { labelEn: 'Admin Panel', labelAr: 'لوحة الإدارة', to: '/admin' },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="py-2.5 text-base font-medium text-[#E5E5E7] hover:text-[#C8A45D] border-b border-white/[0.06] last:border-b-0"
                    >
                      {pick(item.labelEn, item.labelAr)}
                    </Link>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    to="/quotation"
                    onClick={() => setMobileOpen(false)}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] rounded-md"
                  >
                    {pick('Request a Quotation', 'اطلب عرض سعر')}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Animated Page Viewport */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE_LUXURY }}
        className="flex-1"
      >
        {children}
      </motion.main>

      {/* Obsidian & Gold Footer matching Video Layout */}
      <footer className="bg-[#08080A] text-[#C8C8D0] border-t border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
            {/* Brand Bio */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <JadeerLogoMark className="h-7 w-7" tone="gold" />
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  Jadeer United Motors
                </span>
              </div>
              <p className="text-sm text-[#B4B0A8] leading-relaxed max-w-sm">
                GCC&apos;s trusted partner since {BRAND.foundedYear} for corporate operational
                leasing, direct vehicle sales, Vision 2030 hybrid fleets, and executive mobility.
              </p>
              <p className="text-xs text-[#C8A45D] italic">
                &ldquo;{BRAND.secondaryTagline}&rdquo;
              </p>
              <div className="pt-1">
                <a
                  href={BRAND.profilePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#E5E5E7] hover:text-[#C8A45D] transition-colors"
                >
                  <Download className="h-3.5 w-3.5 text-[#C8A45D]" />
                  <span>Download Company Profile (PDF)</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-xs font-semibold tracking-wider text-white">
                Services
              </h3>
              <ul className="space-y-2.5 text-sm text-[#B4B0A8]">
                <li><Link to="/quotation" className="hover:text-[#C8A45D] transition-colors">B2B Operational Leasing</Link></li>
                <li><Link to="/used-cars" className="hover:text-[#C8A45D] transition-colors">Used Car Sales</Link></li>
                <li><Link to="/offers" className="hover:text-[#C8A45D] transition-colors">Current Fleet Offers</Link></li>
                <li><Link to="/quotation" className="hover:text-[#C8A45D] transition-colors">Limousine &amp; Driver Services</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-xs font-semibold tracking-wider text-white">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-[#B4B0A8]">
                <li><Link to="/about" className="hover:text-[#C8A45D] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#C8A45D] transition-colors">GCC Branches &amp; Workshops</Link></li>
                <li><Link to="/articles" className="hover:text-[#C8A45D] transition-colors">News &amp; Insights</Link></li>
                <li><Link to="/contact" className="hover:text-[#C8A45D] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Fleet */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-display text-xs font-semibold tracking-wider text-white">
                Fleet
              </h3>
              <ul className="space-y-2.5 text-sm text-[#B4B0A8]">
                <li><Link to="/showroom" className="hover:text-[#C8A45D] transition-colors">SUV &amp; 4x4</Link></li>
                <li><Link to="/showroom" className="hover:text-[#C8A45D] transition-colors">Hybrid Sedans</Link></li>
                <li><Link to="/showroom" className="hover:text-[#C8A45D] transition-colors">Industrial Fleet</Link></li>
                <li><Link to="/used-cars" className="hover:text-[#C8A45D] transition-colors">Certified Used</Link></li>
              </ul>
            </div>
          </div>

          {/* Direct Contact Strip (mirroring video footer bar) */}
          <div className="py-6 border-b border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#8F8B84]">HEADQUARTERS</div>
                <div className="text-[#E5E5E7] mt-0.5">Amwaj, Bahrain · Khobar · Muscat</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#8F8B84]">BAHRAIN HQ</div>
                <a href="tel:+97366666064" className="font-mono tabular-nums text-[#E5E5E7] hover:text-[#C8A45D] mt-0.5 block">
                  +973 6666 6064
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#8F8B84]">KSA &amp; OMAN</div>
                <div className="font-mono tabular-nums text-[#E5E5E7] mt-0.5">
                  +966 56 887 7769 · +968 7745 9000
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#8F8B84]">SALES &amp; INFO</div>
                <a href="mailto:sales@jadeergulf.com" className="text-[#E5E5E7] hover:text-[#C8A45D] mt-0.5 block">
                  sales@jadeergulf.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#8F8B84]">HOURS</div>
                <div className="text-[#E5E5E7] mt-0.5">Sun–Thu 8:30–5:30 · Sat 9–1</div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8F8B84]">
            <div>
              © {new Date().getFullYear()} Jadeer United. All rights reserved. · {BRAND.website}
            </div>
            <div className="flex items-center gap-6">
              <span>Bahrain, Saudi Arabia &amp; Oman Vision 2030</span>
              <Link
                to="/admin"
                className="inline-flex items-center gap-1.5 text-[#B4B0A8] hover:text-[#C8A45D] transition-colors whitespace-nowrap shrink-0"
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
