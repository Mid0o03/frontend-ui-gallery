
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-terracotta/10 pt-24 pb-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-terracotta text-4xl">eco</span>
            <span className="text-2xl font-black tracking-tighter text-olive uppercase">Naturellement Belle</span>
          </div>
          <p className="text-olive/60 text-lg leading-relaxed font-medium">
            Small batch skincare crafted with seasonal botanical ingredients, harvested by hand.
          </p>
          <div className="flex gap-4">
            {['camera', 'alternate_email', 'share'].map((icon) => (
              <a key={icon} href="#" className="size-12 rounded-full bg-olive text-white flex items-center justify-center hover:bg-primary hover:text-olive transition-all duration-300 shadow-lg">
                <span className="material-symbols-outlined text-2xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-sm mb-8 uppercase tracking-[0.3em] text-terracotta">Shop</h4>
          <ul className="space-y-5 text-olive/70 font-bold">
            {['Best Sellers', 'Face Care', 'Body Rituals', 'Seasonal Kits'].map((link) => (
              <li key={link}><a href="#" className="hover:text-terracotta transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-sm mb-8 uppercase tracking-[0.3em] text-terracotta">About</h4>
          <ul className="space-y-5 text-olive/70 font-bold">
            {['Our Gardens', 'Philosophy', 'Sustainability', 'Artisans'].map((link) => (
              <li key={link}><a href="#" className="hover:text-terracotta transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-sm mb-8 uppercase tracking-[0.3em] text-terracotta">Support</h4>
          <ul className="space-y-5 text-olive/70 font-bold">
            {['Shipping & Returns', 'Contact Us', 'FAQ', 'Stockists'].map((link) => (
              <li key={link}><a href="#" className="hover:text-terracotta transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-olive/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-olive/40 font-black uppercase tracking-[0.4em]">
        <p>© {currentYear} Naturellement Belle. Handcrafted with Care.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-olive transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-olive transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
