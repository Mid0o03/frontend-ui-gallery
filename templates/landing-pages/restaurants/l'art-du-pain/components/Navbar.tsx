
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-[#3e27231a] bg-kraft-paper/80 backdrop-blur-md px-6 py-4 md:px-20 lg:px-40">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
          <h1 className="text-xl font-bold tracking-tight text-ink-dark">L'Art du Pain</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-medium hover:text-primary transition-colors italic" to="/#atelier">L'Atelier</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors italic" to="/#menu">Le Menu</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors italic" to="/#terroir">Terroir</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors italic" to="/#localisation">Localisation</Link>
        </nav>

        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-transform active:scale-95">
          Order Today
        </button>
      </div>
    </header>
  );
};

export default Navbar;
