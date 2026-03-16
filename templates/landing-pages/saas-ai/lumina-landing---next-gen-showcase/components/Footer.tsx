
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Lumina</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Empowering developers and creatives to build the next generation of digital experiences.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Subscribe to our newsletter</h4>
            <p className="text-gray-500 mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lumina Landing Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
