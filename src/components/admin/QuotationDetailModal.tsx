import { useState, type FormEvent } from 'react';
import { X, Trash2 } from 'lucide-react';
import { api } from '../../lib/api';
import type { QuotationRequestRecord, QuotationStatus } from '../../types';

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
    <div className="fixed inset-0 z-50 bg-black/45 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#E3E5E0] rounded-lg w-full max-w-2xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-[#E3E5E0] px-6 py-4 flex items-center justify-between">
          <div>
            <div className="font-mono tabular-nums text-xs text-[#5E6B5B]">
              {quotation.reference_code} · Submitted {quotation.created_at}
            </div>
            <h2 className="font-display text-lg font-bold text-[#1B1F1A]">
              {quotation.full_name}
              {quotation.company_name ? ` — ${quotation.company_name}` : ''}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md text-[#4D544C] hover:bg-[#F1F2EE]"
            aria-label="Close quotation detail"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-800">
              {error}
            </div>
          )}

          {/* Client & Request Metadata */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-[#F8F8F6] border border-[#E3E5E0] rounded-md p-4">
            <div>
              <dt className="text-xs text-[#5E6B5B]">Client Type</dt>
              <dd className="font-medium text-[#1B1F1A] capitalize mt-0.5">{quotation.client_type}</dd>
            </div>
            <div>
              <dt className="text-xs text-[#5E6B5B]">Market &amp; City</dt>
              <dd className="font-medium text-[#1B1F1A] mt-0.5">
                {quotation.country} — {quotation.city}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#5E6B5B]">Email</dt>
              <dd className="font-medium text-[#1B1F1A] mt-0.5 break-all">{quotation.email}</dd>
            </div>
            <div>
              <dt className="text-xs text-[#5E6B5B]">Phone</dt>
              <dd className="font-mono tabular-nums font-medium text-[#1B1F1A] mt-0.5">
                {quotation.phone}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#5E6B5B]">Fleet Size &amp; Term</dt>
              <dd className="font-mono tabular-nums font-medium text-[#1B1F1A] mt-0.5">
                {quotation.fleet_quantity} vehicle{quotation.fleet_quantity > 1 ? 's' : ''} ·{' '}
                {quotation.lease_term_months} months
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#5E6B5B]">Routing Desk</dt>
              <dd className="font-medium text-[#1B1F1A] mt-0.5">{quotation.routing_email}</dd>
            </div>
            {quotation.vehicle_label && (
              <div className="sm:col-span-2">
                <dt className="text-xs text-[#5E6B5B]">Requested Vehicle</dt>
                <dd className="font-medium text-[#1B1F1A] mt-0.5">{quotation.vehicle_label}</dd>
              </div>
            )}
            {quotation.offer_title && (
              <div className="sm:col-span-2">
                <dt className="text-xs text-[#5E6B5B]">Referenced Offer</dt>
                <dd className="font-medium text-[#1B1F1A] mt-0.5">{quotation.offer_title}</dd>
              </div>
            )}
            <div className="sm:col-span-2">
              <dt className="text-xs text-[#5E6B5B]">Selected Add-Ons</dt>
              <dd className="text-[#1B1F1A] mt-1">
                {selectedAddOns.length > 0 ? selectedAddOns.join(' · ') : 'Standard operational lease'}
              </dd>
            </div>
            {quotation.notes && (
              <div className="sm:col-span-2">
                <dt className="text-xs text-[#5E6B5B]">Client Notes</dt>
                <dd className="text-[#282F27] mt-1 whitespace-pre-wrap leading-relaxed">
                  {quotation.notes}
                </dd>
              </div>
            )}
          </dl>

          {/* Admin Workflow Update Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Quotation Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as QuotationStatus)}
                  className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
                >
                  {STATUS_OPTIONS.map((st) => (
                    <option key={st} value={st}>
                      {st.replace('_', ' ').toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Estimated Monthly Quote (BHD)
                </label>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={estimatedQuote}
                  onChange={(e) => setEstimatedQuote(e.target.value)}
                  placeholder="e.g. 2450"
                  className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#D8DBD4] rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                Internal Admin Notes
              </label>
              <textarea
                rows={3}
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Record pricing assumptions, branch assignment, or follow-up dates..."
                className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md"
              />
            </div>

            <div className="pt-4 border-t border-[#ECEEE9] flex flex-wrap items-center justify-between gap-3">
              {!confirmDelete ? (
                <button
                  type="button"
                  onClick={() => setConfirmDelete(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-50 rounded-md"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Delete Request</span>
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-700 font-medium">Confirm delete?</span>
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={saving}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-red-700 hover:bg-red-800 rounded-md"
                  >
                    Yes, Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmDelete(false)}
                    className="px-2.5 py-1.5 text-xs text-[#4D544C] border border-[#D8DBD4] rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-[#4D544C] bg-[#F8F8F6] border border-[#D8DBD4] rounded-md"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] disabled:opacity-60 rounded-md"
                >
                  {saving ? 'Updating...' : 'Save Quotation Update'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
