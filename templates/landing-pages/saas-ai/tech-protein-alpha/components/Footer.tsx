
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border-dark bg-bg-dark px-10 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-bold tracking-tighter uppercase">
            Tech Protein <span className="text-primary">Alpha</span>
          </h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
            © 2024 Molecular Dynamics Lab. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a className="text-[10px] text-gray-400 hover:text-primary uppercase tracking-widest transition-colors font-bold" href="#">Protocol</a>
          <a className="text-[10px] text-gray-400 hover:text-primary uppercase tracking-widest transition-colors font-bold" href="#">Privacy</a>
          <a className="text-[10px] text-gray-400 hover:text-primary uppercase tracking-widest transition-colors font-bold" href="#">Terminal</a>
        </div>
        
        <div className="flex gap-4">
          <FooterIcon icon="share" />
          <FooterIcon icon="terminal" />
          <FooterIcon icon="qr_code" />
        </div>
      </div>
    </footer>
  );
};

const FooterIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="size-10 flex items-center justify-center border border-border-dark hover:border-primary hover:bg-primary/10 transition-all cursor-pointer">
    <span className="material-symbols-outlined text-sm">{icon}</span>
  </div>
);
