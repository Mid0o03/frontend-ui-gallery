
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white/90 py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">eco</span>
              <h2 className="text-xl font-bold uppercase tracking-[0.3em]">L'Essence</h2>
            </div>
            <p className="text-sm text-white/50 leading-relaxed italic font-serif">
              Sustainability and artistry on every plate. A Michelin-starred experience in the heart of the valley.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/30">Location</h4>
            <p className="text-sm leading-relaxed italic font-serif">
              124 Terroir Way<br />
              Napa Valley, CA 94558
            </p>
            <a href="#" className="inline-block text-xs mt-6 text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
              Get Directions
            </a>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/30">Hours</h4>
            <p className="text-sm leading-relaxed italic font-serif">
              Tuesday — Saturday<br />
              Dinner: 17:30 — 22:00
            </p>
            <p className="text-xs mt-4 text-white/30 italic">Closed Sundays & Mondays</p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/30">Newsletter</h4>
            <div className="flex border-b border-white/20 pb-3 group focus-within:border-primary transition-colors">
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm italic w-full placeholder:text-white/20" 
                placeholder="Email Address" 
                type="email" 
              />
              <button className="material-symbols-outlined text-primary hover:translate-x-1 transition-transform">arrow_forward</button>
            </div>
            <p className="text-[9px] mt-4 text-white/20 uppercase tracking-widest">Seasonal menus & event alerts</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            © 2024 L'Essence Restaurant Group. All Rights Reserved.
          </p>
          <div className="flex gap-10 text-[9px] uppercase tracking-[0.2em] text-white/40">
            {['Instagram', 'Journal', 'Press', 'Privacy'].map((item) => (
              <a key={item} href="#" className="hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
