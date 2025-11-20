import React from 'react';
export interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}
export function FilterBar({
  categories,
  activeCategory,
  onCategoryChange
}: FilterBarProps) {
  return <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(category => <button key={category} onClick={() => onCategoryChange(category)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === category ? 'bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white' : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]'}`}>
          {category}
        </button>)}
    </div>;
}