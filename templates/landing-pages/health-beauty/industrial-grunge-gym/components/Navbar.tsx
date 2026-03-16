
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-solid border-primary/20 px-6 md:px-20 py-6 bg-zinc-950/80 backdrop-blur-md">
      <Link to="/" className="flex items-center gap-3">
        <div className="text-primary">
          <span className="material-symbols-outlined !text-4xl">fitness_center</span>
        </div>
        <h2 className="text-white text-2xl font-black leading-tight tracking-tighter italic select-none">
          NO PAIN NO GAIN
        </h2>
      </Link>

      <div className="hidden md:flex flex-1 justify-end gap-10">
        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${item.active
                  ? 'text-white border-b-2 border-primary'
                  : 'text-white/60 hover:text-primary'
                }`}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="bg-primary text-white text-sm font-black tracking-tighter px-8 py-2 hover:bg-white hover:text-primary transition-all duration-300 uppercase italic">
          JOIN THE GRIND
        </button>
      </div>

      <div className="md:hidden text-white">
        <span className="material-symbols-outlined !text-3xl">menu</span>
      </div>
    </header>
  );
};

export default Navbar;
