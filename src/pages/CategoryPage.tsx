import { useParams, Link } from 'react-router-dom';
import { articles, categories } from '@/data/mockData';
import ArticleCard from '@/components/ArticleCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import TrendingSidebar from '@/components/TrendingSidebar';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const categoryArticles = articles.filter((a) => a.category.toLowerCase() === slug);

  if (!category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Category Not Found</h1>
        <Link to="/" className="text-accent hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">{category.name}</h1>
        <p className="text-muted-foreground">{category.description}</p>
        <p className="text-sm text-muted-foreground mt-1">{category.articleCount} articles</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryArticles.length > 0 ? (
              categoryArticles.map((article, i) => (
                <>
                  <ArticleCard key={article.id} article={article} />
                  {i === 1 && <div className="md:col-span-2"><AdPlaceholder size="inline" /></div>}
                </>
              ))
            ) : (
              <p className="text-muted-foreground md:col-span-2">No articles found in this category yet. Check back soon!</p>
            )}
          </div>
        </div>
        <TrendingSidebar />
      </div>
    </div>
  );
}
