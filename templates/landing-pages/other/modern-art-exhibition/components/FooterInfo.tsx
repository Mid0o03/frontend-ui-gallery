import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

export const FooterInfo: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {/* Date Block */}
        <div className="col-span-1 p-8 md:p-12 border-b border-[#234832] md:border-r lg:border-b-0 flex flex-col gap-4 group hover:bg-[#193324] transition-colors cursor-default">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Date</span>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white tracking-tight">{content.footer.date.start}</span>
            <span className="text-3xl font-bold text-[#326747] tracking-tight group-hover:text-primary/50 transition-colors">{content.footer.date.end}</span>
          </div>
        </div>

        {/* Location Block */}
        <div className="col-span-1 p-8 md:p-12 border-b border-[#234832] md:border-r lg:border-b-0 flex flex-col gap-4 group hover:bg-[#193324] transition-colors cursor-default">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Location</span>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white leading-tight">{content.footer.location.name}</span>
            <span className="text-lg font-normal text-neutral-400">{content.footer.location.city}</span>
          </div>
          {/* Map Hint */}
          <div className="w-full h-16 mt-2 rounded bg-[#0a140e] overflow-hidden border border-[#326747] relative grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${content.footer.location.mapImage}')` }}
            ></div>
          </div>
        </div>

        {/* Artist Block */}
        <div className="col-span-1 p-8 md:p-12 border-b border-[#234832] md:border-r lg:border-b-0 flex flex-col gap-4 group hover:bg-[#193324] transition-colors cursor-default">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Artist</span>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white leading-tight">{content.footer.artist.name}</span>
            <span className="text-sm text-neutral-400 mt-2 leading-relaxed">{content.footer.artist.bio}</span>
          </div>
        </div>

        {/* Newsletter Block */}
        <div className="col-span-1 p-8 md:p-12 flex flex-col justify-between gap-6 bg-primary text-swiss-black hover:bg-white transition-colors duration-300">
          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-4xl">mail</span>
            <h4 className="text-2xl font-bold leading-none tracking-tight">{content.footer.newsletter.title}</h4>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium opacity-80">{content.footer.newsletter.description}</p>
            <form className="flex w-full border-b-2 border-swiss-black pb-2 focus-within:border-swiss-black transition-colors" onSubmit={(e) => e.preventDefault()}>
              <input
                className="bg-transparent border-none p-0 placeholder-swiss-black/50 text-swiss-black w-full focus:ring-0 text-sm font-bold outline-none"
                placeholder={content.footer.newsletter.placeholder}
                type="email"
              />
              <button type="submit" className="font-bold text-sm uppercase hover:opacity-70">{content.footer.newsletter.button}</button>
            </form>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="w-full swiss-border-t p-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#326747] uppercase tracking-widest">
        <span>© 2024 {branding.name}</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">{content.footer.legal.privacy}</a>
          <a href="#" className="hover:text-primary transition-colors">{content.footer.legal.imprint}</a>
          <a href={`mailto:${branding.email}`} className="hover:text-primary transition-colors">{content.footer.legal.contact}</a>
        </div>
      </div>
    </footer>
  );
};