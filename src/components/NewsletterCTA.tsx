import { Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container max-w-2xl text-center px-4">
        <Mail className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-4" />
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Get the Best Stories Delivered Weekly
        </h2>
        <p className="text-primary-foreground/70 mb-6 text-sm md:text-base">
          Join 50,000+ leaders who read Siteversity every morning. Free, no spam.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 border border-primary-foreground/20 focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
