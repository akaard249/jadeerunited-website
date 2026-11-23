import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Quote, X } from 'lucide-react';
import { BRAND } from '../data/brand';
import { api } from '../lib/api';
import type { AboutGalleryItem, SiteContent } from '../types';
import { VehicleImage } from '../components/BrandMark';
import { useLanguage } from '../context/LanguageContext';
import { usePageSeo } from '../hooks/usePageSeo';
import {
  AmbientGoldBackdrop,
  EASE_LUXURY,
  GoldGlowCard,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

export function AboutPage() {
  const { pick } = useLanguage();
  const [content, setContent] = useState<Partial<SiteContent>>({});
  const [gallery, setGallery] = useState<AboutGalleryItem[]>([]);
  const [lightboxItem, setLightboxItem] = useState<AboutGalleryItem | null>(null);

  usePageSeo({
    title: 'About Jadeer United — 25+ Years GCC Fleet & Mobility Leadership',
    description:
      'Founded in 2009 with 25+ years of GCC management experience, Jadeer United operates 3,000+ leased vehicles across Bahrain, Saudi Arabia, and Oman aligned with Vision 2030.',
    canonicalPath: '/about',
    image: content.about_hq_image_url || '/assets/jadeer/jadeer-hq.jpg',
  });

  useEffect(() => {
    let active = true;
    api
      .getSiteContent()
      .then((res) => {
        if (!active) return;
        setContent(res.content || {});
        setGallery(res.gallery || []);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const headline = pick(
    content.about_headline_en || 'Built for Saudi Business, Driven by Trust',
    content.about_headline_ar || 'بُني من أجل الأعمال السعودية، مدفوع بالثقة'
  );
  const p1 = pick(
    content.about_p1_en ||
      'Founded in 2009, Jadeer United stands as a premier transportation solution provider across Bahrain, Saudi Arabia, and Oman. We specialize in delivering high-quality, sustainable, and innovative transportation services tailored to the needs of both businesses and individual clients.',
    content.about_p1_ar
  );
  const p2 = pick(
    content.about_p2_en ||
      'Over the next decade, we evolved to become the leading provider of operational leasing services among businesses in Saudi Arabia, expanding to five branches across the Kingdom, building a fleet of over 3,000 vehicles, and establishing long-term partnerships with more than 100 corporate clients.',
    content.about_p2_ar
  );
  const quote = pick(
    content.about_quote_en ||
      "We didn't just want to sell cars. We wanted to liberate companies from the burden of ownership - so they could focus entirely on what they do best.",
    content.about_quote_ar
  );
  const vision = pick(content.vision_en || BRAND.vision, content.vision_ar);
  const mission = pick(content.mission_en || BRAND.mission, content.mission_ar);

  return (
    <div className="bg-[#0B0B0D] text-[#E4E0D8] overflow-x-hidden">
      {/* Corporate Background */}
      <section className="relative border-b border-white/[0.08]">
        <AmbientGoldBackdrop />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_LUXURY }}
                  className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]"
                >
                  {pick('ABOUT JADEER UNITED — SINCE 2009', 'عن جدير المتحدة — منذ 2009')}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: EASE_LUXURY }}
                  className="mt-3 font-display font-bold tracking-tight text-white text-balance leading-[1.12]"
                  style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)' }}
                >
                  {headline}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16, ease: EASE_LUXURY }}
                  className="mt-5 text-base text-[#B4B0A8] leading-relaxed"
                >
                  {p1}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.22, ease: EASE_LUXURY }}
                  className="mt-4 text-base text-[#B4B0A8] leading-relaxed"
                >
                  {p2}
                </motion.p>

                {quote && (
                  <motion.blockquote
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.28, ease: EASE_LUXURY }}
                    className="mt-6 pl-4 border-l-2 border-[#C8A45D] flex items-start gap-2.5 text-sm text-[#E5E5E7] italic leading-relaxed"
                  >
                    <Quote className="h-4 w-4 text-[#C8A45D] shrink-0 mt-1" />
                    <span>{quote}</span>
                  </motion.blockquote>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/quotation"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>{pick('Request Fleet Quotation', 'اطلب عرض سعر للأسطول')}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <a
                  href={BRAND.profilePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#141418] hover:bg-[#1C1C22] border border-white/15 hover:border-[#C8A45D]/50 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="h-4 w-4 text-[#C8A45D]" />
                  <span>{pick('Download Company Profile (PDF)', 'تحميل الملف التعريفي (PDF)')}</span>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.14, ease: EASE_LUXURY }}
              className="lg:col-span-5 rounded-xl overflow-hidden bg-[#141418] border border-white/10 min-h-[340px]"
            >
              <VehicleImage
                src={content.about_hq_image_url || '/assets/jadeer/jadeer-hq.jpg'}
                alt="Jadeer United Leasing corporate headquarters facade"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#101014] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <GoldGlowCard className="p-8 h-full">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('VISION', 'الرؤية')}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">
                {pick('Regional Mobility Leadership', 'الريادة الإقليمية في حلول النقل')}
              </h2>
              <p className="mt-4 text-base text-[#B4B0A8] leading-relaxed">&ldquo;{vision}&rdquo;</p>
            </GoldGlowCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GoldGlowCard className="p-8 h-full">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('MISSION', 'الرسالة')}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">
                {pick('Quality, Reliability & Sustainability', 'الجودة والموثوقية والاستدامة')}
              </h2>
              <p className="mt-4 text-base text-[#B4B0A8] leading-relaxed">&ldquo;{mission}&rdquo;</p>
            </GoldGlowCard>
          </Reveal>
        </div>
      </section>

      {/* All 8 Core Values */}
      <section className="py-16 lg:py-24 bg-[#0B0B0D] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
              {pick('OUR GUIDING PRINCIPLES', 'مبادئنا الراسخة')}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
              {pick('Eight core values that govern every kilometer.', 'ثماني قيم أساسية توجه كل رحلة.')}
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BRAND.values.map((val) => (
              <StaggerItem key={val.num}>
                <GoldGlowCard className="p-6 h-full space-y-2.5">
                  <div className="font-mono tabular-nums text-xs text-[#C8A45D]">{val.num}</div>
                  <h3 className="font-display text-base font-semibold text-white">{val.title}</h3>
                  <p className="text-sm text-[#B4B0A8] leading-relaxed">{val.description}</p>
                </GoldGlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Strategic Focus & Vision 2030 Sustainability */}
      <section className="py-16 lg:py-24 bg-[#101014] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7 space-y-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
              {pick('STRATEGIC FOCUS & VISION 2030 COMMITMENT', 'التوجه الاستراتيجي ورؤية 2030')}
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white text-balance">
              {pick(
                content.about_strategic_title_en ||
                  'Advancing digital capabilities, regional expansion, and hybrid vehicle leasing.',
                content.about_strategic_title_ar ||
                  'تعزيز القدرات الرقمية والتوسع الإقليمي وتأجير المركبات الهجينة.'
              )}
            </h2>
            <p className="text-base text-[#B4B0A8] leading-relaxed">
              {content.about_strategic_p1_en ||
                'Our strategic plan focuses on enhancing digital fleet capabilities, expanding market penetration across Bahrain, Saudi Arabia, and Oman, and introducing sustainable transportation solutions such as hybrid vehicle leasing.'}
            </p>
            <p className="text-base text-[#B4B0A8] leading-relaxed">
              {content.about_strategic_p2_en ||
                'We are committed to continuous innovation to keep pace with evolving enterprise requirements and align directly with global standards alongside Bahrain, Saudi Arabia, and Oman Vision 2030 sustainability initiatives.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/showroom"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>{pick('Explore Hybrid Showroom', 'استكشف السيارات الهجينة')}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#141418] border border-white/15 hover:border-[#C8A45D]/50 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>{pick('Read Sustainability Insights', 'اقرأ مقالات الاستدامة')}</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#141418] border border-white/10">
              <VehicleImage
                src={content.about_vision_image_url || '/assets/jadeer/rav4-studio.jpg'}
                alt="Jadeer United sustainable hybrid fleet SUV"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#C8A45D] italic text-right">
              &ldquo;{content.hero_quote_en || BRAND.secondaryTagline}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Corporate & Fleet Photo Gallery (Managed in Admin Panel) */}
      {gallery.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#0B0B0D]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <Reveal className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {pick('INSIDE JADEER UNITED', 'معرض صور جدير المتحدة')}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                {pick('Our operations, headquarters & GCC fleet.', 'عملياتنا ومقراتنا وأسطولنا في الخليج.')}
              </h2>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <StaggerItem key={item.id}>
                  <button
                    type="button"
                    onClick={() => setLightboxItem(item)}
                    className="group w-full text-left bg-[#141418] border border-white/[0.08] hover:border-[#C8A45D]/50 rounded-xl overflow-hidden transition-colors focus-visible:outline-2 focus-visible:outline-[#C8A45D]"
                  >
                    <div className="aspect-[16/10] bg-[#101014] overflow-hidden relative">
                      <VehicleImage
                        src={item.image_url}
                        alt={pick(item.title, item.title_ar || item.title)}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#141418] to-transparent" />
                    </div>
                    <div className="p-5 space-y-1.5">
                      <h3 className="font-display text-base font-semibold text-white group-hover:text-[#DCBC7A] transition-colors">
                        {pick(item.title, item.title_ar || item.title)}
                      </h3>
                      {(item.caption || item.caption_ar) && (
                        <p className="text-xs text-[#B4B0A8] leading-relaxed line-clamp-2">
                          {pick(item.caption, item.caption_ar || item.caption)}
                        </p>
                      )}
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: EASE_LUXURY }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#141418] border border-white/15 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Close gallery preview"
                className="absolute top-3 right-3 z-10 h-9 w-9 rounded-lg bg-[#0B0B0D]/80 border border-white/15 text-white hover:text-[#C8A45D] flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-[16/10] bg-[#0B0B0D]">
                <VehicleImage
                  src={lightboxItem.image_url}
                  alt={pick(lightboxItem.title, lightboxItem.title_ar || lightboxItem.title)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-1.5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {pick(lightboxItem.title, lightboxItem.title_ar || lightboxItem.title)}
                </h3>
                {(lightboxItem.caption || lightboxItem.caption_ar) && (
                  <p className="text-sm text-[#B4B0A8] leading-relaxed">
                    {pick(lightboxItem.caption, lightboxItem.caption_ar || lightboxItem.caption)}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
