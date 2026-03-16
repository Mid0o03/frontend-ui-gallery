
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="z-50 flex flex-col items-center justify-center py-8 px-4 border-b border-primary/10 bg-background/80 backdrop-blur-md sticky top-0">
      <div className="flex items-center gap-6 md:gap-12 text-[10px] md:text-xs font-bold tracking-extra-wide uppercase mb-6 text-dark">
        <Link className="hover:text-primary transition-colors" to="/">Our Story</Link>
        <Link className="hover:text-primary transition-colors" to="/">Gallery</Link>

        <div className="flex flex-col items-center gap-2 px-4">
          <span className="material-symbols-outlined text-primary text-4xl">bakery_dining</span>
          <h1 className="text-lg md:text-xl tracking-[0.1em] font-black text-primary whitespace-nowrap">
            Pastel Macarons
          </h1>
        </div>

        <Link className="hover:text-primary transition-colors" to="/">Flavors</Link>
        <Link className="hover:text-primary transition-colors" to="/">Order</Link>
      </div>
      <div className="w-24 symmetry-line"></div>
    </header>
  );
};

export default Navbar;
