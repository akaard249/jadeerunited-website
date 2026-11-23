import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
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
  MessageSquareQuote,
  Globe,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { api, getAdminSession } from '../lib/api';
import type {
  AdminDashboardStats,
  AdminPrivilege,
  AdminUser,
  ClientReview,
  ContactMessageRecord,
  QuotationRequestRecord,
  QuotationStatus,
  Vehicle,
  VehicleStatus,
} from '../types';
import { JadeerLogoMark, VehicleImage } from '../components/BrandMark';
import { VehicleFormModal } from '../components/admin/VehicleFormModal';
import { QuotationDetailModal } from '../components/admin/QuotationDetailModal';
import { WebsiteCmsPanel } from '../components/admin/WebsiteCmsPanel';
import { AdminUsersPanel } from '../components/admin/AdminUsersPanel';
import { AmbientGoldBackdrop, EASE_LUXURY } from '../components/MotionPrimitives';
import { usePageSeo } from '../hooks/usePageSeo';

type AdminTab =
  | 'dashboard'
  | 'vehicles'
  | 'quotations'
  | 'website'
  | 'messages'
  | 'reviews'
  | 'admins';

const QUOTATION_STATUS_TEXT: Record<QuotationStatus, { label: string; color: string }> = {
  new: { label: 'New', color: 'text-[#FBBF24]' },
  in_review: { label: 'In Review', color: 'text-[#60A5FA]' },
  quoted: { label: 'Quoted', color: 'text-[#2DD4BF]' },
  approved: { label: 'Approved', color: 'text-[#4ADE80]' },
  rejected: { label: 'Rejected', color: 'text-[#F87171]' },
  closed: { label: 'Closed', color: 'text-[#B4B0A8]' },
};

export function AdminPage() {
  usePageSeo({
    title: 'Admin Console | Jadeer United',
    description: 'Internal fleet administration portal.',
    canonicalPath: '/admin',
    robots: 'noindex, nofollow, noarchive',
  });

  const existingSession = getAdminSession();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(existingSession.user);
  const [authStatus, setAuthStatus] = useState<{
    checked: boolean;
    needsSetup: boolean;
    envPasscodeActive: boolean;
  }>({ checked: false, needsSetup: false, envPasscodeActive: false });

  const [setupName, setSetupName] = useState('Jadeer Fleet Administrator');
  const [authEmail, setAuthEmail] = useState('admin@jadeerunited.com');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSubmitting, setAuthSubmitting] = useState(false);

  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [stats, setStats] = useState<AdminDashboardStats | null>(null);
  const [recentQuotations, setRecentQuotations] = useState<QuotationRequestRecord[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [quotations, setQuotations] = useState<QuotationRequestRecord[]>([]);
  const [messages, setMessages] = useState<ContactMessageRecord[]>([]);
  const [reviews, setReviews] = useState<ClientReview[]>([]);
  const [confirmDeleteReviewId, setConfirmDeleteReviewId] = useState<number | null>(null);
  const [loadingData, setLoadingData] = useState(false);

  const [vehicleFilterType, setVehicleFilterType] = useState<'all' | 'showroom' | 'used'>('all');
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [confirmDeleteVehicleId, setConfirmDeleteVehicleId] = useState<number | null>(null);

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
      // handled
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

  const loadReviews = async () => {
    setLoadingData(true);
    try {
      const res = await api.getAdminReviews();
      setReviews(res.reviews);
    } catch {
      // handled
    } finally {
      setLoadingData(false);
    }
  };

  const can = (priv: AdminPrivilege): boolean => {
    if (!adminUser) return false;
    return adminUser.role === 'super_admin' || (adminUser.privileges || []).includes(priv);
  };

  useEffect(() => {
    if (!adminUser) return;
    if (
      (activeTab === 'vehicles' && !can('vehicles')) ||
      (activeTab === 'quotations' && !can('quotations')) ||
      ((activeTab === 'website' || activeTab === 'messages' || activeTab === 'reviews') &&
        !can('website')) ||
      (activeTab === 'admins' && !can('admins'))
    ) {
      setActiveTab('dashboard');
      return;
    }

    if (activeTab === 'dashboard') loadDashboard();
    if (activeTab === 'vehicles') loadVehicles();
    if (activeTab === 'quotations') loadQuotations();
    if (activeTab === 'messages') loadMessages();
    if (activeTab === 'reviews') loadReviews();
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

  if (!adminUser) {
    return (
      <div className="relative min-h-screen bg-[#0B0B0D] text-[#E4E0D8] flex flex-col justify-center items-center px-6 py-12 overflow-hidden">
        <AmbientGoldBackdrop />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_LUXURY }}
          className="relative z-10 w-full max-w-md bg-[#141418] border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="h-[2px] w-full gold-top-accent" />
          <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2.5 text-white font-display font-bold">
                <JadeerLogoMark className="h-6 w-6" tone="gold" />
                <span>Jadeer United</span>
              </Link>
              <span className="text-xs text-[#C8A45D]">Admin Portal</span>
            </div>

            {!authStatus.checked ? (
              <div className="py-10 text-center text-sm text-[#B4B0A8]">
                Checking authentication configuration...
              </div>
            ) : (
              <>
                <div>
                  <h1 className="font-display text-2xl font-bold text-white">
                    {authStatus.needsSetup ? 'Initialize Admin Account' : 'Administrator Sign In'}
                  </h1>
                  <p className="mt-1.5 text-sm text-[#B4B0A8] leading-relaxed">
                    {authStatus.needsSetup
                      ? 'Create the first administrator credential for this workspace to unlock Fleet Inventory and Quotation Management.'
                      : authStatus.envPasscodeActive
                        ? 'Enter your administrator email and configured server passcode to access /admin.'
                        : 'Sign in with your administrator credentials to manage Showroom cars, Used cars, and Quotation requests.'}
                  </p>
                </div>

                {authError && (
                  <div className="p-3 bg-red-950/50 border border-red-500/40 rounded-lg text-sm text-red-200">
                    {authError}
                  </div>
                )}

                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  {authStatus.needsSetup && (
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                        ADMINISTRATOR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={setupName}
                        onChange={(e) => setSetupName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      ADMIN EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      {authStatus.envPasscodeActive
                        ? 'SERVER ADMIN PASSCODE'
                        : authStatus.needsSetup
                          ? 'CREATE PASSWORD (MIN 8 CHARACTERS)'
                          : 'PASSWORD'}
                    </label>
                    <input
                      type="password"
                      required
                      minLength={authStatus.needsSetup ? 8 : 1}
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={authSubmitting}
                    className="w-full py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg transition-colors"
                  >
                    {authSubmitting
                      ? 'Verifying...'
                      : authStatus.needsSetup
                        ? 'Create Admin Account & Sign In'
                        : 'Sign In to Admin Panel'}
                  </button>
                </form>

                <div className="pt-4 border-t border-white/[0.08] text-center">
                  <Link to="/" className="text-xs font-medium text-[#B4B0A8] hover:text-[#C8A45D]">
                    Return to Jadeer United Public Website
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  const breadcrumbTitle =
    activeTab === 'dashboard'
      ? 'Dashboard'
      : activeTab === 'vehicles'
        ? 'Car Input & Fleet Inventory'
        : activeTab === 'quotations'
          ? 'Quotation Requests'
          : activeTab === 'website'
            ? 'Website Management (CMS)'
            : activeTab === 'messages'
              ? 'Contact Messages'
              : activeTab === 'reviews'
                ? 'Client Reviews'
                : 'Admin Team & Roles';

  const navItems: Array<{
    id: AdminTab;
    label: string;
    icon: typeof LayoutDashboard;
    visible: boolean;
  }> = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, visible: true },
    { id: 'vehicles', label: 'Vehicles (Showroom & Used)', icon: Car, visible: can('vehicles') },
    { id: 'quotations', label: 'Quotation Requests', icon: FileText, visible: can('quotations') },
    { id: 'website', label: 'Website Management', icon: Globe, visible: can('website') },
    { id: 'messages', label: 'Contact Messages', icon: Mail, visible: can('website') },
    { id: 'reviews', label: 'Client Reviews', icon: MessageSquareQuote, visible: can('website') },
    { id: 'admins', label: 'Admin Team & Roles', icon: Users, visible: can('admins') },
  ];

  const PRIVILEGE_SHORT: Record<AdminPrivilege, string> = {
    vehicles: 'Cars',
    quotations: 'Quotes',
    website: 'Website',
    admins: 'Admins',
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#E4E0D8] flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-[264px] bg-[#111114] text-[#D4D4DC] shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
        <div>
          <div className="h-16 px-6 flex items-center gap-2.5 border-b border-white/[0.08]">
            <JadeerLogoMark className="h-6 w-6" tone="gold" />
            <span className="font-display font-bold text-white tracking-tight whitespace-nowrap">
              Jadeer Admin
            </span>
          </div>

          <nav className="p-3 space-y-1">
            {navItems
              .filter((item) => item.visible)
              .map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors text-left ${
                      isActive
                        ? 'bg-[#C8A45D] text-[#0B0B0D]'
                        : 'text-[#B4B0A8] hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/[0.08] space-y-3">
          <div className="px-2 space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs font-medium text-white truncate">{adminUser.name}</div>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#C8A45D]/15 text-[#C8A45D] shrink-0">
                {adminUser.role === 'super_admin' ? 'Super' : 'Staff'}
              </span>
            </div>
            <div className="text-xs text-[#949088] truncate">{adminUser.email}</div>
            <div className="flex flex-wrap gap-1 pt-0.5">
              {(adminUser.role === 'super_admin'
                ? (['vehicles', 'quotations', 'website', 'admins'] as AdminPrivilege[])
                : adminUser.privileges || []
              ).map((p) => (
                <span
                  key={p}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-[#B4B0A8] border border-white/[0.06]"
                >
                  {PRIVILEGE_SHORT[p]}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#E5E5E7] bg-white/[0.06] hover:bg-white/10 rounded-lg whitespace-nowrap"
            >
              <ExternalLink className="h-3.5 w-3.5 text-[#C8A45D]" />
              <span>Public Site</span>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#B4B0A8] hover:text-white hover:bg-white/[0.06] rounded-lg whitespace-nowrap"
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
        <header className="h-16 bg-[#111114] border-b border-white/[0.08] px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="text-sm text-[#B4B0A8] truncate">
            <span>Admin</span>
            <span className="mx-2 text-[#8F8B84]">/</span>
            <span className="font-semibold text-white">{breadcrumbTitle}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {activeTab === 'vehicles' && can('vehicles') && (
              <button
                type="button"
                onClick={() => {
                  setEditingVehicle(null);
                  setVehicleModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg whitespace-nowrap shrink-0"
              >
                <Plus className="h-4 w-4" />
                <span>Add Vehicle</span>
              </button>
            )}
          </div>
        </header>

        <div className="p-6 lg:p-8 flex-1 space-y-8">
          {/* DASHBOARD */}
          {activeTab === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  {
                    label: 'Showroom Cars',
                    value: stats?.totalShowroom ?? '—',
                    tab: 'vehicles' as const,
                    allowed: can('vehicles'),
                  },
                  {
                    label: 'Certified Used Cars',
                    value: stats?.totalUsed ?? '—',
                    tab: 'vehicles' as const,
                    allowed: can('vehicles'),
                  },
                  {
                    label: 'Quotation Requests',
                    value: stats?.totalQuotations ?? '—',
                    tab: 'quotations' as const,
                    allowed: can('quotations'),
                  },
                  {
                    label: 'New / Pending Quotes',
                    value: stats?.pendingQuotations ?? '—',
                    tab: 'quotations' as const,
                    allowed: can('quotations'),
                  },
                  {
                    label: 'Client Reviews',
                    value: stats?.totalReviews ?? '—',
                    tab: 'reviews' as const,
                    allowed: can('website'),
                  },
                ]
                  .filter((k) => k.allowed)
                  .map((kpi) => (
                    <motion.button
                      key={kpi.label}
                      type="button"
                      whileHover={{ y: -2 }}
                      onClick={() => setActiveTab(kpi.tab)}
                      className="text-left bg-[#141418] border border-white/[0.08] hover:border-[#C8A45D]/50 rounded-xl p-5 transition-colors"
                    >
                      <div className="text-xs text-[#B4B0A8]">{kpi.label}</div>
                      <div className="mt-2 font-mono tabular-nums text-3xl font-bold text-[#C8A45D]">
                        {kpi.value}
                      </div>
                    </motion.button>
                  ))}
              </div>

              {/* Quick Section Shortcuts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {can('website') && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('website')}
                    className="text-left p-5 bg-[#141418] border border-white/[0.08] hover:border-[#C8A45D]/50 rounded-xl transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Globe className="h-4 w-4 text-[#C8A45D]" />
                      <span>Website Management Studio</span>
                    </div>
                    <p className="text-xs text-[#949088]">
                      Update Main Page Hero, About Us Photo Gallery, GCC Branches, Workshops &amp; Contact Info.
                    </p>
                  </button>
                )}
                {can('vehicles') && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('vehicles')}
                    className="text-left p-5 bg-[#141418] border border-white/[0.08] hover:border-[#C8A45D]/50 rounded-xl transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Car className="h-4 w-4 text-[#C8A45D]" />
                      <span>Car Input &amp; Inventory</span>
                    </div>
                    <p className="text-xs text-[#949088]">
                      Add new Showroom leasing models, update Used Cars, upload images, and manage availability.
                    </p>
                  </button>
                )}
                {can('admins') && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('admins')}
                    className="text-left p-5 bg-[#141418] border border-white/[0.08] hover:border-[#C8A45D]/50 rounded-xl transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <ShieldCheck className="h-4 w-4 text-[#C8A45D]" />
                      <span>Admin Team &amp; Privileges</span>
                    </div>
                    <p className="text-xs text-[#949088]">
                      Create staff logins with granular permissions for Cars, Quotations, or Website CMS.
                    </p>
                  </button>
                )}
              </div>

              {can('quotations') && (
                <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
                    <h2 className="font-display text-base font-semibold text-white">
                      Recent Quotation Requests
                    </h2>
                    <button
                      type="button"
                      onClick={() => setActiveTab('quotations')}
                      className="text-xs font-medium text-[#C8A45D] hover:text-[#EBD4A0]"
                    >
                      Manage all requests
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#101014] text-xs text-[#B4B0A8] border-b border-white/[0.08]">
                        <tr>
                          <th className="py-3 px-4 font-medium">Reference</th>
                          <th className="py-3 px-4 font-medium">Client / Company</th>
                          <th className="py-3 px-4 font-medium">Market</th>
                          <th className="py-3 px-4 font-medium text-right">Units · Term</th>
                          <th className="py-3 px-4 font-medium">Status</th>
                          <th className="py-3 px-4 font-medium text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.06]">
                        {recentQuotations.map((q) => (
                          <tr key={q.id} className="hover:bg-white/[0.02]">
                            <td className="py-3 px-4 font-mono tabular-nums text-xs text-[#C8A45D]">
                              {q.reference_code}
                            </td>
                            <td className="py-3 px-4">
                              <div className="font-medium text-white">{q.full_name}</div>
                              <div className="text-xs text-[#B4B0A8]">
                                {q.company_name || 'Individual'} · {q.vehicle_label || q.offer_title || 'General Fleet'}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-[#D4D4DC]">
                              {q.country} · {q.city}
                            </td>
                            <td className="py-3 px-4 text-right font-mono tabular-nums text-white">
                              {q.fleet_quantity} × {q.lease_term_months}m
                            </td>
                            <td className={`py-3 px-4 text-xs font-medium ${QUOTATION_STATUS_TEXT[q.status].color}`}>
                              {QUOTATION_STATUS_TEXT[q.status].label}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                type="button"
                                onClick={() => setSelectedQuotation(q)}
                                className="text-xs font-medium text-[#C8A45D] hover:text-[#EBD4A0]"
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
              )}
            </>
          )}

          {/* VEHICLES */}
          {activeTab === 'vehicles' && (
            <div className="space-y-5">
              <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-1 p-1 bg-[#0C0C0F] border border-white/[0.08] rounded-lg w-fit">
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
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                        vehicleFilterType === f.id
                          ? 'bg-[#C8A45D] text-[#0B0B0D]'
                          : 'text-[#B4B0A8] hover:text-white'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="relative w-full md:w-72">
                  <Search className="h-4 w-4 text-[#949088] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={vehicleSearch}
                    onChange={(e) => setVehicleSearch(e.target.value)}
                    placeholder="Filter make, model, category..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#8F8B84] focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#101014] text-xs text-[#B4B0A8] border-b border-white/[0.08]">
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
                    <tbody className="divide-y divide-white/[0.06]">
                      {loadingData && vehicles.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-sm text-[#B4B0A8]">
                            Loading vehicles...
                          </td>
                        </tr>
                      ) : vehicles.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-10 text-center text-sm text-[#B4B0A8]">
                            No vehicles match the active filter.
                          </td>
                        </tr>
                      ) : (
                        vehicles.map((v) => (
                          <tr key={v.id} className="hover:bg-white/[0.02]">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <div className="h-11 w-16 rounded overflow-hidden bg-[#1B1B20] shrink-0">
                                  <VehicleImage
                                    src={v.image_url}
                                    alt={`${v.make} ${v.model}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium text-white">
                                    {v.year} {v.make} {v.model}
                                  </div>
                                  <div className="text-xs text-[#B4B0A8]">
                                    {v.country_availability.join(' / ')}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-xs font-medium text-[#D4D4DC]">
                              {v.listing_type === 'showroom' ? 'Showroom' : 'Used Cars'}
                            </td>
                            <td className="py-3 px-4 text-xs text-[#B4B0A8]">
                              {v.category} · {v.fuel_type} · {v.transmission}
                            </td>
                            <td className="py-3 px-4 text-right font-mono tabular-nums font-medium text-[#C8A45D]">
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
                                className="px-2 py-1 text-xs border border-white/10 rounded bg-[#0C0C0F] text-white"
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
                                className={`inline-flex items-center justify-center h-8 w-8 rounded-lg transition-colors ${
                                  v.is_featured
                                    ? 'text-[#C8A45D] bg-[#1D1B15]'
                                    : 'text-[#5B5B66] hover:text-[#B4B0A8]'
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
                                    className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded"
                                  >
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setConfirmDeleteVehicleId(null)}
                                    className="px-2 py-1 text-xs text-[#B4B0A8] border border-white/15 rounded"
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
                                    className="h-8 w-8 inline-flex items-center justify-center text-[#B4B0A8] hover:text-[#C8A45D] hover:bg-white/[0.06] rounded-lg"
                                    title="Edit vehicle"
                                  >
                                    <Pencil className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setConfirmDeleteVehicleId(v.id)}
                                    className="h-8 w-8 inline-flex items-center justify-center text-[#B4B0A8] hover:text-red-400 hover:bg-red-950/30 rounded-lg"
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

          {/* QUOTATIONS */}
          {activeTab === 'quotations' && (
            <div className="space-y-5">
              <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-5 relative">
                  <Search className="h-4 w-4 text-[#949088] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={quoteSearch}
                    onChange={(e) => setQuoteSearch(e.target.value)}
                    placeholder="Search client name, company, email, ref..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#8F8B84] focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div className="md:col-span-4">
                  <select
                    value={quoteStatusFilter}
                    onChange={(e) => setQuoteStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-white/10 rounded-lg bg-[#0C0C0F] text-white"
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
                    className="w-full px-3 py-2 text-sm border border-white/10 rounded-lg bg-[#0C0C0F] text-white"
                  >
                    <option value="all">All Countries</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Oman">Oman</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#101014] text-xs text-[#B4B0A8] border-b border-white/[0.08]">
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
                    <tbody className="divide-y divide-white/[0.06]">
                      {quotations.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-10 text-center text-sm text-[#B4B0A8]">
                            No quotation requests found matching your criteria.
                          </td>
                        </tr>
                      ) : (
                        quotations.map((q) => (
                          <tr key={q.id} className="hover:bg-white/[0.02]">
                            <td className="py-3 px-4 font-mono tabular-nums text-xs text-[#C8A45D]">
                              {q.reference_code}
                            </td>
                            <td className="py-3 px-4">
                              <div className="font-medium text-white">{q.full_name}</div>
                              <div className="text-xs text-[#B4B0A8]">
                                {q.company_name || 'Individual'} · {q.email}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-xs text-[#D4D4DC]">
                              {q.country} · {q.city}
                            </td>
                            <td className="py-3 px-4 text-right font-mono tabular-nums text-xs text-white">
                              {q.fleet_quantity} · {q.lease_term_months}m
                            </td>
                            <td className="py-3 px-4 text-right font-mono tabular-nums text-xs text-[#C8A45D]">
                              {q.estimated_monthly_quote !== null
                                ? `SAR ${q.estimated_monthly_quote.toLocaleString()}`
                                : '—'}
                            </td>
                            <td className={`py-3 px-4 text-xs font-medium ${QUOTATION_STATUS_TEXT[q.status].color}`}>
                              {QUOTATION_STATUS_TEXT[q.status].label}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                type="button"
                                onClick={() => setSelectedQuotation(q)}
                                className="px-3 py-1.5 text-xs font-medium text-[#C8A45D] border border-white/15 hover:border-[#C8A45D]/50 rounded-md"
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

          {/* MESSAGES */}
          {activeTab === 'messages' && (
            <div className="bg-[#141418] border border-white/[0.08] rounded-xl divide-y divide-white/[0.08]">
              {messages.length === 0 ? (
                <div className="p-10 text-center text-sm text-[#B4B0A8]">
                  No contact messages received yet.
                </div>
              ) : (
                messages.map((m) => (
                  <div key={m.id} className="p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="text-xs text-[#B4B0A8]">
                        <span className="text-[#C8A45D]">{m.department}</span> · {m.country} ·{' '}
                        {m.created_at} ·{' '}
                        <span className={m.status === 'unread' ? 'text-[#FBBF24] font-medium' : 'text-[#B4B0A8]'}>
                          {m.status}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {m.subject}
                      </h3>
                      <div className="text-xs text-[#B4B0A8]">
                        From {m.full_name} {m.company_name ? `(${m.company_name})` : ''} · {m.email} ·{' '}
                        <span className="font-mono">{m.phone}</span>
                      </div>
                      <p className="mt-2 text-sm text-[#D4D4DC] leading-relaxed">{m.message}</p>
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
                          className="px-3 py-1.5 text-xs font-medium text-[#C8A45D] border border-white/15 rounded-md hover:border-[#C8A45D]/50"
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
                          className="px-3 py-1.5 text-xs font-medium text-[#B4B0A8] border border-white/10 rounded-md hover:text-white"
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

          {/* CLIENT REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="bg-[#141418] border border-white/[0.08] rounded-xl divide-y divide-white/[0.08]">
              {loadingData && reviews.length === 0 ? (
                <div className="p-10 text-center text-sm text-[#B4B0A8]">
                  Loading corporate client reviews...
                </div>
              ) : reviews.length === 0 ? (
                <div className="p-10 text-center text-sm text-[#B4B0A8]">
                  No corporate client reviews recorded yet.
                </div>
              ) : (
                reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#B4B0A8]">
                        <span className="font-semibold text-[#C8A45D]">{rev.company}</span>
                        <span>·</span>
                        <span className="font-mono tabular-nums">{rev.date_of_service}</span>
                        <span>·</span>
                        <span className="font-mono tabular-nums text-white">
                          Overall {rev.overall}/5
                        </span>
                        <span>·</span>
                        <span className={rev.would_recommend ? 'text-[#4ADE80]' : 'text-[#B4B0A8]'}>
                          {rev.would_recommend ? 'Would Recommend' : 'Neutral'}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-white">
                        {rev.employee}
                        {rev.position ? (
                          <span className="text-[#B4B0A8] font-normal"> — {rev.position}</span>
                        ) : null}
                      </div>
                      <p className="text-sm text-[#D4D4DC] leading-relaxed whitespace-pre-line">
                        {rev.comment || 'No written remarks provided.'}
                      </p>
                      <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono tabular-nums text-[#949088]">
                        <span>Vehicle: {rev.vehicle_condition}/5</span>
                        <span>Staff: {rev.staff_behavior}/5</span>
                        <span>Pickup: {rev.pickup_process}/5</span>
                        <span>Dropoff: {rev.dropoff_process}/5</span>
                        <span>Cleanliness: {rev.cleanliness}/5</span>
                        <span>Value: {rev.value_for_money}/5</span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {confirmDeleteReviewId === rev.id ? (
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={async () => {
                              await api.deleteAdminReview(rev.id);
                              setReviews((prev) => prev.filter((item) => item.id !== rev.id));
                              setConfirmDeleteReviewId(null);
                            }}
                            className="px-2.5 py-1.5 text-xs font-medium text-white bg-red-600 rounded"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteReviewId(null)}
                            className="px-2.5 py-1.5 text-xs text-[#B4B0A8] border border-white/15 rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteReviewId(rev.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#B4B0A8] hover:text-red-400 border border-white/10 hover:border-red-500/40 rounded-md transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* WEBSITE MANAGEMENT CMS */}
          {activeTab === 'website' && can('website') && <WebsiteCmsPanel />}

          {/* ADMIN TEAM & PRIVILEGES */}
          {activeTab === 'admins' && can('admins') && <AdminUsersPanel currentUser={adminUser} />}
        </div>
      </div>

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
