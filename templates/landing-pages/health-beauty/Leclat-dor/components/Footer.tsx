import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">

        {/* Brand & Socials */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="text-primary w-6 h-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-white text-xl font-serif font-bold tracking-[0.2em] uppercase">{branding.name}</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed font-light">
            {content.footer.brandDescription.replace('{location}', branding.location.split(',')[0])}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-8">
          <h5 className="text-white font-display text-xs uppercase tracking-[0.3em] font-bold">Navigation</h5>
          <ul className="space-y-5 text-gray-500 text-sm font-light">
            <li><a className="hover:text-primary transition-colors flex items-center gap-2 group" href="#">
              <span className="w-1 h-1 bg-primary/20 group-hover:bg-primary transition-all"></span> Accueil</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2 group" href="#">
              <span className="w-1 h-1 bg-primary/20 group-hover:bg-primary transition-all"></span> Nos Services</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2 group" href="#">
              <span className="w-1 h-1 bg-primary/20 group-hover:bg-primary transition-all"></span> L'Institut</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2 group" href="#">
              <span className="w-1 h-1 bg-primary/20 group-hover:bg-primary transition-all"></span> Mentions Légales</a></li>
          </ul>
        </div>

        {/* Horaires */}
        <div className="space-y-8">
          <h5 className="text-white font-display text-xs uppercase tracking-[0.3em] font-bold">{content.footer.hoursTitle}</h5>
          <ul className="space-y-5 text-gray-500 text-sm font-light">
            {content.footer.hours.map((item, idx) => (
              <li key={idx} className={`flex justify-between ${idx < content.footer.hours.length - 1 ? 'border-b border-white/5 pb-2' : ''}`}>
                <span>{item.day}</span>
                <span className={item.time === 'Fermé' ? 'text-primary uppercase tracking-widest text-[10px]' : 'text-white'}>
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Localisation */}
        <div className="space-y-8">
          <h5 className="text-white font-display text-xs uppercase tracking-[0.3em] font-bold">{content.footer.locationTitle}</h5>
          <p className="text-gray-500 text-sm font-light italic">
            {branding.address.split(',')[0]}<br />
            {branding.address.split(',').slice(1).join(',').trim()}
          </p>
          <div className="rounded-2xl overflow-hidden h-40 w-full grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-700 border border-white/5">
            <img
              alt="Map location"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-10 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">
          {branding.copyright}
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
