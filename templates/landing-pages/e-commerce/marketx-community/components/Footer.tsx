
import React from 'react';
import { FOOTER_SECTIONS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-violet-accent dark:bg-[#1a0f0b] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white font-bold">shopping_bag</span>
              </div>
              <span className="text-2xl font-black tracking-tighter italic uppercase">MarketX</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              The world's most vibrant community-driven marketplace for rare finds and creative digital assets.
            </p>
            <div className="flex gap-4">
              {['public', 'alternate_email', 'share_reviews'].map((icon) => (
                <a key={icon} className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110" href="#">
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a className="text-slate-300 hover:text-primary transition-colors flex items-center gap-2 group" href={link.href}>
                      <span className="size-1.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <p>© 2024 MarketX Inc. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">language</span> English
            </span>
            <span className="flex items-center gap-2 text-primary font-bold">
              <span className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(244,92,37,0.8)]"></span>
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
