
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
            <span className="material-symbols-outlined text-primary">rocket_launch</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Innovate<span className="text-primary">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'How it Works', 'Pricing', 'FAQ'].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="#" className="text-sm font-semibold text-white hover:text-primary transition-colors hidden sm:block">Log in</Link>
          <button className="bg-primary hover:bg-primary-light text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
