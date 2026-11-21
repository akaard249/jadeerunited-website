<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuotationRequest extends Model
{
    protected $fillable = [
        'reference_code',
        'full_name',
        'company_name',
        'client_type',
        'email',
        'phone',
        'country',
        'city',
        'vehicle_id',
        'offer_id',
        'fleet_quantity',
        'lease_term_months',
        'add_ons',
        'notes',
        'status',
        'estimated_monthly_quote',
        'admin_notes',
        'routing_email',
    ];

    protected function casts(): array
    {
        return [
            'add_ons' => 'array',
            'estimated_monthly_quote' => 'decimal:2',
        ];
    }

    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function offer(): BelongsTo
    {
        return $this->belongsTo(Offer::class);
    }
}
