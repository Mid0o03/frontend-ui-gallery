
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-cream/80 backdrop-blur-md border-b border-text-dark/5 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-primary w-8 h-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight uppercase font-sans">L'Étoile</h2>
        </div>
        
        <nav className="hidden lg:flex items-center gap-12 text-[11px] font-bold tracking-[0.2em] uppercase font-sans text-text-dark/70">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#chef" className="hover:text-primary transition-colors">The Chef</a>
          <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
          <a href="#journal" className="hover:text-primary transition-colors">Journal</a>
        </nav>
        
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded text-[11px] font-bold uppercase tracking-[0.2em] transition-all font-sans">
          Reserve
        </button>
      </div>
    </header>
  );
};

export default Header;
