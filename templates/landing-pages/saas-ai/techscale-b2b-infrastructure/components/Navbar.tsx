
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Icon } from './Icon';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dbdfe6] bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#135bec] p-1.5 rounded-lg text-white">
            <Icon name="cloud_done" className="text-2xl leading-none" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight">TechScale B2B</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium hover:text-[#135bec] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
            Log In
          </button>
          <button className="bg-[#135bec] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:bg-[#135bec]/90 transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
};
