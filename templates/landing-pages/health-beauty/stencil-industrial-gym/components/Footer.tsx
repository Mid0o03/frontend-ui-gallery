
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 bg-background-dark border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-3 mb-10 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-12 transition-transform">filter_frames</span>
            <h2 className="text-3xl font-black tracking-tighter italic">STENCIL</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-12 mb-16">
            <div className="group">
              <h5 className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-6 border-b border-primary/20 pb-2">Location</h5>
              <p className="text-sm text-white/50 leading-relaxed font-medium group-hover:text-white transition-colors">
                1284 Industrial Ave<br/>
                Iron Foundry District<br/>
                Brooklyn, NY 11205
              </p>
            </div>
            <div className="group">
              <h5 className="text-primary text-[10px] uppercase font-black tracking-[0.4em] mb-6 border-b border-primary/20 pb-2">Operational</h5>
              <p className="text-sm text-white/50 leading-relaxed font-medium group-hover:text-white transition-colors">
                Mon - Sun: 00:00 - 24:00<br/>
                Always Open<br/>
                No Days Off
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            {['Instagram', 'YouTube', 'Twitter'].map(social => (
              <a key={social} href="#" className="text-white/30 hover:text-primary transition-all group">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">{social}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="h-[400px] w-full grayscale contrast-150 border border-white/10 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-primary/20 pointer-events-none mix-blend-multiply z-10 group-hover:opacity-50 transition-opacity"></div>
            <img 
              alt="Gym Location Map" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
            />
            {/* Marker Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="size-12 bg-primary animate-ping absolute rounded-full opacity-40"></div>
              <div className="size-6 bg-primary rounded-full relative shadow-[0_0_20px_rgba(242,13,13,0.8)] border-2 border-white"></div>
            </div>
            <div className="absolute bottom-6 right-6 z-20 bg-black/80 backdrop-blur px-4 py-2 border border-white/10">
                <p className="text-[10px] font-black tracking-widest uppercase">Iron Foundry HQ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">© 2024 Stencil Industrial Gym. All rights restricted.</p>
        <div className="flex gap-8 text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Siege</a>
          <a href="#" className="hover:text-white transition-colors">Liability Waiver</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
