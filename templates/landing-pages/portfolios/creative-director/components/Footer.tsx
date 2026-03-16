import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="mt-auto bg-[#0a0a0a] border-t border-[#222] min-h-[60vh] flex flex-col justify-between p-6 md:p-12 lg:p-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="flex flex-col gap-8 z-10">
        <span className="font-mono text-primary text-xs tracking-widest uppercase flex items-center gap-2">
          <span className="size-2 bg-primary rounded-full animate-pulse"></span>
          {content.footer.status}
        </span>

        <a
          href={`mailto:${branding.email}`}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter hover:text-primary transition-colors duration-300 break-all leading-tight w-fit"
        >
          {content.footer.emailText.line1}<br className="md:hidden" />{content.footer.emailText.line2}
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 z-10 pt-20">

        {/* Social Links */}
        <div className="flex gap-6">
          {branding.socials.map((social) => (
            <a key={social.name} href={social.url} className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 font-mono text-xs uppercase tracking-wider">
              {social.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-mono text-xs text-gray-600 text-right">
          <p>© {new Date().getFullYear()} {branding.siteName.toUpperCase()}</p>
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;