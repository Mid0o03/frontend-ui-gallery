
import React from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary p-1">
          <Paintbrush className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-black tracking-tighter stencil-text">V&V</h1>
      </div>

      <nav className="hidden md:flex items-center gap-10">
        {['The Team', 'Agenda', 'Store', 'About'].map((item) => (
          <Link
            key={item}
            to={`#${item.toLowerCase().replace(/\s/g, '-')}`}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>

      <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 text-sm font-bold uppercase tracking-tighter transition-all active:scale-95">
        Join the Crew
      </button>
    </header>
  );
};

export default Navbar;
