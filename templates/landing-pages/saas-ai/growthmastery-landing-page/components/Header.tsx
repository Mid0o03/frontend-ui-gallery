import React from 'react';
import { branding, content } from '../config';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-glow">
              <span className="material-symbols-outlined text-2xl">{branding.logo.icon}</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight">{branding.logo.text}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {content.header.menuItems.map((item, idx) => (
              <a key={idx} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <a href="#pricing" className="bg-accent hover:bg-orange-600 text-white text-sm font-bold py-3 px-6 rounded-full shadow-glow-accent transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
              {content.header.cta}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;