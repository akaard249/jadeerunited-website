<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('users') && ! Schema::hasColumn('users', 'is_admin')) {
            Schema::table('users', function (Blueprint $table) {
                $table->boolean('is_admin')->default(false)->after('password');
            });
        }

        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('make', 80);
            $table->string('model', 120);
            $table->unsignedSmallInteger('year');
            $table->string('category', 50)->index(); // SUV, Sedan, Fleet, Hybrid
            $table->enum('listing_type', ['showroom', 'used'])->default('showroom')->index();
            $table->string('fuel_type', 50);
            $table->string('transmission', 50);
            $table->unsignedInteger('mileage_km')->default(0);
            $table->decimal('price_or_monthly_rate', 10, 2);
            $table->string('currency', 6)->default('BHD');
            $table->json('country_availability'); // ["Bahrain", "Saudi Arabia", "Oman"]
            $table->boolean('is_featured')->default(false)->index();
            $table->enum('status', ['available', 'reserved', 'leased', 'sold'])->default('available')->index();
            $table->string('image_path')->nullable();
            $table->text('description');
            $table->json('safety_telematics_specs')->nullable();
            $table->timestamps();
        });

        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('title', 160);
            $table->string('slug', 180)->unique();
            $table->string('subtitle', 255);
            $table->string('category', 80);
            $table->decimal('monthly_rate_from', 10, 2)->nullable();
            $table->string('currency', 6)->default('BHD');
            $table->json('countries');
            $table->date('valid_until');
            $table->boolean('is_active')->default(true)->index();
            $table->json('highlights')->nullable();
            $table->text('description');
            $table->string('image_path')->nullable();
            $table->timestamps();
        });

        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title', 180);
            $table->string('slug', 200)->unique();
            $table->string('category', 80)->index();
            $table->string('author', 120);
            $table->unsignedTinyInteger('read_time_minutes')->default(4);
            $table->text('excerpt');
            $table->longText('body');
            $table->string('image_path')->nullable();
            $table->date('published_at')->index();
            $table->timestamps();
        });

        Schema::create('quotation_requests', function (Blueprint $table) {
            $table->id();
            $table->string('reference_code', 30)->unique();
            $table->string('full_name', 120);
            $table->string('company_name', 160)->nullable();
            $table->enum('client_type', ['corporate', 'individual'])->default('corporate');
            $table->string('email', 160);
            $table->string('phone', 40);
            $table->enum('country', ['Bahrain', 'Saudi Arabia', 'Oman'])->index();
            $table->string('city', 100);
            $table->foreignId('vehicle_id')->nullable()->constrained('vehicles')->nullOnDelete();
            $table->foreignId('offer_id')->nullable()->constrained('offers')->nullOnDelete();
            $table->unsignedSmallInteger('fleet_quantity')->default(1);
            $table->unsignedSmallInteger('lease_term_months')->default(36);
            $table->json('add_ons')->nullable();
            $table->text('notes')->nullable();
            $table->enum('status', ['new', 'in_review', 'quoted', 'approved', 'rejected', 'closed'])
                ->default('new')
                ->index();
            $table->decimal('estimated_monthly_quote', 12, 2)->nullable();
            $table->text('admin_notes')->nullable();
            $table->string('routing_email', 160)->default('sales@jadeergulf.com');
            $table->timestamps();
        });

        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 120);
            $table->string('company_name', 160)->nullable();
            $table->string('email', 160);
            $table->string('phone', 40);
            $table->string('country', 60);
            $table->string('department', 80)->default('General Inquiries');
            $table->string('subject', 180);
            $table->text('message');
            $table->enum('status', ['unread', 'read', 'archived'])->default('unread');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_messages');
        Schema::dropIfExists('quotation_requests');
        Schema::dropIfExists('articles');
        Schema::dropIfExists('offers');
        Schema::dropIfExists('vehicles');
    }
};
