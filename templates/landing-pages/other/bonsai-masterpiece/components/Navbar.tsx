import React from 'react';
import { Link } from 'react-router-dom';
import { brandingConfig } from '../src/config/branding';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 sm:px-8 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-2xl tracking-wider text-primary"
        >
          {brandingConfig.siteName}
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/history" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors uppercase">History</Link>
          <Link to="/styles" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors uppercase">Styles</Link>
          <Link to="/gallery" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors uppercase">Gallery</Link>
          <Link to="/ai-advice" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors uppercase">AI Advice</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-icons-outlined text-stone-600 dark:text-stone-400">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-icons-outlined text-stone-600 dark:text-stone-400">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
