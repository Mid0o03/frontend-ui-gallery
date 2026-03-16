
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onAssistantToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAssistantToggle }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/20 bg-background-dark/90 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">factory</span>
          <h2 className="text-white text-xl font-black tracking-tighter stamped-text">MARQUE DE CAFÉ</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-gray-300 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors" to="/#products">Products</Link>
          <Link className="text-gray-300 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors" to="/#story">Our Story</Link>
          <button
            onClick={onAssistantToggle}
            className="text-gray-300 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors"
          >
            Brewing Guide
          </button>
        </nav>

        <div className="flex items-center gap-5">
          <button className="flex items-center justify-center p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <div
            className="h-10 w-10 rounded-full border-2 border-primary/50 bg-cover bg-center cursor-pointer hover:border-primary transition-all"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100')" }}
            title="Mon Profil"
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
