<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVehicleRequest;
use App\Models\Vehicle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class VehicleController extends Controller
{
    public function index(Request $request): View
    {
        $query = Vehicle::query()->latest('updated_at');

        if (in_array($request->string('listing_type')->toString(), ['showroom', 'used'], true)) {
            $query->where('listing_type', $request->string('listing_type')->toString());
        }

        if ($search = trim($request->string('search')->toString())) {
            $query->where(function ($q) use ($search) {
                $q->where('make', 'like', "%{$search}%")
                    ->orWhere('model', 'like', "%{$search}%")
                    ->orWhere('category', 'like', "%{$search}%");
            });
        }

        return view('admin.vehicles.index', [
            'vehicles' => $query->paginate(20)->withQueryString(),
            'listingType' => $request->string('listing_type')->toString() ?: 'all',
        ]);
    }

    public function create(): View
    {
        return view('admin.vehicles.form', ['vehicle' => new Vehicle()]);
    }

    public function store(StoreVehicleRequest $request): RedirectResponse
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('vehicles', 'public');
        }
        Vehicle::create($data);

        return redirect()->route('admin.vehicles.index')->with('success', 'Vehicle created successfully.');
    }

    public function edit(Vehicle $vehicle): View
    {
        return view('admin.vehicles.form', compact('vehicle'));
    }

    public function update(StoreVehicleRequest $request, Vehicle $vehicle): RedirectResponse
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            if ($vehicle->image_path) {
                Storage::disk('public')->delete($vehicle->image_path);
            }
            $data['image_path'] = $request->file('image')->store('vehicles', 'public');
        }
        $vehicle->update($data);

        return redirect()->route('admin.vehicles.index')->with('success', 'Vehicle updated successfully.');
    }

    public function toggleFeatured(Vehicle $vehicle): RedirectResponse
    {
        $vehicle->update(['is_featured' => ! $vehicle->is_featured]);

        return back()->with('success', 'Featured status updated.');
    }

    public function updateStatus(Request $request, Vehicle $vehicle): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:available,reserved,leased,sold'],
        ]);
        $vehicle->update($validated);

        return back()->with('success', 'Vehicle availability updated.');
    }

    public function destroy(Vehicle $vehicle): RedirectResponse
    {
        if ($vehicle->image_path) {
            Storage::disk('public')->delete($vehicle->image_path);
        }
        $vehicle->delete();

        return redirect()->route('admin.vehicles.index')->with('success', 'Vehicle removed.');
    }
}
