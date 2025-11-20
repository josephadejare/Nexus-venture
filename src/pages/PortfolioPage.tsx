import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { FilterBar } from '../components/ui/FilterBar';
import { portfolioData } from '../data/portfolio';
export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(portfolioData.map(item => item.category)))];
  const filteredPortfolio = activeCategory === 'All' ? portfolioData : portfolioData.filter(item => item.category === activeCategory);
  return <div className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Ventures we've built that are shaping the future of technology
          </p>
        </div>

        <FilterBar categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map(item => <Card key={item.id} hover className="overflow-hidden p-0">
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[var(--color-surface-elevated)] text-[var(--color-accent-blue)] text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                  {item.metrics.map((metric, index) => <div key={index}>
                      <div className="text-lg font-bold gradient-text">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--color-text-tertiary)]">
                        {metric.label}
                      </div>
                    </div>)}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-[var(--color-background)] text-[var(--color-text-tertiary)] text-xs rounded">
                      {tag}
                    </span>)}
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </div>;
}