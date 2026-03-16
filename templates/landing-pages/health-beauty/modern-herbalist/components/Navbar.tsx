
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-forest-muted/30 glass-dark px-6 lg:px-20 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl">fluid_med</span>
            <h2 className="text-white text-xl font-bold tracking-tight">Modern Herbalist</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-white/80 hover:text-primary transition-colors text-sm font-medium" to="/shop">Shop</Link>
            <Link className="text-white/80 hover:text-primary transition-colors text-sm font-medium" to="/philosophy">Philosophy</Link>
            <Link className="text-white/80 hover:text-primary transition-colors text-sm font-medium" to="/disclaimers">Disclaimers</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onSearchClick}
            className="flex items-center bg-forest-muted/40 rounded-lg px-4 py-1.5 border border-forest-muted/50 text-white/40 hover:text-primary transition-all group"
          >
            <span className="material-symbols-outlined text-xl mr-2 group-hover:scale-110 transition-transform">search</span>
            <span className="text-sm">Find a botanical...</span>
          </button>

          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-background-dark font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
