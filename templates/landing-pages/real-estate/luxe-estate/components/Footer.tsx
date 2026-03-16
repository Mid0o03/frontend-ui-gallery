
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <p className="text-[10px] uppercase font-bold tracking-widest-xl opacity-40">© 2024 Luxe Estate Group</p>
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <span className="text-[9px] uppercase font-bold tracking-widest">Global Portfolio</span>
          </div>
        </div>
        
        <div className="flex gap-12">
          {['Privacy', 'Terms', 'LinkedIn', 'Instagram'].map(link => (
            <a 
              key={link}
              className="text-[10px] uppercase font-bold tracking-widest-xl hover:text-primary transition-colors relative group" 
              href={`#${link.toLowerCase()}`}
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
