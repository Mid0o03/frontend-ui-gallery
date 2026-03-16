
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-brand-black/10 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 Luxury Magazine</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[9px] uppercase tracking-widest font-semibold">
          <a className="hover:opacity-40 transition-opacity" href="#instagram">Instagram</a>
          <a className="hover:opacity-40 transition-opacity" href="#linkedin">LinkedIn</a>
          <a className="hover:opacity-40 transition-opacity" href="#privacy">Privacy</a>
          <a className="hover:opacity-40 transition-opacity" href="#contact">Contact</a>
        </div>
        
        <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-medium">
          Designed for the Modern Era
        </div>
      </div>
    </footer>
  );
};

export default Footer;
