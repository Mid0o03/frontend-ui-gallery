import React from 'react';
import { BRANDING } from '../config/branding';
import { CONTENT } from '../config/content';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-green-700 dark:text-primary">spa</span>
              <h4 className="font-bold text-lg">{BRANDING.name}</h4>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {CONTENT.footer.about}
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-wide">Shop</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Cleansers</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Serums</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Sets</a></li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-wide">About</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-green-700 dark:hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-wide">Social</h5>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="size-10 rounded-full bg-gray-100 dark:bg-surface-dark flex items-center justify-center hover:bg-green-100 dark:hover:bg-primary/20 transition-colors text-gray-600 dark:text-white"
                >
                  <span className="text-sm font-bold">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>{CONTENT.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;