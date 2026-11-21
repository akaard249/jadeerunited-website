import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Vehicle } from '../types';
import { VehicleImage } from './BrandMark';

const STATUS_LABEL: Record<Vehicle['status'], string> = {
  available: 'Available',
  reserved: 'Reserved',
  leased: 'Leased',
  sold: 'Sold',
};

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const detailPath =
    vehicle.listing_type === 'showroom' ? `/showroom/${vehicle.id}` : `/used-cars/${vehicle.id}`;
  const isLease = vehicle.listing_type === 'showroom';
  const objectPosition = vehicle.image_url.includes('land-cruiser-gr')
    ? 'object-bottom'
    : 'object-center';

  return (
    <article className="group bg-white border border-[#E3E5E0] rounded-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5">
      <Link to={detailPath} className="block aspect-[4/3] bg-[#282F27] overflow-hidden relative">
        <VehicleImage
          src={vehicle.image_url}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          objectPosition={objectPosition}
        />
      </Link>

      <div className="p-5 flex-1 flex flex-col">
        {/* Clean unboxed metadata (Zero-Pill discipline) */}
        <div className="flex items-center justify-between gap-2 text-xs text-[#5E6B5B]">
          <span className="truncate">
            {vehicle.year} · {vehicle.category} · {vehicle.fuel_type}
          </span>
          <span
            className={`font-medium shrink-0 ${
              vehicle.status === 'available'
                ? 'text-[#15803D]'
                : vehicle.status === 'reserved'
                  ? 'text-[#B45309]'
                  : 'text-[#64748B]'
            }`}
          >
            {STATUS_LABEL[vehicle.status]}
          </span>
        </div>

        <Link to={detailPath} className="mt-2 block">
          <h3 className="font-display text-lg font-semibold text-[#1B1F1A] group-hover:text-[#3A4338] transition-colors leading-snug">
            {vehicle.make} {vehicle.model}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-[#4D544C] line-clamp-2 leading-relaxed">
          {vehicle.description}
        </p>

        <div className="mt-4 pt-4 border-t border-[#ECEEE9] flex items-end justify-between gap-3">
          <div>
            <div className="text-xs text-[#5E6B5B]">
              {isLease ? 'Operational lease from' : 'Certified purchase price'}
            </div>
            <div className="font-mono tabular-nums text-base font-semibold text-[#1B1F1A] mt-0.5">
              {vehicle.currency} {vehicle.price_or_monthly_rate.toLocaleString()}
              {isLease && <span className="text-xs font-sans font-normal text-[#5E6B5B]"> / mo</span>}
            </div>
          </div>

          <Link
            to={detailPath}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A] whitespace-nowrap shrink-0"
          >
            <span>Details</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-3 text-xs text-[#6B7369] truncate">
          {vehicle.country_availability.join(' / ')}
          {!isLease && vehicle.mileage_km > 0 && (
            <> · {vehicle.mileage_km.toLocaleString()} km</>
          )}
        </div>
      </div>
    </article>
  );
}
