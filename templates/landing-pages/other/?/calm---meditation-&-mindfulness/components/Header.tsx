
import React from 'react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-4 py-8">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-8 text-white">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight">Calm</h2>
        </Link>
        <Link to="/login" className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold transition-all active:scale-95">
          Connexion
        </Link>
      </div>
      <nav className="flex justify-between w-full px-2">
        <Link to="/" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Home</Link>
        <Link to="/meditate" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Meditate</Link>
        <Link to="/benefits" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Benefits</Link>
      </nav>
    </header>
  );
};

export default Header;
