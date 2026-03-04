import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

export default function ProfileSettings() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    twitter: user?.twitter || '',
    linkedin: user?.linkedin || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="max-w-2xl">
      <h1 className="font-serif text-3xl font-bold mb-8">Profile Settings</h1>

      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <img src={user?.avatar} alt={user?.name} className="w-20 h-20 rounded-full object-cover" />
          <div>
            <button className="px-4 py-2 border border-border text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
              Change Avatar
            </button>
            <p className="text-xs text-muted-foreground mt-1">JPG, PNG. Max 2MB.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Display Name</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Bio</label>
            <textarea rows={4} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Twitter</label>
              <input type="text" value={form.twitter} onChange={(e) => setForm({ ...form, twitter: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">LinkedIn</label>
              <input type="text" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
            </div>
          </div>
          <button type="submit" className="px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
            Save Changes
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="font-serif text-xl font-bold mb-4">Account</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input type="email" value="sarah@siteversity.com" disabled
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-muted text-muted-foreground text-sm cursor-not-allowed" />
          </div>
          <button className="px-4 py-2 border border-border text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
