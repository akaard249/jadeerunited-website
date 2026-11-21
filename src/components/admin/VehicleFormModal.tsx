import { useState, type FormEvent } from 'react';
import { X, Upload } from 'lucide-react';
import { api } from '../../lib/api';
import type { ListingType, Vehicle, VehicleStatus } from '../../types';

const STOCK_IMAGES = [
  { label: 'Land Cruiser VX-R', url: '/assets/jadeer/land-cruiser-vxr.jpg' },
  { label: 'Land Cruiser GR Sport', url: '/assets/jadeer/land-cruiser-gr.jpg' },
  { label: 'Corolla Jadeer Motors', url: '/assets/jadeer/corolla-jadeer.jpg' },
  { label: 'Corolla Cross Hybrid', url: '/assets/jadeer/corolla-cross-hybrid.jpg' },
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
  const [rate, setRate] = useState(vehicle?.price_or_monthly_rate || 250);
  const [currency, setCurrency] = useState(vehicle?.currency || 'BHD');
  const [status, setStatus] = useState<VehicleStatus>(vehicle?.status || 'available');
  const [isFeatured, setIsFeatured] = useState(vehicle?.is_featured ?? false);
  const [countries, setCountries] = useState<string[]>(
    vehicle?.country_availability?.length ? vehicle.country_availability : ['Bahrain', 'Saudi Arabia', 'Oman']
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
      const res = isEdit && vehicle
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
    <div className="fixed inset-0 z-50 bg-black/45 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#E3E5E0] rounded-lg w-full max-w-3xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-[#E3E5E0] px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-bold text-[#1B1F1A]">
              {isEdit ? `Edit Vehicle #${vehicle?.id}` : 'Add New Vehicle'}
            </h2>
            <p className="text-xs text-[#5E6B5B]">
              Manage Showroom operational leasing fleet or Jadeer Motors certified used inventory.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md text-[#4D544C] hover:bg-[#F1F2EE]"
            aria-label="Close vehicle form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-800">
              {error}
            </div>
          )}

          {/* Listing Type Toggle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                Inventory Section *
              </label>
              <div className="flex gap-1 p-1 bg-[#F1F2EE] rounded-md">
                {(['showroom', 'used'] as const).map((lt) => (
                  <button
                    key={lt}
                    type="button"
                    onClick={() => setListingType(lt)}
                    className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors ${
                      listingType === lt
                        ? 'bg-[#3A4338] text-white'
                        : 'text-[#4D544C] hover:text-[#1B1F1A]'
                    }`}
                  >
                    {lt === 'showroom' ? 'Showroom (Lease / New)' : 'Used Cars'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Status *</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as VehicleStatus)}
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
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
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Make *</label>
              <input
                type="text"
                required
                value={make}
                onChange={(e) => setMake(e.target.value)}
                placeholder="Toyota"
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Model *</label>
              <input
                type="text"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Land Cruiser VX-R"
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Year *</label>
              <input
                type="number"
                min={2010}
                max={2028}
                required
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#D8DBD4] rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
              >
                {['SUV', 'Sedan', 'Fleet', 'Hybrid', 'Limousine', 'Commercial'].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Fuel Type *</label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
              >
                {['Hybrid', 'Petrol', 'Diesel', 'Twin-Turbo V6', 'Electric'].map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Transmission *</label>
              <select
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
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
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                {listingType === 'showroom' ? 'Monthly Lease Rate *' : 'Sale Price *'}
              </label>
              <input
                type="number"
                min={1}
                step="1"
                required
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#D8DBD4] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
              >
                <option value="BHD">BHD</option>
                <option value="SAR">SAR</option>
                <option value="OMR">OMR</option>
              </select>
            </div>
            {listingType === 'used' ? (
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Mileage (km)
                </label>
                <input
                  type="number"
                  min={0}
                  value={mileageKm}
                  onChange={(e) => setMileageKm(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#D8DBD4] rounded-md"
                />
              </div>
            ) : (
              <div className="flex items-end pb-2">
                <label className="inline-flex items-center gap-2 text-sm text-[#1B1F1A] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="h-4 w-4 accent-[#3A4338]"
                  />
                  <span>Feature on Home Page</span>
                </label>
              </div>
            )}
          </div>

          {listingType === 'used' && (
            <div>
              <label className="inline-flex items-center gap-2 text-sm text-[#1B1F1A] cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="h-4 w-4 accent-[#3A4338]"
                />
                <span>Feature on Home Page</span>
              </label>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
              GCC Country Availability *
            </label>
            <div className="flex flex-wrap gap-4">
              {COUNTRIES.map((c) => (
                <label key={c} className="inline-flex items-center gap-2 text-sm text-[#1B1F1A] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={countries.includes(c)}
                    onChange={() => toggleCountry(c)}
                    className="h-4 w-4 accent-[#3A4338]"
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Image Upload or Jadeer Asset Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#ECEEE9]">
            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                Upload Vehicle Photo (JPG / PNG / WEBP, max 5MB)
              </label>
              <label className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium text-[#3A4338] border border-dashed border-[#BFC4BA] rounded-md cursor-pointer hover:bg-[#F8F8F6]">
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
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                Or Select Verified Fleet Photo
              </label>
              <select
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImageFile(null);
                }}
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
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
            <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Description *</label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Summarize fleet readiness, ideal operating environments, and included maintenance..."
              className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
              Safety &amp; Telematics Specifications (one per line)
            </label>
            <textarea
              rows={4}
              value={specsText}
              onChange={(e) => setSpecsText(e.target.value)}
              className="w-full px-3 py-2 text-sm font-mono border border-[#D8DBD4] rounded-md"
            />
          </div>

          <div className="pt-4 border-t border-[#ECEEE9] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[#4D544C] bg-[#F8F8F6] border border-[#D8DBD4] rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] disabled:opacity-60 rounded-md"
            >
              {saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Vehicle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
