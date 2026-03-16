import React from 'react';
import { branding, content } from '../config';

const Footer: React.FC = () => {
  const { footer } = content;

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">{branding.logo.icon}</span>
              <span className="font-bold text-xl text-slate-700 dark:text-slate-200">{branding.logo.text}</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs transition-colors">
              {footer.description}
            </p>
          </div>

          {footer.links.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-xs tracking-wider">{group.title}</h4>
              <ul className="space-y-2">
                {group.items.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="text-slate-500 hover:text-primary text-sm transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm italic">
            {footer.copyright}
          </div>

          <div className="flex gap-6">
            <a href={branding.social.twitter} className="text-slate-500 hover:text-primary transition-colors text-sm">Twitter</a>
            <a href={branding.social.linkedin} className="text-slate-500 hover:text-primary transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;