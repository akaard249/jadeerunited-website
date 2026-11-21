import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Car,
  FileText,
  Mail,
  LogOut,
  Plus,
  Search,
  ExternalLink,
  Pencil,
  Trash2,
  Star,
} from 'lucide-react';
import { api, getAdminSession } from '../lib/api';
import type {
  AdminDashboardStats,
  AdminUser,
  ContactMessageRecord,
  QuotationRequestRecord,
  QuotationStatus,
  Vehicle,
  VehicleStatus,
} from '../types';
import { JadeerLogoMark, VehicleImage } from '../components/BrandMark';
import { VehicleFormModal } from '../components/admin/VehicleFormModal';
import { QuotationDetailModal } from '../components/admin/QuotationDetailModal';

type AdminTab = 'dashboard' | 'vehicles' | 'quotations' | 'messages';

const QUOTATION_STATUS_TEXT: Record<QuotationStatus, { label: string; color: string }> = {
  new: { label: 'New', color: 'text-[#B45309]' },
  in_review: { label: 'In Review', color: 'text-[#1D4ED8]' },
  quoted: { label: 'Quoted', color: 'text-[#0F766E]' },
  approved: { label: 'Approved', color: 'text-[#15803D]' },
  rejected: { label: 'Rejected', color: 'text-[#B91C1C]' },
  closed: { label: 'Closed', color: 'text-[#64748B]' },
};

export function AdminPage() {
  const existingSession = getAdminSession();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(existingSession.user);
  const [authStatus, setAuthStatus] = useState<{
    checked: boolean;
    needsSetup: boolean;
    envPasscodeActive: boolean;
  }>({ checked: false, needsSetup: false, envPasscodeActive: false });

  // Auth form state
  const [setupName, setSetupName] = useState('Jadeer Fleet Administrator');
  const [authEmail, setAuthEmail] = useState('admin@jadeerunited.com');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSubmitting, setAuthSubmitting] = useState(false);

  // Admin workspace state
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [stats, setStats] = useState<AdminDashboardStats | null>(null);
  const [recentQuotations, setRecentQuotations] = useState<QuotationRequestRecord[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [quotations, setQuotations] = useState<QuotationRequestRecord[]>([]);
  const [messages, setMessages] = useState<ContactMessageRecord[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // Vehicles filters & modals
  const [vehicleFilterType, setVehicleFilterType] = useState<'all' | 'showroom' | 'used'>('all');
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [confirmDeleteVehicleId, setConfirmDeleteVehicleId] = useState<number | null>(null);

  // Quotations filters & modal
  const [quoteStatusFilter, setQuoteStatusFilter] = useState('all');
  const [quoteCountryFilter, setQuoteCountryFilter] = useState('all');
  const [quoteSearch, setQuoteSearch] = useState('');
  const [selectedQuotation, setSelectedQuotation] = useState<QuotationRequestRecord | null>(null);

  useEffect(() => {
    api
      .getAdminAuthStatus()
      .then((res) =>
        setAuthStatus({
          checked: true,
          needsSetup: res.needsSetup,
          envPasscodeActive: res.envPasscodeActive,
        })
      )
      .catch(() => setAuthStatus({ checked: true, needsSetup: false, envPasscodeActive: false }));
  }, []);

  const loadDashboard = async () => {
    setLoadingData(true);
    try {
      const res = await api.getAdminDashboard();
      setStats(res.stats);
      setRecentQuotations(res.recentQuotations);
    } catch {
      setAdminUser(null);
    } finally {
      setLoadingData(false);
    }
  };

  const loadVehicles = async () => {
    setLoadingData(true);
    try {
      const res = await api.getAdminVehicles({
        listing_type: vehicleFilterType,
        search: vehicleSearch.trim() || undefined,
      });
      setVehicles(res.vehicles);
    } catch {
      // handled via 401 session clear if expired
    } finally {
      setLoadingData(false);
    }
  };

  const loadQuotations = async () => {
    setLoadingData(true);
    try {
      const res = await api.getAdminQuotations({
        status: quoteStatusFilter,
        country: quoteCountryFilter,
        search: quoteSearch.trim() || undefined,
      });
      setQuotations(res.quotations);
    } catch {
      // handled
    } finally {
      setLoadingData(false);
    }
  };

  const loadMessages = async () => {
    setLoadingData(true);
    try {
      const res = await api.getAdminMessages();
      setMessages(res.messages);
    } catch {
      // handled
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (!adminUser) return;
    if (activeTab === 'dashboard') loadDashboard();
    if (activeTab === 'vehicles') loadVehicles();
    if (activeTab === 'quotations') loadQuotations();
    if (activeTab === 'messages') loadMessages();
  }, [adminUser, activeTab, vehicleFilterType, vehicleSearch, quoteStatusFilter, quoteCountryFilter, quoteSearch]);

  const handleAuthSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSubmitting(true);
    try {
      if (authStatus.needsSetup) {
        const res = await api.setupAdmin({
          name: setupName,
          email: authEmail,
          password: authPassword,
        });
        setAdminUser(res.admin);
        setAuthStatus((prev) => ({ ...prev, needsSetup: false }));
      } else {
        const res = await api.loginAdmin({ email: authEmail, password: authPassword });
        setAdminUser(res.admin);
      }
      setAuthPassword('');
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : 'Authentication failed.');
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await api.logoutAdmin();
    setAdminUser(null);
  };

  const handleQuickVehicleUpdate = async (
    id: number,
    patch: { status?: VehicleStatus; is_featured?: boolean }
  ) => {
    try {
      const res = await api.quickUpdateAdminVehicle(id, patch);
      setVehicles((prev) => prev.map((v) => (v.id === id ? res.vehicle : v)));
    } catch {
      // silent
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    try {
      await api.deleteAdminVehicle(id);
      setVehicles((prev) => prev.filter((v) => v.id !== id));
      setConfirmDeleteVehicleId(null);
    } catch {
      // silent
    }
  };

  // ============================================================
  // UNAUTHENTICATED GATE (Setup or Login)
  // ============================================================
  if (!adminUser) {
    return (
      <div className="min-h-screen bg-[#F8F8F6] flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md bg-white border border-[#E3E5E0] rounded-lg p-8 space-y-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 text-[#1B1F1A] font-display font-bold">
              <JadeerLogoMark className="h-6 w-6" tone="gold" />
              <span>Jadeer United</span>
            </Link>
            <span className="text-xs text-[#5E6B5B]">Admin Portal</span>
          </div>

          {!authStatus.checked ? (
            <div className="py-10 text-center text-sm text-[#5E6B5B]">
              Checking authentication configuration...
            </div>
          ) : (
            <>
              <div>
                <h1 className="font-display text-2xl font-bold text-[#1B1F1A]">
                  {authStatus.needsSetup ? 'Initialize Admin Account' : 'Administrator Sign In'}
                </h1>
                <p className="mt-1.5 text-sm text-[#4D544C] leading-relaxed">
                  {authStatus.needsSetup
                    ? 'Create the first administrator credential for this workspace to unlock Fleet Inventory and Quotation Management.'
                    : authStatus.envPasscodeActive
                      ? 'Enter your administrator email and configured server passcode to access /admin.'
                      : 'Sign in with your administrator credentials to manage Showroom cars, Used cars, and Quotation requests.'}
                </p>
              </div>

              {authError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-800">
                  {authError}
                </div>
              )}

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authStatus.needsSetup && (
                  <div>
                    <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                      Administrator Name
                    </label>
                    <input
                      type="text"
                      required
                      value={setupName}
                      onChange={(e) => setSetupName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    required
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                    {authStatus.envPasscodeActive
                      ? 'Server Admin Passcode'
                      : authStatus.needsSetup
                        ? 'Create Password (min 8 characters)'
                        : 'Password'}
                  </label>
                  <input
                    type="password"
                    required
                    minLength={authStatus.needsSetup ? 8 : 1}
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={authSubmitting}
                  className="w-full py-2.5 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] disabled:opacity-60 rounded-md transition-colors"
                >
                  {authSubmitting
                    ? 'Verifying...'
                    : authStatus.needsSetup
                      ? 'Create Admin Account & Sign In'
                      : 'Sign In to Admin Panel'}
                </button>
              </form>

              <div className="pt-4 border-t border-[#ECEEE9] text-center">
                <Link to="/" className="text-xs font-medium text-[#4D544C] hover:text-[#1B1F1A]">
                  Return to Jadeer United Public Website
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // ============================================================
  // AUTHENTICATED ADMIN WORKSPACE
  // ============================================================
  const breadcrumbTitle =
    activeTab === 'dashboard'
      ? 'Dashboard'
      : activeTab === 'vehicles'
        ? 'Fleet & Used Inventory'
        : activeTab === 'quotations'
          ? 'Quotation Requests'
          : 'Contact Messages';

  return (
    <div className="min-h-screen bg-[#F8F8F6] flex flex-col lg:flex-row">
      {/* Left Workspace Sidebar */}
      <aside className="w-full lg:w-[252px] bg-[#282F27] text-[#E6E5DF] shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#3A4338]">
        <div>
          <div className="h-16 px-6 flex items-center gap-2.5 border-b border-white/10">
            <JadeerLogoMark className="h-6 w-6" tone="gold" />
            <span className="font-display font-bold text-white tracking-tight whitespace-nowrap">
              Jadeer Admin
            </span>
          </div>

          <nav className="p-3 space-y-1">
            {[
              { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
              { id: 'vehicles' as const, label: 'Vehicles (Showroom & Used)', icon: Car },
              { id: 'quotations' as const, label: 'Quotation Requests', icon: FileText },
              { id: 'messages' as const, label: 'Contact Messages', icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-md transition-colors text-left ${
                    isActive
                      ? 'bg-[#3A4338] text-white'
                      : 'text-[#C8CBC4] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="px-2">
            <div className="text-xs font-medium text-white truncate">{adminUser.name}</div>
            <div className="text-xs text-[#9EA49A] truncate">{adminUser.email}</div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#E6E5DF] bg-white/10 hover:bg-white/15 rounded-md whitespace-nowrap"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Public Site</span>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#E6E5DF] hover:text-white hover:bg-white/10 rounded-md whitespace-nowrap"
              title="Sign out"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Exit</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar Contract for Dashboard */}
        <header className="h-16 bg-white border-b border-[#E3E5E0] px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="text-sm text-[#5E6B5B] truncate">
            <span>Admin</span>
            <span className="mx-2">/</span>
            <span className="font-semibold text-[#1B1F1A]">{breadcrumbTitle}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {activeTab === 'vehicles' && (
              <button
                type="button"
                onClick={() => {
                  setEditingVehicle(null);
                  setVehicleModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md whitespace-nowrap shrink-0"
              >
                <Plus className="h-4 w-4" />
                <span>Add Vehicle</span>
              </button>
            )}
          </div>
        </header>

        <div className="p-6 lg:p-8 flex-1 space-y-8">
          {/* ================= DASHBOARD TAB ================= */}
          {activeTab === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Total Showroom Cars', value: stats?.totalShowroom ?? '—', tab: 'vehicles' as const },
                  { label: 'Total Used Cars', value: stats?.totalUsed ?? '—', tab: 'vehicles' as const },
                  { label: 'Total Quotation Requests', value: stats?.totalQuotations ?? '—', tab: 'quotations' as const },
                  { label: 'New / Pending Quotations', value: stats?.pendingQuotations ?? '—', tab: 'quotations' as const },
                ].map((kpi) => (
                  <button
                    key={kpi.label}
                    type="button"
                    onClick={() => setActiveTab(kpi.tab)}
                    className="text-left bg-white border border-[#E3E5E0] hover:border-[#9A8A6E] rounded-lg p-5 transition-colors"
                  >
                    <div className="text-xs text-[#5E6B5B]">{kpi.label}</div>
                    <div className="mt-2 font-mono tabular-nums text-3xl font-bold text-[#1B1F1A]">
                      {kpi.value}
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-white border border-[#E3E5E0] rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E3E5E0] flex items-center justify-between">
                  <h2 className="font-display text-base font-semibold text-[#1B1F1A]">
                    Recent Quotation Requests
                  </h2>
                  <button
                    type="button"
                    onClick={() => setActiveTab('quotations')}
                    className="text-xs font-medium text-[#3A4338] hover:underline"
                  >
                    Manage all requests
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#F8F8F6] text-xs text-[#5E6B5B] border-b border-[#E3E5E0]">
                      <tr>
                        <th className="py-3 px-4 font-medium">Reference</th>
                        <th className="py-3 px-4 font-medium">Client / Company</th>
                        <th className="py-3 px-4 font-medium">Market</th>
                        <th className="py-3 px-4 font-medium text-right">Units · Term</th>
                        <th className="py-3 px-4 font-medium">Status</th>
                        <th className="py-3 px-4 font-medium text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ECEEE9]">
                      {recentQuotations.map((q) => (
                        <tr key={q.id} className="hover:bg-[#FAFBF9]">
                          <td className="py-3 px-4 font-mono tabular-nums text-xs text-[#4D544C]">
                            {q.reference_code}
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-medium text-[#1B1F1A]">{q.full_name}</div>
                            <div className="text-xs text-[#5E6B5B]">
                              {q.company_name || 'Individual'} · {q.vehicle_label || q.offer_title || 'General Fleet'}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-[#4D544C]">
                            {q.country} · {q.city}
                          </td>
                          <td className="py-3 px-4 text-right font-mono tabular-nums text-[#1B1F1A]">
                            {q.fleet_quantity} × {q.lease_term_months}m
                          </td>
                          <td className={`py-3 px-4 text-xs font-medium ${QUOTATION_STATUS_TEXT[q.status].color}`}>
                            {QUOTATION_STATUS_TEXT[q.status].label}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              type="button"
                              onClick={() => setSelectedQuotation(q)}
                              className="text-xs font-medium text-[#3A4338] hover:underline"
                            >
                              Review
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ================= VEHICLES TAB ================= */}
          {activeTab === 'vehicles' && (
            <div className="space-y-5">
              <div className="bg-white border border-[#E3E5E0] rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-1 p-1 bg-[#F1F2EE] rounded-md w-fit">
                  {(
                    [
                      { id: 'all', label: 'All Cars' },
                      { id: 'showroom', label: 'Showroom Cars' },
                      { id: 'used', label: 'Used Cars' },
                    ] as const
                  ).map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setVehicleFilterType(f.id)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                        vehicleFilterType === f.id
                          ? 'bg-[#3A4338] text-white'
                          : 'text-[#4D544C] hover:text-[#1B1F1A]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="relative w-full md:w-72">
                  <Search className="h-4 w-4 text-[#6B7369] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={vehicleSearch}
                    onChange={(e) => setVehicleSearch(e.target.value)}
                    placeholder="Filter make, model, category..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8F8F6] border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338] focus:bg-white"
                  />
                </div>
              </div>

              <div className="bg-white border border-[#E3E5E0] rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#F8F8F6] text-xs text-[#5E6B5B] border-b border-[#E3E5E0]">
                      <tr>
                        <th className="py-3 px-4 font-medium">Vehicle</th>
                        <th className="py-3 px-4 font-medium">Section</th>
                        <th className="py-3 px-4 font-medium">Specs</th>
                        <th className="py-3 px-4 font-medium text-right">Rate / Price</th>
                        <th className="py-3 px-4 font-medium">Status</th>
                        <th className="py-3 px-4 font-medium text-center">Featured</th>
                        <th className="py-3 px-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ECEEE9]">
                      {loadingData && vehicles.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-sm text-[#5E6B5B]">
                            Loading vehicles...
                          </td>
                        </tr>
                      ) : vehicles.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-10 text-center text-sm text-[#5E6B5B]">
                            No vehicles match the active filter.
                          </td>
                        </tr>
                      ) : (
                        vehicles.map((v) => (
                          <tr key={v.id} className="hover:bg-[#FAFBF9]">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <div className="h-11 w-16 rounded overflow-hidden bg-[#282F27] shrink-0">
                                  <VehicleImage
                                    src={v.image_url}
                                    alt={`${v.make} ${v.model}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium text-[#1B1F1A]">
                                    {v.year} {v.make} {v.model}
                                  </div>
                                  <div className="text-xs text-[#5E6B5B]">
                                    {v.country_availability.join(' / ')}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-xs font-medium text-[#4D544C]">
                              {v.listing_type === 'showroom' ? 'Showroom' : 'Used Cars'}
                            </td>
                            <td className="py-3 px-4 text-xs text-[#5E6B5B]">
                              {v.category} · {v.fuel_type} · {v.transmission}
                            </td>
                            <td className="py-3 px-4 text-right font-mono tabular-nums font-medium text-[#1B1F1A]">
                              {v.currency} {v.price_or_monthly_rate.toLocaleString()}
                              {v.listing_type === 'showroom' ? '/mo' : ''}
                            </td>
                            <td className="py-3 px-4">
                              <select
                                value={v.status}
                                onChange={(e) =>
                                  handleQuickVehicleUpdate(v.id, {
                                    status: e.target.value as VehicleStatus,
                                  })
                                }
                                className="px-2 py-1 text-xs border border-[#D8DBD4] rounded bg-white text-[#1B1F1A]"
                              >
                                <option value="available">Available</option>
                                <option value="reserved">Reserved</option>
                                <option value="leased">Leased</option>
                                <option value="sold">Sold</option>
                              </select>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <button
                                type="button"
                                onClick={() =>
                                  handleQuickVehicleUpdate(v.id, { is_featured: !v.is_featured })
                                }
                                className={`inline-flex items-center justify-center h-8 w-8 rounded-md transition-colors ${
                                  v.is_featured
                                    ? 'text-[#9A8A6E] bg-[#F6F3EC]'
                                    : 'text-[#B5BAB1] hover:text-[#4D544C]'
                                }`}
                                title={v.is_featured ? 'Unfeature vehicle' : 'Feature on homepage'}
                              >
                                <Star
                                  className="h-4 w-4"
                                  fill={v.is_featured ? 'currentColor' : 'none'}
                                />
                              </button>
                            </td>
                            <td className="py-3 px-4 text-right">
                              {confirmDeleteVehicleId === v.id ? (
                                <div className="inline-flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteVehicle(v.id)}
                                    className="px-2 py-1 text-xs font-medium text-white bg-red-700 rounded"
                                  >
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setConfirmDeleteVehicleId(null)}
                                    className="px-2 py-1 text-xs text-[#4D544C] border border-[#D8DBD4] rounded"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <div className="inline-flex items-center gap-1">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingVehicle(v);
                                      setVehicleModalOpen(true);
                                    }}
                                    className="h-8 w-8 inline-flex items-center justify-center text-[#4D544C] hover:text-[#1B1F1A] hover:bg-[#F1F2EE] rounded"
                                    title="Edit vehicle"
                                  >
                                    <Pencil className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setConfirmDeleteVehicleId(v.id)}
                                    className="h-8 w-8 inline-flex items-center justify-center text-[#4D544C] hover:text-red-700 hover:bg-red-50 rounded"
                                    title="Delete vehicle"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= QUOTATIONS TAB ================= */}
          {activeTab === 'quotations' && (
            <div className="space-y-5">
              <div className="bg-white border border-[#E3E5E0] rounded-lg p-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-5 relative">
                  <Search className="h-4 w-4 text-[#6B7369] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={quoteSearch}
                    onChange={(e) => setQuoteSearch(e.target.value)}
                    placeholder="Search client name, company, email, ref..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8F8F6] border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338] focus:bg-white"
                  />
                </div>
                <div className="md:col-span-4">
                  <select
                    value={quoteStatusFilter}
                    onChange={(e) => setQuoteStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md bg-white"
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="in_review">In Review</option>
                    <option value="quoted">Quoted</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <select
                    value={quoteCountryFilter}
                    onChange={(e) => setQuoteCountryFilter(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-[#D8DBD4] rounded-md bg-white"
                  >
                    <option value="all">All Countries</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Oman">Oman</option>
                  </select>
                </div>
              </div>

              <div className="bg-white border border-[#E3E5E0] rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#F8F8F6] text-xs text-[#5E6B5B] border-b border-[#E3E5E0]">
                      <tr>
                        <th className="py-3 px-4 font-medium">Reference</th>
                        <th className="py-3 px-4 font-medium">Client &amp; Organization</th>
                        <th className="py-3 px-4 font-medium">Location</th>
                        <th className="py-3 px-4 font-medium text-right">Qty / Term</th>
                        <th className="py-3 px-4 font-medium text-right">Est. Quote</th>
                        <th className="py-3 px-4 font-medium">Status</th>
                        <th className="py-3 px-4 font-medium text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ECEEE9]">
                      {quotations.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-10 text-center text-sm text-[#5E6B5B]">
                            No quotation requests found matching your criteria.
                          </td>
                        </tr>
                      ) : (
                        quotations.map((q) => (
                          <tr key={q.id} className="hover:bg-[#FAFBF9]">
                            <td className="py-3 px-4 font-mono tabular-nums text-xs text-[#4D544C]">
                              {q.reference_code}
                            </td>
                            <td className="py-3 px-4">
                              <div className="font-medium text-[#1B1F1A]">{q.full_name}</div>
                              <div className="text-xs text-[#5E6B5B]">
                                {q.company_name || 'Individual'} · {q.email}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-xs text-[#4D544C]">
                              {q.country} · {q.city}
                            </td>
                            <td className="py-3 px-4 text-right font-mono tabular-nums text-xs text-[#1B1F1A]">
                              {q.fleet_quantity} · {q.lease_term_months}m
                            </td>
                            <td className="py-3 px-4 text-right font-mono tabular-nums text-xs text-[#1B1F1A]">
                              {q.estimated_monthly_quote !== null
                                ? `BHD ${q.estimated_monthly_quote.toLocaleString()}`
                                : '—'}
                            </td>
                            <td className={`py-3 px-4 text-xs font-medium ${QUOTATION_STATUS_TEXT[q.status].color}`}>
                              {QUOTATION_STATUS_TEXT[q.status].label}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                type="button"
                                onClick={() => setSelectedQuotation(q)}
                                className="px-3 py-1.5 text-xs font-medium text-[#3A4338] border border-[#D8DBD4] hover:bg-[#F8F8F6] rounded"
                              >
                                Manage
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= MESSAGES TAB ================= */}
          {activeTab === 'messages' && (
            <div className="bg-white border border-[#E3E5E0] rounded-lg divide-y divide-[#ECEEE9]">
              {messages.length === 0 ? (
                <div className="p-10 text-center text-sm text-[#5E6B5B]">
                  No contact messages received yet.
                </div>
              ) : (
                messages.map((m) => (
                  <div key={m.id} className="p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="text-xs text-[#5E6B5B]">
                        {m.department} · {m.country} · {m.created_at} ·{' '}
                        <span className={m.status === 'unread' ? 'text-[#B45309] font-medium' : 'text-[#5E6B5B]'}>
                          {m.status}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-[#1B1F1A]">
                        {m.subject}
                      </h3>
                      <div className="text-xs text-[#4D544C]">
                        From {m.full_name} {m.company_name ? `(${m.company_name})` : ''} · {m.email} ·{' '}
                        <span className="font-mono">{m.phone}</span>
                      </div>
                      <p className="mt-2 text-sm text-[#282F27] leading-relaxed">{m.message}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {m.status !== 'read' && (
                        <button
                          type="button"
                          onClick={async () => {
                            await api.updateAdminMessageStatus(m.id, 'read');
                            setMessages((prev) =>
                              prev.map((item) => (item.id === m.id ? { ...item, status: 'read' } : item))
                            );
                          }}
                          className="px-3 py-1.5 text-xs font-medium text-[#3A4338] border border-[#D8DBD4] rounded hover:bg-[#F8F8F6]"
                        >
                          Mark Read
                        </button>
                      )}
                      {m.status !== 'archived' && (
                        <button
                          type="button"
                          onClick={async () => {
                            await api.updateAdminMessageStatus(m.id, 'archived');
                            setMessages((prev) =>
                              prev.map((item) =>
                                item.id === m.id ? { ...item, status: 'archived' } : item
                              )
                            );
                          }}
                          className="px-3 py-1.5 text-xs font-medium text-[#5E6B5B] border border-[#D8DBD4] rounded hover:bg-[#F8F8F6]"
                        >
                          Archive
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {vehicleModalOpen && (
        <VehicleFormModal
          vehicle={editingVehicle}
          onClose={() => {
            setVehicleModalOpen(false);
            setEditingVehicle(null);
          }}
          onSaved={() => {
            setVehicleModalOpen(false);
            setEditingVehicle(null);
            loadVehicles();
            loadDashboard();
          }}
        />
      )}

      {selectedQuotation && (
        <QuotationDetailModal
          quotation={selectedQuotation}
          onClose={() => setSelectedQuotation(null)}
          onUpdated={(updated) => {
            setSelectedQuotation(null);
            setQuotations((prev) => prev.map((q) => (q.id === updated.id ? updated : q)));
            setRecentQuotations((prev) => prev.map((q) => (q.id === updated.id ? updated : q)));
            loadDashboard();
          }}
          onDeleted={(deletedId) => {
            setSelectedQuotation(null);
            setQuotations((prev) => prev.filter((q) => q.id !== deletedId));
            setRecentQuotations((prev) => prev.filter((q) => q.id !== deletedId));
            loadDashboard();
          }}
        />
      )}
    </div>
  );
}
