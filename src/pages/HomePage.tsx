import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
export function HomePage() {
  return <>
      <Hero />
      <ServicesGrid />

      {/* Process Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A proven methodology for turning ideas into successful ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            step: '01',
            title: 'Discovery',
            description: 'Deep market research and opportunity validation'
          }, {
            step: '02',
            title: 'Design',
            description: 'Product strategy and technical architecture'
          }, {
            step: '03',
            title: 'Development',
            description: 'Agile development with continuous feedback'
          }, {
            step: '04',
            title: 'Launch & Scale',
            description: 'Go-to-market execution and growth optimization'
          }].map((phase, index) => <div key={index} className="relative">
                <div className="text-6xl font-bold text-[var(--color-accent-blue)] opacity-20 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-[var(--color-text-secondary)]">
                  {phase.description}
                </p>
                {index < 3 && <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[var(--color-accent-blue)] to-transparent" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container-custom">
          <Card className="text-center py-16 px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and explore how we can bring it to life
              together.
            </p>
            <Link to="/contact">
              <Button size="lg">Start a Conversation</Button>
            </Link>
          </Card>
        </div>
      </section>
    </>;
}