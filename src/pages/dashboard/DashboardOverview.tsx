import { dashboardStats, articles } from '@/data/mockData';
import { Eye, FileText, MessageCircle, Heart, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '@/components/AdPlaceholder';

const stats = [
  { label: 'Total Views', value: dashboardStats.totalViews.toLocaleString(), icon: Eye, change: '+12.4%' },
  { label: 'Articles', value: dashboardStats.totalArticles, icon: FileText, change: '+3' },
  { label: 'Comments', value: dashboardStats.totalComments, icon: MessageCircle, change: '+24' },
  { label: 'Total Likes', value: dashboardStats.totalLikes.toLocaleString(), icon: Heart, change: '+8.2%' },
];

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-medium text-green-600 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />{stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent articles */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-bold">Recent Articles</h2>
            <Link to="/dashboard/articles" className="text-sm text-accent hover:underline flex items-center gap-1">
              View all <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-4">
            {articles.slice(0, 5).map((article) => (
              <div key={article.id} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                <img src={article.coverImage} alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate">{article.title}</h3>
                  <p className="text-xs text-muted-foreground">{article.category} · {article.publishedAt}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{article.likes}</p>
                  <p className="text-xs text-muted-foreground">likes</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions + ad */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/dashboard/create" className="block w-full py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg text-center hover:opacity-90 transition-opacity">
                Write New Article
              </Link>
              <Link to="/dashboard/drafts" className="block w-full py-2.5 border border-border text-sm font-medium rounded-lg text-center hover:bg-secondary transition-colors">
                View Drafts
              </Link>
              <Link to="/dashboard/comments" className="block w-full py-2.5 border border-border text-sm font-medium rounded-lg text-center hover:bg-secondary transition-colors">
                Manage Comments
              </Link>
            </div>
          </div>
          <AdPlaceholder size="sidebar" />
        </div>
      </div>
    </div>
  );
}
