
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="text-black w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter">LUXE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase font-bold tracking-widest-xl">
          <Link className="hover:text-primary transition-colors" to="/#gallery">Gallery</Link>
          <Link className="text-primary transition-colors" to="/#amenities">Amenities</Link>
          <Link className="hover:text-primary transition-colors" to="/#location">Location</Link>
          <Link className="hover:text-primary transition-colors" to="/#contact">Contact</Link>
        </nav>

        <div>
          <button className="bg-black text-white text-[10px] uppercase font-bold tracking-widest-xl px-8 py-3 rounded-full hover:bg-primary transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow-md">
            Inquire
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
