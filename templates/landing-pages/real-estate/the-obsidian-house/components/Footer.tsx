
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="spaces" className="bg-background-dark pt-32 pb-12 px-8 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-32">
        <div className="md:col-span-2">
          <h5 className="text-[10px] uppercase tracking-[0.6em] text-primary mb-10 font-bold">Inquiries</h5>
          <p className="text-4xl md:text-5xl font-extralight leading-[1.1] tracking-tight text-white/90">
            Crafting spaces that resonate with the soul. Contact our concierge for a private tour.
          </p>
          <div className="mt-12 flex gap-4">
             <div className="h-px w-12 bg-primary mt-3"></div>
             <p className="text-xs uppercase tracking-[0.2em] text-white/40 max-w-xs">
               Based in Reykjavík, operating globally for selected private clients.
             </p>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.6em] text-white/30 mb-10 font-bold">The Archive</h5>
          <ul className="space-y-6 text-xs font-light tracking-[0.1em]">
            <li><a className="hover:text-primary transition-colors block" href="#">Digital Lookbook 2024</a></li>
            <li><a className="hover:text-primary transition-colors block" href="#">Architectural Masterplan</a></li>
            <li><a className="hover:text-primary transition-colors block" href="#">Material Index & Origins</a></li>
            <li><a className="hover:text-primary transition-colors block" href="#">Technical Specifications</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.6em] text-white/30 mb-10 font-bold">Ecosystem</h5>
          <ul className="space-y-6 text-xs font-light tracking-[0.1em]">
            <li><a className="hover:text-primary transition-colors block" href="#">Instagram / Journal</a></li>
            <li><a className="hover:text-primary transition-colors block" href="#">Vimeo / Shorts</a></li>
            <li><a className="hover:text-primary transition-colors block" href="#">Obsidian Atelier</a></li>
            <li><a className="hover:text-primary transition-colors block" href="#">Concierge Portal</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-white/20 gap-8">
        <p>© 2024 The Obsidian House. All rights reserved.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
