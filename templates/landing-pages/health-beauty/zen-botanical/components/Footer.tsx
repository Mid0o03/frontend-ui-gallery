
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-16 py-12 md:py-16 bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3 text-matcha">
          <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
            <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
          </svg>
          <span className="text-xs tracking-[0.3em] uppercase font-bold">Zen Botanical</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <a href="#" className="text-[10px] uppercase tracking-widest text-matcha hover:text-primary-leaf transition-colors font-medium">Privacy</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-matcha hover:text-primary-leaf transition-colors font-medium">Terms</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-matcha hover:text-primary-leaf transition-colors font-medium">Shipping</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-matcha hover:text-primary-leaf transition-colors font-medium">Instagram</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-matcha hover:text-primary-leaf transition-colors font-medium">Journal</a>
        </nav>

        <div className="text-right">
          <p className="text-[9px] text-matcha/50 uppercase tracking-[0.2em]">
            © 2024 Zen Botanical. Softly Crafted.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
