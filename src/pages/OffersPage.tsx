import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { api } from '../lib/api';
import type { Offer } from '../types';
import { VehicleImage } from '../components/BrandMark';
import { useLanguage } from '../context/LanguageContext';
import {
  AmbientGoldBackdrop,
  GoldGlowCard,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

export function OffersPage() {
  const { pick } = useLanguage();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    api
      .getOffers()
      .then((res) => {
        if (active) setOffers(res.offers);
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
    <div className="bg-[#0B0B0D] min-h-[75vh] text-[#E4E0D8]">
      <section className="relative bg-[#0E0E11] border-b border-white/[0.08]">
        <AmbientGoldBackdrop />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
            {pick('PROMOTIONAL & CORPORATE FLEET PACKAGES', 'العروض الترويجية وباقات أساطيل الشركات')}
          </p>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {pick('Active Leasing & Rental Offers', 'عروض التأجير التشغيلي والسيارات المستعملة')}
          </h1>
          <p className="mt-3 text-sm text-[#B4B0A8] max-w-2xl leading-relaxed">
            {pick(
              'Structured fleet programs across Bahrain, Saudi Arabia, and Oman designed for Vision 2030 hybrid transitions, EPC project mobilizations, executive retainers, and certified used acquisitions.',
              'برامج أساطيل متكاملة في البحرين والمملكة العربية السعودية وعُمان مصممة للتحول الهجين وفق رؤية 2030 ومشاريع المقاولات والسيارات المستعملة المعتمدة.'
            )}
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 bg-[#141418] border border-white/[0.08] rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <StaggerGroup className="space-y-6">
            {offers.map((offer) => {
              const title = pick(offer.title, offer.title_ar);
              const description = pick(offer.description, offer.description_ar);
              const quoteQuery = offer.vehicle_id
                ? `/quotation?offer=${offer.id}&vehicle=${offer.vehicle_id}`
                : `/quotation?offer=${offer.id}`;

              return (
                <StaggerItem key={offer.id}>
                  <GoldGlowCard className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    <div className="lg:col-span-4 bg-[#141418] min-h-[240px] overflow-hidden relative">
                      <VehicleImage
                        src={offer.image_url}
                        alt={title}
                        className="w-full h-full object-cover"
                        objectPosition={offer.image_url.includes('land-cruiser-gr') ? 'object-bottom' : 'object-center'}
                      />
                    </div>

                    <div className="lg:col-span-8 p-7 lg:p-8 flex flex-col justify-between gap-6">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#B4B0A8]">
                          <span className="text-[#C8A45D]">
                            {offer.category} · {offer.countries.join(' / ')}
                          </span>
                          <span className="font-mono tabular-nums">
                            {pick('Valid until', 'صالح حتى')} {offer.valid_until}
                          </span>
                        </div>

                        <h2 className="mt-2 font-display text-2xl font-bold text-white">
                          {title}
                        </h2>
                        <p className="mt-2 text-sm text-[#B4B0A8] leading-relaxed">
                          {description}
                        </p>

                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {offer.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-[#E5E5E7]">
                              <Check className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          {offer.monthly_rate_from && (
                            <>
                              <div className="text-xs text-[#949088]">
                                {offer.category === 'Used Car Sales'
                                  ? pick('Certified fleet units starting from', 'سيارات أسطول معتمدة تبدأ من')
                                  : pick('Corporate package starting from', 'باقات الشركات تبدأ من')}
                              </div>
                              <div className="font-mono tabular-nums text-xl font-bold text-[#C8A45D]">
                                {offer.currency} {offer.monthly_rate_from.toLocaleString()}
                                {offer.category !== 'Used Car Sales' && (
                                  <span className="text-xs font-sans font-normal text-[#B4B0A8]">
                                    {' '}
                                    / {pick('month', 'شهر')}
                                  </span>
                                )}
                              </div>
                            </>
                          )}
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                          <Link
                            to={quoteQuery}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors whitespace-nowrap shrink-0"
                          >
                            <span>{pick('Request Offer Quotation', 'اطلب عرض سعر للباقة')}</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </GoldGlowCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        )}
      </section>
    </div>
  );
}

