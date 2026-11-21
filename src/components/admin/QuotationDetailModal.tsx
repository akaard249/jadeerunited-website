import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { X, Trash2 } from 'lucide-react';
import { api } from '../../lib/api';
import type { QuotationRequestRecord, QuotationStatus } from '../../types';
import { EASE_LUXURY } from '../MotionPrimitives';

const STATUS_OPTIONS: QuotationStatus[] = [
  'new',
  'in_review',
  'quoted',
  'approved',
  'rejected',
  'closed',
];

const ADD_ON_LABELS: Record<string, string> = {
  driver_service: 'Dedicated Driver Service',
  limousine_service: 'Limousine Service',
  replacement_vehicle: 'Replacement Vehicle Guarantee',
  tracking_blue_key: 'GPS Tracking & Blue Key Access',
  usa_roll_bars_cages: 'USA-Standard Roll Bars & Roll Cages',
  hybrid_preference: 'Vision 2030 Hybrid Preference',
};

export function QuotationDetailModal({
  quotation,
  onClose,
  onUpdated,
  onDeleted,
}: {
  quotation: QuotationRequestRecord;
  onClose: () => void;
  onUpdated: (q: QuotationRequestRecord) => void;
  onDeleted: (id: number) => void;
}) {
  const [status, setStatus] = useState<QuotationStatus>(quotation.status);
  const [estimatedQuote, setEstimatedQuote] = useState<string>(
    quotation.estimated_monthly_quote !== null ? String(quotation.estimated_monthly_quote) : ''
  );
  const [adminNotes, setAdminNotes] = useState(quotation.admin_notes || '');
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState('');

  const selectedAddOns = Object.entries(quotation.add_ons || {})
    .filter(([, enabled]) => Boolean(enabled))
    .map(([key]) => ADD_ON_LABELS[key] || key);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const res = await api.updateAdminQuotation(quotation.id, {
        status,
        estimated_monthly_quote: estimatedQuote.trim() === '' ? null : Number(estimatedQuote),
        admin_notes: adminNotes,
      });
      onUpdated(res.quotation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to update quotation.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    setError('');
    setSaving(true);
    try {
      await api.deleteAdminQuotation(quotation.id);
      onDeleted(quotation.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to delete quotation.');
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: EASE_LUXURY }}
        className="bg-[#141418] border border-white/10 rounded-xl w-full max-w-2xl max-h-[92vh] overflow-y-auto text-[#E4E0D8]"
      >
        <div className="sticky top-0 bg-[#141418] border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
          <div>
            <div className="font-mono tabular-nums text-xs text-[#C8A45D]">
              {quotation.reference_code} · Submitted {quotation.created_at}
            </div>
            <h2 className="font-display text-lg font-bold text-white">
              {quotation.full_name}
              {quotation.company_name ? ` — ${quotation.company_name}` : ''}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-[#B4B0A8] hover:text-white hover:bg-white/10"
            aria-label="Close quotation detail"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {error && (
            <div className="p-3 bg-red-950/50 border border-red-500/40 rounded-lg text-sm text-red-200">
              {error}
            </div>
          )}

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-[#0C0C0F] border border-white/[0.08] rounded-lg p-4">
            <div>
              <dt className="text-xs text-[#949088]">Client Type</dt>
              <dd className="font-medium text-white capitalize mt-0.5">{quotation.client_type}</dd>
            </div>
            <div>
              <dt className="text-xs text-[#949088]">Market &amp; City</dt>
              <dd className="font-medium text-white mt-0.5">
                {quotation.country} — {quotation.city}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#949088]">Email</dt>
              <dd className="font-medium text-white mt-0.5 break-all">{quotation.email}</dd>
            </div>
            <div>
              <dt className="text-xs text-[#949088]">Phone</dt>
              <dd className="font-mono tabular-nums font-medium text-[#C8A45D] mt-0.5">
                {quotation.phone}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#949088]">Fleet Size &amp; Term</dt>
              <dd className="font-mono tabular-nums font-medium text-white mt-0.5">
                {quotation.fleet_quantity} vehicle{quotation.fleet_quantity > 1 ? 's' : ''} ·{' '}
                {quotation.lease_term_months} months
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#949088]">Routing Desk</dt>
              <dd className="font-medium text-white mt-0.5">{quotation.routing_email}</dd>
            </div>
            {quotation.vehicle_label && (
              <div className="sm:col-span-2">
                <dt className="text-xs text-[#949088]">Requested Vehicle</dt>
                <dd className="font-medium text-[#C8A45D] mt-0.5">
                  {quotation.vehicle_label}
                  {quotation.selected_trim ? ` — ${quotation.selected_trim}` : ''}
                </dd>
              </div>
            )}
            {quotation.offer_title && (
              <div className="sm:col-span-2">
                <dt className="text-xs text-[#949088]">Referenced Offer</dt>
                <dd className="font-medium text-white mt-0.5">{quotation.offer_title}</dd>
              </div>
            )}
            <div className="sm:col-span-2">
              <dt className="text-xs text-[#949088]">Selected Add-Ons</dt>
              <dd className="text-[#D4D4DC] mt-1">
                {selectedAddOns.length > 0 ? selectedAddOns.join(' · ') : 'Standard operational lease'}
              </dd>
            </div>
            {quotation.notes && (
              <div className="sm:col-span-2">
                <dt className="text-xs text-[#949088]">Client Notes</dt>
                <dd className="text-[#D4D4DC] mt-1 whitespace-pre-wrap leading-relaxed">
                  {quotation.notes}
                </dd>
              </div>
            )}
          </dl>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                  QUOTATION STATUS
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as QuotationStatus)}
                  className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                >
                  {STATUS_OPTIONS.map((st) => (
                    <option key={st} value={st}>
                      {st.replace('_', ' ').toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                  ESTIMATED MONTHLY QUOTE (SAR / BHD)
                </label>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={estimatedQuote}
                  onChange={(e) => setEstimatedQuote(e.target.value)}
                  placeholder="e.g. 2450"
                  className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                INTERNAL ADMIN NOTES
              </label>
              <textarea
                rows={3}
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Record pricing assumptions, branch assignment, or follow-up dates..."
                className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              {!confirmDelete ? (
                <button
                  type="button"
                  onClick={() => setConfirmDelete(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-950/40 rounded-lg"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Delete Request</span>
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-400 font-medium">Confirm delete?</span>
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={saving}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
                  >
                    Yes, Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmDelete(false)}
                    className="px-2.5 py-1.5 text-xs text-[#B4B0A8] border border-white/15 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-[#D4D4DC] bg-[#1B1B20] border border-white/10 rounded-lg"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
                >
                  {saving ? 'Updating...' : 'Save Quotation Update'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
