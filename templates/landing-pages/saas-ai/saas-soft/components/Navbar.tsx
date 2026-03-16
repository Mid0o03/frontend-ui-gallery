
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-soft-raised">
            <LayoutGrid className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-text-dark">SaaS Soft</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors" to="/product">Produit</Link>
          <Link className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors" to="/solutions">Solutions</Link>
          <Link className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors" to="/pricing">Tarifs</Link>
          <Link className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors" to="/about">À propos</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2.5 text-sm font-bold bg-white rounded-full shadow-soft-raised hover:shadow-soft-pressed transition-all duration-200">
            Connexion
          </button>
          <button className="px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-full shadow-lg hover:brightness-110 transition-all">
            Essai Gratuit
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
