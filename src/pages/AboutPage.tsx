import React from 'react';
import { Card } from '../components/ui/Card';
import { NetworkNodes } from '../components/canvas/NetworkNodes';
export function AboutPage() {
  return <div className="py-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-24">
        <NetworkNodes />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building at the <span className="gradient-text">Intersection</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            We bridge traditional technology and decentralized innovation to
            create ventures that shape the future.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-custom mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-4">
              VentureForge exists to accelerate the transition to a more open,
              transparent, and equitable digital economy. We partner with
              visionary founders to build ventures that leverage the best of
              Web2 infrastructure and Web3 innovation.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Our approach combines proven startup methodologies with
              cutting-edge blockchain technology, creating sustainable
              businesses that deliver real value to users while pushing the
              boundaries of what's possible.
            </p>
          </div>
          <Card className="p-8">
            <div className="space-y-6">
              {[{
              label: 'Founded',
              value: '2019'
            }, {
              label: 'Ventures Built',
              value: '50+'
            }, {
              label: 'Total Funding Raised',
              value: '$500M+'
            }, {
              label: 'Team Members',
              value: '75+'
            }].map((stat, index) => <div key={index} className="flex justify-between items-center pb-6 border-b border-[var(--color-border)] last:border-0">
                  <span className="text-[var(--color-text-secondary)]">
                    {stat.label}
                  </span>
                  <span className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </span>
                </div>)}
            </div>
          </Card>
        </div>
      </section>

      {/* Approach Section */}
      <section className="container-custom mb-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
          title: 'Web2 Foundation',
          description: 'Leveraging battle-tested infrastructure, scalable architectures, and proven business models.',
          icon: '🏗️'
        }, {
          title: 'Web3 Innovation',
          description: 'Integrating blockchain, smart contracts, and decentralized protocols where they add real value.',
          icon: '⚡'
        }, {
          title: 'Hybrid Excellence',
          description: 'Creating seamless experiences that combine the reliability of Web2 with the innovation of Web3.',
          icon: '🎯'
        }].map((approach, index) => <Card key={index} hover>
              <div className="text-5xl mb-6">{approach.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{approach.title}</h3>
              <p className="text-[var(--color-text-secondary)]">
                {approach.description}
              </p>
            </Card>)}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--color-surface)] py-24">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{
            title: 'Innovation First',
            description: 'We push boundaries and explore new possibilities while maintaining pragmatic focus.'
          }, {
            title: 'User-Centric',
            description: 'Every decision is guided by creating genuine value and exceptional experiences for users.'
          }, {
            title: 'Technical Excellence',
            description: 'We maintain the highest standards in code quality, security, and system design.'
          }, {
            title: 'Sustainable Growth',
            description: 'We build for the long term, creating ventures with solid fundamentals and clear paths to profitability.'
          }].map((value, index) => <div key={index} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {value.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}