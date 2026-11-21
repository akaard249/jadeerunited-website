import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { X, Upload } from 'lucide-react';
import { api } from '../../lib/api';
import type { ListingType, Vehicle, VehicleStatus } from '../../types';
import { EASE_LUXURY } from '../MotionPrimitives';

const STOCK_IMAGES = [
  { label: 'Toyota Land Cruiser Studio', url: '/assets/jadeer/land-cruiser-studio.jpg' },
  { label: 'Nissan Patrol Studio', url: '/assets/jadeer/patrol-studio.jpg' },
  { label: 'Toyota Camry Studio', url: '/assets/jadeer/camry-studio.jpg' },
  { label: 'Toyota Corolla Studio', url: '/assets/jadeer/corolla-studio.jpg' },
  { label: 'Toyota Urban Cruiser Studio', url: '/assets/jadeer/urban-cruiser-studio.jpg' },
  { label: 'Toyota Highlander Hybrid Studio', url: '/assets/jadeer/highlander-studio.jpg' },
  { label: 'Toyota Land Cruiser Prado Studio', url: '/assets/jadeer/prado-studio.jpg' },
  { label: 'Toyota RAV4 Hybrid Studio', url: '/assets/jadeer/rav4-studio.jpg' },
  { label: 'Toyota Fortuner Studio', url: '/assets/jadeer/fortuner-studio.jpg' },
  { label: 'Toyota Hilux Pickup Studio', url: '/assets/jadeer/hilux-studio.jpg' },
  { label: 'Toyota Hiace Van Studio', url: '/assets/jadeer/hiace-studio.jpg' },
  { label: 'Toyota Coaster Bus Studio', url: '/assets/jadeer/coaster-studio.jpg' },
  { label: 'Chevrolet Tahoe / Yukon Studio', url: '/assets/jadeer/tahoe-studio.jpg' },
  { label: 'Hyundai Sonata / Sedan Studio', url: '/assets/jadeer/sonata-studio.jpg' },
  { label: 'Hyundai Palisade SUV Studio', url: '/assets/jadeer/palisade-studio.jpg' },
  { label: 'Nissan X-Trail Studio', url: '/assets/jadeer/xtrail-studio.jpg' },
  { label: 'Land Cruiser VX-R (Jadeer Fleet)', url: '/assets/jadeer/land-cruiser-vxr.jpg' },
  { label: 'Land Cruiser GR Sport (Jadeer Fleet)', url: '/assets/jadeer/land-cruiser-gr.jpg' },
  { label: 'Corolla (Jadeer Motors)', url: '/assets/jadeer/corolla-jadeer.jpg' },
  { label: 'Corolla Cross Hybrid (Jadeer Fleet)', url: '/assets/jadeer/corolla-cross-hybrid.jpg' },
];

const COUNTRIES = ['Bahrain', 'Saudi Arabia', 'Oman'];

export function VehicleFormModal({
  vehicle,
  onClose,
  onSaved,
}: {
  vehicle: Vehicle | null;
  onClose: () => void;
  onSaved: (v: Vehicle) => void;
}) {
  const isEdit = Boolean(vehicle);

  const [make, setMake] = useState(vehicle?.make || 'Toyota');
  const [model, setModel] = useState(vehicle?.model || '');
  const [year, setYear] = useState(vehicle?.year || 2026);
  const [category, setCategory] = useState(vehicle?.category || 'SUV');
  const [listingType, setListingType] = useState<ListingType>(vehicle?.listing_type || 'showroom');
  const [fuelType, setFuelType] = useState(vehicle?.fuel_type || 'Hybrid');
  const [transmission, setTransmission] = useState(vehicle?.transmission || 'Automatic');
  const [mileageKm, setMileageKm] = useState(vehicle?.mileage_km || 0);
  const [rate, setRate] = useState(vehicle?.price_or_monthly_rate || 95000);
  const [currency, setCurrency] = useState(vehicle?.currency || 'SAR');
  const [status, setStatus] = useState<VehicleStatus>(vehicle?.status || 'available');
  const [isFeatured, setIsFeatured] = useState(vehicle?.is_featured ?? false);
  const [countries, setCountries] = useState<string[]>(
    vehicle?.country_availability?.length
      ? vehicle.country_availability
      : ['Bahrain', 'Saudi Arabia', 'Oman']
  );
  const [imageUrl, setImageUrl] = useState(vehicle?.image_url || STOCK_IMAGES[0].url);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [description, setDescription] = useState(vehicle?.description || '');
  const [specsText, setSpecsText] = useState(
    vehicle?.safety_telematics_specs?.join('\n') ||
      'GPS Vehicle Tracking & Fleet Telematics\nBlue Key Driver Access Control\nManufacturer-Schedule Maintenance & Spare Parts'
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const toggleCountry = (c: string) => {
    setCountries((prev) =>
      prev.includes(c) ? prev.filter((item) => item !== c) : [...prev, c]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (countries.length === 0) {
      setError('Select at least one country of availability.');
      return;
    }

    const fd = new FormData();
    fd.append('make', make.trim());
    fd.append('model', model.trim());
    fd.append('year', String(year));
    fd.append('category', category);
    fd.append('listing_type', listingType);
    fd.append('fuel_type', fuelType);
    fd.append('transmission', transmission);
    fd.append('mileage_km', String(listingType === 'showroom' ? 0 : mileageKm));
    fd.append('price_or_monthly_rate', String(rate));
    fd.append('currency', currency);
    fd.append('status', status);
    fd.append('is_featured', isFeatured ? '1' : '0');
    fd.append('country_availability', JSON.stringify(countries));
    fd.append('description', description.trim());
    fd.append('safety_telematics_specs', specsText);
    if (imageFile) {
      fd.append('image', imageFile);
    } else if (imageUrl) {
      fd.append('image_url', imageUrl);
    }

    setSaving(true);
    try {
      const res =
        isEdit && vehicle
          ? await api.updateAdminVehicle(vehicle.id, fd)
          : await api.createAdminVehicle(fd);
      onSaved(res.vehicle);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save vehicle.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: EASE_LUXURY }}
        className="bg-[#141418] border border-white/10 rounded-xl w-full max-w-3xl max-h-[92vh] overflow-y-auto text-[#E4E0D8]"
      >
        <div className="sticky top-0 bg-[#141418] border-b border-white/[0.08] px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="font-display text-lg font-bold text-white">
              {isEdit ? `Edit Vehicle #${vehicle?.id}` : 'Add New Vehicle'}
            </h2>
            <p className="text-xs text-[#B4B0A8]">
              Manage Showroom operational leasing fleet or Jadeer Motors certified used inventory.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-[#B4B0A8] hover:text-white hover:bg-white/10"
            aria-label="Close vehicle form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="p-3 bg-red-950/50 border border-red-500/40 rounded-lg text-sm text-red-200">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                INVENTORY SECTION *
              </label>
              <div className="flex gap-1 p-1 bg-[#0C0C0F] border border-white/10 rounded-lg">
                {(['showroom', 'used'] as const).map((lt) => (
                  <button
                    key={lt}
                    type="button"
                    onClick={() => setListingType(lt)}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      listingType === lt
                        ? 'bg-[#C8A45D] text-[#0B0B0D]'
                        : 'text-[#B4B0A8] hover:text-white'
                    }`}
                  >
                    {lt === 'showroom' ? 'Showroom (Lease / New)' : 'Used Cars'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                STATUS *
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as VehicleStatus)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                <option value="available">Available</option>
                <option value="reserved">Reserved</option>
                <option value="leased">Leased</option>
                <option value="sold">Sold</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                MAKE *
              </label>
              <input
                type="text"
                required
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                MODEL *
              </label>
              <input
                type="text"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                YEAR *
              </label>
              <input
                type="number"
                min={2010}
                max={2028}
                required
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                CATEGORY *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                {['SUV', 'Sedan', 'Hybrid', 'Pick-Up', 'Bus', 'Cross-Over', 'Fleet', 'Limousine', 'Commercial'].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                FUEL TYPE *
              </label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                {['Hybrid', 'Petrol', 'Diesel', 'Twin-Turbo V6', 'Electric'].map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                TRANSMISSION *
              </label>
              <select
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                {['Automatic', 'CVT Automatic', 'Manual'].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                {listingType === 'showroom' ? 'MONTHLY LEASE RATE *' : 'SALE PRICE *'}
              </label>
              <input
                type="number"
                min={1}
                step="1"
                required
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                CURRENCY
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                <option value="BHD">BHD</option>
                <option value="SAR">SAR</option>
                <option value="OMR">OMR</option>
              </select>
            </div>
            {listingType === 'used' ? (
              <div>
                <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                  MILEAGE (KM)
                </label>
                <input
                  type="number"
                  min={0}
                  value={mileageKm}
                  onChange={(e) => setMileageKm(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            ) : (
              <div className="flex items-end pb-2">
                <label className="inline-flex items-center gap-2 text-sm text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="h-4 w-4 accent-[#C8A45D]"
                  />
                  <span>Feature on Home Page</span>
                </label>
              </div>
            )}
          </div>

          {listingType === 'used' && (
            <div>
              <label className="inline-flex items-center gap-2 text-sm text-white cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="h-4 w-4 accent-[#C8A45D]"
                />
                <span>Feature on Home Page</span>
              </label>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
              GCC COUNTRY AVAILABILITY *
            </label>
            <div className="flex flex-wrap gap-4">
              {COUNTRIES.map((c) => (
                <label key={c} className="inline-flex items-center gap-2 text-sm text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={countries.includes(c)}
                    onChange={() => toggleCountry(c)}
                    className="h-4 w-4 accent-[#C8A45D]"
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/[0.08]">
            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                UPLOAD PHOTO (JPG / PNG / WEBP, MAX 5MB)
              </label>
              <label className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium text-[#C8A45D] border border-dashed border-white/20 rounded-lg cursor-pointer hover:border-[#C8A45D] bg-[#0C0C0F]">
                <Upload className="h-4 w-4" />
                <span className="truncate">{imageFile ? imageFile.name : 'Choose image file...'}</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                OR SELECT VERIFIED FLEET PHOTO
              </label>
              <select
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImageFile(null);
                }}
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              >
                {STOCK_IMAGES.map((img) => (
                  <option key={img.url} value={img.url}>
                    {img.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
              DESCRIPTION *
            </label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
              SAFETY &amp; TELEMATICS SPECIFICATIONS (ONE PER LINE)
            </label>
            <textarea
              rows={4}
              value={specsText}
              onChange={(e) => setSpecsText(e.target.value)}
              className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
            />
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[#D4D4DC] bg-[#1B1B20] border border-white/10 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
            >
              {saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Vehicle'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
