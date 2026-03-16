
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-white/5 bg-background-dark pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-8 group cursor-pointer">
            <svg className="w-10 h-10 text-primary transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" />
            </svg>
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">Neon Pulse</h2>
          </div>
          <p className="text-white/40 mb-10 max-w-sm leading-relaxed text-lg">
            Be the first to know about surprise guest announcements, set times, and exclusive merch drops. Join the pulse.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input 
              className="flex-grow bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-mono tracking-widest uppercase placeholder:text-white/20" 
              placeholder="ENTER THE GRID (EMAIL)" 
              type="email" 
            />
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-primary/80 transition-all shadow-lg">
              Join
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-primary">Information</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['Safety & Guidelines', 'Travel & Lodging', 'Accessibility', 'Sustainability', 'FAQ'].map(item => (
              <li key={item}><a className="text-white/40 hover:text-white transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-primary">Connect</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['Instagram', 'Discord', 'Soundcloud', 'TikTok', 'X / Twitter'].map(item => (
              <li key={item}><a className="text-white/40 hover:text-white transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-12">
        <div className="text-[9px] uppercase font-black tracking-[0.5em] text-white/20">
          © 2024 Neon Pulse Festival Group. Neo-Tokyo District.
        </div>
        
        <div className="flex gap-10 text-white/20 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Decorative icons */}
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/></svg>
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
        </div>

        <div className="text-[9px] uppercase font-black tracking-[0.5em] text-white/20">
          Designed for the future
        </div>
      </div>
    </footer>
  );
};

export default Footer;
