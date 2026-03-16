
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 lg:px-20 transition-all duration-300 ${isScrolled ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
        }`}
    >
      <Link to="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="bg-primary p-2 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined text-white text-xl">bolt</span>
        </div>
        <h2 className="text-xl font-black tracking-tight uppercase group-hover:text-primary transition-colors">HeroHub</h2>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {['Discover', 'Collections', 'Community', 'Creators'].map((item) => (
          <Link
            key={item}
            className="text-sm font-medium text-white/80 hover:text-primary transition-colors relative group"
            to="#"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-bold px-4 py-2 hover:text-primary transition-colors">Log In</button>
        <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
          Join Community
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          {['Discover', 'Collections', 'Community', 'Creators'].map((item) => (
            <Link key={item} to="#" className="text-lg font-bold py-2 border-b border-white/5 hover:text-primary">{item}</Link>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <button className="w-full py-3 text-center font-bold bg-white/5 rounded-xl">Log In</button>
            <button className="w-full py-3 text-center font-bold bg-primary rounded-xl">Join Community</button>
          </div>
        </div>
      )}
    </header>
  );
};
