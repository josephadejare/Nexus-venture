import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/portfolio',
    label: 'Portfolio'
  }, {
    path: '/insights',
    label: 'Insights'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] rounded-lg" />
            <span className="text-xl font-semibold">VentureForge</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path ? 'text-[var(--color-text-primary)] bg-[var(--color-surface)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]/50'}`}>
                {link.label}
              </Link>)}
          </div>

          <Link to="/contact">
            <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>;
}