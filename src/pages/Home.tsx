import { Link } from 'react-router-dom';
import { articles, categories, trendingArticles } from '@/data/mockData';
import ArticleCard from '@/components/ArticleCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import TrendingSidebar from '@/components/TrendingSidebar';
import NewsletterCTA from '@/components/NewsletterCTA';
import { ArrowRight, TrendingUp } from 'lucide-react';

const featuredArticle = articles.find((a) => a.featured)!;
const secondaryFeatured = articles.filter((a) => a.featured && a.id !== featuredArticle.id);
const latestArticles = articles.filter((a) => !a.featured);

export default function Home() {
  return (
    <>
      {/* Hero / Featured Section */}
      <section className="container py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main featured */}
          <Link to={`/article/${featuredArticle.slug}`} className="lg:col-span-2 group relative overflow-hidden rounded-xl">
            <img
              src={featuredArticle.coverImage}
              alt={featuredArticle.title}
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-5 md:p-8">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded mb-3">
                {featuredArticle.category}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-2 md:mb-3">
                {featuredArticle.title}
              </h1>
              <p className="text-white/70 text-sm mb-3 max-w-xl hidden sm:block">{featuredArticle.excerpt}</p>
              <div className="flex items-center gap-3">
                <img src={featuredArticle.author.avatar} alt="" className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover border-2 border-white/30" />
                <span className="text-white/80 text-sm">{featuredArticle.author.name}</span>
                <span className="text-white/50 text-sm">· {featuredArticle.readTime} min read</span>
              </div>
            </div>
          </Link>

          {/* Secondary featured */}
          <div className="flex flex-row lg:flex-col gap-4">
            {secondaryFeatured.length > 0 && (
              <Link to={`/article/${secondaryFeatured[0].slug}`} className="group relative overflow-hidden rounded-xl flex-1">
                <img
                  src={secondaryFeatured[0].coverImage}
                  alt={secondaryFeatured[0].title}
                  className="w-full h-full min-h-[160px] md:min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-4 md:p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{secondaryFeatured[0].category}</span>
                  <h2 className="font-serif text-sm md:text-lg font-bold text-white leading-tight mt-1 line-clamp-2">{secondaryFeatured[0].title}</h2>
                </div>
              </Link>
            )}
            {articles[2] && (
              <Link to={`/article/${articles[2].slug}`} className="group relative overflow-hidden rounded-xl flex-1">
                <img
                  src={articles[2].coverImage}
                  alt={articles[2].title}
                  className="w-full h-full min-h-[160px] md:min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-4 md:p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{articles[2].category}</span>
                  <h2 className="font-serif text-sm md:text-lg font-bold text-white leading-tight mt-1 line-clamp-2">{articles[2].title}</h2>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <AdPlaceholder size="leaderboard" className="container mb-6 md:mb-8" />

      {/* Category Pills */}
      <section className="container mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="px-3 md:px-4 py-2 bg-secondary text-secondary-foreground text-xs md:text-sm font-medium rounded-full whitespace-nowrap hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="container pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-6 pb-3 border-b-2 border-accent inline-block">Latest Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <AdPlaceholder size="inline" className="my-8" />
            <div className="text-center mt-8">
              <button className="px-6 md:px-8 py-3 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-colors text-sm md:text-base">
                Load More Articles
              </button>
            </div>
          </div>
          <TrendingSidebar />
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
