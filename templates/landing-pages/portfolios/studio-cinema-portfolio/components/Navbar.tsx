
import React from 'react';
import { Share2, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed inset-0 pointer-events-none z-50 p-6 md:p-12 flex flex-col justify-between items-stretch">
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="group cursor-pointer">
          <h1 className="text-xl font-bold tracking-tighter uppercase text-white">Studio Cinema</h1>
          <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80">
          <a className="hover:text-primary transition-colors" href="#">Archive</a>
          <a className="hover:text-primary transition-colors" href="#">Journal</a>
          <a className="hover:text-primary transition-colors" href="#">About</a>
        </div>
      </div>

      <div className="flex justify-between items-end pointer-events-auto">
        <div className="flex gap-4">
          <button className="size-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-white/70 hover:text-primary">
            <Share2 size={16} strokeWidth={1.5} />
          </button>
          <button className="size-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-white/70 hover:text-primary">
            <Mail size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity cursor-default text-white">
          © 2024 Cinematic Arts — Paris / Tokyo
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
