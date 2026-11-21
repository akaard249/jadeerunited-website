import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { api } from '../lib/api';
import type { ListingType, Vehicle } from '../types';
import { VehicleImage } from '../components/BrandMark';
import { VehicleCard } from '../components/VehicleCard';

export function VehicleDetailPage({ listingType }: { listingType: ListingType }) {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [related, setRelated] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    const numId = Number(id);
    if (!Number.isInteger(numId) || numId <= 0) {
      setError('Invalid vehicle reference.');
      setLoading(false);
      return;
    }

    api
      .getVehicle(numId)
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

    return () => {
      active = false;
    };
  }, [id]);

  const backPath = listingType === 'showroom' ? '/showroom' : '/used-cars';
  const backLabel = listingType === 'showroom' ? 'Back to Showroom' : 'Back to Used Cars';

  if (loading) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
        <div className="h-96 bg-white border border-[#E3E5E0] rounded-lg animate-pulse" />
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-[#1B1F1A]">Vehicle not available</h1>
        <p className="mt-2 text-sm text-[#4D544C]">{error || 'This listing could not be found.'}</p>
        <Link
          to={backPath}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#3A4338] rounded-md"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{backLabel}</span>
        </Link>
      </div>
    );
  }

  const isLease = vehicle.listing_type === 'showroom';
  const objectPosition = vehicle.image_url.includes('land-cruiser-gr')
    ? 'object-bottom'
    : 'object-center';

  return (
    <div className="bg-[#F8F8F6]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <Link
          to={backPath}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4D544C] hover:text-[#1B1F1A] mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{backLabel}</span>
        </Link>

        {/* Contiguous PDP Layout: Media Left, Spec & Quote Module Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[16/10] rounded-lg overflow-hidden bg-[#282F27] border border-[#E3E5E0]">
              <VehicleImage
                src={vehicle.image_url}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                className="w-full h-full object-cover"
                objectPosition={objectPosition}
              />
            </div>

            <div className="bg-white border border-[#E3E5E0] rounded-lg p-7 space-y-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-[#1B1F1A]">
                  Fleet Overview &amp; Operational Readiness
                </h2>
                <p className="mt-3 text-sm text-[#4D544C] leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#ECEEE9]">
                <h3 className="font-display text-base font-semibold text-[#1B1F1A]">
                  Safety, Telematics &amp; Service Specifications
                </h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.safety_telematics_specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-sm text-[#4D544C]">
                      <Check className="h-4 w-4 text-[#3A4338] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Contiguous Quote & Specification Module */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 bg-white border border-[#E3E5E0] rounded-lg p-7 space-y-6">
            <div>
              <div className="text-xs text-[#5E6B5B]">
                {isLease ? 'Showroom · Operational Leasing' : 'Jadeer Motors · Certified Used'} ·{' '}
                {vehicle.year} · {vehicle.category}
              </div>
              <h1 className="mt-2 font-display text-2xl lg:text-3xl font-bold tracking-tight text-[#1B1F1A]">
                {vehicle.make} {vehicle.model}
              </h1>
            </div>

            <div className="py-5 border-y border-[#ECEEE9] flex items-baseline justify-between gap-4">
              <div>
                <div className="text-xs text-[#5E6B5B]">
                  {isLease ? 'Estimated operational lease' : 'Certified purchase price'}
                </div>
                <div className="mt-1 font-mono tabular-nums text-2xl font-bold text-[#1B1F1A]">
                  {vehicle.currency} {vehicle.price_or_monthly_rate.toLocaleString()}
                  {isLease && <span className="text-sm font-sans font-normal text-[#5E6B5B]"> / month</span>}
                </div>
              </div>
              <div
                className={`text-xs font-medium capitalize ${
                  vehicle.status === 'available'
                    ? 'text-[#15803D]'
                    : vehicle.status === 'reserved'
                      ? 'text-[#B45309]'
                      : 'text-[#64748B]'
                }`}
              >
                Status: {vehicle.status}
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div>
                <dt className="text-xs text-[#5E6B5B]">Model Year</dt>
                <dd className="mt-0.5 font-mono tabular-nums font-medium text-[#1B1F1A]">
                  {vehicle.year}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#5E6B5B]">Powertrain</dt>
                <dd className="mt-0.5 font-medium text-[#1B1F1A]">{vehicle.fuel_type}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#5E6B5B]">Transmission</dt>
                <dd className="mt-0.5 font-medium text-[#1B1F1A]">{vehicle.transmission}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#5E6B5B]">Category</dt>
                <dd className="mt-0.5 font-medium text-[#1B1F1A]">{vehicle.category}</dd>
              </div>
              {!isLease && (
                <div>
                  <dt className="text-xs text-[#5E6B5B]">Verified Mileage</dt>
                  <dd className="mt-0.5 font-mono tabular-nums font-medium text-[#1B1F1A]">
                    {vehicle.mileage_km.toLocaleString()} km
                  </dd>
                </div>
              )}
              <div className="col-span-2">
                <dt className="text-xs text-[#5E6B5B]">Regional Availability</dt>
                <dd className="mt-0.5 font-medium text-[#1B1F1A]">
                  {vehicle.country_availability.join(' · ')}
                </dd>
              </div>
            </dl>

            <div className="pt-2 space-y-3">
              <Link
                to={`/quotation?vehicle=${vehicle.id}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md transition-colors"
              >
                <span>{isLease ? 'Request Lease Quote' : 'Request Purchase Inquiry'}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#1B1F1A] bg-[#F8F8F6] hover:bg-[#ECEEE9] border border-[#D8DBD4] rounded-md transition-colors"
              >
                Speak with GCC Branch Desk
              </Link>
            </div>

            <p className="text-xs text-[#5E6B5B] leading-relaxed">
              Operational lease packages include manufacturer-schedule maintenance, 700+ B2B quick
              service facilities, comprehensive GCC insurance, replacement vehicles, and 24/7 mobile
              support.
            </p>
          </aside>
        </div>

        {/* Related Vehicles */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E3E5E0]">
            <h2 className="font-display text-2xl font-bold text-[#1B1F1A] mb-6">
              More {isLease ? 'Showroom Fleet' : 'Certified Used'} Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <VehicleCard key={item.id} vehicle={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
