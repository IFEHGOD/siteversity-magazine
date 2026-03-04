import { articles } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Clock } from 'lucide-react';

const drafts = articles.slice(0, 3).map((a) => ({ ...a, status: 'draft' as const }));

export default function Drafts() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-bold mb-8">Drafts</h1>

      {drafts.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border rounded-xl">
          <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No drafts yet</p>
          <Link to="/dashboard/create" className="text-accent hover:underline">Create your first article</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {drafts.map((draft) => (
            <div key={draft.id} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/30 transition-colors">
              <img src={draft.coverImage} alt="" className="w-20 h-14 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{draft.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">Last edited: {draft.publishedAt} · {draft.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors"><Edit className="w-4 h-4 text-muted-foreground" /></button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-destructive" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
