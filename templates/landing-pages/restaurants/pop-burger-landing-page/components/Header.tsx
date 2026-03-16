
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="relative z-50 flex items-center justify-between px-6 lg:px-20 py-8">
      <div className="flex items-center gap-3 bg-white p-3 border-4 border-black rounded-xl transform -rotate-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <span className="material-symbols-outlined text-4xl text-[#E31B23]">lunch_dining</span>
        <h2 className="text-2xl font-black italic tracking-tighter uppercase">POP BURGER</h2>
      </div>

      <nav className="hidden md:flex items-center gap-8 bg-white/95 backdrop-blur-sm px-10 py-4 border-4 border-black rounded-full shadow-[6px_6px_0px_rgba(0,0,0,1)]">
        {['Menu', 'Spots', 'The Vibe', 'Merch'].map((item) => (
          <Link
            key={item}
            to="/"
            className="font-black text-black hover:text-[#E31B23] transition-colors uppercase tracking-tight text-lg"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div>
        <button className="bg-[#0df259] hover:bg-white text-black font-black uppercase px-8 py-3 rounded-full border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-none">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
