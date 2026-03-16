
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-forest/5 bg-linen/90 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 cursor-pointer">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
            </svg>
            <h1 className="text-xl font-extrabold tracking-tighter text-forest uppercase">Terra Glow</h1>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
            <Link to="#" className="hover:text-primary transition-colors">Our Story</Link>
            <Link to="#" className="hover:text-primary transition-colors">Shop</Link>
            <Link to="#" className="hover:text-primary transition-colors">Ingredients</Link>
            <Link to="#" className="hover:text-primary transition-colors">Process</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className={`hidden sm:flex items-center bg-forest/5 rounded-full px-4 py-2 transition-all duration-300 ${isSearchFocused ? 'ring-2 ring-primary/20 w-64' : 'w-48'}`}>
            <svg className="w-4 h-4 text-forest/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search the workshop..."
              className="bg-transparent border-none focus:ring-0 text-xs placeholder:text-forest/30 w-full ml-2"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
          <button className="relative p-2 hover:bg-forest/5 rounded-full transition-colors group">
            <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-primary ring-2 ring-linen"></span>
          </button>
          <button className="p-2 hover:bg-forest/5 rounded-full transition-colors">
            <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
