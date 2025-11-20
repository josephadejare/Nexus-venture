export interface PortfolioItem {
  id: string;
  title: string;
  category: 'DeFi' | 'NFT' | 'Infrastructure' | 'SaaS' | 'Gaming' | 'Social';
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
  link?: string;
}
export const portfolioData: PortfolioItem[] = [{
  id: '1',
  title: 'DeFi Protocol',
  category: 'DeFi',
  description: 'Decentralized lending protocol with $500M+ TVL, enabling users to earn yield on crypto assets with institutional-grade security.',
  metrics: [{
    label: 'TVL',
    value: '$500M+'
  }, {
    label: 'Users',
    value: '50K+'
  }, {
    label: 'Transactions',
    value: '2M+'
  }],
  tags: ['Solidity', 'React', 'Web3', 'DeFi'],
  image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
}, {
  id: '2',
  title: 'NFT Marketplace',
  category: 'NFT',
  description: 'Creator-first NFT platform with zero gas fees, enabling artists to mint and sell digital art with sustainable royalty structures.',
  metrics: [{
    label: 'Volume',
    value: '$50M+'
  }, {
    label: 'Creators',
    value: '10K+'
  }, {
    label: 'NFTs Minted',
    value: '500K+'
  }],
  tags: ['Next.js', 'IPFS', 'Polygon', 'NFT'],
  image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80'
}, {
  id: '3',
  title: 'Enterprise SaaS',
  category: 'SaaS',
  description: 'B2B analytics platform processing 10B+ events daily, providing real-time insights for Fortune 500 companies.',
  metrics: [{
    label: 'ARR',
    value: '$20M+'
  }, {
    label: 'Enterprise Clients',
    value: '200+'
  }, {
    label: 'Events/Day',
    value: '10B+'
  }],
  tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Analytics'],
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
}, {
  id: '4',
  title: 'Layer 2 Solution',
  category: 'Infrastructure',
  description: 'Ethereum scaling solution achieving 10,000+ TPS with sub-second finality and 99.9% uptime.',
  metrics: [{
    label: 'TPS',
    value: '10K+'
  }, {
    label: 'Uptime',
    value: '99.9%'
  }, {
    label: 'Gas Savings',
    value: '95%'
  }],
  tags: ['Rust', 'Ethereum', 'ZK-Rollups', 'Infrastructure'],
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
}, {
  id: '5',
  title: 'Web3 Gaming',
  category: 'Gaming',
  description: 'Play-to-earn gaming ecosystem with sustainable token economics and 100K+ daily active players.',
  metrics: [{
    label: 'DAU',
    value: '100K+'
  }, {
    label: 'Revenue',
    value: '$5M/mo'
  }, {
    label: 'Retention',
    value: '65%'
  }],
  tags: ['Unity', 'Solana', 'Gaming', 'NFT'],
  image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80'
}, {
  id: '6',
  title: 'Social Protocol',
  category: 'Social',
  description: 'Decentralized social network with on-chain reputation and 1M+ registered users.',
  metrics: [{
    label: 'Users',
    value: '1M+'
  }, {
    label: 'Posts/Day',
    value: '500K+'
  }, {
    label: 'Engagement',
    value: '45%'
  }],
  tags: ['React Native', 'IPFS', 'Lens Protocol', 'Social'],
  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
}];