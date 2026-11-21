<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Offer;
use App\Models\QuotationRequest;
use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $landCruiser = Vehicle::create([
            'make' => 'Toyota',
            'model' => 'Land Cruiser 300 VX-R',
            'year' => 2026,
            'category' => 'SUV',
            'listing_type' => 'showroom',
            'fuel_type' => 'Petrol',
            'transmission' => 'Automatic',
            'mileage_km' => 0,
            'price_or_monthly_rate' => 695.00,
            'currency' => 'BHD',
            'country_availability' => ['Bahrain', 'Saudi Arabia', 'Oman'],
            'is_featured' => true,
            'status' => 'available',
            'description' => 'Flagship corporate 4x4 engineered for GCC executive transport and remote energy-sector site operations with full manufacturer-schedule maintenance and cross-border comprehensive insurance.',
            'safety_telematics_specs' => [
                'GPS Vehicle Tracking & Fleet Telematics',
                'Blue Key Driver Access Control',
                'USA-Standard Roll Bar & Roll Cage Ready',
                '700+ Quick Service Facilities via B2B Partners',
            ],
        ]);

        $corollaHybrid = Vehicle::create([
            'make' => 'Toyota',
            'model' => 'Corolla 1.8 Hybrid Executive',
            'year' => 2026,
            'category' => 'Hybrid',
            'listing_type' => 'showroom',
            'fuel_type' => 'Hybrid',
            'transmission' => 'CVT Automatic',
            'mileage_km' => 0,
            'price_or_monthly_rate' => 215.00,
            'currency' => 'BHD',
            'country_availability' => ['Bahrain', 'Saudi Arabia', 'Oman'],
            'is_featured' => true,
            'status' => 'available',
            'description' => 'Core corporate fleet sedan aligned with Bahrain, Saudi Arabia, and Oman Vision 2030 sustainability mandates.',
            'safety_telematics_specs' => [
                'Vision 2030 Hybrid Powertrain',
                'GPS Tracking & Blue Key Access Control',
                'Door-to-Door Service & Replacement Vehicle Guarantee',
            ],
        ]);

        Vehicle::create([
            'make' => 'Toyota',
            'model' => 'Land Cruiser GXR 3.5TT',
            'year' => 2023,
            'category' => 'SUV',
            'listing_type' => 'used',
            'fuel_type' => 'Petrol',
            'transmission' => 'Automatic',
            'mileage_km' => 42800,
            'price_or_monthly_rate' => 24900.00,
            'currency' => 'BHD',
            'country_availability' => ['Bahrain', 'Saudi Arabia'],
            'is_featured' => true,
            'status' => 'available',
            'description' => 'Single-owner Jadeer United ex-corporate executive vehicle with complete manufacturer-schedule maintenance ledger.',
            'safety_telematics_specs' => ['120-Point Technical Certification', 'Full Manufacturer Maintenance Ledger'],
        ]);

        $offer = Offer::create([
            'title' => 'Vision 2030 Hybrid Fleet Leasing Package',
            'slug' => 'vision-2030-hybrid-fleet-package',
            'subtitle' => 'Transition corporate fleets to self-charging hybrid vehicles across Bahrain, KSA, and Oman.',
            'category' => 'Operational Leasing',
            'monthly_rate_from' => 205.00,
            'currency' => 'BHD',
            'countries' => ['Bahrain', 'Saudi Arabia', 'Oman'],
            'valid_until' => '2026-12-31',
            'is_active' => true,
            'highlights' => [
                'GPS tracking and Blue Key access control included',
                '700+ B2B quick service facilities & 24/7 mobile service crew',
                'GCC comprehensive insurance & guaranteed replacement vehicles',
            ],
            'description' => 'Fixed monthly operational leasing supporting Vision 2030 sustainability mandates across Bahrain, Saudi Arabia, and Oman.',
        ]);

        Article::create([
            'title' => 'Accelerating Vision 2030 with Hybrid Operational Leasing Across the GCC',
            'slug' => 'accelerating-vision-2030-hybrid-operational-leasing',
            'category' => 'Sustainability',
            'author' => 'Jadeer United Strategy Desk',
            'read_time_minutes' => 5,
            'excerpt' => 'How GCC enterprises cut emissions and fuel costs with self-charging hybrid operational fleets.',
            'body' => 'Operational leasing with hybrid fleets enables immediate CO2 reduction across Bahrain, Saudi Arabia, and Oman with zero charging downtime.',
            'published_at' => '2026-10-18',
        ]);

        QuotationRequest::create([
            'reference_code' => 'JU-2026-1041',
            'full_name' => 'Tariq Al-Qahtani',
            'company_name' => 'Nesma Industrial Infrastructure',
            'client_type' => 'corporate',
            'email' => 't.alqahtani@nesma-projects.example',
            'phone' => '+966 55 412 8890',
            'country' => 'Saudi Arabia',
            'city' => 'Jubail',
            'vehicle_id' => $landCruiser->id,
            'offer_id' => $offer->id,
            'fleet_quantity' => 14,
            'lease_term_months' => 36,
            'add_ons' => [
                'replacement_vehicle' => true,
                'tracking_blue_key' => true,
                'usa_roll_bars_cages' => true,
            ],
            'notes' => 'Required for Jubail & Ras al Khair petrochemical expansion phase.',
            'status' => 'new',
            'routing_email' => 'sales@jadeergulf.com',
        ]);
    }
}
