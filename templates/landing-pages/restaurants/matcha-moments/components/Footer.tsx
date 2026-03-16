import React from 'react';
import { Link } from 'react-router-dom';
import { branding } from '../config/branding';
import { content } from '../config/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div>
              <h4 className="font-bold text-lg text-slate-900">{content.newsletter.title}</h4>
              <p className="text-sm mt-2 text-slate-600 max-w-sm">{content.newsletter.description}</p>
            </div>
            <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-grow rounded-lg border-black/10 bg-white px-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder={content.newsletter.placeholder}
                type="email"
              />
              <button className="flex-shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors">
                {content.newsletter.buttonText}
              </button>
            </form>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg text-slate-900 mb-4">{content.footer.quickLinksTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg text-slate-900 mb-4">{content.footer.followUsTitle}</h4>
            <div className="flex gap-4">
              <a href={branding.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a href={branding.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a href={branding.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 text-center text-sm text-slate-500">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};