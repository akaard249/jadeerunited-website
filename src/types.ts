export type ListingType = 'showroom' | 'used';
export type VehicleStatus = 'available' | 'reserved' | 'leased' | 'sold';
export type QuotationStatus = 'new' | 'in_review' | 'quoted' | 'approved' | 'rejected' | 'closed';
export type CountryName = 'Bahrain' | 'Saudi Arabia' | 'Oman';
export type Lang = 'en' | 'ar';

export interface VehicleTrim {
  trim: string;
  price: number;
}

export interface VehicleSpecs {
  engine_capacity?: string | null;
  horsepower?: string | null;
  cylinders?: string | null;
  fuel_consumption?: string | null;
  fuel_capacity?: string | null;
  doors?: string | null;
  speeds?: string | null;
  dimensions?: string | null;
}

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  category: string;
  sub_type: string;
  service_type: string;
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
  trims: VehicleTrim[];
  specs: VehicleSpecs;
  colors: string[];
  created_at: string;
  updated_at: string;
}

export interface Offer {
  id: number;
  title: string;
  title_ar: string;
  slug: string;
  subtitle: string;
  subtitle_ar: string;
  category: string;
  monthly_rate_from: number | null;
  currency: string;
  countries: string[];
  valid_until: string;
  is_active: boolean;
  highlights: string[];
  description: string;
  description_ar: string;
  image_url: string;
  vehicle_id: number | null;
  created_at: string;
}

export interface Article {
  id: number;
  title: string;
  title_ar: string;
  slug: string;
  category: string;
  author: string;
  author_ar: string;
  read_time_minutes: number;
  excerpt: string;
  excerpt_ar: string;
  body: string;
  body_ar: string;
  image_url: string;
  published_at: string;
}

export interface ClientReview {
  id: number;
  company: string;
  employee: string;
  position: string;
  date_of_service: string;
  vehicle_condition: number;
  price_satisfaction: number;
  staff_behavior: number;
  pickup_process: number;
  dropoff_process: number;
  cleanliness: number;
  value_for_money: number;
  overall: number;
  would_recommend: boolean;
  comment: string;
  created_at: string;
}

export interface BranchRecord {
  id: number;
  name: string;
  name_ar: string;
  country: string;
  city: string;
  phone: string;
  is_hq: boolean;
}

export interface WorkshopRecord {
  id: number;
  name: string;
  name_ar: string;
  branch_name: string;
  city: string;
  country: string;
  phone: string;
  hours: string;
}

export interface SiteContent {
  hero_tagline_en: string;
  hero_tagline_ar: string;
  about_headline_en: string;
  about_headline_ar: string;
  about_p1_en: string;
  about_p1_ar: string;
  about_p2_en: string;
  about_p2_ar: string;
  about_quote_en: string;
  about_quote_ar: string;
  vision_en: string;
  vision_ar: string;
  mission_en: string;
  mission_ar: string;
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
  selected_trim: string;
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
  totalReviews: number;
}
