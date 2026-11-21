import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight } from 'lucide-react';
import { api } from '../lib/api';
import type { Article } from '../types';
import { VehicleImage } from '../components/BrandMark';
import { useLanguage } from '../context/LanguageContext';
import {
  AmbientGoldBackdrop,
  GoldGlowCard,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';

const ARTICLE_CATEGORIES = [
  'All',
  'Company News',
  'Sustainability & EV',
  'Market & Vision 2030',
  'Model Launches',
  'Safety & HSE',
];

export function ArticlesPage() {
  const { pick } = useLanguage();
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
    <div className="bg-[#0B0B0D] min-h-[75vh] text-[#E4E0D8]">
      <section className="relative bg-[#0E0E11] border-b border-white/[0.08]">
        <AmbientGoldBackdrop />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
            {pick('NEWS & FLEET INSIGHTS', 'الأخبار ورؤى قطاع الأساطيل')}
          </p>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {pick('Articles & Industry Briefings', 'المقالات والنشرات الإخبارية')}
          </h1>
          <p className="mt-3 text-sm text-[#B4B0A8] max-w-2xl leading-relaxed">
            {pick(
              'Perspectives from our regional fleet engineering and advisory teams on Vision 2030 hybrid adoption, industrial HSE standards, model launches, and GCC mobility.',
              'تحليلات وأخبار من فرقنا الإقليمية حول التحول للسيارات الهجينة والكهربائية وفق رؤية 2030، ومعايير السلامة المهنية، وإطلاق الطرازات الجديدة في الخليج.'
            )}
          </p>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#18181D] border border-white/[0.08] rounded-lg w-fit">
              {ARTICLE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    category === cat
                      ? 'bg-[#C8A45D] text-[#0B0B0D]'
                      : 'text-[#B4B0A8] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="h-4 w-4 text-[#949088] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={pick('Search articles...', 'ابحث في المقالات...')}
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#8F8B84] focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-80 bg-[#141418] border border-white/[0.08] rounded-xl animate-pulse" />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-12 text-center">
            <p className="text-sm text-[#B4B0A8]">
              {pick('No articles match your search criteria.', 'لا توجد مقالات مطابقة لمعايير البحث.')}
            </p>
          </div>
        ) : (
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => {
              const title = pick(article.title, article.title_ar);
              const excerpt = pick(article.excerpt, article.excerpt_ar);
              const author = pick(article.author, article.author_ar);

              return (
                <StaggerItem key={article.id}>
                  <GoldGlowCard className="flex flex-col h-full group">
                    <Link
                      to={`/articles/${article.slug}`}
                      className="block aspect-[16/9] bg-[#141418] overflow-hidden"
                    >
                      <VehicleImage
                        src={article.image_url}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        objectPosition={article.image_url.includes('land-cruiser-gr') ? 'object-bottom' : 'object-center'}
                      />
                    </Link>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-[#B4B0A8]">
                          <span className="text-[#C8A45D]">{article.category}</span> ·{' '}
                          {article.published_at} · {article.read_time_minutes}{' '}
                          {pick('min read', 'دقائق للقراءة')}
                        </div>
                        <Link to={`/articles/${article.slug}`} className="block mt-2">
                          <h2 className="font-display text-xl font-bold text-white group-hover:text-[#DCBC7A] transition-colors leading-snug">
                            {title}
                          </h2>
                        </Link>
                        <p className="mt-2.5 text-sm text-[#B4B0A8] leading-relaxed line-clamp-3">
                          {excerpt}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                        <span className="text-xs text-[#949088] truncate max-w-[60%]">{author}</span>
                        <Link
                          to={`/articles/${article.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-[#C8A45D] hover:text-[#EBD4A0] whitespace-nowrap shrink-0"
                        >
                          <span>{pick('Read article', 'اقرأ المقال')}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </GoldGlowCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        )}
      </section>
    </div>
  );
}

