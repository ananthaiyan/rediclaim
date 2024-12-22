import React from 'react';
import { Upload, Cloud } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520,#4f46e510,#4f46e520)] animate-gradient" />
      
      <div className="relative flex flex-col items-center justify-center px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Upload Your Insurance Document and{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let AI Handle the Rest
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simply upload your document, and get all the information you need in seconds.
            Our AI-powered system analyzes your insurance documents instantly.
          </p>
          
          <div className="mt-12">
            <Button variant="neumorphic" className="px-8 py-4 rounded-xl">
              <span className="flex items-center space-x-3 text-blue-600 font-semibold">
                <Cloud className="w-6 h-6" />
                <span>Upload Document</span>
              </span>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Upload className="w-4 h-4 mr-1" />
              PDF
            </span>
            <span className="flex items-center">
              <Upload className="w-4 h-4 mr-1" />
              JPG
            </span>
            <span className="flex items-center">
              <Upload className="w-4 h-4 mr-1" />
              PNG
            </span>
            <span className="flex items-center">
              <Upload className="w-4 h-4 mr-1" />
              DOCX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}