import React from 'react';
import { Brain, Shield, Clock, FileSearch } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms extract and analyze key information from your insurance documents.'
  },
  {
    icon: Shield,
    title: 'Secure Processing',
    description: 'Bank-level encryption ensures your sensitive insurance information remains protected.'
  },
  {
    icon: Clock,
    title: 'Instant Results',
    description: 'Get detailed analysis and insights within seconds, not hours or days.'
  },
  {
    icon: FileSearch,
    title: 'Smart Search',
    description: 'Easily search through your documents with our intelligent search functionality.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand and manage your insurance documents effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}