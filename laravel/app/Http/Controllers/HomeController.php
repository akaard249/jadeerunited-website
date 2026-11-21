<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Offer;
use App\Models\Vehicle;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        return view('public.home', [
            'showroomFeatured' => Vehicle::showroom()->where('status', '!=', 'sold')->orderByDesc('is_featured')->limit(4)->get(),
            'usedFeatured' => Vehicle::usedCars()->where('status', '!=', 'sold')->orderByDesc('is_featured')->limit(3)->get(),
            'offers' => Offer::where('is_active', true)->limit(3)->get(),
            'articles' => Article::latest('published_at')->limit(3)->get(),
        ]);
    }
}
