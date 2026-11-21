import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Vehicle } from '../types';
import { VehicleImage } from './BrandMark';
import { GoldGlowCard } from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

const STATUS_LABEL: Record<Vehicle['status'], { en: string; ar: string }> = {
  available: { en: 'Available', ar: 'متاح' },
  reserved: { en: 'Reserved', ar: 'محجوز' },
  leased: { en: 'Leased', ar: 'مؤجر' },
  sold: { en: 'Sold', ar: 'تم البيع' },
};

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { pick } = useLanguage();
  const detailPath =
    vehicle.listing_type === 'showroom' ? `/showroom/${vehicle.id}` : `/used-cars/${vehicle.id}`;
  const isShowroom = vehicle.listing_type === 'showroom';
  const objectPosition = vehicle.image_url.includes('land-cruiser-gr')
    ? 'object-bottom'
    : 'object-center';

  const specSummary = [
    vehicle.specs?.engine_capacity,
    vehicle.specs?.horsepower,
    vehicle.trims && vehicle.trims.length > 0 ? `${vehicle.trims.length} ${pick('trims', 'فئات')}` : null,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <GoldGlowCard className="group flex flex-col h-full">
      <Link to={detailPath} className="block aspect-[16/10] bg-[#151519] overflow-hidden relative">
        <VehicleImage
          src={vehicle.image_url}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          objectPosition={objectPosition}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#141418] via-[#141418]/35 to-transparent" />
      </Link>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 text-xs text-[#B4B0A8]">
          <span className="truncate">
            {vehicle.year} · {vehicle.category} · {vehicle.fuel_type}
          </span>
          <span
            className={`font-medium shrink-0 ${
              vehicle.status === 'available'
                ? 'text-[#4ADE80]'
                : vehicle.status === 'reserved'
                  ? 'text-[#FBBF24]'
                  : 'text-[#B4B0A8]'
            }`}
          >
            {pick(STATUS_LABEL[vehicle.status].en, STATUS_LABEL[vehicle.status].ar)}
          </span>
        </div>

        <Link to={detailPath} className="mt-2 block">
          <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#DCBC7A] transition-colors leading-snug">
            {vehicle.make} {vehicle.model}
          </h3>
        </Link>

        {specSummary && (
          <div className="mt-1.5 tabular-nums text-[13px] text-[#D2B475] truncate">
            {specSummary}
          </div>
        )}

        <p className="mt-2 text-sm text-[#B4B0A8] line-clamp-2 leading-relaxed">
          {vehicle.description}
        </p>

        <div className="mt-auto pt-4">
          <div className="pt-4 border-t border-white/[0.08] flex items-end justify-between gap-3">
            <div>
              <div className="text-xs text-[#949088]">
                {isShowroom
                  ? pick('Starting MSRP / Lease Base', 'السعر الابتدائي / أساس التأجير')
                  : pick('Certified cash price', 'سعر الشراء المعتمد')}
              </div>
              <div className="font-display tabular-nums text-[17px] font-medium text-[#D6B778] mt-0.5">
                {vehicle.currency} {vehicle.price_or_monthly_rate.toLocaleString()}
              </div>
            </div>

            <Link
              to={detailPath}
              className="inline-flex items-center gap-1 text-sm font-medium text-[#E4E0D8] group-hover:text-[#D6B778] transition-colors whitespace-nowrap shrink-0"
            >
              <span>{pick('Details', 'التفاصيل')}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-3 text-xs text-[#949088] truncate">
            {vehicle.country_availability.join(' / ')}
            {!isShowroom && vehicle.mileage_km > 0 && (
              <> · {vehicle.mileage_km.toLocaleString()} km</>
            )}
          </div>
        </div>
      </div>
    </GoldGlowCard>
  );
}
