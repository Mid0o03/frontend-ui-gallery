
import React from 'react';

const FooterLinkGroup: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-white font-bold tracking-wider uppercase text-xs">{title}</h4>
    <ul className="space-y-4 text-slate-500 text-sm font-medium">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="hover:text-primary transition-colors duration-300">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-8 gold-gradient rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-black text-lg font-black">account_balance_wallet</span>
              </div>
              <h2 className="text-white text-2xl font-black tracking-tighter">GoldVault</h2>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 text-lg leading-relaxed font-light">
              The world's most secure digital wealth management platform for private investors seeking excellence.
            </p>
            <div className="flex gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="size-4 bg-slate-400 rounded-sm"></div>
                 </div>
               ))}
            </div>
          </div>

          <FooterLinkGroup 
            title="Platform" 
            links={['Overview', 'Pricing', 'Wealth Management', 'Digital Assets']} 
          />
          <FooterLinkGroup 
            title="Company" 
            links={['About Us', 'Our Mission', 'Privacy Policy', 'Terms of Service']} 
          />
          <FooterLinkGroup 
            title="Connect" 
            links={['Twitter', 'LinkedIn', 'Email Support', 'Press Kit']} 
          />
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-sm font-medium">
            © 2024 GoldVault Fintech International. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-slate-500 text-sm flex items-center gap-2 group cursor-help">
              <span className="material-symbols-outlined text-sm text-primary group-hover:scale-110 transition-transform">verified</span> 
              SOC2 Type II Certified
            </div>
            <div className="text-slate-500 text-sm flex items-center gap-2 group cursor-help">
              <span className="material-symbols-outlined text-sm text-primary group-hover:scale-110 transition-transform">lock</span> 
              AES-256 Quantum-Safe
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
