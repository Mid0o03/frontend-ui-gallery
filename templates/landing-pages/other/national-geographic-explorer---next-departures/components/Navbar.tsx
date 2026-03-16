
import React from 'react';
import { Link } from 'react-router-dom';
import { NatGeoLogo } from '../constants';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7dfcf] dark:border-[#3d3424] px-6 lg:px-10 py-5 bg-background-light dark:bg-background-dark transition-colors">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <NatGeoLogo />
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] uppercase letter-spacing-rugged hidden md:block">
            National Geographic Explorer
          </h2>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] uppercase letter-spacing-rugged md:hidden">
            NG Explorer
          </h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {['EXPEDITIONS', 'DESTINATIONS', 'STORIES', 'JOURNALS'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm font-semibold hover:text-primary transition-colors tracking-widest"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center bg-white/50 dark:bg-white/10 rounded-lg px-3 py-1.5 border border-[#e7dfcf] dark:border-[#3d3424] focus-within:border-primary transition-all">
          <span className="material-symbols-outlined text-lg mr-2 text-clay">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm p-0 w-32 md:w-40 placeholder:text-clay dark:text-white"
            placeholder="Explore the world..."
            type="text"
          />
        </div>
        <button className="bg-primary hover:bg-ochre-dark text-white px-6 py-2 rounded-lg font-bold text-sm tracking-wide transition-all shadow-sm active:scale-95">
          SIGN IN
        </button>
      </div>
    </header>
  );
};

export default Navbar;
