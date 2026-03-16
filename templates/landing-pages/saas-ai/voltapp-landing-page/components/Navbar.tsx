
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-black p-1 rounded-sm flex items-center justify-center">
            <span className="material-symbols-outlined font-bold">bolt</span>
          </div>
          <h2 className="text-white text-2xl font-bold tracking-tighter">VOLT<span className="text-primary italic">APP</span></h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['FEATURES', 'PERFORMANCE', 'STRETCH', 'PRICING'].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button className="bg-primary hover:bg-white text-black px-6 py-2 rounded font-bold text-sm transition-all transform hover:scale-105">
          GET STARTED
        </button>
      </div>
    </header>
  );
};

export default Navbar;
