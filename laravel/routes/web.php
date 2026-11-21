<?php

use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\QuotationController as AdminQuotationController;
use App\Http\Controllers\Admin\VehicleController as AdminVehicleController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\VehicleCatalogController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Website Routes — Jadeer United (www.jadeerunited.com)
|--------------------------------------------------------------------------
*/
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::view('/about', 'public.about')->name('about');

// Showroom (New & Operational Leasing Fleet)
Route::get('/showroom', [VehicleCatalogController::class, 'showroom'])->name('showroom.index');
Route::get('/showroom/{vehicle}', [VehicleCatalogController::class, 'showShowroom'])->name('showroom.show');

// Certified Used Cars
Route::get('/used-cars', [VehicleCatalogController::class, 'usedCars'])->name('used-cars.index');
Route::get('/used-cars/{vehicle}', [VehicleCatalogController::class, 'showUsedCar'])->name('used-cars.show');

// Offers & Articles
Route::get('/offers', [OfferController::class, 'index'])->name('offers.index');
Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{article:slug}', [ArticleController::class, 'show'])->name('articles.show');

// Operational Leasing & Inquiry Quotations
Route::get('/quotation', [QuotationController::class, 'create'])->name('quotation.create');
Route::post('/quotation', [QuotationController::class, 'store'])->name('quotation.store');

// Contact Us
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

/*
|--------------------------------------------------------------------------
| Protected Admin Panel Routes (/admin)
| Requires Laravel auth + EnsureUserIsAdmin ('admin') middleware
|--------------------------------------------------------------------------
*/
Route::prefix('admin')
    ->name('admin.')
    ->middleware(['auth', 'admin'])
    ->group(function () {
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');

        // Showroom & Used Cars Management (CRUD + quick toggles)
        Route::resource('vehicles', AdminVehicleController::class);
        Route::patch('vehicles/{vehicle}/toggle-featured', [AdminVehicleController::class, 'toggleFeatured'])
            ->name('vehicles.toggle-featured');
        Route::patch('vehicles/{vehicle}/status', [AdminVehicleController::class, 'updateStatus'])
            ->name('vehicles.status');

        // Quotation Request Management
        Route::get('quotations', [AdminQuotationController::class, 'index'])->name('quotations.index');
        Route::get('quotations/{quotation}', [AdminQuotationController::class, 'show'])->name('quotations.show');
        Route::patch('quotations/{quotation}', [AdminQuotationController::class, 'update'])->name('quotations.update');
        Route::delete('quotations/{quotation}', [AdminQuotationController::class, 'destroy'])->name('quotations.destroy');
    });
