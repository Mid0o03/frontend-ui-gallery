import React from 'react';
import { content } from '../config/content';

/**
 * Navbar Component
 * Displays the navigation links and CTA button.
 * 
 * Content is managed in `src/config/content.ts` under the `navbar` key.
 * To change links or labels, update the configuration file.
 */
const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="clay-card bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-2 py-2 rounded-full shadow-clay dark:shadow-clay-dark flex items-center gap-1 transition-all duration-300">
        {content.navbar.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-6 py-3 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            {link.label}
          </a>
        ))}
        <a
          href={content.navbar.cta.href}
          className="px-6 py-3 rounded-full bg-primary text-white text-sm font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          {content.navbar.cta.label}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;