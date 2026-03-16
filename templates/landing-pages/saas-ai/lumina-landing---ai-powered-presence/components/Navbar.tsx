
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Lumina<span className="text-indigo-600">.</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/#features" className="hover:text-indigo-600 transition-colors">Features</Link>
          <Link to="/#gallery" className="hover:text-indigo-600 transition-colors">Gallery</Link>
          <Link to="/#pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
          <Link to="/#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-md">
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
