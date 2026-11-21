<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreQuotationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string', 'min:2', 'max:120'],
            'company_name' => ['required_if:client_type,corporate', 'nullable', 'string', 'max:160'],
            'client_type' => ['required', Rule::in(['corporate', 'individual'])],
            'email' => ['required', 'email:rfc', 'max:160'],
            'phone' => ['required', 'string', 'min:7', 'max:40'],
            'country' => ['required', Rule::in(['Bahrain', 'Saudi Arabia', 'Oman'])],
            'city' => ['required', 'string', 'min:2', 'max:100'],
            'vehicle_id' => ['nullable', 'integer', 'exists:vehicles,id'],
            'offer_id' => ['nullable', 'integer', 'exists:offers,id'],
            'fleet_quantity' => ['required', 'integer', 'min:1', 'max:500'],
            'lease_term_months' => ['required', 'integer', 'min:1', 'max:84'],
            'add_ons' => ['nullable', 'array'],
            'add_ons.driver_service' => ['boolean'],
            'add_ons.limousine_service' => ['boolean'],
            'add_ons.replacement_vehicle' => ['boolean'],
            'add_ons.tracking_blue_key' => ['boolean'],
            'add_ons.usa_roll_bars_cages' => ['boolean'],
            'add_ons.hybrid_preference' => ['boolean'],
            'notes' => ['nullable', 'string', 'max:2000'],
        ];
    }
}
