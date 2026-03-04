import { useSearchParams, Link } from 'react-router-dom';
import { articles } from '@/data/mockData';
import ArticleCard from '@/components/ArticleCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);

  const results = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="container py-12">
      <div className="max-w-2xl mb-10">
        <h1 className="font-serif text-3xl font-bold mb-4">
          {query ? `Results for "${query}"` : 'Search Articles'}
        </h1>
        <form action="/search" className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              name="q"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search articles, topics, authors..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            />
          </div>
          <button type="submit" className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Search
          </button>
        </form>
      </div>

      {query && (
        <p className="text-sm text-muted-foreground mb-6">{results.length} result{results.length !== 1 ? 's' : ''} found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {query && results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg mb-4">No articles found matching your search.</p>
          <Link to="/" className="text-accent hover:underline">Browse all articles</Link>
        </div>
      )}
    </div>
  );
}
