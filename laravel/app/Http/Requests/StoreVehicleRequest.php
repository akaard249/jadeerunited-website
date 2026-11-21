<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreVehicleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return (bool) $this->user()?->is_admin;
    }

    public function rules(): array
    {
        return [
            'make' => ['required', 'string', 'max:80'],
            'model' => ['required', 'string', 'max:120'],
            'year' => ['required', 'integer', 'min:2010', 'max:2028'],
            'category' => ['required', Rule::in(['SUV', 'Sedan', 'Fleet', 'Hybrid', 'Limousine', 'Commercial'])],
            'listing_type' => ['required', Rule::in(['showroom', 'used'])],
            'fuel_type' => ['required', 'string', 'max:50'],
            'transmission' => ['required', 'string', 'max:50'],
            'mileage_km' => ['nullable', 'integer', 'min:0'],
            'price_or_monthly_rate' => ['required', 'numeric', 'min:1'],
            'currency' => ['required', Rule::in(['BHD', 'SAR', 'OMR'])],
            'country_availability' => ['required', 'array', 'min:1'],
            'country_availability.*' => [Rule::in(['Bahrain', 'Saudi Arabia', 'Oman'])],
            'is_featured' => ['boolean'],
            'status' => ['required', Rule::in(['available', 'reserved', 'leased', 'sold'])],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'description' => ['required', 'string', 'min:10'],
            'safety_telematics_specs' => ['nullable', 'array'],
            'safety_telematics_specs.*' => ['string', 'max:200'],
        ];
    }
}
