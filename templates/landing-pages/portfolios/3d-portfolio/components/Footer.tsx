import React from 'react';
import { content } from '../config/content';
import { branding } from '../config/branding';

const Footer: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden mt-10">
      {/* SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background-light dark:fill-background-dark"
          ></path>
        </svg>
      </div>

      <footer id="contact" className="bg-primary pt-32 pb-16 px-6 text-white text-center relative">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4 animate-float">
            <span className="material-symbols-outlined text-4xl">mail</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black">{content.footer.title}</h2>

          <p className="text-xl text-blue-100 max-w-lg">
            {content.footer.subtitle}
          </p>

          <a
            href={`mailto:${branding.email}`}
            className="text-2xl md:text-3xl font-bold underline decoration-4 decoration-blue-300 underline-offset-8 hover:text-blue-100 transition-colors"
          >
            {branding.email}
          </a>

          <div className="flex gap-6 mt-8">
            {content.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="w-12 h-12 flex items-center justify-center bg-white text-primary rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="font-bold">{link.iconText}</span>
              </a>
            ))}
          </div>

          <div className="mt-16 text-sm text-blue-200 font-medium">
            {content.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;