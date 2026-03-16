
import React from 'react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-bolt text-white"></i>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            VisualGen
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
        </nav>

        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
