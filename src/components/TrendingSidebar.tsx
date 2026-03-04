import { trendingArticles } from '@/data/mockData';
import ArticleCard from './ArticleCard';
import AdPlaceholder from './AdPlaceholder';

export default function TrendingSidebar() {
  return (
    <aside className="space-y-8">
      <div>
        <h3 className="font-serif text-lg font-bold mb-4 pb-2 border-b-2 border-accent">Trending Now</h3>
        <div>
          {trendingArticles.map((article, i) => (
            <div key={article.id} className="flex gap-3 py-3 border-b border-border last:border-0">
              <span className="font-serif text-2xl font-bold text-accent/30">{String(i + 1).padStart(2, '0')}</span>
              <ArticleCard article={article} variant="compact" />
            </div>
          ))}
        </div>
      </div>
      <AdPlaceholder size="sidebar" />
    </aside>
  );
}
