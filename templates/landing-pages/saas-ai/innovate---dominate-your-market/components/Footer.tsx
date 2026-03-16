
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" />
            </svg>
          </div>
          <span className="font-black text-white">INNOVATE</span>
        </div>
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} INNOVATE. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Politique de confidentialité</a>
          <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
