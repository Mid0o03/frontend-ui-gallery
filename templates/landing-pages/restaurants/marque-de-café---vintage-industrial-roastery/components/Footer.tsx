
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-black border-t-2 border-primary/10 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">factory</span>
            <h2 className="text-white text-xl font-black tracking-tighter stamped-text">MARQUE DE CAFÉ</h2>
          </div>
          <p className="text-gray-500 text-sm italic leading-relaxed max-w-xs mx-auto md:mx-0">
            Forging fine beans in the heart of the industrial district since 1924. 
            Quality assured by high-pressure steam and relentless grit.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-10">
            <a className="text-gray-500 hover:text-primary transition-all hover:scale-125" href="#" title="Partager"><span className="material-symbols-outlined">share</span></a>
            <a className="text-gray-500 hover:text-primary transition-all hover:scale-125" href="#" title="Réseau"><span className="material-symbols-outlined">public</span></a>
            <a className="text-gray-500 hover:text-primary transition-all hover:scale-125" href="#" title="Contact"><span className="material-symbols-outlined">contact_mail</span></a>
          </div>
          <div className="h-[1px] w-24 bg-primary/20"></div>
          <nav className="flex gap-6 text-[10px] uppercase font-black tracking-widest text-gray-600">
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Shipping</a>
            <a href="#" className="hover:text-primary">Returns</a>
          </nav>
        </div>
        
        <div className="text-center md:text-right flex flex-col gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold leading-loose">
            © 1924 ROASTED UNION CO. <br/> 
            ALL RIGHTS RESERVED BY ORDER OF THE BOARD.
          </p>
          <div className="flex justify-center md:justify-end gap-2">
            <div className="h-2 w-2 rounded-full bg-primary/20"></div>
            <div className="h-2 w-2 rounded-full bg-primary/40"></div>
            <div className="h-2 w-2 rounded-full bg-primary/60"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
