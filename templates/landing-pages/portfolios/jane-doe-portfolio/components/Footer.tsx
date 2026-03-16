import React from 'react';
import { Fingerprint, Mail } from 'lucide-react';
import { branding } from '../config/branding';
import { content } from '../config/content';

const Footer: React.FC = () => {
  return (
    <footer className="p-12 lg:p-24 border-t border-border-color bg-surface-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
        <Fingerprint size={200} className="text-primary" strokeWidth={1} />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-white">{content.footer.heading}</h2>
        <p className="text-gray-400 mb-8 font-light leading-relaxed whitespace-pre-line">
          {content.footer.subheading}
        </p>
        <a
          href={`mailto:${branding.email}`}
          className="inline-flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          <Mail size={24} />
          <span>{content.footer.cta}</span>
        </a>
      </div>

      <div className="mt-24 pt-8 border-t border-border-color flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Local Time</span>
          <span className="text-xl font-mono text-white">09:41 AM — {branding.location === 'Zurich' ? 'ZRH' : branding.location.substring(0, 3).toUpperCase()}</span>
        </div>
        <p className="text-xs font-mono text-gray-600">
          © {new Date().getFullYear()} {branding.name}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;