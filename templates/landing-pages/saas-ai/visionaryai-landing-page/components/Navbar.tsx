
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              V
            </div>
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              VisionaryAI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link to="#features" className="hover:text-white transition-colors">Features</Link>
            <Link to="#generate" className="hover:text-white transition-colors">Generate</Link>
            <Link to="#" className="hover:text-white transition-colors">Pricing</Link>
          </div>

          <div>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
