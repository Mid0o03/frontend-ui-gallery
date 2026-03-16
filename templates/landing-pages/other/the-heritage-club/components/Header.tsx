
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/5 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" />
            </svg>
          </div>
          <span className="text-lg font-bold uppercase tracking-tight text-slate-900">The Heritage Club</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['The Club', 'Amenities', 'Membership', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-600 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button className="px-6 py-2.5 border border-primary text-primary text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-primary hover:text-white transition-all duration-300">
          Member Login
        </button>
      </div>
    </header>
  );
};

export default Header;
