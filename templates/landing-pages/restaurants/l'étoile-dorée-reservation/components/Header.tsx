
import React from 'react';
import { User, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#f3efe7] dark:border-[#3a311d] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight uppercase font-sans">L'Étoile Dorée</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">The Menu</a>
          <a className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">Wine Cellar</a>
          <a className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">The Experience</a>
          <a className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button className="hidden lg:flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-background-dark text-xs font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-95">
            Concierge Desk
          </button>
          
          <div className="w-10 h-10 rounded-full border border-[#f3efe7] dark:border-[#3a311d] overflow-hidden bg-gray-200">
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/restaurant/100/100" 
              alt="User profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
