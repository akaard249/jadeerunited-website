<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\QuotationRequest;
use App\Models\Vehicle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        return view('admin.dashboard', [
            'totalShowroomCars' => Vehicle::showroom()->count(),
            'totalUsedCars' => Vehicle::usedCars()->count(),
            'totalQuotations' => QuotationRequest::count(),
            'pendingQuotations' => QuotationRequest::whereIn('status', ['new', 'in_review'])->count(),
            'recentQuotations' => QuotationRequest::with(['vehicle', 'offer'])->latest()->limit(8)->get(),
        ]);
    }
}
