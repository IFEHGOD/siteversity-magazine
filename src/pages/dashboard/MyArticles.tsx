import { articles } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Eye, MoreHorizontal } from 'lucide-react';

export default function MyArticles() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold">My Articles</h1>
        <Link to="/dashboard/create" className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
          New Article
        </Link>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Article</th>
              <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Category</th>
              <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Status</th>
              <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Likes</th>
              <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={article.coverImage} alt="" className="w-10 h-10 rounded object-cover flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate max-w-xs">{article.title}</p>
                      <p className="text-xs text-muted-foreground">{article.publishedAt}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">{article.category}</span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    article.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {article.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm hidden sm:table-cell">{article.likes}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-secondary rounded transition-colors"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                    <button className="p-1.5 hover:bg-secondary rounded transition-colors"><Edit className="w-4 h-4 text-muted-foreground" /></button>
                    <button className="p-1.5 hover:bg-secondary rounded transition-colors"><Trash2 className="w-4 h-4 text-destructive" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
