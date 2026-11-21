<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\QuotationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class QuotationController extends Controller
{
    public function index(Request $request): View
    {
        $query = QuotationRequest::with(['vehicle', 'offer'])->latest();

        if ($status = $request->string('status')->toString()) {
            $query->where('status', $status);
        }
        if ($country = $request->string('country')->toString()) {
            $query->where('country', $country);
        }
        if ($search = trim($request->string('search')->toString())) {
            $query->where(function ($q) use ($search) {
                $q->where('full_name', 'like', "%{$search}%")
                    ->orWhere('company_name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('reference_code', 'like', "%{$search}%");
            });
        }

        return view('admin.quotations.index', [
            'quotations' => $query->paginate(20)->withQueryString(),
        ]);
    }

    public function show(QuotationRequest $quotation): View
    {
        $quotation->load(['vehicle', 'offer']);

        return view('admin.quotations.show', compact('quotation'));
    }

    public function update(Request $request, QuotationRequest $quotation): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:new,in_review,quoted,approved,rejected,closed'],
            'estimated_monthly_quote' => ['nullable', 'numeric', 'min:0'],
            'admin_notes' => ['nullable', 'string', 'max:2000'],
        ]);

        $quotation->update($validated);

        return redirect()
            ->route('admin.quotations.show', $quotation)
            ->with('success', "Quotation {$quotation->reference_code} updated.");
    }

    public function destroy(QuotationRequest $quotation): RedirectResponse
    {
        $quotation->delete();

        return redirect()
            ->route('admin.quotations.index')
            ->with('success', 'Quotation request deleted.');
    }
}
