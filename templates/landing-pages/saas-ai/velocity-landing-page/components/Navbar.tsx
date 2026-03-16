
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-carbon/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-carbon font-bold">bolt</span>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">VeloCity</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {['Performance', 'Security', 'Ecosystem'].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="bg-primary text-carbon px-6 py-2.5 rounded font-black uppercase text-xs tracking-widest hover:brightness-110 active:scale-95 transition-all">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
