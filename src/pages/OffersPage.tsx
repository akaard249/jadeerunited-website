import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { api } from '../lib/api';
import type { Offer } from '../types';
import { VehicleImage } from '../components/BrandMark';

export function OffersPage() {
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
    <div className="bg-[#F8F8F6] min-h-[70vh]">
      <section className="bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <p className="text-sm font-medium text-[#7B6C53]">Promotional &amp; Corporate Fleet Packages</p>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1F1A]">
            Active Leasing &amp; Rental Offers
          </h1>
          <p className="mt-3 text-sm text-[#4D544C] max-w-2xl leading-relaxed">
            Structured fleet programs across Bahrain, Saudi Arabia, and Oman designed for Vision
            2030 hybrid transitions, EPC project mobilizations, executive retainers, and certified
            used acquisitions.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 space-y-6">
        {loading ? (
          <div className="space-y-6">
            {[1, 2].map((n) => (
              <div key={n} className="h-64 bg-white border border-[#E3E5E0] rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          offers.map((offer) => (
            <article
              key={offer.id}
              className="bg-white border border-[#E3E5E0] rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              <div className="lg:col-span-4 bg-[#282F27] min-h-[240px]">
                <VehicleImage
                  src={offer.image_url}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                  objectPosition={offer.image_url.includes('land-cruiser-gr') ? 'object-bottom' : 'object-center'}
                />
              </div>

              <div className="lg:col-span-8 p-7 lg:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#5E6B5B]">
                    <span>
                      {offer.category} · {offer.countries.join(' / ')}
                    </span>
                    <span className="font-mono tabular-nums">Valid until {offer.valid_until}</span>
                  </div>

                  <h2 className="mt-2 font-display text-2xl font-bold text-[#1B1F1A]">
                    {offer.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#4D544C] leading-relaxed">{offer.description}</p>

                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {offer.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#1B1F1A]">
                        <Check className="h-4 w-4 text-[#3A4338] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#ECEEE9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    {offer.monthly_rate_from && (
                      <>
                        <div className="text-xs text-[#5E6B5B]">
                          {offer.category === 'Used Car Sales'
                            ? 'Certified fleet units starting from'
                            : 'Corporate package starting from'}
                        </div>
                        <div className="font-mono tabular-nums text-xl font-bold text-[#1B1F1A]">
                          {offer.currency} {offer.monthly_rate_from.toLocaleString()}
                          {offer.category !== 'Used Car Sales' && (
                            <span className="text-xs font-sans font-normal text-[#5E6B5B]"> / month</span>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  <Link
                    to={`/quotation?offer=${offer.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Request Offer Quotation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
