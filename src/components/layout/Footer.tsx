import React from 'react';
import { Link } from 'react-router-dom';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-24">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] rounded-lg" />
              <span className="text-lg font-semibold">VentureForge</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Building the future at the intersection of Web2 and Web3
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--color-text-tertiary)] text-sm">
            © {currentYear} VentureForge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] text-sm">
              Privacy
            </a>
            <a href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>;
}