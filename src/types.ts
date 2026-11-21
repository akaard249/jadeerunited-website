export type ListingType = 'showroom' | 'used';
export type VehicleStatus = 'available' | 'reserved' | 'leased' | 'sold';
export type QuotationStatus = 'new' | 'in_review' | 'quoted' | 'approved' | 'rejected' | 'closed';
export type CountryName = 'Bahrain' | 'Saudi Arabia' | 'Oman';

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  category: string;
  listing_type: ListingType;
  fuel_type: string;
  transmission: string;
  mileage_km: number;
  price_or_monthly_rate: number;
  currency: string;
  country_availability: string[];
  is_featured: boolean;
  status: VehicleStatus;
  image_url: string;
  description: string;
  safety_telematics_specs: string[];
  created_at: string;
  updated_at: string;
}

export interface Offer {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  monthly_rate_from: number | null;
  currency: string;
  countries: string[];
  valid_until: string;
  is_active: boolean;
  highlights: string[];
  description: string;
  image_url: string;
  created_at: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  read_time_minutes: number;
  excerpt: string;
  body: string;
  image_url: string;
  published_at: string;
}

export interface QuotationAddOns {
  driver_service: boolean;
  limousine_service: boolean;
  replacement_vehicle: boolean;
  tracking_blue_key: boolean;
  usa_roll_bars_cages: boolean;
  hybrid_preference: boolean;
}

export interface QuotationRequestRecord {
  id: number;
  reference_code: string;
  full_name: string;
  company_name: string;
  client_type: 'corporate' | 'individual';
  email: string;
  phone: string;
  country: CountryName;
  city: string;
  vehicle_id: number | null;
  vehicle_label: string | null;
  vehicle_listing_type: ListingType | null;
  offer_id: number | null;
  offer_title: string | null;
  fleet_quantity: number;
  lease_term_months: number;
  add_ons: QuotationAddOns;
  notes: string;
  status: QuotationStatus;
  estimated_monthly_quote: number | null;
  admin_notes: string;
  routing_email: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessageRecord {
  id: number;
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  country: string;
  department: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'archived';
  created_at: string;
}

export interface AdminUser {
  id: number;
  email: string;
  name: string;
}

export interface AdminDashboardStats {
  totalShowroom: number;
  totalUsed: number;
  totalQuotations: number;
  pendingQuotations: number;
  unreadMessages: number;
}
