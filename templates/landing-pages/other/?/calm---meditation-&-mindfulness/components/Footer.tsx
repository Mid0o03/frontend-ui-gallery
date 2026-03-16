
import React from 'react';

const Footer: React.FC = () => {
  const links = ['Explorer', 'Sessions', 'Profil'];

  return (
    <footer className="py-10 text-center border-t border-white/5">
      <div className="flex justify-center gap-8 mb-6">
        {links.map((link) => (
          <a 
            key={link}
            href="#" 
            className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-white/20 text-[10px] uppercase tracking-wider">
        © 2024 Calm. Design Fluide & Apaisant.
      </p>
    </footer>
  );
};

export default Footer;
