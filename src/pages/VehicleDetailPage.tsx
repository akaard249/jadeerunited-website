import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, ChevronRight, Gauge, Fuel, Cog, ShieldCheck, Palette } from 'lucide-react';
import { api } from '../lib/api';
import type { ListingType, Vehicle } from '../types';
import { VehicleImage } from '../components/BrandMark';
import { VehicleCard } from '../components/VehicleCard';
import { EASE_LUXURY, Reveal, StaggerGroup, StaggerItem } from '../components/MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';
import { usePageSeo } from '../hooks/usePageSeo';

export function VehicleDetailPage({
  listingType,
  legacyId,
}: {
  listingType: ListingType;
  legacyId?: number;
}) {
  const { brand, model, id } = useParams();
  const navigate = useNavigate();
  const { pick } = useLanguage();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [related, setRelated] = useState<Vehicle[]>([]);
  const [selectedTrimIdx, setSelectedTrimIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const section: 'showroom' | 'used-cars' = listingType === 'showroom' ? 'showroom' : 'used-cars';

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    setSelectedTrimIdx(0);

    const resolvedLegacyId = legacyId ?? (id && /^\d+$/.test(id) ? Number(id) : null);

    if (resolvedLegacyId && resolvedLegacyId > 0) {
      api
        .getVehicle(resolvedLegacyId)
        .then((res) => {
          if (!active) return;
          if (res.vehicle.canonical_path) {
            navigate(res.vehicle.canonical_path, { replace: true });
            return;
          }
          setVehicle(res.vehicle);
          setRelated(res.related);
        })
        .catch((err) => {
          if (!active) return;
          setError(err instanceof Error ? err.message : 'Vehicle not found.');
        })
        .finally(() => {
          if (active) setLoading(false);
        });
    } else if (brand && model) {
      api
        .getVehicleBySlug(section, brand, model)
        .then((res) => {
          if (!active) return;
          setVehicle(res.vehicle);
          setRelated(res.related);
        })
        .catch((err) => {
          if (!active) return;
          setError(err instanceof Error ? err.message : 'Vehicle not found.');
        })
        .finally(() => {
          if (active) setLoading(false);
        });
    } else {
      setError('Invalid vehicle reference.');
      setLoading(false);
    }

    return () => {
      active = false;
    };
  }, [section, brand, model, id, legacyId, navigate]);

  const backPath = listingType === 'showroom' ? '/showroom' : '/used-cars';
  const backLabel =
    listingType === 'showroom'
      ? pick('Back to Showroom', 'العودة إلى المعرض')
      : pick('Back to Used Cars', 'العودة إلى السيارات المستعملة');

  const sectionLabel =
    listingType === 'showroom'
      ? pick('Showroom', 'المعرض')
      : pick('Used Cars', 'السيارات المستعملة');

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalPath = vehicle?.canonical_path || (brand && model ? `/${section}/${brand}/${model}` : backPath);
  const minTrimPrice =
    vehicle && vehicle.trims && vehicle.trims.length > 0
      ? Math.min(...vehicle.trims.map((t) => t.price))
      : vehicle?.price_or_monthly_rate || 0;
  const maxTrimPrice =
    vehicle && vehicle.trims && vehicle.trims.length > 0
      ? Math.max(...vehicle.trims.map((t) => t.price))
      : vehicle?.price_or_monthly_rate || 0;

  usePageSeo({
    title: vehicle
      ? `${vehicle.year} ${vehicle.make} ${vehicle.model} — ${vehicle.listing_type === 'showroom' ? 'Showroom Operational Leasing' : 'Certified Used Car'} | Jadeer United`
      : `${sectionLabel} | Jadeer United`,
    description: vehicle
      ? `${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.category}, ${vehicle.fuel_type}, ${vehicle.transmission}) from ${vehicle.currency} ${vehicle.price_or_monthly_rate.toLocaleString()}. ${vehicle.description}`.slice(0, 160)
      : 'Explore vehicle specifications, trim options, and operational leasing quotes from Jadeer United across Bahrain, Saudi Arabia, and Oman.',
    canonicalPath,
    ogType: 'product',
    image: vehicle?.image_url || '/assets/jadeer/hero-fleet.jpg',
    jsonLd: vehicle
      ? [
          {
            '@context': 'https://schema.org',
            '@type': ['Car', 'Product'],
            name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
            brand: { '@type': 'Brand', name: vehicle.make },
            model: vehicle.model,
            vehicleModelDate: String(vehicle.year),
            bodyType: vehicle.category,
            fuelType: vehicle.fuel_type,
            vehicleTransmission: vehicle.transmission,
            itemCondition:
              vehicle.listing_type === 'showroom'
                ? 'https://schema.org/NewCondition'
                : 'https://schema.org/UsedCondition',
            description: vehicle.description,
            image: vehicle.image_url ? `${origin}${vehicle.image_url}` : undefined,
            url: `${origin}${canonicalPath}`,
            offers:
              vehicle.trims && vehicle.trims.length > 1
                ? {
                    '@type': 'AggregateOffer',
                    priceCurrency: vehicle.currency,
                    lowPrice: minTrimPrice,
                    highPrice: maxTrimPrice,
                    offerCount: vehicle.trims.length,
                    availability:
                      vehicle.status === 'available'
                        ? 'https://schema.org/InStock'
                        : 'https://schema.org/LimitedAvailability',
                  }
                : {
                    '@type': 'Offer',
                    priceCurrency: vehicle.currency,
                    price: vehicle.price_or_monthly_rate,
                    availability:
                      vehicle.status === 'available'
                        ? 'https://schema.org/InStock'
                        : 'https://schema.org/LimitedAvailability',
                  },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
              {
                '@type': 'ListItem',
                position: 2,
                name: vehicle.listing_type === 'showroom' ? 'Showroom' : 'Used Cars',
                item: `${origin}${backPath}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: vehicle.make,
                item: `${origin}${backPath}/${vehicle.brand_slug}`,
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
                item: `${origin}${canonicalPath}`,
              },
            ],
          },
        ]
      : undefined,
  });

  if (loading) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
        <div className="h-96 bg-[#141418] border border-white/[0.08] rounded-xl animate-pulse" />
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-white">Vehicle not available</h1>
        <p className="mt-2 text-sm text-[#B4B0A8]">{error || 'This listing could not be found.'}</p>
        <Link
          to={backPath}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] rounded-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{backLabel}</span>
        </Link>
      </div>
    );
  }

  const isShowroom = vehicle.listing_type === 'showroom';
  const trims = vehicle.trims || [];
  const activeTrim = trims[selectedTrimIdx] || null;
  const activePrice = activeTrim ? activeTrim.price : vehicle.price_or_monthly_rate;
  const quoteHref = activeTrim
    ? `/quotation?vehicle=${vehicle.id}&trim=${encodeURIComponent(activeTrim.trim)}`
    : `/quotation?vehicle=${vehicle.id}`;

  const objectPosition = vehicle.image_url.includes('land-cruiser-gr')
    ? 'object-bottom'
    : 'object-center';

  const techSpecs = [
    { label: pick('Engine Capacity', 'سعة المحرك'), value: vehicle.specs?.engine_capacity },
    { label: pick('Horsepower', 'القوة الحصانية'), value: vehicle.specs?.horsepower },
    { label: pick('Cylinders', 'عدد الأسطوانات'), value: vehicle.specs?.cylinders },
    { label: pick('Fuel Economy', 'استهلاك الوقود'), value: vehicle.specs?.fuel_consumption },
    { label: pick('Tank Capacity', 'سعة الخزان'), value: vehicle.specs?.fuel_capacity },
    { label: pick('Transmission', 'ناقل الحركة'), value: vehicle.specs?.speeds ? `${vehicle.specs.speeds} ${vehicle.transmission}` : vehicle.transmission },
    { label: pick('Doors', 'الأبواب'), value: vehicle.specs?.doors },
    { label: pick('Dimensions', 'الأبعاد'), value: vehicle.specs?.dimensions },
  ].filter((item) => Boolean(item.value));

  return (
    <div className="bg-[#0B0B0D] text-[#E4E0D8]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-[#949088]">
            <Link to="/" className="hover:text-[#C8A45D] transition-colors">
              {pick('Home', 'الرئيسية')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/25" />
            <Link to={backPath} className="hover:text-[#C8A45D] transition-colors">
              {sectionLabel}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/25" />
            <Link to={`${backPath}/${vehicle.brand_slug}`} className="hover:text-[#C8A45D] transition-colors">
              {vehicle.make}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/25" />
            <span className="text-[#E4E0D8] font-medium">
              {vehicle.make} {vehicle.model}
            </span>
          </nav>

          <Link
            to={backPath}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B4B0A8] hover:text-[#C8A45D] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{backLabel}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: EASE_LUXURY }}
              className="aspect-[16/10] rounded-xl overflow-hidden bg-[#141418] border border-white/10"
            >
              <VehicleImage
                src={vehicle.image_url}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                className="w-full h-full object-cover"
                objectPosition={objectPosition}
              />
            </motion.div>

            {/* Technical Specifications Matrix */}
            {techSpecs.length > 0 && (
              <Reveal className="bg-[#141418] border border-white/[0.08] rounded-xl p-7 space-y-5">
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-[#C8A45D]" />
                  <h2 className="font-display text-lg font-semibold text-white">
                    {pick('Technical Specifications', 'المواصفات الفنية')}
                  </h2>
                </div>
                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {techSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 rounded-lg bg-[#0C0C0F] border border-white/[0.06]"
                    >
                      <dt className="text-[11px] text-[#949088]">{spec.label}</dt>
                      <dd className="mt-1 font-mono tabular-nums text-sm font-semibold text-white">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {vehicle.colors && vehicle.colors.length > 0 && (
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[#B4B0A8] mr-2">
                      <Palette className="h-3.5 w-3.5 text-[#C8A45D]" />
                      <span>{pick('Available Colors:', 'الألوان المتوفرة:')}</span>
                    </span>
                    <span className="text-[#E5E5E7]">{vehicle.colors.join(' · ')}</span>
                  </div>
                )}
              </Reveal>
            )}

            <Reveal className="bg-[#141418] border border-white/[0.08] rounded-xl p-7 space-y-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">
                  {pick('Fleet Overview & Operational Readiness', 'نظرة عامة وجاهزية الأسطول')}
                </h2>
                <p className="mt-3 text-sm text-[#B4B0A8] leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#C8A45D]" />
                  <h3 className="font-display text-base font-semibold text-white">
                    {pick('Safety, Telematics & Service Specifications', 'مواصفات السلامة والتتبع والخدمة')}
                  </h3>
                </div>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.safety_telematics_specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-sm text-[#D4D4DC]">
                      <Check className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sticky Right Specification, Trim Picker & Quote Module */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
            <div className="h-[2px] w-full gold-top-accent" />
            <div className="p-7 space-y-6">
              <div>
                <div className="text-xs text-[#C8A45D]">
                  {isShowroom
                    ? pick('Showroom · Operational Leasing', 'المعرض · التأجير التشغيلي')
                    : pick('Jadeer Motors · Certified Used', 'جدير للسيارات · مستعمل معتمد')}{' '}
                  · {vehicle.year} · {vehicle.category}
                </div>
                <h1 className="mt-2 font-display text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  {vehicle.make} {vehicle.model}
                </h1>
              </div>

              <div className="py-5 border-y border-white/[0.08] flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-xs text-[#B4B0A8]">
                    {activeTrim
                      ? `${pick('Selected Grade', 'الفئة المختارة')}: ${activeTrim.trim}`
                      : isShowroom
                        ? pick('Base vehicle MSRP (SAR)', 'السعر الابتدائي للمركبة')
                        : pick('Certified purchase price', 'سعر الشراء المعتمد')}
                  </div>
                  <div className="mt-1 font-mono tabular-nums text-2xl font-bold text-[#C8A45D]">
                    {vehicle.currency} {activePrice.toLocaleString()}
                  </div>
                </div>
                <div
                  className={`text-xs font-medium capitalize ${
                    vehicle.status === 'available'
                      ? 'text-[#4ADE80]'
                      : vehicle.status === 'reserved'
                        ? 'text-[#FBBF24]'
                        : 'text-[#B4B0A8]'
                  }`}
                >
                  {pick('Status', 'الحالة')}: {vehicle.status}
                </div>
              </div>

              {/* Interactive Trim / Grade Picker from Real DB */}
              {trims.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold tracking-wider text-[#B4B0A8]">
                      {pick('SELECT GRADE / TRIM', 'اختر الفئة')}
                    </span>
                    <span className="font-mono tabular-nums text-[#949088]">
                      {trims.length} {pick('options', 'خيارات')}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 max-h-56 overflow-y-auto pr-1">
                    {trims.map((t, idx) => {
                      const isSelected = idx === selectedTrimIdx;
                      return (
                        <button
                          key={`${t.trim}-${idx}`}
                          type="button"
                          onClick={() => setSelectedTrimIdx(idx)}
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-left flex items-center justify-between gap-3 transition-all ${
                            isSelected
                              ? 'bg-[#1D1B15] border-[#C8A45D]/70 text-white'
                              : 'bg-[#0C0C0F] border-white/[0.08] text-[#D4D4DC] hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs font-medium truncate">{t.trim}</span>
                          <span className="font-mono tabular-nums text-xs font-semibold text-[#C8A45D] shrink-0">
                            {vehicle.currency} {t.price.toLocaleString()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <dl className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                <div>
                  <dt className="text-xs text-[#949088] flex items-center gap-1">
                    <Fuel className="h-3 w-3 text-[#C8A45D]" />
                    <span>{pick('Powertrain', 'الوقود')}</span>
                  </dt>
                  <dd className="mt-0.5 font-medium text-white">{vehicle.fuel_type}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#949088] flex items-center gap-1">
                    <Cog className="h-3 w-3 text-[#C8A45D]" />
                    <span>{pick('Transmission', 'ناقل الحركة')}</span>
                  </dt>
                  <dd className="mt-0.5 font-medium text-white">{vehicle.transmission}</dd>
                </div>
                {!isShowroom && (
                  <div>
                    <dt className="text-xs text-[#949088]">{pick('Verified Mileage', 'المسافة المقطوعة')}</dt>
                    <dd className="mt-0.5 font-mono tabular-nums font-medium text-white">
                      {vehicle.mileage_km.toLocaleString()} km
                    </dd>
                  </div>
                )}
                <div className={isShowroom ? 'col-span-2' : ''}>
                  <dt className="text-xs text-[#949088]">{pick('Regional Availability', 'التوفر الإقليمي')}</dt>
                  <dd className="mt-0.5 font-medium text-white">
                    {vehicle.country_availability.join(' · ')}
                  </dd>
                </div>
              </dl>

              <div className="pt-2 space-y-3">
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.985 }}>
                  <Link
                    to={quoteHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors"
                  >
                    <span>
                      {isShowroom
                        ? pick('Request Lease Quote', 'اطلب عرض تأجير تشغيلي')
                        : pick('Request Purchase Inquiry', 'استفسار عن الشراء')}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0C0C0F] hover:bg-[#1C1C22] border border-white/15 rounded-lg transition-colors"
                >
                  {pick('Speak with GCC Branch Desk', 'تواصل مع أقرب فرع')}
                </Link>
              </div>

              <p className="text-xs text-[#949088] leading-relaxed">
                Operational lease packages include manufacturer-schedule maintenance, 700+ B2B quick
                service facilities, comprehensive GCC insurance, replacement vehicles, and 24/7 mobile
                support.
              </p>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/[0.08]">
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              {isShowroom
                ? pick('More Showroom Fleet Options', 'المزيد من سيارات المعرض')
                : pick('More Certified Used Options', 'المزيد من السيارات المستعملة')}
            </h2>
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <StaggerItem key={item.id}>
                  <VehicleCard vehicle={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        )}
      </div>
    </div>
  );
}
