
import React from 'react';
import { brandingConfig } from '../src/config/branding';
import { siteContent } from '../src/config/content';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-background-light dark:bg-background-dark border-t border-stone-200 dark:border-stone-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        <div className="font-display text-4xl text-primary tracking-widest mb-8">
          {siteContent.footer.brand}
        </div>
        <div className="flex justify-center space-x-12 mb-12">
          {siteContent.footer.links.map(item => (
            <a key={item.name} href={item.url} className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        <p className="text-stone-400 text-[10px] tracking-[0.2em] uppercase">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
