export interface InsightItem {
  id: string;
  title: string;
  type: 'article' | 'video';
  category: string;
  excerpt: string;
  date: string;
  readTime?: string;
  duration?: string;
  tags: string[];
  image: string;
  link: string;
}
export const insightsData: InsightItem[] = [{
  id: '1',
  title: 'The Future of DeFi: Trends Shaping 2024',
  type: 'article',
  category: 'DeFi',
  excerpt: 'Exploring emerging trends in decentralized finance, from real-world asset tokenization to cross-chain liquidity solutions.',
  date: '2024-01-15',
  readTime: '8 min read',
  tags: ['DeFi', 'Trends', 'Web3'],
  image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  link: '#'
}, {
  id: '2',
  title: 'Building Scalable Web3 Infrastructure',
  type: 'video',
  category: 'Infrastructure',
  excerpt: 'A deep dive into the technical architecture required for building production-ready Web3 applications.',
  date: '2024-01-10',
  duration: '25 min',
  tags: ['Infrastructure', 'Architecture', 'Web3'],
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  link: '#'
}, {
  id: '3',
  title: 'Token Economics: Designing Sustainable Models',
  type: 'article',
  category: 'Tokenomics',
  excerpt: 'Best practices for creating token models that align incentives and drive long-term protocol growth.',
  date: '2024-01-05',
  readTime: '12 min read',
  tags: ['Tokenomics', 'Economics', 'Strategy'],
  image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
  link: '#'
}, {
  id: '4',
  title: 'From Web2 to Web3: A Migration Guide',
  type: 'article',
  category: 'Strategy',
  excerpt: 'Practical strategies for traditional companies exploring blockchain integration and Web3 opportunities.',
  date: '2023-12-28',
  readTime: '10 min read',
  tags: ['Strategy', 'Web2', 'Web3', 'Migration'],
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  link: '#'
}, {
  id: '5',
  title: 'Smart Contract Security Best Practices',
  type: 'video',
  category: 'Security',
  excerpt: 'Essential security patterns and audit processes for building secure smart contracts.',
  date: '2023-12-20',
  duration: '18 min',
  tags: ['Security', 'Smart Contracts', 'Auditing'],
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  link: '#'
}, {
  id: '6',
  title: 'NFT Utility Beyond Art',
  type: 'article',
  category: 'NFT',
  excerpt: 'Exploring practical NFT use cases in gaming, identity, ticketing, and enterprise applications.',
  date: '2023-12-15',
  readTime: '7 min read',
  tags: ['NFT', 'Utility', 'Innovation'],
  image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
  link: '#'
}];