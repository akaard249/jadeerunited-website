import type {
  AboutGalleryItem,
  AdminDashboardStats,
  AdminPrivilege,
  AdminUser,
  Article,
  BranchRecord,
  ClientReview,
  ContactMessageRecord,
  Offer,
  QuotationAddOns,
  QuotationRequestRecord,
  QuotationStatus,
  SiteContent,
  Vehicle,
  VehicleStatus,
  WorkshopRecord,
} from '../types';

// Keep admin session token strictly in memory (never localStorage or sessionStorage)
let inMemoryAdminToken: string | null = null;
let inMemoryAdminUser: AdminUser | null = null;

export function setAdminSession(token: string | null, user: AdminUser | null): void {
  inMemoryAdminToken = token;
  inMemoryAdminUser = user;
}

export function getAdminSession(): { token: string | null; user: AdminUser | null } {
  return { token: inMemoryAdminToken, user: inMemoryAdminUser };
}

async function requestJson<T>(url: string, options: RequestInit = {}, auth = false): Promise<T> {
  const headers = new Headers(options.headers || {});
  if (!(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  if (auth && inMemoryAdminToken) {
    headers.set('Authorization', `Bearer ${inMemoryAdminToken}`);
  }

  const res = await fetch(url, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 401 && auth) {
      setAdminSession(null, null);
    }
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data as T;
}

export const api = {
  // Public endpoints
  getHome: () =>
    requestJson<{
      showroomFeatured: Vehicle[];
      usedFeatured: Vehicle[];
      offers: Offer[];
      articles: Article[];
      reviews: ClientReview[];
      branches: BranchRecord[];
      siteContent: Partial<SiteContent>;
    }>('/api/home'),

  getSiteContent: () =>
    requestJson<{
      content: Partial<SiteContent>;
      branches: BranchRecord[];
      workshops: WorkshopRecord[];
      gallery: AboutGalleryItem[];
      reviews: ClientReview[];
    }>('/api/site-content'),

  getReviews: () => requestJson<{ reviews: ClientReview[] }>('/api/reviews'),

  submitReview: (payload: {
    company: string;
    employee: string;
    position: string;
    vehicle_condition: number;
    staff_behavior: number;
    value_for_money: number;
    overall: number;
    would_recommend: boolean;
    comment: string;
  }) =>
    requestJson<{ review: ClientReview }>('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getVehicles: (params: Record<string, string | number | undefined> = {}) => {
    const qs = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== '' && v !== 'All') {
        qs.set(k, String(v));
      }
    });
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return requestJson<{ vehicles: Vehicle[] }>(`/api/vehicles${suffix}`);
  },

  getVehicle: (id: number) =>
    requestJson<{ vehicle: Vehicle; related: Vehicle[] }>(`/api/vehicles/${id}`),

  getVehicleBySlug: (section: 'showroom' | 'used-cars', brand: string, model: string) =>
    requestJson<{ vehicle: Vehicle; related: Vehicle[] }>(
      `/api/vehicles/by-slug/${encodeURIComponent(section)}/${encodeURIComponent(brand)}/${encodeURIComponent(model)}`
    ),

  getOffers: () => requestJson<{ offers: Offer[] }>('/api/offers'),

  getArticles: (params: { category?: string; search?: string } = {}) => {
    const qs = new URLSearchParams();
    if (params.category && params.category !== 'All') qs.set('category', params.category);
    if (params.search) qs.set('search', params.search);
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return requestJson<{ articles: Article[] }>(`/api/articles${suffix}`);
  },

  getArticle: (slug: string) =>
    requestJson<{
      article: Article;
      more: Array<
        Pick<Article, 'id' | 'title' | 'title_ar' | 'slug' | 'category' | 'published_at' | 'read_time_minutes'>
      >;
    }>(`/api/articles/${encodeURIComponent(slug)}`),

  submitQuotation: (payload: {
    full_name: string;
    company_name: string;
    client_type: 'corporate' | 'individual';
    email: string;
    phone: string;
    country: string;
    city: string;
    vehicle_id: number | null;
    selected_trim?: string;
    offer_id: number | null;
    fleet_quantity: number;
    lease_term_months: number;
    add_ons: QuotationAddOns;
    notes: string;
  }) =>
    requestJson<{ message: string; quotation: QuotationRequestRecord }>('/api/quotations', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  submitContact: (payload: {
    full_name: string;
    company_name: string;
    email: string;
    phone: string;
    country: string;
    department: string;
    subject: string;
    message: string;
  }) =>
    requestJson<{ message: string; routed_to: string }>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  // Admin Auth
  getAdminAuthStatus: () =>
    requestJson<{ envPasscodeActive: boolean; needsSetup: boolean }>('/api/admin/auth/status'),

  setupAdmin: async (payload: { name: string; email: string; password: string }) => {
    const data = await requestJson<{ token: string; admin: AdminUser }>('/api/admin/auth/setup', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    setAdminSession(data.token, data.admin);
    return data;
  },

  loginAdmin: async (payload: { email: string; password: string }) => {
    const data = await requestJson<{ token: string; admin: AdminUser }>('/api/admin/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    setAdminSession(data.token, data.admin);
    return data;
  },

  logoutAdmin: async () => {
    try {
      await requestJson('/api/admin/auth/logout', { method: 'POST' }, true);
    } finally {
      setAdminSession(null, null);
    }
  },

  // Protected Admin Endpoints
  getAdminDashboard: () =>
    requestJson<{ stats: AdminDashboardStats; recentQuotations: QuotationRequestRecord[] }>(
      '/api/admin/dashboard',
      {},
      true
    ),

  getAdminVehicles: (params: { listing_type?: string; search?: string } = {}) => {
    const qs = new URLSearchParams();
    if (params.listing_type && params.listing_type !== 'all') qs.set('listing_type', params.listing_type);
    if (params.search) qs.set('search', params.search);
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return requestJson<{ vehicles: Vehicle[] }>(`/api/admin/vehicles${suffix}`, {}, true);
  },

  createAdminVehicle: (formData: FormData) =>
    requestJson<{ vehicle: Vehicle }>('/api/admin/vehicles', { method: 'POST', body: formData }, true),

  updateAdminVehicle: (id: number, formData: FormData) =>
    requestJson<{ vehicle: Vehicle }>(`/api/admin/vehicles/${id}`, { method: 'PUT', body: formData }, true),

  quickUpdateAdminVehicle: (id: number, payload: { status?: VehicleStatus; is_featured?: boolean }) =>
    requestJson<{ vehicle: Vehicle }>(
      `/api/admin/vehicles/${id}/quick`,
      { method: 'PATCH', body: JSON.stringify(payload) },
      true
    ),

  deleteAdminVehicle: (id: number) =>
    requestJson<{ deleted: boolean }>(`/api/admin/vehicles/${id}`, { method: 'DELETE' }, true),

  getAdminQuotations: (params: { status?: string; country?: string; search?: string } = {}) => {
    const qs = new URLSearchParams();
    if (params.status && params.status !== 'all') qs.set('status', params.status);
    if (params.country && params.country !== 'all') qs.set('country', params.country);
    if (params.search) qs.set('search', params.search);
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return requestJson<{ quotations: QuotationRequestRecord[] }>(`/api/admin/quotations${suffix}`, {}, true);
  },

  updateAdminQuotation: (
    id: number,
    payload: { status: QuotationStatus; estimated_monthly_quote: number | null; admin_notes: string }
  ) =>
    requestJson<{ quotation: QuotationRequestRecord }>(
      `/api/admin/quotations/${id}`,
      { method: 'PATCH', body: JSON.stringify(payload) },
      true
    ),

  deleteAdminQuotation: (id: number) =>
    requestJson<{ deleted: boolean }>(`/api/admin/quotations/${id}`, { method: 'DELETE' }, true),

  getAdminMessages: () =>
    requestJson<{ messages: ContactMessageRecord[] }>('/api/admin/messages', {}, true),

  updateAdminMessageStatus: (id: number, status: 'unread' | 'read' | 'archived') =>
    requestJson<{ ok: boolean }>(
      `/api/admin/messages/${id}`,
      { method: 'PATCH', body: JSON.stringify({ status }) },
      true
    ),

  getAdminReviews: () =>
    requestJson<{ reviews: ClientReview[] }>('/api/admin/reviews', {}, true),

  deleteAdminReview: (id: number) =>
    requestJson<{ deleted: boolean }>(`/api/admin/reviews/${id}`, { method: 'DELETE' }, true),

  // Website Management CMS (Hero, About Gallery, Branches, Workshops, Contact Info)
  uploadAdminImage: (file: File) => {
    const fd = new FormData();
    fd.append('image', file);
    return requestJson<{ image_url: string }>('/api/admin/upload', { method: 'POST', body: fd }, true);
  },

  getAdminSiteContent: () =>
    requestJson<{
      content: Partial<SiteContent>;
      gallery: AboutGalleryItem[];
      branches: BranchRecord[];
      workshops: WorkshopRecord[];
      availableAssets: string[];
    }>('/api/admin/site-content', {}, true),

  updateAdminSiteContent: (content: Partial<SiteContent>) =>
    requestJson<{ content: Partial<SiteContent> }>(
      '/api/admin/site-content',
      { method: 'PUT', body: JSON.stringify({ content }) },
      true
    ),

  createAdminGalleryItem: (formData: FormData) =>
    requestJson<{ item: AboutGalleryItem }>('/api/admin/gallery', { method: 'POST', body: formData }, true),

  updateAdminGalleryItem: (id: number, formData: FormData) =>
    requestJson<{ item: AboutGalleryItem }>(`/api/admin/gallery/${id}`, { method: 'PUT', body: formData }, true),

  deleteAdminGalleryItem: (id: number) =>
    requestJson<{ deleted: boolean }>(`/api/admin/gallery/${id}`, { method: 'DELETE' }, true),

  createAdminBranch: (payload: Omit<BranchRecord, 'id'>) =>
    requestJson<{ branch: BranchRecord }>(
      '/api/admin/branches',
      { method: 'POST', body: JSON.stringify(payload) },
      true
    ),

  updateAdminBranch: (id: number, payload: Partial<Omit<BranchRecord, 'id'>>) =>
    requestJson<{ branch: BranchRecord }>(
      `/api/admin/branches/${id}`,
      { method: 'PUT', body: JSON.stringify(payload) },
      true
    ),

  deleteAdminBranch: (id: number) =>
    requestJson<{ deleted: boolean }>(`/api/admin/branches/${id}`, { method: 'DELETE' }, true),

  createAdminWorkshop: (payload: Omit<WorkshopRecord, 'id'>) =>
    requestJson<{ workshop: WorkshopRecord }>(
      '/api/admin/workshops',
      { method: 'POST', body: JSON.stringify(payload) },
      true
    ),

  updateAdminWorkshop: (id: number, payload: Partial<Omit<WorkshopRecord, 'id'>>) =>
    requestJson<{ workshop: WorkshopRecord }>(
      `/api/admin/workshops/${id}`,
      { method: 'PUT', body: JSON.stringify(payload) },
      true
    ),

  deleteAdminWorkshop: (id: number) =>
    requestJson<{ deleted: boolean }>(`/api/admin/workshops/${id}`, { method: 'DELETE' }, true),

  // Admin Team & Section Privileges
  getAdminUsers: () =>
    requestJson<{ users: AdminUser[] }>('/api/admin/users', {}, true),

  createAdminUser: (payload: {
    name: string;
    email: string;
    password: string;
    role: 'super_admin' | 'staff';
    privileges: AdminPrivilege[];
  }) =>
    requestJson<{ user: AdminUser }>(
      '/api/admin/users',
      { method: 'POST', body: JSON.stringify(payload) },
      true
    ),

  updateAdminUser: (
    id: number,
    payload: {
      name: string;
      email: string;
      role: 'super_admin' | 'staff';
      privileges: AdminPrivilege[];
      is_active: boolean;
      password?: string;
    }
  ) =>
    requestJson<{ user: AdminUser }>(
      `/api/admin/users/${id}`,
      { method: 'PUT', body: JSON.stringify(payload) },
      true
    ),

  deleteAdminUser: (id: number) =>
    requestJson<{ deleted: boolean }>(`/api/admin/users/${id}`, { method: 'DELETE' }, true),
};
