
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-white/30 text-sm">
          <span className="font-bold text-white/60">@project/core</span>
          <span>© {new Date().getFullYear()}</span>
          <span className="hidden md:inline text-white/10">|</span>
          <span className="hidden md:inline">Released under MIT License</span>
        </div>
        <div className="flex items-center gap-6">
          <a className="text-white/30 hover:text-primary transition-colors" href="#" aria-label="Community Forum">
            <span className="material-symbols-outlined">forum</span>
          </a>
          <a className="text-white/30 hover:text-primary transition-colors" href="#" aria-label="Email Support">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
          <a className="text-white/30 hover:text-primary transition-colors" href="#" aria-label="Official Website">
            <span className="material-symbols-outlined">public</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
