import React from 'react';
import { Button } from '../ui/Button';
import { ParticleSystem } from '../canvas/ParticleSystem';
import { MorphingShapes } from '../canvas/MorphingShapes';
import { Link } from 'react-router-dom';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleSystem />
      <MorphingShapes />

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Building the Future of
          <span className="gradient-text block mt-2">Web2 & Web3</span>
        </h1>

        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto text-balance">
          We partner with visionary founders to build, launch, and scale
          ventures at the intersection of traditional technology and
          decentralized innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/portfolio">
            <Button size="lg">View Our Work</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Start a Project
            </Button>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[{
          value: '50+',
          label: 'Ventures Built'
        }, {
          value: '$2B+',
          label: 'Value Created'
        }, {
          value: '15+',
          label: 'Industries'
        }, {
          value: '98%',
          label: 'Success Rate'
        }].map((stat, index) => <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-text-tertiary)]">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>;
}