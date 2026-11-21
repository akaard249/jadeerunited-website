<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'category',
        'monthly_rate_from',
        'currency',
        'countries',
        'valid_until',
        'is_active',
        'highlights',
        'description',
        'image_path',
    ];

    protected function casts(): array
    {
        return [
            'countries' => 'array',
            'highlights' => 'array',
            'is_active' => 'boolean',
            'valid_until' => 'date',
            'monthly_rate_from' => 'decimal:2',
        ];
    }
}
