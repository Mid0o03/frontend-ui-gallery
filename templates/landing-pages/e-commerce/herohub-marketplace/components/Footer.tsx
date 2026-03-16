
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-16 px-6 lg:px-20 bg-black/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-8 group cursor-pointer">
            <div className="bg-primary p-2 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-white text-sm">bolt</span>
            </div>
            <h2 className="text-xl font-black tracking-tight uppercase">HeroHub</h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            The global marketplace for makers, by makers. Built on the foundation of radical transparency and community trust.
          </p>
          <div className="flex gap-4">
            {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-500">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Marketplace</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            {['Latest Drops', 'Top Sellers', 'Collections', 'Gift Cards', 'Brand Guidelines'].map(item => (
              <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Community</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            {['Forum', 'Events', 'Hero Academy', 'Refer a Maker', 'Support Center'].map(item => (
              <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Newsletter</h5>
          <p className="text-sm text-slate-500 mb-6 font-medium">Get the weekly hero recap and never miss a drop.</p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input 
                className="bg-white/5 border-white/10 rounded-full px-5 py-3 text-sm w-full focus:ring-primary focus:border-primary placeholder:text-slate-600" 
                placeholder="Email Address" 
                type="email"
              />
            </div>
            <button className="bg-primary p-3 rounded-full hover:bg-primary/80 hover:rotate-12 transition-all group">
              <span className="material-symbols-outlined text-white">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.05] gap-6">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Marketplace Hero Community. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-600 font-medium">
          <a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Safety Center</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};
