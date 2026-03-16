
import React from 'react';
import { NAV_ITEMS, Logo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e8eaf3] px-6 lg:px-20 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap">
        <div class="flex items-center gap-12">
          <div class="flex items-center gap-3 text-primary">
            <Logo />
            <h2 class="text-[#0e111b] text-xl font-black leading-tight tracking-tighter uppercase">Stratton & Wells</h2>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                class="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div class="flex items-center gap-6">
          <button class="hidden sm:flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-xs font-bold tracking-[0.15em] uppercase shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all">
            Consultation
          </button>
          <button class="md:hidden text-2xl material-symbols-outlined">menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
