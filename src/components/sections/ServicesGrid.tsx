import React from 'react';
import { Card } from '../ui/Card';
export function ServicesGrid() {
  const services = [{
    title: 'Venture Building',
    description: 'From ideation to launch, we build ventures from the ground up with proven frameworks and methodologies.',
    icon: '🚀'
  }, {
    title: 'Technical Architecture',
    description: 'Scalable, secure infrastructure designed for both Web2 reliability and Web3 innovation.',
    icon: '⚡'
  }, {
    title: 'Product Strategy',
    description: 'Data-driven product development that balances user needs with market opportunities.',
    icon: '🎯'
  }, {
    title: 'Smart Contracts',
    description: 'Audited, gas-optimized smart contracts built with security and efficiency in mind.',
    icon: '🔐'
  }, {
    title: 'Growth & Scale',
    description: 'Go-to-market strategies and growth systems that drive sustainable user acquisition.',
    icon: '📈'
  }, {
    title: 'Token Economics',
    description: 'Sustainable tokenomics models that align incentives and create long-term value.',
    icon: '💎'
  }];
  return <section className="py-24 bg-[var(--color-background)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            End-to-end venture building services that bridge traditional tech
            and blockchain innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <Card key={index} hover>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[var(--color-text-secondary)]">
                {service.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
}