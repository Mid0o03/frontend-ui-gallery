
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-7xl border-[8px] border-black bg-retro-yellow p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 pixel-shadow relative">
      {/* Decorative Corner Squares */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-white border-4 border-black"></div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white border-4 border-black"></div>

      <h1 className="font-pixel text-xl md:text-3xl tracking-tighter text-black flex items-center gap-4">
        ART EXHIBITION <span className="bg-black text-white px-3 py-1 text-2xl">2020</span>
      </h1>

      <div className="flex gap-4">
        <button className="bg-retro-pink border-4 border-black px-6 py-2 font-heading text-sm hover:-translate-y-1 transition-transform pixel-shadow-sm active:shadow-none active:translate-y-0">
          TICKETS
        </button>
        <button className="bg-retro-teal border-4 border-black px-6 py-2 font-heading text-sm hover:-translate-y-1 transition-transform pixel-shadow-sm active:shadow-none active:translate-y-0">
          INFO
        </button>
      </div>
    </header>
  );
};

export default Header;
