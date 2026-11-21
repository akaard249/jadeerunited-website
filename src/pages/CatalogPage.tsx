import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, RotateCcw } from 'lucide-react';
import { api } from '../lib/api';
import type { ListingType, Vehicle } from '../types';
import { VehicleCard } from '../components/VehicleCard';

const SHOWROOM_CATEGORIES = ['All', 'SUV', 'Sedan', 'Fleet', 'Hybrid'];
const COUNTRIES = ['All', 'Bahrain', 'Saudi Arabia', 'Oman'];
const FUEL_TYPES = ['All', 'Hybrid', 'Petrol', 'Diesel', 'Twin-Turbo V6'];
const TRANSMISSIONS = ['All', 'Automatic', 'CVT Automatic', 'Manual'];

export function CatalogPage({ listingType }: { listingType: ListingType }) {
  const isShowroom = listingType === 'showroom';
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [country, setCountry] = useState('All');
  const [fuelType, setFuelType] = useState('All');
  const [transmission, setTransmission] = useState('All');
  const [year, setYear] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setCategory('All');
    setCountry('All');
    setFuelType('All');
    setTransmission('All');
    setYear('All');
    setMaxPrice('');
    setSearch('');
  }, [listingType]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');

    const timer = setTimeout(() => {
      api
        .getVehicles({
          listing_type: listingType,
          category,
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
  }, [listingType, category, country, fuelType, transmission, year, maxPrice, search]);

  const resetFilters = () => {
    setSearch('');
    setCategory('All');
    setCountry('All');
    setFuelType('All');
    setTransmission('All');
    setYear('All');
    setMaxPrice('');
  };

  return (
    <div className="bg-[#F8F8F6] min-h-[70vh]">
      {/* Page Header */}
      <section className="bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#7B6C53]">
                {isShowroom ? 'Operational Leasing & New Fleet Catalog' : 'Jadeer United Motors Certified Pre-Owned'}
              </p>
              <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1F1A]">
                {isShowroom ? 'Showroom Fleet' : 'Curated Used Cars'}
              </h1>
              <p className="mt-3 text-sm text-[#4D544C] leading-relaxed">
                {isShowroom
                  ? 'New and operational leasing vehicles available across Bahrain, Saudi Arabia, and Oman with manufacturer maintenance, GPS tracking, Blue Key control, and optional USA-standard roll cages.'
                  : 'Manufacturer-maintained ex-corporate vehicles inspected across 120 checkpoints with complete service history and transparent GCC registration.'}
              </p>
            </div>
            <Link
              to="/quotation"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              {isShowroom ? 'Request Custom Fleet Quote' : 'Inquire About Used Fleet'}
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Interactive Category Segmented Filter */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F1F2EE] rounded-lg w-fit">
              {SHOWROOM_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    category === cat
                      ? 'bg-[#3A4338] text-white'
                      : 'text-[#4D544C] hover:text-[#1B1F1A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="h-4 w-4 text-[#6B7369] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search make, model, or spec..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8F8F6] border border-[#D8DBD4] rounded-md text-[#1B1F1A] placeholder:text-[#7A8278] focus:outline-none focus:border-[#3A4338] focus:bg-white"
              />
            </div>
          </div>

          {/* Secondary Structured Filters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-1">
            <div>
              <label className="block text-xs text-[#5E6B5B] mb-1">Country Availability</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#D8DBD4] rounded-md text-[#1B1F1A] focus:outline-none focus:border-[#3A4338]"
              >
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All GCC Markets' : c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-[#5E6B5B] mb-1">Fuel / Powertrain</label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#D8DBD4] rounded-md text-[#1B1F1A] focus:outline-none focus:border-[#3A4338]"
              >
                {FUEL_TYPES.map((f) => (
                  <option key={f} value={f}>
                    {f === 'All' ? 'All Fuel Types' : f}
                  </option>
                ))}
              </select>
            </div>

            {!isShowroom && (
              <>
                <div>
                  <label className="block text-xs text-[#5E6B5B] mb-1">Transmission</label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D8DBD4] rounded-md text-[#1B1F1A] focus:outline-none focus:border-[#3A4338]"
                  >
                    {TRANSMISSIONS.map((t) => (
                      <option key={t} value={t}>
                        {t === 'All' ? 'All Transmissions' : t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#5E6B5B] mb-1">Model Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D8DBD4] rounded-md text-[#1B1F1A] focus:outline-none focus:border-[#3A4338]"
                  >
                    {['All', '2025', '2024', '2023', '2022', '2021'].map((y) => (
                      <option key={y} value={y}>
                        {y === 'All' ? 'Any Year' : y}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#5E6B5B] mb-1">Max Price (BHD)</label>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="e.g. 15000"
                    className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-white border border-[#D8DBD4] rounded-md text-[#1B1F1A] focus:outline-none focus:border-[#3A4338]"
                  />
                </div>
              </>
            )}

            <div className="flex items-end">
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#4D544C] hover:text-[#1B1F1A] border border-[#D8DBD4] bg-[#F8F8F6] rounded-md whitespace-nowrap"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between text-xs text-[#5E6B5B]">
          <span className="font-mono tabular-nums">
            {loading ? 'Loading inventory...' : `${vehicles.length} vehicle${vehicles.length === 1 ? '' : 's'} listed`}
          </span>
          <span>
            {isShowroom
              ? 'All lease rates include scheduled maintenance & GCC insurance'
              : 'All used vehicles include complete Jadeer Motors service history'}
          </span>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-50 border border-red-200 rounded-md text-sm text-red-800">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 bg-white border border-[#E3E5E0] rounded-lg animate-pulse" />
            ))}
          </div>
        ) : vehicles.length === 0 ? (
          <div className="bg-white border border-[#E3E5E0] rounded-lg p-12 text-center">
            <h3 className="font-display text-lg font-semibold text-[#1B1F1A]">
              No matching vehicles found
            </h3>
            <p className="mt-2 text-sm text-[#4D544C] max-w-md mx-auto">
              Adjust your filters or submit a custom operational leasing request and our fleet team
              will source the exact specification across Bahrain, Saudi Arabia, or Oman.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-[#1B1F1A] border border-[#D8DBD4] rounded-md bg-[#F8F8F6]"
              >
                Clear Filters
              </button>
              <Link
                to="/quotation"
                className="px-4 py-2 text-sm font-medium text-white bg-[#3A4338] rounded-md"
              >
                Request Custom Sourcing
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
