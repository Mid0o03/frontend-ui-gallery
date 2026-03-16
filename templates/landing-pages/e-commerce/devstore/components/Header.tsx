import React, { useState } from 'react';
import { NavLink } from '../types';
import { branding } from '../config/branding';

const links: NavLink[] = [
  { label: 'Templates', href: '#templates' },
  { label: 'Custom Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [cartCount] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-[20px]">{branding.logo.icon}</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-heading">{branding.siteName}</h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;