import { toast } from 'sonner';
import { useState } from 'react';
import { CheckCircle, PenLine, Users, TrendingUp, Award, DollarSign } from 'lucide-react';

const benefits = [
  { icon: Users, text: 'Reach 500,000+ monthly readers across tech, business, and finance' },
  { icon: Award, text: 'Get published alongside industry leaders and Fortune 500 executives' },
  { icon: PenLine, text: 'Professional editing and SEO optimization for every accepted piece' },
  { icon: TrendingUp, text: 'Dedicated author profile with social links and portfolio' },
  { icon: DollarSign, text: 'Revenue sharing for high-performing content' },
];

const guidelines = [
  'Original, unpublished content only — no AI-generated articles',
  'Minimum 1,200 words with data-driven insights',
  'Include at least 3 credible sources or references',
  'Professional tone aligned with our editorial standards',
];

export default function WriteForUs() {
  const [form, setForm] = useState({ name: '', email: '', bio: '', topics: '', samples: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted! We\'ll review and get back to you within 5 business days.');
    setForm({ name: '', email: '', bio: '', topics: '', samples: '' });
  };

  return (
    <div className="container py-10 md:py-16 max-w-5xl">
      {/* Hero */}
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          Become a Contributor
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Write for Siteversity</h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join our network of expert contributors and share your insights with a global audience of decision-makers and innovators.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
        {benefits.map((b) => (
          <div key={b.text} className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-accent/30 transition-colors">
            <b.icon className="w-8 h-8 text-accent mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>

      {/* Guidelines + Form side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
        {/* Guidelines */}
        <div className="lg:col-span-2">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-5">Submission Guidelines</h2>
          <ul className="space-y-3 mb-8">
            {guidelines.map((g) => (
              <li key={g} className="flex gap-3 items-start">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{g}</span>
              </li>
            ))}
          </ul>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
            <h3 className="font-serif font-bold mb-2">What Happens Next?</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>We review your application within 5 business days</li>
              <li>If approved, you receive your contributor account</li>
              <li>Submit your first draft through the dashboard</li>
              <li>Our editors refine and publish your piece</li>
            </ol>
          </div>
        </div>

        {/* Application Form */}
        <div className="lg:col-span-3">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-6">Apply to Contribute</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Short Bio</label>
                <textarea rows={3} required value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
                  placeholder="Tell us about your expertise and background..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Topics You'd Like to Write About</label>
                <input type="text" required value={form.topics} onChange={(e) => setForm({ ...form, topics: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  placeholder="e.g., AI, fintech, leadership, climate tech..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Links to Writing Samples</label>
                <textarea rows={2} required value={form.samples} onChange={(e) => setForm({ ...form, samples: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
                  placeholder="Paste URLs to your published articles..." />
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
