
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-primary/10 px-8 md:px-16 lg:px-24 bg-white/5 dark:bg-black/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-6">
          <div className="h-12 w-12 bg-primary flex items-center justify-center text-white font-traditional text-sm rounded-sm shadow-inner">
            浮世
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary dark:text-white">Ukiyo-e Moderne</span>
            <span className="text-[10px] uppercase tracking-widest text-primary/40 dark:text-white/20">© 2024 Portfolio de l'Artiste</span>
          </div>
        </div>
        
        <div className="flex gap-10">
          {['Instagram', 'Behance', 'LinkedIn'].map((platform) => (
            <a 
              key={platform}
              className="text-[10px] font-black uppercase tracking-widest text-primary/60 hover:text-vermilion transition-colors dark:text-gray-400" 
              href="#"
            >
              {platform}
            </a>
          ))}
        </div>
        
        <div className="text-[10px] font-black uppercase tracking-widest text-primary/40 dark:text-white/20">
          <a href="#" className="hover:text-vermilion transition-colors">Mentions Légales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
