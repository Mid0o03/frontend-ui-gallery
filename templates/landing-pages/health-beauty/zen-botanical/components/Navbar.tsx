
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-16 py-4 md:py-6 ${isScrolled ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-16">
          <div className="flex items-center gap-2 group cursor-pointer">
            <svg className="w-6 h-6 text-primary-leaf" viewBox="0 0 48 48" fill="currentColor">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
            <h1 className="text-xl font-medium tracking-tight">Zen Botanical</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="#" className="text-sm font-light italic hover:text-matcha transition-colors">Shop All</Link>
            <Link to="#" className="text-sm font-light italic hover:text-matcha transition-colors">Matcha</Link>
            <Link to="#" className="text-sm font-light italic hover:text-matcha transition-colors">Wellness</Link>
            <Link to="#" className="text-sm font-light italic hover:text-matcha transition-colors">Our Story</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full px-4 py-1.5 focus-within:bg-white/50 transition-all">
            <svg className="w-4 h-4 text-matcha" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input
              type="text"
              placeholder="Search collection"
              className="bg-transparent border-none focus:ring-0 text-xs w-32 placeholder:text-matcha/50 italic"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </button>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
