import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { api } from '../lib/api';
import type { Article } from '../types';
import { VehicleImage } from '../components/BrandMark';
import { Reveal } from '../components/MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

export function ArticleDetailPage() {
  const { slug } = useParams();
  const { pick } = useLanguage();
  const [article, setArticle] = useState<Article | null>(null);
  const [more, setMore] = useState<
    Array<
      Pick<
        Article,
        'id' | 'title' | 'title_ar' | 'slug' | 'category' | 'published_at' | 'read_time_minutes'
      >
    >
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
        <div className="h-80 bg-[#141418] border border-white/[0.08] rounded-xl animate-pulse" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-white">
          {pick('Article not found', 'المقال غير موجود')}
        </h1>
        <Link
          to="/articles"
          className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] rounded-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{pick('Back to Articles', 'العودة إلى المقالات')}</span>
        </Link>
      </div>
    );
  }

  const title = pick(article.title, article.title_ar);
  const excerpt = pick(article.excerpt, article.excerpt_ar);
  const author = pick(article.author, article.author_ar);
  const bodyText = pick(article.body, article.body_ar);
  const paragraphs = bodyText.split('\n\n').map((p) => p.trim()).filter(Boolean);

  return (
    <article className="bg-[#0B0B0D] text-[#E4E0D8]">
      <div className="max-w-[880px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B4B0A8] hover:text-[#C8A45D] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{pick('All Articles', 'جميع المقالات')}</span>
        </Link>

        <header className="mt-8">
          <div className="text-xs text-[#B4B0A8]">
            <span className="text-[#C8A45D]">{article.category}</span> · {article.published_at} ·{' '}
            {article.read_time_minutes} {pick('min read', 'دقائق للقراءة')} · {author}
          </div>
          <h1 className="mt-3 font-display text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-[#B4B0A8] leading-relaxed">{excerpt}</p>
        </header>

        <Reveal className="mt-8 aspect-[16/9] rounded-xl overflow-hidden bg-[#141418] border border-white/10">
          <VehicleImage
            src={article.image_url}
            alt={title}
            className="w-full h-full object-cover"
            objectPosition={article.image_url.includes('land-cruiser-gr') ? 'object-bottom' : 'object-center'}
          />
        </Reveal>

        <div className="mt-10 space-y-6 text-base text-[#D4D4DC] leading-[1.85] whitespace-pre-line">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <Reveal className="mt-12 p-7 bg-[#141418] border border-[#C8A45D]/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-lg font-semibold text-white">
              {pick('Planning a regional fleet deployment?', 'هل تخطط لتجهيز أسطول لشركتك في الخليج؟')}
            </h2>
            <p className="mt-1 text-sm text-[#B4B0A8]">
              {pick(
                'Request a tailored operational lease proposal for Bahrain, Saudi Arabia, or Oman.',
                'اطلب عرض سعر مخصص للتأجير التشغيلي في البحرين أو المملكة العربية السعودية أو عُمان.'
              )}
            </p>
          </div>
          <Link
            to="/quotation"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg whitespace-nowrap shrink-0"
          >
            <span>{pick('Request Quotation', 'اطلب عرض سعر')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        {more.length > 0 && (
          <div className="mt-14 pt-10 border-t border-white/[0.08]">
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              {pick('Further Reading', 'مقالات ذات صلة')}
            </h3>
            <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {more.map((m) => (
                <Link
                  key={m.id}
                  to={`/articles/${m.slug}`}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group"
                >
                  <span className="font-display text-base font-medium text-white group-hover:text-[#C8A45D] transition-colors">
                    {pick(m.title, m.title_ar)}
                  </span>
                  <span className="text-xs text-[#B4B0A8] whitespace-nowrap shrink-0">
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

