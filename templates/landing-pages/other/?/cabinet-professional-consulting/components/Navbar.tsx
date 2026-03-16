
import React from 'react';
import { Leaf } from 'lucide-react';

import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-seafoam-muted bg-background-light/80 backdrop-blur-md px-6 md:px-20 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
            <Leaf size={20} fill="currentColor" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-text-dark">Cabinet</h2>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center gap-10">
          <Link to="/" className="text-sm font-semibold text-text-dark hover:text-primary transition-colors">Home</Link>
          <Link to="/approach" className="text-sm font-semibold text-text-dark hover:text-primary transition-colors">My Approach</Link>
          <Link to="/space" className="text-sm font-semibold text-text-dark hover:text-primary transition-colors">The Space</Link>
          <Link to="/contact" className="text-sm font-semibold text-text-dark hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:flex min-w-[140px] items-center justify-center rounded-lg bg-primary h-11 px-6 text-sm font-bold text-text-dark transition-all hover:bg-primary/90 shadow-sm">
            Book Consultation
          </Link>
          <button className="md:hidden text-text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
