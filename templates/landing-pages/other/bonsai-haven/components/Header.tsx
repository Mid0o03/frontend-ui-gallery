
import React from 'react';
import { Search, ShoppingCart, TreePine, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { branding } from '../src/config/branding';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-moss/10 dark:border-white/10 px-6 md:px-10 py-5 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-6 lg:gap-12">
        <Link to="/" className="flex items-center gap-3 text-moss dark:text-primary transition-colors cursor-pointer">
          <TreePine size={32} />
          <h2 className="text-moss dark:text-white text-xl font-bold font-serif leading-tight tracking-tight">{branding.siteName}</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-moss dark:text-white/80 text-sm font-semibold hover:text-primary transition-colors" to="/shop">Shop</Link>
          <Link className="text-moss dark:text-white/80 text-sm font-semibold hover:text-primary transition-colors" to="/care-guides">Care Guides</Link>
          <Link className="text-moss dark:text-white/80 text-sm font-semibold hover:text-primary transition-colors" to="/workshops">Workshops</Link>
          <Link className="text-moss dark:text-white/80 text-sm font-semibold hover:text-primary transition-colors" to="/about">About</Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-6 items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-moss/5 dark:hover:bg-white/5 transition-colors text-moss dark:text-white"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-moss/5 dark:bg-white/5 border border-moss/10 dark:border-white/10 group focus-within:border-primary transition-all">
            <div className="text-moss/60 dark:text-white/60 flex items-center justify-center pl-4">
              <Search size={18} />
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-moss/40 dark:placeholder:text-white/40 px-3 text-sm"
              placeholder="Search species..."
            />
          </div>
        </label>

        <Link to="/cart" className="flex items-center justify-center text-moss dark:text-white hover:text-primary transition-colors relative">
          <ShoppingCart size={22} />
          <span className="absolute -top-1 -right-2 bg-primary text-background-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-background-light dark:ring-background-dark">
            0
          </span>
        </Link>

        <Link to="/login" className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-moss text-white dark:bg-primary dark:text-background-dark text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md">
          <span>Sign In</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
