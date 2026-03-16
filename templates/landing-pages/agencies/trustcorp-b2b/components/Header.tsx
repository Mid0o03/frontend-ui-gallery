
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <Logo className="size-8" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">TrustCorp</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300 dark:hover:text-white" to="#">Solutions</Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300 dark:hover:text-white" to="#">À propos</Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300 dark:hover:text-white" to="#">Services</Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300 dark:hover:text-white" to="#">Ressources</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex px-5 py-2.5 bg-gray-100 dark:bg-slate-800 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all text-slate-900 dark:text-white">
            Connexion
          </button>
          <button className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
            Contactez-nous
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            <Link className="text-lg font-semibold text-slate-600 dark:text-slate-300" to="#">Solutions</Link>
            <Link className="text-lg font-semibold text-slate-600 dark:text-slate-300" to="#">À propos</Link>
            <Link className="text-lg font-semibold text-slate-600 dark:text-slate-300" to="#">Services</Link>
            <Link className="text-lg font-semibold text-slate-600 dark:text-slate-300" to="#">Ressources</Link>
            <hr className="dark:border-gray-800" />
            <button className="w-full py-3 bg-gray-100 dark:bg-slate-800 font-bold rounded-lg">Connexion</button>
          </div>
        </div>
      )}
    </header>
  );
};
