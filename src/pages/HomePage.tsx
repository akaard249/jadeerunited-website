import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Phone, Star, Quote } from 'lucide-react';
import { api } from '../lib/api';
import { BRAND } from '../data/brand';
import type { Article, ClientReview, Offer, SiteContent, Vehicle } from '../types';
import { VehicleCard } from '../components/VehicleCard';
import { VehicleImage } from '../components/BrandMark';
import { useLanguage } from '../context/LanguageContext';
import {
  AmbientGoldBackdrop,
  AnimatedCounter,
  EASE_LUXURY,
  GoldGlowCard,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

export function HomePage() {
  const { pick } = useLanguage();
  const [showroomFeatured, setShowroomFeatured] = useState<Vehicle[]>([]);
  const [usedFeatured, setUsedFeatured] = useState<Vehicle[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [reviews, setReviews] = useState<ClientReview[]>([]);
  const [siteContent, setSiteContent] = useState<Partial<SiteContent>>({});
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
        setReviews(data.reviews || []);
        setSiteContent(data.siteContent || {});
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const heroSub = pick(
    siteContent.hero_tagline_en || 'Drive Your Business Forward',
    siteContent.hero_tagline_ar || 'انطلق بأعمالك نحو المستقبل'
  );

  return (
    <div className="bg-[#0B0B0D] text-[#E4E0D8] overflow-x-hidden">
      {/* 1. Split Architectural Obsidian & Gold Hero */}
      <section className="relative border-b border-white/[0.08]">
        <AmbientGoldBackdrop />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_LUXURY }}
                  className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]"
                >
                  {pick(
                    `BAHRAIN · SAUDI ARABIA · OMAN — ${heroSub.toUpperCase()}`,
                    `البحرين · السعودية · عُمان — ${heroSub}`
                  )}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.58, delay: 0.08, ease: EASE_LUXURY }}
                  className="mt-4 font-display font-bold tracking-tight text-white leading-[1.08] text-balance"
                  style={{ fontSize: 'clamp(2.25rem, 3.9vw, 3.5rem)' }}
                >
                  {pick(
                    'Transportation solutions that drive ',
                    'حلول نقل مبتكرة تقود '
                  )}
                  <span className="text-[#C8A45D]">
                    {pick('business success', 'نجاح أعمالك')}
                  </span>
                  {pick(' and sustainability.', ' واستدامتها.')}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16, ease: EASE_LUXURY }}
                  className="mt-5 text-base text-[#B4B0A8] leading-relaxed max-w-xl"
                >
                  {pick(
                    'Jadeer United delivers corporate operational leasing, Vision 2030 hybrid fleets, short- and long-term rentals, and certified vehicle sales — operating 3,000+ vehicles across Bahrain, Saudi Arabia, and Oman.',
                    'تقدم جدير المتحدة التأجير التشغيلي للشركات، وأساطيل المركبات الهجينة المتوافقة مع رؤية 2030، وتأجير وبيع السيارات الجديدة والمستعملة المعتمدة بأسطول يتجاوز 3,000 مركبة في البحرين والسعودية وعُمان.'
                  )}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.24, ease: EASE_LUXURY }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/quotation"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>{pick('Request a Quotation', 'اطلب عرض سعر')}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/showroom"
                      className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#141418] hover:bg-[#1C1C22] border border-white/15 hover:border-[#C8A45D]/50 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      {pick('Showroom', 'معرض السيارات')}
                    </Link>
                  </motion.div>
                  <Link
                    to="/used-cars"
                    className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0] transition-colors whitespace-nowrap shrink-0"
                  >
                    {pick('Used Cars', 'السيارات المستعملة')}
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="mt-10 pt-6 border-t border-white/[0.08]"
              >
                <p className="text-sm text-[#B4B0A8] italic">
                  &ldquo;{BRAND.secondaryTagline}&rdquo;
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.14, ease: EASE_LUXURY }}
              className="lg:col-span-6 relative rounded-xl overflow-hidden bg-[#141418] border border-white/[0.1] min-h-[340px] lg:min-h-[470px] group"
            >
              <VehicleImage
                src="/assets/jadeer/land-cruiser-studio.jpg"
                alt="2026 Toyota Land Cruiser VX-R flagship corporate SUV in Jadeer United showroom"
                className="w-full h-full lg:h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0B0D]/95 via-[#0B0B0D]/60 to-transparent p-6 text-white">
                <div className="text-xs font-medium text-[#C8A45D]">
                  {pick(
                    'Corporate Operational Leasing & Site-Ready Fleets',
                    'التأجير التشغيلي للشركات والأساطيل المجهزة للمشاريع'
                  )}
                </div>
                <div className="mt-1 font-display text-base font-semibold">
                  {pick(
                    'Comprehensive GCC Insurance · GPS & Blue Key Control · USA-Standard Roll Cages',
                    'تأمين شامل لدول الخليج · تتبع GPS ومفتاح أزرق · أقفاص حماية بمعايير أمريكية'
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Animated Full-Width Highlights Strip */}
      <section className="bg-[#101014] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            <StaggerItem className="py-6 px-4 first:pl-0">
              <div className="font-mono tabular-nums text-2xl font-bold text-[#C8A45D]">2009</div>
              <div className="mt-1 text-xs text-[#B4B0A8]">{pick('Founded in GCC', 'تأسست منذ 2009')}</div>
            </StaggerItem>
            <StaggerItem className="py-6 px-4">
              <div className="text-2xl font-bold text-[#C8A45D]">
                <AnimatedCounter target={3000} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-[#B4B0A8]">{pick('Active Fleet Vehicles', 'مركبة في الأسطول')}</div>
            </StaggerItem>
            <StaggerItem className="py-6 px-4">
              <div className="text-2xl font-bold text-[#C8A45D]">
                <AnimatedCounter target={700} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-[#B4B0A8]">{pick('Quick Service Facilities', 'مركز خدمة سريعة')}</div>
            </StaggerItem>
            <StaggerItem className="py-6 px-4">
              <div className="text-2xl font-bold text-[#C8A45D]">
                <AnimatedCounter target={100} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-[#B4B0A8]">{pick('Corporate Partners', 'شريك من الشركات')}</div>
            </StaggerItem>
            <StaggerItem className="py-6 px-4">
              <div className="font-mono tabular-nums text-2xl font-bold text-[#C8A45D]">24/7</div>
              <div className="mt-1 text-xs text-[#B4B0A8]">{pick('GCC Mobile Support', 'دعم متنقل على مدار الساعة')}</div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* 3. Featured Showroom Vehicles (All 6 Real Homepage Featured Models) */}
      <section className="py-16 lg:py-24 bg-[#0B0B0D] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('SHOWROOM & OPERATIONAL LEASING', 'المعرض والتأجير التشغيلي')}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                {pick('Featured 2026 Fleet Lineup', 'أبرز سيارات الأسطول 2026')}
              </h2>
            </div>
            <Link
              to="/showroom"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0] whitespace-nowrap shrink-0"
            >
              <span>{pick('Browse all 34 showroom models', 'تصفح جميع سيارات المعرض')}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-96 bg-[#141418] border border-white/[0.08] rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showroomFeatured.map((v) => (
                <StaggerItem key={v.id}>
                  <VehicleCard vehicle={v} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
        </div>
      </section>

      {/* 4. Core Services */}
      <section className="py-16 lg:py-24 bg-[#101014] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-4 space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('CORE MOBILITY DIVISIONS', 'أقسام التنقل الأساسية')}
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white text-balance">
                {pick(
                  'Integrated fleet services built for GCC enterprise demands.',
                  'خدمات أسطول متكاملة مصممة لمتطلبات الشركات في الخليج.'
                )}
              </h2>
              <p className="text-sm text-[#B4B0A8] leading-relaxed">
                {pick(
                  'From long-term corporate operational leases to executive limousine retainers and certified vehicle sales, every division operates under unified quality and HSE governance.',
                  'من عقود التأجير التشغيلي طويلة الأجل إلى خدمات الليموزين التنفيذية وبيع السيارات المعتمدة، يعمل كل قسم وفق أعلى معايير الجودة والسلامة.'
                )}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0] transition-colors"
                >
                  <span>{pick('Explore company vision and values', 'استكشف رؤيتنا وقيمنا')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <StaggerGroup className="lg:col-span-8 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {BRAND.coreServices.map((service) => (
                <StaggerItem key={service.num}>
                  <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline group">
                    <div className="sm:col-span-4 font-display text-base font-semibold text-white group-hover:text-[#DCBC7A] transition-colors">
                      <span className="font-mono tabular-nums text-sm text-[#C8A45D] mr-2.5">
                        {service.num}.
                      </span>
                      {service.title}
                    </div>
                    <p className="sm:col-span-8 text-sm text-[#B4B0A8] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* 5. Featured Certified Used Cars */}
      <section className="py-16 lg:py-24 bg-[#0B0B0D] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('JADEER UNITED MOTORS', 'جدير المتحدة للسيارات')}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                {pick('Curated Certified Used Cars', 'سيارات مستعملة معتمدة')}
              </h2>
            </div>
            <Link
              to="/used-cars"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0] whitespace-nowrap shrink-0"
            >
              <span>{pick('View all used inventory', 'عرض جميع السيارات المستعملة')}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usedFeatured.map((v) => (
              <StaggerItem key={v.id}>
                <VehicleCard vehicle={v} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 6. Active Offers & Latest Articles Split */}
      <section className="py-16 lg:py-24 bg-[#101014] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                  {pick('CORPORATE & SEASONAL PACKAGES', 'العروض والباقات الحصرية')}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  {pick('Active Leasing & Sales Offers', 'العروض النشطة')}
                </h2>
              </div>
              <Link
                to="/offers"
                className="text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0] whitespace-nowrap shrink-0"
              >
                {pick('All offers', 'جميع العروض')}
              </Link>
            </Reveal>

            <StaggerGroup className="space-y-4">
              {offers.map((offer) => (
                <StaggerItem key={offer.id}>
                  <GoldGlowCard className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="hidden sm:block w-24 h-16 rounded-lg overflow-hidden bg-[#18181D] shrink-0 border border-white/10">
                        <VehicleImage
                          src={offer.image_url}
                          alt={pick(offer.title, offer.title_ar)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="text-xs text-[#B4B0A8]">
                          {offer.category} · {offer.countries.join(' / ')}
                        </div>
                        <h3 className="font-display text-base font-semibold text-white leading-snug">
                          {pick(offer.title, offer.title_ar)}
                        </h3>
                        <p className="text-xs text-[#B4B0A8] line-clamp-2">
                          {pick(offer.subtitle, offer.subtitle_ar)}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2">
                      {offer.monthly_rate_from && (
                        <div className="font-mono tabular-nums text-base font-semibold text-[#C8A45D] whitespace-nowrap">
                          {offer.currency} {offer.monthly_rate_from.toLocaleString()}
                          {offer.category !== 'Used Car Sales' ? '/mo' : ''}
                        </div>
                      )}
                      <Link
                        to={`/quotation?offer=${offer.id}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-[#C8A45D] transition-colors whitespace-nowrap"
                      >
                        <span>{pick('Request quote', 'اطلب عرض')}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </GoldGlowCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="lg:col-span-5">
            <Reveal className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                  {pick('INDUSTRY BRIEFINGS', 'أخبار ورؤى القطاع')}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  {pick('Latest Articles', 'أحدث المقالات')}
                </h2>
              </div>
              <Link
                to="/articles"
                className="text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0] whitespace-nowrap shrink-0"
              >
                {pick('All articles', 'جميع المقالات')}
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-[#141418] border border-white/[0.08] rounded-xl divide-y divide-white/[0.08]">
                {articles.map((article) => (
                  <article key={article.id} className="p-5 group">
                    <div className="text-xs text-[#B4B0A8]">
                      <span className="text-[#C8A45D]">{article.category}</span> ·{' '}
                      {article.published_at} · {article.read_time_minutes} {pick('min read', 'دقائق')}
                    </div>
                    <Link to={`/articles/${article.slug}`} className="block mt-1.5">
                      <h3 className="font-display text-base font-semibold text-white group-hover:text-[#DCBC7A] transition-colors leading-snug">
                        {pick(article.title, article.title_ar)}
                      </h3>
                    </Link>
                    <p className="mt-1.5 text-sm text-[#B4B0A8] line-clamp-2">
                      {pick(article.excerpt, article.excerpt_ar)}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Verified Corporate Client Voices (Real DB Reviews) */}
      {reviews.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#0B0B0D] border-b border-white/[0.08]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                  {pick('VERIFIED CLIENT FEEDBACK', 'آراء شركائنا من الشركات')}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                  {pick(
                    'Direct voices from our GCC corporate fleet partners.',
                    'تقييمات حقيقية من شركائنا في قطاع الطاقة والهندسة.'
                  )}
                </h2>
              </div>
              <div className="text-xs text-[#B4B0A8] font-mono tabular-nums">
                {pick('100% Would Lease Again · Verified Service Audits', 'تقييمات معتمدة من عملاء التأجير التشغيلي')}
              </div>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.slice(0, 6).map((rev) => (
                <StaggerItem key={rev.id}>
                  <GoldGlowCard className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-[#C8A45D]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5"
                              fill={i < rev.overall ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="font-mono tabular-nums text-[11px] text-[#949088]">
                          {rev.date_of_service}
                        </span>
                      </div>

                      <div className="mt-4 flex items-start gap-2">
                        <Quote className="h-4 w-4 text-[#C8A45D]/60 shrink-0 mt-0.5" />
                        <p className="text-sm text-[#D4D4DC] leading-relaxed line-clamp-4">
                          {rev.comment}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/[0.08]">
                      <div className="font-display text-sm font-semibold text-white">
                        {rev.company}
                      </div>
                      <div className="text-xs text-[#B4B0A8] mt-0.5">
                        {rev.employee} · {rev.position}
                      </div>
                      <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono tabular-nums text-[#949088]">
                        <span>Vehicle {rev.vehicle_condition}/5</span>
                        <span>Staff {rev.staff_behavior}/5</span>
                        <span>Pickup {rev.pickup_process}/5</span>
                      </div>
                    </div>
                  </GoldGlowCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* 8. Trusted Enterprise Clients & GCC Footprint */}
      <section className="py-16 lg:py-24 bg-[#101014]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-16">
          <div>
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('TRUSTED REGIONAL PARTNERSHIPS', 'شراكات إقليمية موثوقة')}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                {pick(
                  'Serving leading energy, engineering, and infrastructure organizations.',
                  'نخدم كبرى شركات الطاقة والهندسة والبنية التحتية.'
                )}
              </h2>
            </Reveal>

            <StaggerGroup className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {BRAND.trustedClients.map((client) => (
                <StaggerItem key={client.name}>
                  <GoldGlowCard className="p-6 flex flex-col justify-between min-h-[104px]">
                    <div className="font-display text-lg font-bold tracking-tight text-white">
                      {client.name}
                    </div>
                    <div className="mt-2 text-xs text-[#B4B0A8]">{client.sector}</div>
                  </GoldGlowCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-white/[0.08]">
            <Reveal className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('GCC OPERATIONAL FOOTPRINT', 'الانتشار التشغيلي في الخليج')}
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                {pick(
                  'Regional offices & 14-city field coverage.',
                  'مكاتب إقليمية وتغطية ميدانية في 14 مدينة.'
                )}
              </h2>
              <p className="text-sm text-[#B4B0A8] leading-relaxed">
                {pick(
                  'Headquartered in Amwaj, Bahrain with Saudi branches in Khobar, Riyadh, Western Region, NEOM, Jizan, Khafji, and Turaif plus Muscat, Oman.',
                  'مقرنا الرئيسي في أمواج بالبحرين مع فروع المملكة العربية السعودية في الخبر والرياض والمنطقة الغربية ونيوم وجيزان والخفجي وطريف، بالإضافة إلى مسقط في عُمان.'
                )}
              </p>
              <div className="pt-2 text-xs text-[#C8A45D]/90 leading-7">
                {BRAND.coverageCities.join(' · ')}
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0]"
                >
                  <span>{pick('Explore interactive locations map', 'استكشف خريطة الفروع والورش')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <StaggerGroup className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {BRAND.offices.map((office) => (
                <StaggerItem key={office.country}>
                  <GoldGlowCard className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xs text-[#C8A45D] font-medium">{office.role}</div>
                      <h3 className="mt-1 font-display text-lg font-semibold text-white">
                        {office.country}
                      </h3>
                      <div className="text-sm text-[#D4D4DC]">{office.city}</div>
                      <p className="mt-3 text-xs text-[#B4B0A8] leading-relaxed">{office.focus}</p>
                    </div>
                    <a
                      href={office.telHref}
                      className="mt-5 inline-flex items-center gap-1.5 font-mono tabular-nums text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0]"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{office.phone}</span>
                    </a>
                  </GoldGlowCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>
    </div>
  );
}
