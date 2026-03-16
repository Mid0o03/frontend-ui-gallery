
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="size-8 gold-gradient rounded flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-black font-bold text-xl">account_balance_wallet</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">GoldVault</h2>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {['Platform', 'Wealth', 'Security', 'Institutional'].map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-white px-4 py-2 hover:text-primary transition-colors">
            Login
          </button>
          <button className="gold-gradient text-black text-sm font-bold px-6 py-2.5 rounded-lg shadow-[0_0_20px_rgba(249,212,6,0.15)] hover:scale-105 active:scale-95 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};
