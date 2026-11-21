<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuotationRequest;
use App\Mail\QuotationSubmittedMail;
use App\Models\Offer;
use App\Models\QuotationRequest;
use App\Models\Vehicle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;

class QuotationController extends Controller
{
    public function create(Request $request): View
    {
        return view('public.quotation', [
            'vehicles' => Vehicle::orderBy('listing_type')->orderBy('make')->get(),
            'offers' => Offer::where('is_active', true)->get(),
            'selectedVehicleId' => $request->integer('vehicle') ?: null,
            'selectedOfferId' => $request->integer('offer') ?: null,
        ]);
    }

    public function store(StoreQuotationRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['reference_code'] = 'JU-' . now()->format('Y') . '-' . random_int(1000, 9999);
        $data['status'] = 'new';
        $data['routing_email'] = env('JADEER_SALES_EMAIL', 'sales@jadeergulf.com');

        $quotation = QuotationRequest::create($data);

        // Dispatch notification to Jadeer United Sales Desk (sales@jadeergulf.com)
        Mail::to($quotation->routing_email)
            ->cc(env('JADEER_GENERAL_EMAIL', 'info@jadeergulf.com'))
            ->queue(new QuotationSubmittedMail($quotation));

        return redirect()
            ->route('quotation.create')
            ->with('quotation_success', "Quotation {$quotation->reference_code} submitted and routed to {$quotation->routing_email}.");
    }
}
