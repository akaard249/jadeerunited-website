import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { api } from '../lib/api';
import { BRAND } from '../data/brand';
import type { Offer, QuotationAddOns, QuotationRequestRecord, Vehicle } from '../types';

const ADD_ON_OPTIONS: Array<{ key: keyof QuotationAddOns; label: string; detail: string }> = [
  {
    key: 'tracking_blue_key',
    label: 'GPS Vehicle Tracking & Blue Key Access Control',
    detail: 'Authorized driver immobilizer, trip telemetry, and fleet usage reporting.',
  },
  {
    key: 'usa_roll_bars_cages',
    label: 'USA-Standard Roll Bars & Roll Cages',
    detail: 'Certified rollover protection for energy, desert, and EPC project sites.',
  },
  {
    key: 'replacement_vehicle',
    label: 'Guaranteed Replacement Vehicle',
    detail: 'Immediate replacement dispatch during scheduled maintenance, breakdown, or accident.',
  },
  {
    key: 'hybrid_preference',
    label: 'Vision 2030 Hybrid Fleet Preference',
    detail: 'Prioritize low-emission self-charging hybrid vehicles for ESG targets.',
  },
  {
    key: 'driver_service',
    label: 'Dedicated Professional Driver Service',
    detail: 'Vetted corporate chauffeurs and cross-border Bahrain–KSA drivers.',
  },
  {
    key: 'limousine_service',
    label: 'Executive Limousine Service',
    detail: 'VIP executive transport for board delegations and corporate events.',
  },
];

export function QuotationPage() {
  const [searchParams] = useSearchParams();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [clientType, setClientType] = useState<'corporate' | 'individual'>('corporate');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState<'Bahrain' | 'Saudi Arabia' | 'Oman'>('Bahrain');
  const [city, setCity] = useState('');
  const [vehicleId, setVehicleId] = useState<string>(searchParams.get('vehicle') || '');
  const [offerId, setOfferId] = useState<string>(searchParams.get('offer') || '');
  const [fleetQuantity, setFleetQuantity] = useState(1);
  const [leaseTermMonths, setLeaseTermMonths] = useState(36);
  const [addOns, setAddOns] = useState<QuotationAddOns>({
    driver_service: false,
    limousine_service: false,
    replacement_vehicle: true,
    tracking_blue_key: true,
    usa_roll_bars_cages: false,
    hybrid_preference: false,
  });
  const [notes, setNotes] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState<{
    message: string;
    quotation: QuotationRequestRecord;
  } | null>(null);

  useEffect(() => {
    Promise.all([api.getVehicles(), api.getOffers()])
      .then(([vRes, oRes]) => {
        setVehicles(vRes.vehicles);
        setOffers(oRes.offers);
      })
      .catch(() => {});
  }, []);

  const toggleAddOn = (key: keyof QuotationAddOns) => {
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const res = await api.submitQuotation({
        full_name: fullName,
        company_name: companyName,
        client_type: clientType,
        email,
        phone,
        country,
        city,
        vehicle_id: vehicleId ? Number(vehicleId) : null,
        offer_id: offerId ? Number(offerId) : null,
        fleet_quantity: Number(fleetQuantity),
        lease_term_months: Number(leaseTermMonths),
        add_ons: addOns,
        notes,
      });
      setConfirmation(res);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit quotation request.');
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmation) {
    const q = confirmation.quotation;
    return (
      <div className="bg-[#F8F8F6] min-h-[75vh] py-14">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="bg-white border border-[#E3E5E0] rounded-lg p-8 lg:p-10 space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-8 w-8 text-[#15803D] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono tabular-nums text-[#5E6B5B]">
                  Reference: {q.reference_code}
                </p>
                <h1 className="mt-1 font-display text-2xl font-bold text-[#1B1F1A]">
                  Quotation Request Received
                </h1>
                <p className="mt-2 text-sm text-[#4D544C] leading-relaxed">
                  {confirmation.message} Our regional fleet desk will respond during business hours
                  (Sun–Thu 8:30 AM – 5:30 PM, Sat 9:00 AM – 1:00 PM).
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#ECEEE9] text-sm">
              <div>
                <dt className="text-xs text-[#5E6B5B]">Applicant</dt>
                <dd className="font-medium text-[#1B1F1A] mt-0.5">
                  {q.full_name} {q.company_name ? `· ${q.company_name}` : ''}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#5E6B5B]">Market &amp; City</dt>
                <dd className="font-medium text-[#1B1F1A] mt-0.5">
                  {q.country} — {q.city}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#5E6B5B]">Fleet Size &amp; Term</dt>
                <dd className="font-mono tabular-nums font-medium text-[#1B1F1A] mt-0.5">
                  {q.fleet_quantity} unit{q.fleet_quantity > 1 ? 's' : ''} · {q.lease_term_months} months
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#5E6B5B]">Assigned Desk</dt>
                <dd className="font-medium text-[#1B1F1A] mt-0.5">{q.routing_email}</dd>
              </div>
              {q.vehicle_label && (
                <div className="sm:col-span-2">
                  <dt className="text-xs text-[#5E6B5B]">Selected Vehicle</dt>
                  <dd className="font-medium text-[#1B1F1A] mt-0.5">{q.vehicle_label}</dd>
                </div>
              )}
              {q.offer_title && (
                <div className="sm:col-span-2">
                  <dt className="text-xs text-[#5E6B5B]">Referenced Offer</dt>
                  <dd className="font-medium text-[#1B1F1A] mt-0.5">{q.offer_title}</dd>
                </div>
              )}
            </dl>

            <div className="pt-6 border-t border-[#ECEEE9] flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setConfirmation(null);
                  setNotes('');
                }}
                className="px-4 py-2 text-sm font-medium text-[#1B1F1A] bg-[#F8F8F6] border border-[#D8DBD4] rounded-md"
              >
                Submit Another Request
              </button>
              <Link
                to="/showroom"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#3A4338] rounded-md"
              >
                <span>Return to Showroom</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F8F6] min-h-[75vh]">
      <section className="bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <p className="text-sm font-medium text-[#7B6C53]">Operational Leasing &amp; Fleet Inquiries</p>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1F1A]">
            Request a Quotation
          </h1>
          <p className="mt-3 text-sm text-[#4D544C] max-w-2xl leading-relaxed">
            Configure your operational lease, corporate rental, limousine retainer, or certified used
            vehicle inquiry. All requests are routed directly to our regional sales team (
            {BRAND.emails.sales}).
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-8 bg-white border border-[#E3E5E0] rounded-lg p-7 lg:p-8 space-y-8"
        >
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-sm text-red-800">
              {error}
            </div>
          )}

          {/* Client Type Selector */}
          <div>
            <h2 className="font-display text-lg font-semibold text-[#1B1F1A]">
              01. Client Information
            </h2>
            <div className="mt-4 flex items-center gap-1 p-1 bg-[#F1F2EE] rounded-lg w-fit">
              {(['corporate', 'individual'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setClientType(type)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${
                    clientType === type
                      ? 'bg-[#3A4338] text-white'
                      : 'text-[#4D544C] hover:text-[#1B1F1A]'
                  }`}
                >
                  {type === 'corporate' ? 'Corporate / Enterprise' : 'Individual Client'}
                </button>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Khalid Al-Doseri"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Company Name {clientType === 'corporate' ? '*' : '(Optional)'}
                </label>
                <input
                  type="text"
                  required={clientType === 'corporate'}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Organization / EPC Contractor"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+973 / +966 / +968 ..."
                  className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Country *
                </label>
                <select
                  value={country}
                  onChange={(e) =>
                    setCountry(e.target.value as 'Bahrain' | 'Saudi Arabia' | 'Oman')
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                >
                  <option value="Bahrain">Bahrain</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Oman">Oman</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  City / Project Zone *
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Amwaj, Khobar, Jubail, NEOM, Muscat"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
            </div>
          </div>

          {/* Fleet Configuration */}
          <div className="pt-6 border-t border-[#ECEEE9]">
            <h2 className="font-display text-lg font-semibold text-[#1B1F1A]">
              02. Fleet &amp; Contract Requirements
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Select Vehicle (Optional)
                </label>
                <select
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                >
                  <option value="">Any / Mixed Fleet Requirement</option>
                  <optgroup label="Showroom (Operational Leasing)">
                    {vehicles
                      .filter((v) => v.listing_type === 'showroom')
                      .map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.year} {v.make} {v.model} ({v.currency} {v.price_or_monthly_rate}/mo)
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Certified Used Cars">
                    {vehicles
                      .filter((v) => v.listing_type === 'used')
                      .map((v) => (
                        <option key={v.id} value={v.id}>
                          [Used] {v.year} {v.make} {v.model} ({v.currency}{' '}
                          {v.price_or_monthly_rate.toLocaleString()})
                        </option>
                      ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Reference Offer Package (Optional)
                </label>
                <select
                  value={offerId}
                  onChange={(e) => setOfferId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                >
                  <option value="">Standard Operational Lease / Inquiry</option>
                  {offers.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Fleet Quantity (Vehicles) *
                </label>
                <input
                  type="number"
                  min={1}
                  max={500}
                  required
                  value={fleetQuantity}
                  onChange={(e) => setFleetQuantity(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Lease Term (Months) *
                </label>
                <select
                  value={leaseTermMonths}
                  onChange={(e) => setLeaseTermMonths(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                >
                  <option value={1}>1 Month (Short-Term Rental)</option>
                  <option value={6}>6 Months</option>
                  <option value={12}>12 Months</option>
                  <option value={24}>24 Months</option>
                  <option value={36}>36 Months (Standard Corporate Lease)</option>
                  <option value={48}>48 Months</option>
                  <option value={60}>60 Months</option>
                </select>
              </div>
            </div>
          </div>

          {/* Safety, Telematics & Mobility Add-ons */}
          <div className="pt-6 border-t border-[#ECEEE9]">
            <h2 className="font-display text-lg font-semibold text-[#1B1F1A]">
              03. Operational, Safety &amp; Service Add-Ons
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADD_ON_OPTIONS.map((opt) => (
                <label
                  key={opt.key}
                  className={`flex items-start gap-3 p-3.5 rounded-md border cursor-pointer transition-colors ${
                    addOns[opt.key]
                      ? 'border-[#3A4338] bg-[#F4F6F2]'
                      : 'border-[#E3E5E0] bg-white hover:border-[#C6CAC0]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addOns[opt.key]}
                    onChange={() => toggleAddOn(opt.key)}
                    className="mt-1 h-4 w-4 accent-[#3A4338] shrink-0"
                  />
                  <div>
                    <div className="text-sm font-medium text-[#1B1F1A]">{opt.label}</div>
                    <div className="text-xs text-[#5E6B5B] mt-0.5 leading-relaxed">
                      {opt.detail}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="pt-6 border-t border-[#ECEEE9]">
            <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
              Project Mobilization Timeline &amp; Additional Specifications
            </label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Share expected delivery dates, cross-border insurance requirements (Bahrain / KSA / Oman), mileage estimates, or HSE site specifications..."
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-4">
            <p className="text-xs text-[#5E6B5B]">
              Direct Sales Desk: <span className="font-medium text-[#1B1F1A]">{BRAND.emails.sales}</span>
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] disabled:opacity-60 rounded-md transition-colors whitespace-nowrap"
            >
              <span>{submitting ? 'Submitting Request...' : 'Submit Quotation Request'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* Right Desk Info Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#282F27] text-white rounded-lg p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold">Included in Operational Leases</h3>
            <ul className="space-y-2.5 text-sm text-[#D3D6CF]">
              <li>· Manufacturer-schedule maintenance &amp; spare parts</li>
              <li>· 700+ quick service facilities via B2B partners</li>
              <li>· Comprehensive GCC insurance (BHR / KSA / OMN)</li>
              <li>· Accident &amp; breakdown replacement vehicles</li>
              <li>· Door-to-door servicing &amp; 24/7 mobile crew</li>
            </ul>
          </div>

          <div className="bg-white border border-[#E3E5E0] rounded-lg p-6 space-y-4">
            <h3 className="font-display text-base font-semibold text-[#1B1F1A]">
              Direct Regional Desks
            </h3>
            <div className="space-y-3 text-sm">
              {BRAND.offices.map((o) => (
                <div key={o.country} className="pb-3 border-b border-[#ECEEE9] last:border-b-0 last:pb-0">
                  <div className="font-medium text-[#1B1F1A]">
                    {o.country} — {o.city} ({o.role})
                  </div>
                  <a
                    href={o.telHref}
                    className="font-mono tabular-nums text-xs text-[#3A4338] hover:underline"
                  >
                    {o.phone}
                  </a>
                </div>
              ))}
            </div>
            <div className="pt-2 text-xs text-[#5E6B5B] space-y-1">
              <div>Sales: {BRAND.emails.sales}</div>
              <div>Customer Support: {BRAND.emails.customerSupport}</div>
              <div>General Inquiries: {BRAND.emails.general}</div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
