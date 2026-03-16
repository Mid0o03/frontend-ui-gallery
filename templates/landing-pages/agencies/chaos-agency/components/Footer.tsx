import React from 'react';
import Button from './Button';
import { CONTENT, BRANDING } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-3 border-black bg-black px-6 pb-10 pt-20 text-white" id="about">
      <div className="mx-auto flex max-w-7xl flex-col items-center">

        {/* Call to Action */}
        <h2 className="mb-10 text-center text-5xl font-black uppercase leading-none md:text-8xl">
          {CONTENT.footer.cta.title1} <br /> <span className="text-neo-green">{CONTENT.footer.cta.title2}</span>
        </h2>

        <Button variant="secondary" className="mb-16 h-20 w-full max-w-md gap-3 text-2xl font-black tracking-wider">
          {CONTENT.footer.cta.buttonLabel} <span className="material-symbols-outlined text-3xl font-black">chat_bubble</span>
        </Button>

        {/* Info Grid */}
        <div className="grid w-full grid-cols-1 gap-10 border-t border-gray-800 pt-10 md:grid-cols-3">

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase text-neo-green">Contact</h3>
            <a href={`mailto:${BRANDING.email}`} className="text-2xl font-black decoration-4 hover:text-neo-yellow hover:underline">
              {BRANDING.email}
            </a>
            <p className="font-mono text-gray-400">{BRANDING.phone}</p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold uppercase text-neo-green">Socials</h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(BRANDING.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  className="rounded-full border border-white px-4 py-2 font-bold uppercase transition-colors hover:bg-white hover:text-black"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="text-xl font-bold uppercase text-neo-green">Location</h3>
            <p className="text-xl font-bold uppercase md:text-right whitespace-pre-line">
              {BRANDING.address}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 w-full border-t border-gray-800 pt-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {CONTENT.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;