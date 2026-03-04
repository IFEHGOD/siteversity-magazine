import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/data/mockData';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar - hidden on mobile */}
      <div className="border-b border-border hidden md:block">
        <div className="container flex items-center justify-between h-8 text-xs text-muted-foreground">
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/write-for-us" className="hover:text-foreground transition-colors">Write for Us</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">
            Site<span className="text-gold-gradient">versity</span>
          </span>
        </Link>

        {/* Desktop categories */}
        <nav className="hidden lg:flex items-center gap-6">
          {categories.slice(0, 5).map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === `/category/${cat.slug}` ? 'text-accent' : 'text-foreground'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-32 md:w-40 px-3 py-1.5 text-sm bg-secondary rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                autoFocus
              />
              <button type="button" onClick={() => setSearchOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Search className="w-4 h-4" />
            </button>
          )}

          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-3">
              <Link to="/dashboard" className="text-sm font-medium hover:text-accent transition-colors">Dashboard</Link>
              <Link to="/dashboard/create" className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Write
              </Link>
              <button onClick={logout} className="flex items-center gap-2">
                <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-full object-cover border-2 border-accent" />
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login" className="text-sm font-medium px-4 py-2 hover:text-accent transition-colors">Sign In</Link>
              <Link to="/register" className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </Link>
            </div>
          )}

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="block text-sm font-medium py-2 hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <div className="border-t border-border pt-3 space-y-2">
              <Link to="/about" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/contact" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link to="/write-for-us" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Write for Us</Link>
            </div>
            <div className="border-t border-border pt-3 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                  <Link to="/dashboard/create" className="block text-sm font-medium py-2 text-accent" onClick={() => setMobileOpen(false)}>Write Article</Link>
                  <button onClick={() => { logout(); setMobileOpen(false); }} className="text-sm text-destructive">Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Sign In</Link>
                  <Link to="/register" className="block text-sm font-medium py-2 text-accent" onClick={() => setMobileOpen(false)}>Get Started</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
