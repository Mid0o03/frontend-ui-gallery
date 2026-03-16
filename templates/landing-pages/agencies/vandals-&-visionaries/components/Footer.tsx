
import React from 'react';
import { Network, Fingerprint, ScanBarcode } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/10 pt-20 pb-10 px-6 md:px-20 overflow-hidden relative">
      {/* Giant Decorative Icon */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Network size={400} strokeWidth={0.5} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <h2 className="text-5xl font-black stencil-text mb-6">
            Join the<br />
            <span className="text-primary">Underground</span>
          </h2>
          <p className="text-zinc-500 mb-8 max-w-md">
            Drop your email to get alerts for flash exhibitions and limited edition drops.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              className="bg-zinc-900 border-zinc-800 text-white focus:ring-primary focus:border-primary flex-grow p-4 font-bold tracking-widest uppercase text-sm" 
              placeholder="YOUR@EMAIL.COM" 
              type="email"
            />
            <button className="bg-primary px-8 py-4 font-black uppercase hover:bg-primary/80 transition-colors">
              Tag Me
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="font-black text-primary uppercase mb-4 tracking-widest">Connect</h4>
            <ul className="space-y-3 font-bold uppercase tracking-tighter text-lg">
              {['Instagram', 'TikTok', 'Discord'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-primary uppercase mb-4 tracking-widest">Legal</h4>
            <ul className="space-y-3 font-bold uppercase tracking-tighter text-lg">
              {['Privacy', 'Terms', 'Ethics'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-bold uppercase tracking-[0.3em] text-center md:text-left">
        <p>© 2024 Vandals & Visionaries Collective. No permission needed.</p>
        <div className="mt-8 md:mt-0 flex gap-6">
          <Network size={20} />
          <ScanBarcode size={20} />
          <Fingerprint size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
