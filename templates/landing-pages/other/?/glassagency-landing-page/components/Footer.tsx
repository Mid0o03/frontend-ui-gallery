
import React from 'react';
import { LayoutGrid, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-16 lg:px-20 border-t border-white/20 glass-nav">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <LayoutGrid size={16} />
            </div>
            <span className="font-extrabold text-lg tracking-tight">GlassAgency</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-sm font-bold opacity-60">
            <a href="#" className="hover:opacity-100 hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 hover:text-primary transition-all">Terms of Service</a>
            <a href="#" className="hover:opacity-100 hover:text-primary transition-all">Contact Us</a>
          </div>

          <div className="flex gap-4">
            <a href="mailto:hello@glassagency.com" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all border-white/80 shadow-sm" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://glassagency.com" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all border-white/80 shadow-sm" aria-label="Website">
              <Globe size={18} />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 text-center">
          <p className="text-[10px] uppercase font-black tracking-widest opacity-30">
            © 2024 GlassAgency Design Group. Crafted with precision and clarity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
