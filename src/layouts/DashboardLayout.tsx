import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  LayoutDashboard, FileText, PenSquare, FileClock, BarChart3,
  MessageSquare, Settings, LogOut, ChevronLeft, Menu, X
} from 'lucide-react';
import { useState } from 'react';

const sidebarLinks = [
  { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { label: 'My Articles', path: '/dashboard/articles', icon: FileText },
  { label: 'Create Article', path: '/dashboard/create', icon: PenSquare },
  { label: 'Drafts', path: '/dashboard/drafts', icon: FileClock },
  { label: 'Analytics', path: '/dashboard/analytics', icon: BarChart3 },
  { label: 'Comments', path: '/dashboard/comments', icon: MessageSquare },
  { label: 'Settings', path: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-border">
        <Link to="/" className="font-serif text-xl font-bold">
          Site<span className="text-gold-gradient">versity</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 mb-3">
          <img src={user?.avatar} alt={user?.name} className="w-9 h-9 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors w-full"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-secondary/30">
      {/* Desktop sidebar */}
      {!isMobile && (
        <aside className="w-64 bg-card border-r border-border flex flex-col fixed h-full">
          <SidebarContent />
        </aside>
      )}

      {/* Mobile sidebar overlay */}
      {isMobile && sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col z-50">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 p-1">
              <X className="w-5 h-5" />
            </button>
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Main content */}
      <div className={`flex-1 ${!isMobile ? 'ml-64' : ''}`}>
        <header className="h-14 md:h-16 bg-card border-b border-border flex items-center px-4 md:px-8 sticky top-0 z-30 gap-3">
          {isMobile && (
            <button onClick={() => setSidebarOpen(true)} className="p-1.5">
              <Menu className="w-5 h-5" />
            </button>
          )}
          <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to site
          </Link>
        </header>
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
