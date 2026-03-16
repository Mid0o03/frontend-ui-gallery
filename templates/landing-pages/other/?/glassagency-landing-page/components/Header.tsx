
import React from 'react';
import { LayoutGrid } from 'lucide-react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="glass-nav sticky top-0 z-50 px-6 py-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
            <LayoutGrid size={20} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">GlassAgency</h2>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link to="/#services" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">Services</Link>
          <Link to="/#process" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">Process</Link>
          <Link to="/#pricing" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">Pricing</Link>
          <Link to="/#faq" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-md active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
