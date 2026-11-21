<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\View\View;

class OfferController extends Controller
{
    public function index(): View
    {
        return view('public.offers', [
            'offers' => Offer::where('is_active', true)->orderBy('valid_until')->get(),
        ]);
    }
}
