import { useParams, Link } from 'react-router-dom';
import { authors, articles } from '@/data/mockData';
import ArticleCard from '@/components/ArticleCard';
import { Twitter, Linkedin, Users, FileText } from 'lucide-react';

export default function AuthorProfile() {
  const { id } = useParams();
  const author = authors.find((a) => a.id === id);
  const authorArticles = articles.filter((a) => a.author.id === id);

  if (!author) {
    return (
      <div className="container py-20 text-center px-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Author Not Found</h1>
        <Link to="/" className="text-accent hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-center sm:items-start mb-10 md:mb-12 text-center sm:text-left">
          <img src={author.avatar} alt={author.name} className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-accent/20" />
          <div className="flex-1">
            <h1 className="font-serif text-2xl md:text-3xl font-bold">{author.name}</h1>
            <span className="inline-block px-3 py-0.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mt-2 capitalize">{author.role}</span>
            <p className="text-muted-foreground mt-3 leading-relaxed text-sm md:text-base">{author.bio}</p>
            <div className="flex items-center justify-center sm:justify-start gap-4 md:gap-6 mt-4 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" />{author.articlesCount} articles</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{author.followers.toLocaleString()} followers</span>
              {author.twitter && (
                <a href="#" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Twitter className="w-4 h-4" />{author.twitter}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Articles */}
        <h2 className="font-serif text-xl md:text-2xl font-bold mb-6 pb-3 border-b-2 border-accent inline-block">Articles by {author.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-6">
          {authorArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
