
import React from 'react';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/70 text-[10px] uppercase tracking-[0.2em] gap-8">
        <div className="flex gap-10">
          <a className="hover:text-primary transition-colors font-bold" href="#">Instagram</a>
          <a className="hover:text-primary transition-colors font-bold" href="#">Journal</a>
          <a className="hover:text-primary transition-colors font-bold" href="#">Privacy</a>
        </div>
        
        <div className="flex items-center gap-3 text-white">
          <MapPin size={16} className="text-primary" />
          <span className="font-display italic capitalize text-lg tracking-normal">
            Place de l'Étoile, Paris
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
