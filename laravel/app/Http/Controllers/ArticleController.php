<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ArticleController extends Controller
{
    public function index(Request $request): View
    {
        $query = Article::query()->latest('published_at');

        if ($category = $request->string('category')->toString()) {
            $query->where('category', $category);
        }
        if ($search = trim($request->string('search')->toString())) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        return view('public.articles', [
            'articles' => $query->paginate(10)->withQueryString(),
        ]);
    }

    public function show(Article $article): View
    {
        return view('public.article-detail', compact('article'));
    }
}
