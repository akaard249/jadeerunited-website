import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, RotateCcw } from 'lucide-react';
import { api } from '../lib/api';
import type { ListingType, Vehicle } from '../types';
import { VehicleCard } from '../components/VehicleCard';
import { AmbientGoldBackdrop, StaggerGroup, StaggerItem } from '../components/MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';
import { usePageSeo } from '../hooks/usePageSeo';

const CATEGORIES = ['All', 'SUV', 'Sedan', 'Hybrid', 'Pick-Up', 'Bus'];
const BRANDS = ['All', 'Toyota', 'Nissan', 'Hyundai', 'Chevrolet', 'GMC', 'Mitsubishi', 'KIA'];
const COUNTRIES = ['All', 'Saudi Arabia', 'Bahrain', 'Oman'];
const FUEL_TYPES = ['All', 'Hybrid', 'Petrol', 'Diesel'];
const TRANSMISSIONS = ['All', 'Automatic', 'Manual'];

function slugToBrand(slug?: string): string {
  if (!slug) return 'All';
  const normalized = slug.toLowerCase().trim();
  const matched = BRANDS.find((b) => b.toLowerCase().replace(/[^a-z0-9]+/g, '-') === normalized);
  return matched || 'All';
}

function brandToSlug(brand: string): string {
  return brand.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}

export function CatalogPage({
  listingType,
  initialBrandSlug,
}: {
  listingType: ListingType;
  initialBrandSlug?: string;
}) {
  const { pick } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isShowroom = listingType === 'showroom';
  const sectionPath = isShowroom ? '/showroom' : '/used-cars';
  const initialMake = slugToBrand(initialBrandSlug);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [search, setSearch] = useState(() => searchParams.get('search') || '');
  const [category, setCategory] = useState('All');
  const [make, setMake] = useState(initialMake);
  const [country, setCountry] = useState('All');
  const [fuelType, setFuelType] = useState('All');
  const [transmission, setTransmission] = useState('All');
  const [year, setYear] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setCategory('All');
    setMake(slugToBrand(initialBrandSlug));
    setCountry('All');
    setFuelType('All');
    setTransmission('All');
    setYear('All');
    setMaxPrice('');
    setSearch(searchParams.get('search') || '');
  }, [listingType, initialBrandSlug, searchParams]);

  const activeBrandLabel = make !== 'All' ? make : '';
  const canonicalPath = activeBrandLabel
    ? `${sectionPath}/${brandToSlug(activeBrandLabel)}`
    : sectionPath;

  usePageSeo({
    title: isShowroom
      ? activeBrandLabel
        ? `${activeBrandLabel} Showroom Fleet — Operational Leasing | Jadeer United`
        : 'Showroom Fleet — New Vehicles & Operational Leasing | Jadeer United'
      : activeBrandLabel
        ? `Certified Used ${activeBrandLabel} Cars — GCC Fleet | Jadeer United Motors`
        : 'Certified Used Cars — Ex-Corporate GCC Fleet | Jadeer United Motors',
    description: isShowroom
      ? activeBrandLabel
        ? `Explore ${activeBrandLabel} vehicles for corporate operational leasing across Bahrain, Saudi Arabia, and Oman with full trim specs, maintenance, and HSE readiness.`
        : 'Browse 2025–2026 Toyota, Nissan, Hyundai, Chevrolet, and GMC vehicles for operational leasing across Saudi Arabia, Bahrain, and Oman.'
      : activeBrandLabel
        ? `Certified pre-owned ${activeBrandLabel} vehicles inspected across 120 checkpoints with verified mileage and complete service history from Jadeer United Motors.`
        : 'Manufacturer-maintained ex-corporate used vehicles inspected across 120 checkpoints with verified odometer mileage and transparent SAR pricing.',
    canonicalPath,
    image: isShowroom ? '/assets/jadeer/hero-fleet.jpg' : '/assets/jadeer/used-prado.jpg',
  });

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');

    const timer = setTimeout(() => {
      api
        .getVehicles({
          listing_type: listingType,
          category,
          make,
          country,
          fuel_type: fuelType,
          transmission,
          year: year !== 'All' ? Number(year) : undefined,
          max_price: maxPrice ? Number(maxPrice) : undefined,
          search: search.trim() || undefined,
        })
        .then((res) => {
          if (!active) return;
          setVehicles(res.vehicles);
        })
        .catch((err) => {
          if (!active) return;
          setError(err instanceof Error ? err.message : 'Unable to load vehicles.');
        })
        .finally(() => {
          if (active) setLoading(false);
        });
    }, 120);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [listingType, category, make, country, fuelType, transmission, year, maxPrice, search]);

  const resetFilters = () => {
    setSearch('');
    setCategory('All');
    setMake('All');
    setCountry('All');
    setFuelType('All');
    setTransmission('All');
    setYear('All');
    setMaxPrice('');
    if (initialBrandSlug) {
      navigate(sectionPath);
    }
  };

  const handleMakeChange = (nextMake: string) => {
    setMake(nextMake);
    if (nextMake === 'All') {
      if (initialBrandSlug) navigate(sectionPath);
    } else {
      navigate(`${sectionPath}/${brandToSlug(nextMake)}`);
    }
  };

  return (
    <div className="bg-[#0B0B0D] min-h-[75vh] text-[#E4E0D8]">
      {/* Header */}
      <section className="relative bg-[#0E0E11] border-b border-white/[0.08]">
        <AmbientGoldBackdrop />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
                {isShowroom
                  ? pick('OPERATIONAL LEASING & NEW FLEET CATALOG', 'كتالوج التأجير التشغيلي والسيارات الجديدة')
                  : pick('JADEER UNITED MOTORS CERTIFIED PRE-OWNED', 'جدير المتحدة للسيارات — المستعملة المعتمدة')}
              </p>
              <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {activeBrandLabel
                  ? isShowroom
                    ? `${activeBrandLabel} ${pick('Showroom Fleet', 'معرض السيارات')}`
                    : `${pick('Certified Used', 'سيارات مستعملة معتمدة')} ${activeBrandLabel}`
                  : isShowroom
                    ? pick('Showroom Fleet', 'معرض السيارات الجديدة')
                    : pick('Curated Used Cars', 'السيارات المستعملة المعتمدة')}
              </h1>
              <p className="mt-3 text-sm text-[#B4B0A8] leading-relaxed">
                {isShowroom
                  ? pick(
                      'New 2025–2026 Toyota, Nissan, Hyundai, Chevrolet, and GMC models available for operational leasing across Saudi Arabia, Bahrain, and Oman with full trim configurations and HSE packages.',
                      'أحدث موديلات 2025-2026 من تويوتا ونيسان وهيونداي وشيفروليه وجي إم سي للتأجير التشغيلي مع كافة الفئات وباقات الصيانة والسلامة.'
                    )
                  : pick(
                      'Manufacturer-maintained ex-corporate vehicles inspected across 120 checkpoints with verified odometer mileage, complete service history, and transparent SAR pricing.',
                      'سيارات شركات مستعملة بصيانة الوكالة المفحوصة عبر 120 نقطة مع سجل صيانة كامل وأسعار شفافة بالريال السعودي.'
                    )}
              </p>
            </div>
            <Link
              to="/quotation"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              {isShowroom
                ? pick('Request Custom Fleet Quote', 'اطلب عرض سعر للأسطول')
                : pick('Inquire About Used Fleet', 'استفسر عن السيارات المستعملة')}
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-[#111114] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#18181D] border border-white/[0.08] rounded-lg w-fit">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    category === cat
                      ? 'bg-[#C8A45D] text-[#0B0B0D]'
                      : 'text-[#B4B0A8] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="h-4 w-4 text-[#949088] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={pick('Search make, model, or trim (e.g. GXR, Patrol)...', 'ابحث عن الماركة أو الموديل أو الفئة...')}
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#8F8B84] focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-1">
            <div>
              <label className="block text-[11px] font-medium text-[#B4B0A8] mb-1">
                {pick('Brand / Make', 'العلامة التجارية')}
              </label>
              <select
                value={make}
                onChange={(e) => handleMakeChange(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                {BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b === 'All' ? pick('All Brands', 'جميع العلامات') : b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#B4B0A8] mb-1">
                {pick('GCC Market', 'السوق الإقليمي')}
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? pick('All GCC Markets', 'جميع دول الخليج') : c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#B4B0A8] mb-1">
                {pick('Fuel / Powertrain', 'نوع الوقود')}
              </label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                {FUEL_TYPES.map((f) => (
                  <option key={f} value={f}>
                    {f === 'All' ? pick('All Fuel Types', 'جميع أنواع الوقود') : f}
                  </option>
                ))}
              </select>
            </div>

            {!isShowroom && (
              <>
                <div>
                  <label className="block text-[11px] font-medium text-[#B4B0A8] mb-1">
                    {pick('Transmission', 'ناقل الحركة')}
                  </label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    {TRANSMISSIONS.map((t) => (
                      <option key={t} value={t}>
                        {t === 'All' ? pick('All Transmissions', 'الكل') : t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#B4B0A8] mb-1">
                    {pick('Model Year', 'سنة الصنع')}
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    {['All', '2024', '2023', '2022', '2021', '2020'].map((y) => (
                      <option key={y} value={y}>
                        {y === 'All' ? pick('Any Year', 'كل السنوات') : y}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-[11px] font-medium text-[#B4B0A8] mb-1">
                {pick('Max Price (SAR)', 'أقصى سعر (ريال)')}
              </label>
              <input
                type="number"
                min="0"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="e.g. 150000"
                className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#D4D4DC] hover:text-[#C8A45D] border border-white/10 bg-[#18181D] rounded-lg whitespace-nowrap"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{pick('Reset', 'إعادة ضبط')}</span>
              </button>
            </div>
          </div>
          {/* Crawlable Brand Index Links for Search & AI Discovery */}
          <nav aria-label="Browse by brand" className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs">
            <span className="text-[#8F8B84] font-medium">{pick('Brands:', 'العلامات:')}</span>
            {BRANDS.map((b) => {
              const target = b === 'All' ? sectionPath : `${sectionPath}/${brandToSlug(b)}`;
              const isSelected = make === b;
              return (
                <Link
                  key={b}
                  to={target}
                  className={`transition-colors ${
                    isSelected ? 'text-[#C8A45D] font-semibold' : 'text-[#B4B0A8] hover:text-white'
                  }`}
                >
                  {b === 'All' ? pick('All', 'الكل') : b}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between text-xs text-[#B4B0A8]">
          <span className="font-mono tabular-nums">
            {loading
              ? pick('Loading inventory...', 'جاري تحميل الأسطول...')
              : `${vehicles.length} ${pick(vehicles.length === 1 ? 'vehicle listed' : 'vehicles listed', 'مركبة متاحة')}`}
          </span>
          <span>
            {isShowroom
              ? pick('Multiple trims available · Click any model for full specs & lease quote', 'فئات متعددة متوفرة · اضغط على أي سيارة للتفاصيل وطلب عرض سعر')
              : pick('All used vehicles include complete Jadeer Motors service history', 'جميع السيارات المستعملة تشمل سجل صيانة جدير الكامل')}
          </span>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-950/40 border border-red-500/40 rounded-lg text-sm text-red-200">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-96 bg-[#141418] border border-white/[0.08] rounded-xl animate-pulse" />
            ))}
          </div>
        ) : vehicles.length === 0 ? (
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-12 text-center">
            <h3 className="font-display text-lg font-semibold text-white">
              {pick('No matching vehicles found', 'لم يتم العثور على مركبات مطابقة')}
            </h3>
            <p className="mt-2 text-sm text-[#B4B0A8] max-w-md mx-auto">
              Adjust your filters or submit a custom operational leasing request and our fleet team
              will source the exact specification across Bahrain, Saudi Arabia, or Oman.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-white border border-white/15 rounded-lg bg-[#18181D]"
              >
                {pick('Clear Filters', 'مسح الفلاتر')}
              </button>
              <Link
                to="/quotation"
                className="px-4 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] rounded-lg"
              >
                {pick('Request Custom Sourcing', 'طلب توفير خاص')}
              </Link>
            </div>
          </div>
        ) : (
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => (
              <StaggerItem key={v.id}>
                <VehicleCard vehicle={v} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </section>
    </div>
  );
}
