
import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '/#story' },
    { name: 'The Harvest', href: '/#harvest' },
    { name: 'Local Farms', href: '/#farms' },
    { name: 'How it Works', href: '/#works' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Leaf className="text-primary w-8 h-8" />
          <h1 className="text-xl font-black tracking-tight uppercase italic">FreshVeggie</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            Order Now
          </button>
          <button
            className="md:hidden text-[#181411]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-bold py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-4 w-full rounded-lg h-14 bg-primary text-white font-bold text-lg">
            Order Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
