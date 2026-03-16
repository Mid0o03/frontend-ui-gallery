
import React from 'react';
import { IconMap } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-old-rose text-center">
      <div className="flex justify-center items-center gap-6 mb-6">
        <span className="text-primary/40">{IconMap.spa}</span>
        <div className="text-primary tracking-[0.4em] uppercase text-sm font-bold">Eternal Moments</div>
        <span className="text-primary/40">{IconMap.spa}</span>
      </div>
      
      <div className="flex justify-center gap-8 mb-8">
        <a href="#" className="opacity-40 hover:opacity-100 transition-opacity text-[#1b0d10]">
          {IconMap.camera}
        </a>
        <a href="#" className="opacity-40 hover:opacity-100 transition-opacity text-[#1b0d10]">
          {IconMap.mail}
        </a>
        <a href="#" className="opacity-40 hover:opacity-100 transition-opacity text-[#1b0d10]">
          {IconMap.share}
        </a>
      </div>
      
      <p className="text-xs opacity-50 uppercase tracking-widest font-medium">
        © 2024 Eternal Moments Studio • Artfully Captured Stories
      </p>
    </footer>
  );
};
