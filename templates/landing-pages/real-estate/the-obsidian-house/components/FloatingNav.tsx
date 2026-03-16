
import React from 'react';
import { Link } from 'react-router-dom';

interface FloatingNavProps {
  onOpenContact: () => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onOpenContact }) => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] bg-black/70 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex items-center gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-slide-up">
      <Link to="#gallery" className="flex items-center gap-3 text-primary group">
        <span className="material-symbols-outlined text-lg">grid_view</span>
        <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold">Gallery</span>
      </Link>

      <button className="flex items-center gap-3 hover:text-white transition-colors group">
        <span className="material-symbols-outlined text-lg text-white/40 group-hover:text-white">location_on</span>
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white">Map</span>
      </button>

      <div className="w-px h-5 bg-white/10"></div>

      <button
        onClick={onOpenContact}
        className="flex items-center gap-3 hover:text-white transition-all group"
      >
        <span className="material-symbols-outlined text-lg text-white/40 group-hover:text-primary">mail</span>
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-primary">Contact</span>
      </button>
    </div>
  );
};

export default FloatingNav;
