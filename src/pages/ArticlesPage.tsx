import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight } from 'lucide-react';
import { api } from '../lib/api';
import type { Article } from '../types';
import { VehicleImage } from '../components/BrandMark';

const ARTICLE_CATEGORIES = ['All', 'Sustainability', 'Safety & HSE', 'Corporate Leasing', 'Regional Network'];

export function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    const timer = setTimeout(() => {
      api
        .getArticles({ category, search: search.trim() || undefined })
        .then((res) => {
          if (active) setArticles(res.articles);
        })
        .catch(() => {})
        .finally(() => {
          if (active) setLoading(false);
        });
    }, 100);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [category, search]);

  return (
    <div className="bg-[#F8F8F6] min-h-[70vh]">
      <section className="bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <p className="text-sm font-medium text-[#7B6C53]">News &amp; Fleet Insights</p>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1F1A]">
            Articles &amp; Industry Briefings
          </h1>
          <p className="mt-3 text-sm text-[#4D544C] max-w-2xl leading-relaxed">
            Perspectives from our regional fleet engineering and advisory teams on Vision 2030
            hybrid adoption, industrial HSE standards, and cross-border GCC mobility.
          </p>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F1F2EE] rounded-lg w-fit">
              {ARTICLE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    category === cat
                      ? 'bg-[#3A4338] text-white'
                      : 'text-[#4D544C] hover:text-[#1B1F1A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="h-4 w-4 text-[#6B7369] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8F8F6] border border-[#D8DBD4] rounded-md text-[#1B1F1A] focus:outline-none focus:border-[#3A4338] focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((n) => (
              <div key={n} className="h-80 bg-white border border-[#E3E5E0] rounded-lg animate-pulse" />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-white border border-[#E3E5E0] rounded-lg p-12 text-center">
            <p className="text-sm text-[#4D544C]">No articles match your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[#E3E5E0] rounded-lg overflow-hidden flex flex-col group"
              >
                <Link to={`/articles/${article.slug}`} className="block aspect-[16/9] bg-[#282F27] overflow-hidden">
                  <VehicleImage
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    objectPosition={article.image_url.includes('land-cruiser-gr') ? 'object-bottom' : 'object-center'}
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-[#5E6B5B]">
                      {article.category} · {article.published_at} · {article.read_time_minutes} min read
                    </div>
                    <Link to={`/articles/${article.slug}`} className="block mt-2">
                      <h2 className="font-display text-xl font-bold text-[#1B1F1A] group-hover:text-[#3A4338] leading-snug">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="mt-2.5 text-sm text-[#4D544C] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#ECEEE9] flex items-center justify-between">
                    <span className="text-xs text-[#6B7369]">{article.author}</span>
                    <Link
                      to={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#3A4338] hover:text-[#1B1F1A]"
                    >
                      <span>Read article</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
