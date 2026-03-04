import { BarChart3, TrendingUp, Eye, Clock } from 'lucide-react';
import AdPlaceholder from '@/components/AdPlaceholder';

const monthlyData = [
  { month: 'Sep', views: 8200 },
  { month: 'Oct', views: 12400 },
  { month: 'Nov', views: 15800 },
  { month: 'Dec', views: 19200 },
  { month: 'Jan', views: 22100 },
  { month: 'Feb', views: 28600 },
];

const topPages = [
  { title: 'The Rise of Artificial General Intelligence', views: 18420, growth: '+24%' },
  { title: 'Why Remote Work Is Here to Stay', views: 12380, growth: '+18%' },
  { title: 'The Bitcoin ETF Revolution', views: 9840, growth: '+12%' },
  { title: 'Quantum Computing Hits a Milestone', views: 7620, growth: '+31%' },
];

const maxViews = Math.max(...monthlyData.map((d) => d.views));

export default function Analytics() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-bold mb-8">Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-5">
          <Eye className="w-5 h-5 text-muted-foreground mb-2" />
          <p className="text-2xl font-bold">124,500</p>
          <p className="text-sm text-muted-foreground">Total page views</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <TrendingUp className="w-5 h-5 text-muted-foreground mb-2" />
          <p className="text-2xl font-bold">4m 32s</p>
          <p className="text-sm text-muted-foreground">Avg. read time</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <BarChart3 className="w-5 h-5 text-muted-foreground mb-2" />
          <p className="text-2xl font-bold">12.4%</p>
          <p className="text-sm text-muted-foreground">Monthly growth</p>
        </div>
      </div>

      {/* Simple bar chart */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="font-serif text-xl font-bold mb-6">Monthly Views</h2>
        <div className="flex items-end gap-4 h-48">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-medium">{(d.views / 1000).toFixed(1)}k</span>
              <div
                className="w-full bg-accent/80 rounded-t-lg transition-all hover:bg-accent"
                style={{ height: `${(d.views / maxViews) * 100}%` }}
              />
              <span className="text-xs text-muted-foreground">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top performing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
          <h2 className="font-serif text-xl font-bold mb-4">Top Performing Articles</h2>
          <div className="space-y-4">
            {topPages.map((page, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                <span className="text-lg font-bold text-muted-foreground/30 w-6">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{page.title}</p>
                  <p className="text-xs text-muted-foreground">{page.views.toLocaleString()} views</p>
                </div>
                <span className="text-xs font-medium text-green-600">{page.growth}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <h2 className="font-serif text-lg font-bold mb-3">Monetization</h2>
            <p className="text-sm text-muted-foreground mb-4">Connect your AdSense account to start earning from your content.</p>
            <button className="w-full py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Connect AdSense
            </button>
          </div>
          <AdPlaceholder size="sidebar" />
        </div>
      </div>
    </div>
  );
}
