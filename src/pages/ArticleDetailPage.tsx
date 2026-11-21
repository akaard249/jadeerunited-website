import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { api } from '../lib/api';
import type { Article } from '../types';
import { VehicleImage } from '../components/BrandMark';

export function ArticleDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [more, setMore] = useState<
    Array<Pick<Article, 'id' | 'title' | 'slug' | 'category' | 'published_at' | 'read_time_minutes'>>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    if (!slug) return;
    api
      .getArticle(slug)
      .then((res) => {
        if (!active) return;
        setArticle(res.article);
        setMore(res.more);
      })
      .catch(() => {
        if (active) setArticle(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="h-80 bg-white border border-[#E3E5E0] rounded-lg animate-pulse" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-[#1B1F1A]">Article not found</h1>
        <Link
          to="/articles"
          className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#3A4338] rounded-md"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </Link>
      </div>
    );
  }

  const paragraphs = article.body.split('\n\n').filter(Boolean);

  return (
    <article className="bg-white">
      <div className="max-w-[880px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4D544C] hover:text-[#1B1F1A]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>All Articles</span>
        </Link>

        <header className="mt-8">
          <div className="text-xs text-[#5E6B5B]">
            {article.category} · {article.published_at} · {article.read_time_minutes} min read ·{' '}
            {article.author}
          </div>
          <h1 className="mt-3 font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1F1A] text-balance leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-[#4D544C] leading-relaxed">{article.excerpt}</p>
        </header>

        <div className="mt-8 aspect-[16/9] rounded-lg overflow-hidden bg-[#282F27] border border-[#E3E5E0]">
          <VehicleImage
            src={article.image_url}
            alt={article.title}
            className="w-full h-full object-cover"
            objectPosition={article.image_url.includes('land-cruiser-gr') ? 'object-bottom' : 'object-center'}
          />
        </div>

        <div className="mt-10 space-y-6 text-base text-[#282F27] leading-[1.75]">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-12 p-7 bg-[#F8F8F6] border border-[#E3E5E0] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-lg font-semibold text-[#1B1F1A]">
              Planning a regional fleet deployment?
            </h2>
            <p className="mt-1 text-sm text-[#4D544C]">
              Request a tailored operational lease proposal for Bahrain, Saudi Arabia, or Oman.
            </p>
          </div>
          <Link
            to="/quotation"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] rounded-md whitespace-nowrap shrink-0"
          >
            <span>Request Quotation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {more.length > 0 && (
          <div className="mt-14 pt-10 border-t border-[#E3E5E0]">
            <h3 className="font-display text-lg font-semibold text-[#1B1F1A] mb-4">
              Further Reading
            </h3>
            <div className="divide-y divide-[#ECEEE9] border-t border-b border-[#ECEEE9]">
              {more.map((m) => (
                <Link
                  key={m.id}
                  to={`/articles/${m.slug}`}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group"
                >
                  <span className="font-display text-base font-medium text-[#1B1F1A] group-hover:text-[#3A4338]">
                    {m.title}
                  </span>
                  <span className="text-xs text-[#5E6B5B] whitespace-nowrap shrink-0">
                    {m.category} · {m.published_at}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
