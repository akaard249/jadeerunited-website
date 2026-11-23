import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { api } from '../lib/api';
import { BRAND } from '../data/brand';
import type { Offer, QuotationAddOns, QuotationRequestRecord, Vehicle } from '../types';
import { AmbientGoldBackdrop, Reveal } from '../components/MotionPrimitives';
import { usePageSeo } from '../hooks/usePageSeo';

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
  usePageSeo({
    title: 'Request a Corporate Fleet or Leasing Quotation | Jadeer United',
    description:
      'Request an operational leasing, corporate fleet, hybrid vehicle, or certified used car quotation across Bahrain, Saudi Arabia, and Oman.',
    canonicalPath: '/quotation',
    image: '/assets/jadeer/hero-fleet.jpg',
  });

  const [searchParams] = useSearchParams();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [clientType, setClientType] = useState<'corporate' | 'individual'>('corporate');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState<'Bahrain' | 'Saudi Arabia' | 'Oman'>('Saudi Arabia');
  const [city, setCity] = useState('');
  const [vehicleId, setVehicleId] = useState<string>(searchParams.get('vehicle') || '');
  const [selectedTrim, setSelectedTrim] = useState<string>(searchParams.get('trim') || '');
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

  const selectedVehicle = vehicles.find((v) => String(v.id) === vehicleId) || null;

  const handleVehicleChange = (nextId: string) => {
    setVehicleId(nextId);
    const nextV = vehicles.find((v) => String(v.id) === nextId);
    if (nextV?.trims?.length) {
      setSelectedTrim(nextV.trims[0].trim);
    } else {
      setSelectedTrim('');
    }
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
        selected_trim: selectedTrim.trim() || undefined,
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
      <div className="bg-[#0B0B0D] min-h-[75vh] py-16 text-[#E4E0D8]">
        <div className="max-w-[760px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#141418] border border-[#C8A45D]/40 rounded-xl overflow-hidden"
          >
            <div className="h-[2px] w-full gold-top-accent" />
            <div className="p-8 lg:p-10 space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono tabular-nums text-[#C8A45D]">
                    Reference: {q.reference_code}
                  </p>
                  <h1 className="mt-1 font-display text-2xl font-bold text-white">
                    Quotation Request Received
                  </h1>
                  <p className="mt-2 text-sm text-[#B4B0A8] leading-relaxed">
                    {confirmation.message} Our regional fleet desk will respond during business hours
                    (Sun–Thu 8:30 AM – 5:30 PM, Sat 9:00 AM – 1:00 PM).
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08] text-sm">
                <div>
                  <dt className="text-xs text-[#949088]">Applicant</dt>
                  <dd className="font-medium text-white mt-0.5">
                    {q.full_name} {q.company_name ? `· ${q.company_name}` : ''}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#949088]">Market &amp; City</dt>
                  <dd className="font-medium text-white mt-0.5">
                    {q.country} — {q.city}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#949088]">Fleet Size &amp; Term</dt>
                  <dd className="font-mono tabular-nums font-medium text-[#C8A45D] mt-0.5">
                    {q.fleet_quantity} unit{q.fleet_quantity > 1 ? 's' : ''} · {q.lease_term_months} months
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#949088]">Assigned Desk</dt>
                  <dd className="font-medium text-white mt-0.5">{q.routing_email}</dd>
                </div>
                {q.vehicle_label && (
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-[#949088]">Selected Vehicle</dt>
                    <dd className="font-medium text-white mt-0.5">
                      {q.vehicle_label}
                      {q.selected_trim ? ` — ${q.selected_trim}` : ''}
                    </dd>
                  </div>
                )}
                {q.offer_title && (
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-[#949088]">Referenced Offer</dt>
                    <dd className="font-medium text-white mt-0.5">{q.offer_title}</dd>
                  </div>
                )}
              </dl>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setConfirmation(null);
                    setNotes('');
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#1B1B20] border border-white/15 rounded-lg"
                >
                  Submit Another Request
                </button>
                <Link
                  to="/showroom"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] rounded-lg"
                >
                  <span>Return to Showroom</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0D] min-h-[75vh] text-[#E4E0D8]">
      <section className="relative bg-[#0E0E11] border-b border-white/[0.08]">
        <AmbientGoldBackdrop />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
            OPERATIONAL LEASING &amp; FLEET INQUIRIES
          </p>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Request a Quotation
          </h1>
          <p className="mt-3 text-sm text-[#B4B0A8] max-w-2xl leading-relaxed">
            Configure your operational lease, corporate rental, limousine retainer, or certified used
            vehicle inquiry. All requests are routed directly to our regional sales team (
            {BRAND.emails.sales}).
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <Reveal className="lg:col-span-8 bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="h-[2px] w-full gold-top-accent" />
          <form onSubmit={handleSubmit} className="p-7 lg:p-8 space-y-8">
            {error && (
              <div className="p-4 bg-red-950/50 border border-red-500/40 rounded-lg text-sm text-red-200">
                {error}
              </div>
            )}

            <div>
              <h2 className="font-display text-lg font-semibold text-white">
                <span className="font-mono text-[#C8A45D] mr-2">01.</span>
                Client Information
              </h2>
              <div className="mt-4 flex items-center gap-1 p-1 bg-[#1B1B20] border border-white/[0.08] rounded-lg w-fit">
                {(['corporate', 'individual'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setClientType(type)}
                    className={`px-4 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${
                      clientType === type
                        ? 'bg-[#C8A45D] text-[#0B0B0D]'
                        : 'text-[#B4B0A8] hover:text-white'
                    }`}
                  >
                    {type === 'corporate' ? 'Corporate / Enterprise' : 'Individual Client'}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Khalid Al-Doseri"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    COMPANY NAME {clientType === 'corporate' ? '*' : '(OPTIONAL)'}
                  </label>
                  <input
                    type="text"
                    required={clientType === 'corporate'}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Organization / EPC Contractor"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    PHONE / WHATSAPP *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+973 / +966 / +968 ..."
                    className="w-full px-3.5 py-2.5 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    COUNTRY *
                  </label>
                  <select
                    value={country}
                    onChange={(e) =>
                      setCountry(e.target.value as 'Bahrain' | 'Saudi Arabia' | 'Oman')
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    <option value="Bahrain">Bahrain</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Oman">Oman</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    CITY / PROJECT ZONE *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Amwaj, Khobar, Jubail, NEOM, Muscat"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <h2 className="font-display text-lg font-semibold text-white">
                <span className="font-mono text-[#C8A45D] mr-2">02.</span>
                Fleet &amp; Contract Requirements
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    SELECT VEHICLE (OPTIONAL)
                  </label>
                  <select
                    value={vehicleId}
                    onChange={(e) => handleVehicleChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    <option value="">Any / Mixed Fleet Requirement</option>
                    <optgroup label="Showroom (Operational Leasing)">
                      {vehicles
                        .filter((v) => v.listing_type === 'showroom')
                        .map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.year} {v.make} {v.model} (from {v.currency}{' '}
                            {v.price_or_monthly_rate.toLocaleString()})
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

                {selectedVehicle && selectedVehicle.trims && selectedVehicle.trims.length > 0 && (
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      SELECT TRIM / GRADE
                    </label>
                    <select
                      value={selectedTrim}
                      onChange={(e) => setSelectedTrim(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-[#C8A45D]/40 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                    >
                      <option value="">Any Available Trim</option>
                      {selectedVehicle.trims.map((t) => (
                        <option key={t.trim} value={t.trim}>
                          {t.trim}
                          {t.price > 0
                            ? ` — ${selectedVehicle.currency} ${t.price.toLocaleString()}`
                            : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    REFERENCE OFFER PACKAGE (OPTIONAL)
                  </label>
                  <select
                    value={offerId}
                    onChange={(e) => setOfferId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
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
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    FLEET QUANTITY (VEHICLES) *
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={500}
                    required
                    value={fleetQuantity}
                    onChange={(e) => setFleetQuantity(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    LEASE TERM (MONTHS) *
                  </label>
                  <select
                    value={leaseTermMonths}
                    onChange={(e) => setLeaseTermMonths(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
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

            <div className="pt-6 border-t border-white/[0.08]">
              <h2 className="font-display text-lg font-semibold text-white">
                <span className="font-mono text-[#C8A45D] mr-2">03.</span>
                Operational, Safety &amp; Service Add-Ons
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADD_ON_OPTIONS.map((opt) => (
                  <label
                    key={opt.key}
                    className={`flex items-start gap-3 p-3.5 rounded-lg border cursor-pointer transition-colors ${
                      addOns[opt.key]
                        ? 'border-[#C8A45D]/60 bg-[#1D1B15]'
                        : 'border-white/[0.08] bg-[#0C0C0F] hover:border-white/20'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={addOns[opt.key]}
                      onChange={() => toggleAddOn(opt.key)}
                      className="mt-1 h-4 w-4 accent-[#C8A45D] shrink-0"
                    />
                    <div>
                      <div className="text-sm font-medium text-white">{opt.label}</div>
                      <div className="text-xs text-[#B4B0A8] mt-0.5 leading-relaxed">
                        {opt.detail}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                PROJECT MOBILIZATION TIMELINE &amp; ADDITIONAL SPECIFICATIONS
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share expected delivery dates, cross-border insurance requirements (Bahrain / KSA / Oman), mileage estimates, or HSE site specifications..."
                className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-[#B4B0A8]">
                Direct Sales Desk:{' '}
                <span className="font-medium text-[#C8A45D]">{BRAND.emails.sales}</span>
              </p>
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>{submitting ? 'Submitting Request...' : 'Submit Quotation Request'}</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4 space-y-6">
          <div className="bg-[#141418] border border-[#C8A45D]/30 rounded-xl p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-white">
              Included in Operational Leases
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D4D4DC]">
              <li>· Manufacturer-schedule maintenance &amp; spare parts</li>
              <li>· 700+ quick service facilities via B2B partners</li>
              <li>· Comprehensive GCC insurance (BHR / KSA / OMN)</li>
              <li>· Accident &amp; breakdown replacement vehicles</li>
              <li>· Door-to-door servicing &amp; 24/7 mobile crew</li>
            </ul>
          </div>

          <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-6 space-y-4">
            <h3 className="font-display text-base font-semibold text-white">
              Direct Regional Desks
            </h3>
            <div className="space-y-3 text-sm">
              {BRAND.offices.map((o) => (
                <div
                  key={o.country}
                  className="pb-3 border-b border-white/[0.08] last:border-b-0 last:pb-0"
                >
                  <div className="font-medium text-white">
                    {o.country} — {o.city} ({o.role})
                  </div>
                  <a
                    href={o.telHref}
                    className="font-mono tabular-nums text-xs text-[#C8A45D] hover:text-[#EBD4A0]"
                  >
                    {o.phone}
                  </a>
                </div>
              ))}
            </div>
            <div className="pt-2 text-xs text-[#B4B0A8] space-y-1">
              <div>Sales: {BRAND.emails.sales}</div>
              <div>Customer Support: {BRAND.emails.customerSupport}</div>
              <div>General Inquiries: {BRAND.emails.general}</div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
