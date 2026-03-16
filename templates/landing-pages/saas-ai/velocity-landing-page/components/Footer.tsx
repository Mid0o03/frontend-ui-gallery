
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-carbon pt-32 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-10 group cursor-pointer">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-carbon font-bold">bolt</span>
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase italic">VeloCity</span>
          </div>
          <p className="text-slate-500 text-lg font-medium max-w-sm mb-12 leading-relaxed">
            The next generation of mobile performance. Built for speed, secured for life. Optimized for elite digital experiences.
          </p>
          <div className="flex gap-6">
            {['share', 'public', 'mail'].map((icon) => (
              <a 
                key={icon} 
                href="#" 
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:text-carbon group"
              >
                <span className="material-symbols-outlined text-2xl group-hover:scale-110">{icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="font-black uppercase tracking-[0.3em] text-xs mb-10 text-white">Platform</h5>
          <ul className="flex flex-col gap-6 text-slate-500 text-sm font-bold">
            {['Performance Engine', 'Security Protocol', 'Global Network', 'Developer API'].map(link => (
              <li key={link}>
                <a className="hover:text-primary uppercase tracking-widest transition-colors" href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-black uppercase tracking-[0.3em] text-xs mb-10 text-white">Legal</h5>
          <ul className="flex flex-col gap-6 text-slate-500 text-sm font-bold">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Data Ethics'].map(link => (
              <li key={link}>
                <a className="hover:text-primary uppercase tracking-widest transition-colors" href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] uppercase font-black tracking-[0.4em]">
        <span>© 2024 VeloCity Dynamics International</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
