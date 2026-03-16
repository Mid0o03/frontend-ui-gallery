
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08120a] border-t border-forest-muted/20 py-16 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">fluid_med</span>
            <h2 className="text-white text-xl font-bold tracking-tight">Modern Herbalist</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Bridging the gap between ancestral plant wisdom and modern scientific rigor. Your sanctuary for botanical excellence.
          </p>
          <div className="flex gap-4">
            <a className="text-white/40 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-white/40 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">filter_vintage</span></a>
            <a className="text-white/40 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Library</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Extraction Science</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Plant Monographs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sourcing Map</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Research Journal</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Certifications</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Newsletter</h4>
          <p className="text-white/40 text-xs leading-relaxed mb-4">Receive monthly insights on seasonal botanicals and extraction updates.</p>
          <div className="flex gap-2">
            <input 
              className="bg-forest-muted/20 border-forest-muted/50 rounded-lg text-sm text-white focus:ring-primary focus:border-primary flex-grow border px-3" 
              placeholder="Email address" 
              type="email"
            />
            <button className="bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:brightness-110">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-forest-muted/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2024 Modern Herbalist Laboratory. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {CERTIFICATIONS.map((url, idx) => (
            <img key={idx} className="h-8 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-help" src={url} alt="Certification Logo" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
