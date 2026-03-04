import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-serif text-2xl font-bold">Site<span className="text-gold-gradient">versity</span></span>
            <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
              Premium multi-author blogging platform for thought leaders, innovators, and industry experts shaping the future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/category/${cat.slug}`} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/write-for-us" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Write for Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Legal</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-primary-foreground/60">Privacy Policy</span></li>
              <li><span className="text-sm text-primary-foreground/60">Terms of Service</span></li>
              <li><span className="text-sm text-primary-foreground/60">Cookie Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">© 2026 Siteversity. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/40">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
