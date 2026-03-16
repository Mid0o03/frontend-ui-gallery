
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-white/5 py-20 px-6 lg:px-12 mt-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">filter_vintage</span>
            <h2 className="text-2xl font-bold tracking-[0.3em] font-serif-jp text-white">懐石 KAISEKI</h2>
          </div>
          <div className="space-y-2">
            <p className="text-[11px] text-gray-400 tracking-[0.2em] font-bold uppercase">Adresse</p>
            <p className="text-xs text-gray-500 tracking-[0.1em] leading-relaxed">
              15 Rue de la Paix, 75002 Paris<br />
              Mardi - Samedi | 19h00 - 23h00
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-6">
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Navigation</h5>
            <ul className="flex flex-col gap-4 text-xs text-gray-500 tracking-[0.15em] font-medium">
              <li><a className="hover:text-primary transition-colors duration-300" href="#">La Carte</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Réservations</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Privatisation</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Social</h5>
            <ul className="flex flex-col gap-4 text-xs text-gray-500 tracking-[0.15em] font-medium">
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Instagram</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Facebook</a></li>
              <li><a className="hover:text-primary transition-colors duration-300" href="#">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-end gap-6 w-full lg:w-auto">
          <div className="flex gap-4">
            {['language', 'share', 'contact_support'].map(icon => (
              <button key={icon} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white">
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </button>
            ))}
          </div>
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] mt-auto">
            © 2024 Kaiseki Paris. Minimalisme Éternel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
