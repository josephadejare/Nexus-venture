import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { FilterBar } from '../components/ui/FilterBar';
import { insightsData } from '../data/insights';
import { PlayCircleIcon, FileTextIcon } from 'lucide-react';
export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(insightsData.map(item => item.category)))];
  const filteredInsights = activeCategory === 'All' ? insightsData : insightsData.filter(item => item.category === activeCategory);
  return <div className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights</h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Thoughts, research, and learnings from building at the frontier of
            technology
          </p>
        </div>

        <FilterBar categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="space-y-6">
          {filteredInsights.map(item => <Card key={item.id} hover className="overflow-hidden p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-video md:aspect-square overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    {item.type === 'video' ? <div className="w-12 h-12 bg-[var(--color-accent-blue)] rounded-full flex items-center justify-center">
                        <PlayCircleIcon className="w-6 h-6 text-white" />
                      </div> : <div className="w-12 h-12 bg-[var(--color-surface)] rounded-full flex items-center justify-center">
                        <FileTextIcon className="w-6 h-6 text-[var(--color-accent-blue)]" />
                      </div>}
                  </div>
                </div>

                <div className="md:col-span-2 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[var(--color-surface-elevated)] text-[var(--color-accent-blue)] text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-[var(--color-text-tertiary)]">
                      {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                    </span>
                    <span className="text-sm text-[var(--color-text-tertiary)]">
                      •
                    </span>
                    <span className="text-sm text-[var(--color-text-tertiary)]">
                      {item.readTime || item.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 hover:text-[var(--color-accent-blue)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {item.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-[var(--color-background)] text-[var(--color-text-tertiary)] text-xs rounded">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </div>;
}