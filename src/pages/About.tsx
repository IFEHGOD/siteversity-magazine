import { authors } from '@/data/mockData';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Siteversity</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Siteversity is a premium multi-author blogging platform for thought leaders, innovators, and industry experts.
        We bring together the world's sharpest minds to cover technology, business, finance, and leadership with the
        depth and rigor that decision-makers demand.
      </p>

      <div className="bg-card border border-border rounded-xl p-8 mb-12">
        <h2 className="font-serif text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          To democratize access to expert insights and create a platform where knowledge flows freely between
          industry veterans and the next generation of leaders. We believe great writing can change the trajectory
          of careers, companies, and industries.
        </p>
      </div>

      <h2 className="font-serif text-2xl font-bold mb-6">Meet Our Writers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {authors.map((author) => (
          <Link
            key={author.id}
            to={`/author/${author.id}`}
            className="flex gap-4 p-4 rounded-xl border border-border hover:border-accent/30 transition-colors bg-card"
          >
            <img src={author.avatar} alt={author.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h3 className="font-serif font-bold">{author.name}</h3>
              <p className="text-xs text-accent uppercase font-semibold tracking-wider capitalize">{author.role}</p>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{author.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
