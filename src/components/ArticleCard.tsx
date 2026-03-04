import { Link } from 'react-router-dom';
import { Article } from '@/data/mockData';
import { Clock, Heart, MessageCircle } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'horizontal' | 'compact';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.slug}`} className="group flex gap-4 md:gap-5 py-4 border-b border-border last:border-0">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-lg flex-shrink-0 group-hover:opacity-90 transition-opacity"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</span>
          <h3 className="font-serif text-sm md:text-base font-semibold leading-snug mt-1 group-hover:text-accent transition-colors line-clamp-2">
            {article.title}
          </h3>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span>{article.author.name}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} min</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.slug}`} className="group flex gap-3 py-3 border-b border-border last:border-0">
        <div className="flex-1">
          <h4 className="font-serif text-sm font-semibold leading-tight group-hover:text-accent transition-colors line-clamp-2">
            {article.title}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">{article.author.name}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-56 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</span>
        <h3 className="font-serif text-lg md:text-xl font-bold leading-tight mt-1.5 group-hover:text-accent transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center gap-4 mt-3 flex-wrap">
          <div className="flex items-center gap-2">
            <img src={article.author.avatar} alt={article.author.name} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs font-medium">{article.author.name}</span>
          </div>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />{article.readTime} min read
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Heart className="w-3 h-3" />{article.likes.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
