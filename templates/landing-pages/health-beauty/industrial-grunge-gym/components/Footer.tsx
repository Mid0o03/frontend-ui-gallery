
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-10 px-10 py-16 text-center bg-zinc-950 border-t border-white/5 relative z-20">
      <div className="flex flex-wrap items-center justify-center gap-12">
        {['Terms of Service', 'Privacy Policy', 'Contact Us'].map((link) => (
          <a key={link} className="text-white/30 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer" href="#">
            {link}
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-8">
        {['share', 'groups', 'play_circle'].map((icon) => (
          <a key={icon} className="text-white/30 hover:text-primary transition-all duration-300 transform hover:scale-110" href="#">
            <span className="material-symbols-outlined !text-3xl">{icon}</span>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="h-[2px] w-24 bg-primary"></div>
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em] mt-2">
          © {new Date().getFullYear()} INDUSTRIAL GRUNGE GYM. TOTAL DOMINATION.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
