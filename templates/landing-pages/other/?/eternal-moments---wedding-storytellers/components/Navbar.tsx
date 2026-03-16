
import React from 'react';
import { NAV_ITEMS } from '../constants';

import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-old-rose px-6 md:px-20 lg:px-40 py-5 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-4 text-primary">
        <div className="w-8 h-8">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#1b0d10] text-xl font-bold leading-tight tracking-tight">Eternal Moments</h2>
      </Link>

      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-[#1b0d10] hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          Book Your Story
        </button>
      </div>
    </header>
  );
};
