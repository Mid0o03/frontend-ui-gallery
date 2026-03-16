
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dark bg-bg-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
      <div className="flex items-center gap-3 text-white">
        <div className="size-6 text-primary">
          <span className="material-symbols-outlined text-3xl">deployed_code</span>
        </div>
        <h2 className="text-white text-xl font-bold tracking-tighter uppercase">
          Tech Protein <span className="text-primary">Alpha</span>
        </h2>
      </div>

      <nav className="hidden md:flex flex-1 justify-center gap-10">
        <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" to="#science">Science</Link>
        <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" to="#specs">Specifications</Link>
        <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" to="#performance">Performance</Link>
        <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" to="#hero">Diagnostics</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex min-w-[140px] cursor-pointer items-center justify-center border border-primary bg-primary/10 px-4 py-2 text-primary text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
          Initialize Order
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors p-2"
        >
          {mobileMenuOpen ? 'close' : 'menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-dark border-b border-border-dark md:hidden flex flex-col p-6 gap-6 animate-in slide-in-from-top duration-300">
          <Link className="text-sm font-medium uppercase tracking-widest" to="#science" onClick={() => setMobileMenuOpen(false)}>Science</Link>
          <Link className="text-sm font-medium uppercase tracking-widest" to="#specs" onClick={() => setMobileMenuOpen(false)}>Specifications</Link>
          <Link className="text-sm font-medium uppercase tracking-widest" to="#performance" onClick={() => setMobileMenuOpen(false)}>Performance</Link>
          <button className="w-full border border-primary bg-primary/10 px-4 py-4 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            Initialize Order
          </button>
        </div>
      )}
    </header>
  );
};
