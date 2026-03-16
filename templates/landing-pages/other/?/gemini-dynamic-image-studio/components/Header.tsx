
import React from 'react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              Gemini Studio
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            <Link to="/#studio" className="hover:text-white transition-colors">Studio</Link>
            <Link to="/#features" className="hover:text-white transition-colors">Fonctionnalités</Link>
            <Link to="/#docs" className="hover:text-white transition-colors">Documentation</Link>
          </nav>
          <div>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all shadow-lg shadow-white/10">
              Démarrer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
