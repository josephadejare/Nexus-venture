import React from 'react';
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}
export function Card({
  children,
  className = '',
  hover = false,
  onClick
}: CardProps) {
  const baseStyles = 'bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'cursor-pointer hover:border-[var(--color-accent-blue)] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';
  return <div className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`} onClick={onClick}>
      {children}
    </div>;
}