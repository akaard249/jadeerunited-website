<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\View\View;

class VehicleCatalogController extends Controller
{
    public function showroom(Request $request): View
    {
        $vehicles = $this->filterQuery(Vehicle::showroom(), $request)->paginate(12)->withQueryString();

        return view('public.catalog', [
            'vehicles' => $vehicles,
            'listingType' => 'showroom',
        ]);
    }

    public function showShowroom(Vehicle $vehicle): View
    {
        abort_unless($vehicle->listing_type === 'showroom', 404);

        return view('public.vehicle-detail', compact('vehicle'));
    }

    public function usedCars(Request $request): View
    {
        $vehicles = $this->filterQuery(Vehicle::usedCars(), $request)->paginate(12)->withQueryString();

        return view('public.catalog', [
            'vehicles' => $vehicles,
            'listingType' => 'used',
        ]);
    }

    public function showUsedCar(Vehicle $vehicle): View
    {
        abort_unless($vehicle->listing_type === 'used', 404);

        return view('public.vehicle-detail', compact('vehicle'));
    }

    private function filterQuery($query, Request $request)
    {
        if ($category = $request->string('category')->toString()) {
            $query->where('category', $category);
        }
        if ($country = $request->string('country')->toString()) {
            $query->whereJsonContains('country_availability', $country);
        }
        if ($fuel = $request->string('fuel_type')->toString()) {
            $query->where('fuel_type', $fuel);
        }
        if ($transmission = $request->string('transmission')->toString()) {
            $query->where('transmission', $transmission);
        }
        if ($year = $request->integer('year')) {
            $query->where('year', $year);
        }
        if ($maxPrice = $request->float('max_price')) {
            $query->where('price_or_monthly_rate', '<=', $maxPrice);
        }
        if ($search = trim($request->string('search')->toString())) {
            $query->where(function ($q) use ($search) {
                $q->where('make', 'like', "%{$search}%")
                    ->orWhere('model', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        return $query->orderByDesc('is_featured')->orderByDesc('year');
    }
}
