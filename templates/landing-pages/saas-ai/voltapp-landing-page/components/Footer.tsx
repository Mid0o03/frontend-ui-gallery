
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary text-black p-1 rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined font-bold">bolt</span>
            </div>
            <h2 className="text-white text-2xl font-bold tracking-tighter">VOLT<span className="text-primary italic">APP</span></h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Engineering the future of high-speed mobile interfaces for professional athletes, tech pioneers, and elite performers worldwide.
          </p>
          <div className="flex gap-4">
            {['public', 'share', 'mail'].map(icon => (
              <a 
                key={icon} 
                href="#" 
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Product</h4>
          <ul className="flex flex-col gap-4 text-white/50 text-sm">
            {['Performance Core', 'Security Protocols', 'Global Sync', 'Developer API'].map(item => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Company</h4>
          <ul className="flex flex-col gap-4 text-white/50 text-sm">
            {['Our Mission', 'The Team', 'Careers', 'Media Kit'].map(item => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Support</h4>
          <ul className="flex flex-col gap-4 text-white/50 text-sm">
            {['Documentation', 'Status Center', 'Help Desk', 'Privacy Policy'].map(item => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/30 text-xs uppercase tracking-widest">© 2024 VOLTAPP PERFORMANCE SYSTEMS INC. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Systems Nominal: 0.2ms latency</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
