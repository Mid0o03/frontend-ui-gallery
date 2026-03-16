import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-primary py-20 px-4 border-t-[3px] border-black">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Huge Email Link */}
        <a
          href={`mailto:${branding.email}`}
          className="text-[8vw] leading-none font-black hover:text-white transition-colors break-all"
        >
          {branding.email.toUpperCase()}
        </a>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-primary/30 pt-8">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-black rounded-full p-1 border border-primary">
                <span className="material-symbols-outlined text-lg font-bold">bolt</span>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">{branding.name}</span>
            </div>

            <div className="flex gap-6">
              {Object.entries(branding.socials).map(([name, url]) => (
                <a key={name} href={url} className="font-bold hover:underline hover:text-white decoration-2 underline-offset-4 uppercase">
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="font-bold text-sm opacity-60">{content.footer.copyright}</p>
            <p className="font-bold text-sm opacity-60 mt-1">ALL RIGHTS RESERVED. WE BREAK THINGS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;