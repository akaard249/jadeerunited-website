<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicle extends Model
{
    protected $fillable = [
        'make',
        'model',
        'year',
        'category',
        'listing_type',
        'fuel_type',
        'transmission',
        'mileage_km',
        'price_or_monthly_rate',
        'currency',
        'country_availability',
        'is_featured',
        'status',
        'image_path',
        'description',
        'safety_telematics_specs',
    ];

    protected function casts(): array
    {
        return [
            'country_availability' => 'array',
            'safety_telematics_specs' => 'array',
            'is_featured' => 'boolean',
            'price_or_monthly_rate' => 'decimal:2',
        ];
    }

    public function quotationRequests(): HasMany
    {
        return $this->hasMany(QuotationRequest::class);
    }

    public function scopeShowroom(Builder $query): Builder
    {
        return $query->where('listing_type', 'showroom');
    }

    public function scopeUsedCars(Builder $query): Builder
    {
        return $query->where('listing_type', 'used');
    }

    public function getFullTitleAttribute(): string
    {
        return "{$this->year} {$this->make} {$this->model}";
    }
}
