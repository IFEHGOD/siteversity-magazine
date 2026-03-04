export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: 'admin' | 'writer' | 'guest';
  articlesCount: number;
  followers: number;
  twitter?: string;
  linkedin?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: number;
  likes: number;
  comments: number;
  featured?: boolean;
  status: 'published' | 'draft';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  articleCount: number;
}

export const authors: Author[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    bio: 'Senior technology analyst covering AI, blockchain, and emerging tech trends. Former editor at TechCrunch.',
    role: 'admin',
    articlesCount: 142,
    followers: 24500,
    twitter: '@sarahmitchell',
  },
  {
    id: '2',
    name: 'James Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Wall Street veteran turned financial writer. Specializing in market analysis and investment strategies.',
    role: 'writer',
    articlesCount: 87,
    followers: 18200,
  },
  {
    id: '3',
    name: 'Emily Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Award-winning business journalist covering startups, venture capital, and the future of work.',
    role: 'writer',
    articlesCount: 63,
    followers: 12800,
  },
  {
    id: '4',
    name: 'Marcus Thompson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Leadership coach and management consultant writing about organizational culture and executive strategy.',
    role: 'writer',
    articlesCount: 45,
    followers: 9400,
  },
];

export const categories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology', description: 'Latest in AI, blockchain, and emerging technologies', articleCount: 234 },
  { id: '2', name: 'Business', slug: 'business', description: 'Corporate strategy, startups, and entrepreneurship', articleCount: 189 },
  { id: '3', name: 'Finance', slug: 'finance', description: 'Markets, investing, and wealth management', articleCount: 156 },
  { id: '4', name: 'Leadership', slug: 'leadership', description: 'Management, culture, and executive insights', articleCount: 98 },
  { id: '5', name: 'Innovation', slug: 'innovation', description: 'Breakthroughs, disruption, and creative thinking', articleCount: 77 },
  { id: '6', name: 'Lifestyle', slug: 'lifestyle', description: 'Travel, wellness, and luxury living', articleCount: 65 },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'the-rise-of-artificial-general-intelligence',
    title: 'The Rise of Artificial General Intelligence: What It Means for Every Industry',
    excerpt: 'As AGI inches closer to reality, industry leaders must prepare for a fundamental shift in how businesses operate, compete, and create value.',
    content: `<p>The quest for Artificial General Intelligence has moved from the realm of science fiction into the boardrooms of the world's most powerful technology companies. With breakthroughs in transformer architectures and multimodal learning systems, experts now believe we're within a decade of achieving AGI.</p><h2>What Makes AGI Different</h2><p>Unlike narrow AI systems designed for specific tasks, AGI would possess the ability to understand, learn, and apply intelligence across any domain—much like a human mind. This distinction isn't merely academic; it represents a fundamental shift in the relationship between humanity and technology.</p><p>Leading researchers at institutions like DeepMind, OpenAI, and Anthropic are racing to solve the remaining challenges: common sense reasoning, transfer learning across domains, and the alignment problem that ensures AGI systems remain beneficial.</p><h2>Industry Impact Assessment</h2><p>The implications span every sector. In healthcare, AGI could accelerate drug discovery from decades to months. In finance, it could model complex market dynamics with unprecedented accuracy. Manufacturing, logistics, education—no industry will remain untouched.</p><p>Forward-thinking executives are already establishing AGI readiness teams, investing in research partnerships, and rethinking their long-term strategic planning around this technological inflection point.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    category: 'Technology',
    tags: ['AI', 'AGI', 'Future Tech', 'Innovation'],
    author: authors[0],
    publishedAt: '2026-02-15',
    readTime: 8,
    likes: 2340,
    comments: 187,
    featured: true,
    status: 'published',
  },
  {
    id: '2',
    slug: 'why-remote-work-is-here-to-stay',
    title: 'Why Remote Work Is Here to Stay: The Data Behind the Permanent Shift',
    excerpt: 'New research from Stanford and MIT confirms what workers already know — hybrid and remote work models deliver better results for both employees and shareholders.',
    content: '<p>The great return-to-office debate is over, and the data is clear. A landmark study spanning 30,000 workers across 12 countries shows that hybrid models boost productivity by 13% while reducing turnover by 35%.</p><h2>The Productivity Paradox</h2><p>Managers feared the worst when offices emptied in 2020. Yet six years later, the evidence overwhelmingly supports flexible work. Companies that embraced remote-first cultures saw revenue growth 21% higher than their office-bound competitors.</p><p>The key insight? Productivity isn\'t about where you sit—it\'s about how you structure collaboration, communication, and deep work time.</p>',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
    category: 'Business',
    tags: ['Remote Work', 'Productivity', 'Culture'],
    author: authors[2],
    publishedAt: '2026-02-14',
    readTime: 6,
    likes: 1890,
    comments: 234,
    featured: true,
    status: 'published',
  },
  {
    id: '3',
    slug: 'bitcoin-etf-revolution',
    title: 'The Bitcoin ETF Revolution: How Wall Street Finally Embraced Crypto',
    excerpt: 'Institutional adoption of cryptocurrency through regulated ETF products has fundamentally changed the digital asset landscape.',
    content: '<p>When the SEC approved the first spot Bitcoin ETFs, it marked the beginning of a new era for digital assets. Within 12 months, over $120 billion flowed into crypto ETFs, making them the fastest-growing ETF category in history.</p><h2>Institutional Adoption</h2><p>Major pension funds, endowments, and sovereign wealth funds have allocated between 1-5% of their portfolios to digital assets. This institutional stamp of approval has transformed crypto from a speculative bet into a legitimate asset class.</p>',
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop',
    category: 'Finance',
    tags: ['Bitcoin', 'ETF', 'Crypto', 'Wall Street'],
    author: authors[1],
    publishedAt: '2026-02-13',
    readTime: 7,
    likes: 1456,
    comments: 145,
    status: 'published',
  },
  {
    id: '4',
    slug: 'servant-leadership-modern-era',
    title: 'Servant Leadership in the Modern Era: Why the Best CEOs Put People First',
    excerpt: 'Companies led by servant leaders consistently outperform their peers. Here\'s the research — and the playbook.',
    content: '<p>In an age of disruption, the most successful leaders are those who serve. Research from the Harvard Business Review shows that servant-led organizations achieve 6x higher employee engagement and 4x better customer satisfaction scores.</p><h2>The Servant Leadership Framework</h2><p>At its core, servant leadership inverts the traditional hierarchy. Instead of employees serving the CEO, the CEO serves employees—removing obstacles, providing resources, and creating an environment where people can do their best work.</p>',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    category: 'Leadership',
    tags: ['Leadership', 'CEO', 'Management', 'Culture'],
    author: authors[3],
    publishedAt: '2026-02-12',
    readTime: 5,
    likes: 980,
    comments: 67,
    status: 'published',
  },
  {
    id: '5',
    slug: 'quantum-computing-breakthrough-2026',
    title: 'Quantum Computing Hits a Milestone: 1000 Logical Qubits Achieved',
    excerpt: 'The quantum advantage is no longer theoretical. Here\'s what this breakthrough means for cybersecurity, drug discovery, and materials science.',
    content: '<p>Researchers have achieved what many thought was still years away. The 1,000 logical qubit barrier has been broken, opening doors to practical quantum applications that will reshape industries from pharma to finance.</p><h2>Real-World Applications</h2><p>With error-corrected quantum computers now available, companies are already running simulations that would take classical supercomputers millions of years. Drug candidates that previously took a decade to develop are being identified in weeks.</p>',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop',
    category: 'Technology',
    tags: ['Quantum', 'Computing', 'Science', 'Breakthrough'],
    author: authors[0],
    publishedAt: '2026-02-11',
    readTime: 9,
    likes: 1670,
    comments: 98,
    status: 'published',
  },
  {
    id: '6',
    slug: 'the-subscription-economy-maturity',
    title: 'The Subscription Economy Reaches Maturity: Winners, Losers, and What\'s Next',
    excerpt: 'After a decade of growth, the subscription model is being stress-tested. Which companies will survive the reckoning?',
    content: '<p>The subscription economy has reached an inflection point. Consumer fatigue is real—the average household now manages 12 separate subscriptions totaling $924 per month. Companies that can\'t demonstrate ongoing value are seeing churn rates spike above 15%.</p><h2>The Bundling Renaissance</h2><p>Just as cable TV unbundled into streaming services, those same services are now rebundling. Apple One, Amazon Prime, and Microsoft 365 represent the new super-bundles that are reshaping consumer expectations.</p>',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    category: 'Business',
    tags: ['SaaS', 'Business Model', 'Subscription'],
    author: authors[2],
    publishedAt: '2026-02-10',
    readTime: 6,
    likes: 1230,
    comments: 89,
    status: 'published',
  },
  {
    id: '7',
    slug: 'venture-capital-ai-winter',
    title: 'Is Venture Capital Heading Into an AI Winter? Top Investors Weigh In',
    excerpt: 'After record-breaking AI funding rounds, some VCs are sounding the alarm about inflated valuations and unrealistic expectations.',
    content: '<p>The AI funding frenzy shows signs of cooling. After $180 billion poured into AI startups in 2025, returns have been mixed at best. Only 12% of AI companies have achieved profitability, raising questions about the sustainability of current valuations.</p><h2>The Reality Check</h2><p>Leading VCs are now distinguishing between "AI-native" companies with genuine moats and "AI-washed" startups that have simply added chatbots to existing products. The market is learning that not every AI company deserves a billion-dollar valuation.</p>',
    coverImage: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=450&fit=crop',
    category: 'Finance',
    tags: ['VC', 'AI', 'Investment', 'Startups'],
    author: authors[1],
    publishedAt: '2026-02-09',
    readTime: 7,
    likes: 890,
    comments: 112,
    status: 'published',
  },
  {
    id: '8',
    slug: 'green-energy-tipping-point',
    title: 'Green Energy Reaches the Tipping Point: Solar Now Cheaper Than Every Alternative',
    excerpt: 'For the first time in history, solar energy is the cheapest form of electricity generation in every major market worldwide.',
    content: '<p>The energy transition has passed the point of no return. Solar panel costs have fallen 99.6% since 1976, and with new perovskite-silicon tandem cells achieving 33% efficiency, the economics are now irrefutable.</p><h2>The Grid Revolution</h2><p>Battery storage costs have dropped 90% in the last decade, solving the intermittency problem that once plagued renewables. Grid-scale storage projects are being deployed faster than new gas plants can be permitted.</p>',
    coverImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop',
    category: 'Innovation',
    tags: ['Energy', 'Solar', 'Climate', 'Sustainability'],
    author: authors[0],
    publishedAt: '2026-02-08',
    readTime: 6,
    likes: 2100,
    comments: 156,
    status: 'published',
  },
  {
    id: '9',
    slug: 'future-of-healthcare-ai-diagnostics',
    title: 'AI Diagnostics Are Outperforming Doctors — And That\'s a Good Thing',
    excerpt: 'New FDA-approved AI systems are detecting cancers, heart conditions, and rare diseases with accuracy that surpasses the best human specialists.',
    content: '<p>A groundbreaking study published in Nature Medicine shows that AI diagnostic systems now outperform board-certified radiologists in detecting 14 types of cancer with 97.3% accuracy compared to 89.1% for human experts.</p><h2>Augmentation, Not Replacement</h2><p>The best outcomes come from AI-human collaboration. When doctors use AI as a second opinion, diagnostic accuracy rises to 99.2%, virtually eliminating false negatives that have historically cost lives.</p>',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop',
    category: 'Technology',
    tags: ['Healthcare', 'AI', 'Diagnostics', 'Medicine'],
    author: authors[0],
    publishedAt: '2026-02-07',
    readTime: 8,
    likes: 3100,
    comments: 210,
    status: 'published',
  },
  {
    id: '10',
    slug: 'gen-z-reshaping-workplace-culture',
    title: 'How Gen Z Is Reshaping Workplace Culture From the Inside Out',
    excerpt: 'The youngest generation in the workforce isn\'t just adapting to corporate culture — they\'re rewriting the rules entirely.',
    content: '<p>Gen Z now makes up 30% of the global workforce, and their impact is undeniable. From demanding radical transparency to refusing to separate personal values from professional life, this generation is forcing a cultural reckoning in boardrooms worldwide.</p><h2>The Values-First Workplace</h2><p>Companies that fail to demonstrate genuine commitment to diversity, sustainability, and mental health aren\'t just facing PR problems — they\'re losing their best talent to competitors who walk the talk.</p>',
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop',
    category: 'Business',
    tags: ['Gen Z', 'Culture', 'Workplace', 'HR'],
    author: authors[2],
    publishedAt: '2026-02-06',
    readTime: 5,
    likes: 1780,
    comments: 302,
    status: 'published',
  },
  {
    id: '11',
    slug: 'central-bank-digital-currencies-global-rollout',
    title: 'Central Bank Digital Currencies: 87 Countries Are Now in Active Development',
    excerpt: 'The global race to launch CBDCs is accelerating, with major implications for banking, privacy, and monetary policy.',
    content: '<p>The digital currency revolution is no longer led by crypto startups — it\'s being driven by central banks. The People\'s Bank of China\'s digital yuan has already processed over $1.2 trillion in transactions, while the ECB\'s digital euro pilot has enrolled 50 million users.</p><h2>Privacy vs. Control</h2><p>The fundamental tension in CBDC design is between governmental oversight and citizen privacy. Different countries are making different tradeoffs, creating a patchwork of approaches that will define the future of money.</p>',
    coverImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop',
    category: 'Finance',
    tags: ['CBDC', 'Digital Currency', 'Banking', 'Monetary Policy'],
    author: authors[1],
    publishedAt: '2026-02-05',
    readTime: 7,
    likes: 1340,
    comments: 178,
    status: 'published',
  },
  {
    id: '12',
    slug: 'emotional-intelligence-competitive-advantage',
    title: 'Why Emotional Intelligence Is the Ultimate Competitive Advantage in 2026',
    excerpt: 'As AI automates technical skills, the leaders who thrive are those who master the deeply human art of emotional intelligence.',
    content: '<p>In a world where AI can write code, analyze data, and generate strategies, the most valuable leadership skill is one machines can\'t replicate: emotional intelligence. A 15-year longitudinal study of Fortune 500 CEOs found that EQ scores predicted leadership longevity and company performance more reliably than IQ or technical expertise.</p><h2>The EQ Advantage</h2><p>Leaders with high emotional intelligence create teams that are 40% more innovative, 31% more productive, and report 67% higher job satisfaction. In the age of AI, being deeply human isn\'t a weakness — it\'s the ultimate competitive moat.</p>',
    coverImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop',
    category: 'Leadership',
    tags: ['EQ', 'Leadership', 'Soft Skills', 'Management'],
    author: authors[3],
    publishedAt: '2026-02-04',
    readTime: 6,
    likes: 2450,
    comments: 145,
    status: 'published',
  },
];

export const trendingArticles = articles.slice(0, 5);

export const dashboardStats = {
  totalViews: 124500,
  totalArticles: 47,
  totalComments: 892,
  totalLikes: 15600,
  monthlyGrowth: 12.4,
  topArticle: articles[0],
};
