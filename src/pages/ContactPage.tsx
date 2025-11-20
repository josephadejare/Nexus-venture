import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      }, 3000);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  return <div className="py-24">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Together
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Have an idea? Let's discuss how we can turn it into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[{
          label: 'Email',
          value: 'hello@ventureforge.io'
        }, {
          label: 'Location',
          value: 'San Francisco, CA'
        }, {
          label: 'Response Time',
          value: '< 24 hours'
        }].map((contact, index) => <Card key={index} className="text-center">
              <div className="text-sm text-[var(--color-text-tertiary)] mb-2">
                {contact.label}
              </div>
              <div className="font-semibold">{contact.value}</div>
            </Card>)}
        </div>

        <Card>
          {submitted ? <div className="text-center py-12">
              <div className="w-16 h-16 bg-[var(--color-success)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-[var(--color-text-secondary)]">
                We'll get back to you within 24 hours.
              </p>
            </div> : <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]' : 'border-[var(--color-border)] focus:ring-[var(--color-accent-blue)] focus:border-[var(--color-accent-blue)]'}`} placeholder="John Doe" />
                {errors.name && <p className="mt-1 text-sm text-[var(--color-error)]">
                    {errors.name}
                  </p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]' : 'border-[var(--color-border)] focus:ring-[var(--color-accent-blue)] focus:border-[var(--color-accent-blue)]'}`} placeholder="john@example.com" />
                {errors.email && <p className="mt-1 text-sm text-[var(--color-error)]">
                    {errors.email}
                  </p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-[var(--color-accent-blue)] transition-all" placeholder="Your Company" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]' : 'border-[var(--color-border)] focus:ring-[var(--color-accent-blue)] focus:border-[var(--color-accent-blue)]'}`} placeholder="Tell us about your project..." />
                {errors.message && <p className="mt-1 text-sm text-[var(--color-error)]">
                    {errors.message}
                  </p>}
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>}
        </Card>
      </div>
    </div>;
}