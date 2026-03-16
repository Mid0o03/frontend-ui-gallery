import React, { useState } from 'react';
import { BRANDING } from '../config/branding';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass-nav border-b border-gray-100 dark:border-gray-800">
      <div className="px-6 lg:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="material-symbols-outlined text-green-700 dark:text-primary text-3xl">spa</span>
          <h1 className="text-xl font-bold tracking-tight">{BRANDING.name}</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-green-700 dark:hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center size-10 rounded-full bg-secondary dark:bg-surface-dark hover:bg-green-100 dark:hover:bg-gray-700 transition-colors text-green-900 dark:text-white">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
          <button className="flex items-center justify-center size-10 rounded-full bg-secondary dark:bg-surface-dark hover:bg-green-100 dark:hover:bg-gray-700 transition-colors text-green-900 dark:text-white relative">
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="absolute top-0 right-0 size-2.5 bg-primary rounded-full border-2 border-white dark:border-background-dark"></span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center size-10 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 shadow-lg py-4 px-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-green-700 dark:hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;