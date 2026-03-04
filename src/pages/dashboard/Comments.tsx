import { MessageCircle, Check, Trash2 } from 'lucide-react';

const mockComments = [
  { id: '1', author: 'Alex Turner', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', article: 'The Rise of AGI', content: 'Excellent analysis! The section on industry impact was particularly insightful.', date: '2026-02-15', approved: true },
  { id: '2', author: 'Mia Johnson', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face', article: 'Remote Work Is Here to Stay', content: 'Finally, someone backs this up with real data. Sharing with my leadership team.', date: '2026-02-14', approved: true },
  { id: '3', author: 'David Park', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face', article: 'Bitcoin ETF Revolution', content: 'How does this affect altcoin markets long-term? Would love a follow-up piece.', date: '2026-02-13', approved: false },
  { id: '4', author: 'Rachel Kim', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face', article: 'Servant Leadership', content: 'This resonates deeply. Applied these principles at my startup with great results.', date: '2026-02-12', approved: false },
];

export default function Comments() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-bold mb-8">Comments</h1>

      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg">All ({mockComments.length})</button>
        <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg transition-colors">
          Pending ({mockComments.filter((c) => !c.approved).length})
        </button>
        <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg transition-colors">
          Approved ({mockComments.filter((c) => c.approved).length})
        </button>
      </div>

      <div className="space-y-4">
        {mockComments.map((comment) => (
          <div key={comment.id} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">on <span className="font-medium">{comment.article}</span></span>
                  {!comment.approved && (
                    <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">Pending</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{comment.content}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                  {!comment.approved && (
                    <button className="flex items-center gap-1 text-xs text-green-600 hover:underline ml-2">
                      <Check className="w-3.5 h-3.5" />Approve
                    </button>
                  )}
                  <button className="flex items-center gap-1 text-xs text-destructive hover:underline ml-2">
                    <Trash2 className="w-3.5 h-3.5" />Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
