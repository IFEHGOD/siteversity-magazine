import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container py-16 max-w-5xl">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg text-muted-foreground mb-12">Have a question, story pitch, or partnership inquiry? We'd love to hear from you.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
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
              <label className="block text-sm font-medium mb-1.5">Subject</label>
              <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none" />
            </div>
            <button type="submit" className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="flex gap-3">
            <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm">Email</h3>
              <p className="text-sm text-muted-foreground">hello@siteversity.com</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm">Office</h3>
              <p className="text-sm text-muted-foreground">350 Fifth Avenue, New York, NY 10118</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
