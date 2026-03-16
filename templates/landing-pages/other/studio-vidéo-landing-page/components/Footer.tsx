
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="size-5 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tighter uppercase">Studio Vidéo</h2>
        </div>

        <div className="flex gap-8 text-white/60 text-sm font-medium uppercase tracking-widest">
          {['Instagram', 'Vimeo', 'LinkedIn'].map((platform) => (
            <a key={platform} href="#" className="hover:text-primary transition-colors">
              {platform}
            </a>
          ))}
        </div>

        <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          © 2024 Studio Vidéo. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
