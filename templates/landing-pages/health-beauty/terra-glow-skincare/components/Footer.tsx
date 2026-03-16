
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-soft/30 border-t border-sage-soft py-24 px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="space-y-8">
          <a href="#" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">eco</span>
            <h2 className="text-lg font-bold tracking-tight uppercase wide-tracking">Terra Glow</h2>
          </a>
          <p className="text-[10px] font-medium leading-relaxed text-black/40 uppercase wide-tracking">
            © 2024 Terra Glow Skincare.<br />
            Crafted with light in Portland, Oregon.<br />
            Sustainable. Ethical. Botanical.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase wide-tracking mb-8 text-primary">Shop</h4>
          <ul className="flex flex-col gap-4 text-xs font-medium text-black/60 uppercase tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Face Care</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Body Rituals</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Curated Sets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase wide-tracking mb-8 text-primary">Support</h4>
          <ul className="flex flex-col gap-4 text-xs font-medium text-black/60 uppercase tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ingredient Glossary</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase wide-tracking mb-8 text-primary">Connect</h4>
          <ul className="flex flex-col gap-4 text-xs font-medium text-black/60 uppercase tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
