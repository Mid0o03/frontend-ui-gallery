import React from 'react';
import { Link } from 'react-router-dom';
import { brandingConfig } from '../src/config/branding';
import { contentConfig } from '../src/config/content';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border-4 border-primary/20 rounded-full px-8 py-3 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="size-11 bg-primary rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined font-bold text-xl">rocket_launch</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-primary">{brandingConfig.siteName}</h1>
        </Link>

        <div className="hidden md:flex items-center gap-12 ml-6">
          {contentConfig.navbar.links.map((link) => (
            <Link key={link.name} to={link.href} className="font-bold text-gray-700 hover:text-primary transition-all hover:-translate-y-0.5 active:translate-y-0">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="candy-button bg-[#FFD700] hover:bg-[#FFC900] text-black font-black px-6 py-2.5 rounded-full text-sm shadow-[0_6px_0_0_#CC9900] active:shadow-none transition-all">
            {contentConfig.navbar.ctaLogin}
          </button>
          <button className="candy-button bg-primary text-white font-black px-8 py-2.5 rounded-full text-sm shadow-[0_6px_0_0_#5D12A8] active:shadow-none transition-all">
            {contentConfig.navbar.ctaJoin}
          </button>
        </div>
      </nav>
    </header>
  );
};
