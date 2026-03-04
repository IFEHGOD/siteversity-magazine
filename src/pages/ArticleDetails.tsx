import { useParams, Link } from 'react-router-dom';
import { articles } from '@/data/mockData';
import AdPlaceholder from '@/components/AdPlaceholder';
import TrendingSidebar from '@/components/TrendingSidebar';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Clock, Heart, MessageCircle, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function ArticleDetails() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  if (!article) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-accent hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <article>
        {/* Hero */}
        <div className="relative h-[280px] sm:h-[350px] md:h-[500px]">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 container pb-6 md:pb-10 px-4">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded mb-3 md:mb-4">
              {article.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-3 md:mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <Link to={`/author/${article.author.id}`} className="flex items-center gap-2 md:gap-3">
                <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white/30" />
                <span className="text-white font-medium text-sm md:text-base">{article.author.name}</span>
              </Link>
              <span className="text-white/60 text-xs md:text-sm">{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-white/60 text-xs md:text-sm flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container py-8 md:py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              {/* Social / action bar */}
              <div className="flex items-center gap-3 md:gap-4 pb-6 mb-8 border-b border-border overflow-x-auto">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1.5 text-sm ${liked ? 'text-destructive' : 'text-muted-foreground'} hover:text-destructive transition-colors`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  {article.likes + (liked ? 1 : 0)}
                </button>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MessageCircle className="w-5 h-5" />{article.comments}
                </button>
                <div className="flex-1" />
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-2 rounded-lg ${bookmarked ? 'text-accent' : 'text-muted-foreground'} hover:bg-secondary transition-colors`}
                >
                  <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                </button>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"><Twitter className="w-4 h-4" /></button>
                  <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"><Facebook className="w-4 h-4" /></button>
                  <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"><Linkedin className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Article body */}
              <div
                className="prose prose-lg max-w-none [&_h2]:font-serif [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:md:mt-10 [&_h2]:mb-4 [&_p]:text-foreground [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:md:mb-6 [&_p]:text-sm [&_p]:md:text-base [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <AdPlaceholder size="inline" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 mb-8">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs md:text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author card */}
              <div className="bg-card border border-border rounded-xl p-4 md:p-6 flex flex-col sm:flex-row gap-4">
                <img src={article.author.avatar} alt={article.author.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0" />
                <div>
                  <Link to={`/author/${article.author.id}`} className="font-serif text-base md:text-lg font-bold hover:text-accent transition-colors">
                    {article.author.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{article.author.bio}</p>
                  <p className="text-xs text-muted-foreground mt-2">{article.author.articlesCount} articles · {article.author.followers.toLocaleString()} followers</p>
                </div>
              </div>

              <AdPlaceholder size="banner" className="mt-8" />
            </div>

            <TrendingSidebar />
          </div>
        </div>
      </article>

      <NewsletterCTA />
    </>
  );
}
