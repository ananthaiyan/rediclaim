import React from 'react';
import { Upload, Search, FileText } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Document',
    description: 'Simply drag and drop your insurance document or click to upload'
  },
  {
    icon: Search,
    title: 'AI Analysis',
    description: 'Our AI system analyzes and extracts key information from your document'
  },
  {
    icon: FileText,
    title: 'Get Results',
    description: 'Review the analyzed information and insights in an easy-to-understand format'
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-200" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}