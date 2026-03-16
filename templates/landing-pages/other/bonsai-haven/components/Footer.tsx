
import React from 'react';
import { TreePine, ArrowRight, Instagram, Twitter, Youtube } from 'lucide-react';
import { branding } from '../src/config/branding';
import { content } from '../src/config/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-moss text-white/60 py-20 px-6 md:px-10 border-t border-white/10 dark:bg-black/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-white">
            <TreePine size={32} className="text-primary" />
            <h2 className="text-2xl font-bold font-serif italic">{branding.siteName}</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            {content.footer.description}
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-primary hover:text-background-dark transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-primary hover:text-background-dark transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-primary hover:text-background-dark transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a className="hover:text-primary transition-colors inline-flex items-center gap-2 group" href="#">Shop All <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
            <li><a className="hover:text-primary transition-colors inline-flex items-center gap-2 group" href="#">Care Library <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
            <li><a className="hover:text-primary transition-colors inline-flex items-center gap-2 group" href="#">Workshops <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
            <li><a className="hover:text-primary transition-colors inline-flex items-center gap-2 group" href="#">About Us <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Support</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a className="hover:text-primary transition-colors" href="#">Shipping Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Plant Guarantee</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Newsletter</h4>
          <p className="text-sm mb-6 leading-relaxed">Join our community for seasonal care tips and exclusive early access to rare trees.</p>
          <div className="flex border-b border-white/20 pb-2 focus-within:border-primary transition-all group">
            <input
              className="bg-transparent border-none focus:ring-0 text-sm flex-1 placeholder:text-white/30 text-white"
              placeholder="Email address"
              type="email"
            />
            <button className="text-primary hover:translate-x-1 transition-transform p-1">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
        <p className="text-white/30 italic">{content.footer.copyright}</p>
        <div className="flex gap-10">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-white transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
