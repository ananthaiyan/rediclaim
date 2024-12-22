import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:support@rediclaim.com" className="flex items-center text-gray-600 hover:text-blue-600">
                <Mail className="w-4 h-4 mr-2" />
                support@rediclaim.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-blue-600">
                <Phone className="w-4 h-4 mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-gray-600 hover:text-blue-600">Privacy Policy</a>
              <a href="/terms" className="block text-gray-600 hover:text-blue-600">Terms of Service</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)] transition-shadow">
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)] transition-shadow">
                <Twitter className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)] transition-shadow">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} RediClaim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}