import React from 'react';
import { content } from '../config/content';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative w-full bg-background-light border-t border-[#e6e6dc] pt-20 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">

        {/* Left Column: Branding & Info */}
        <div className="flex-1 flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="pb-8">
              <span className="inline-block text-primary mb-6">
                <span className="material-symbols-outlined text-5xl">all_inclusive</span>
              </span>
              <h2 className="text-charcoal tracking-tighter text-[48px] md:text-[80px] font-bold leading-[0.95] text-left">
                {content.contact.title} <br />
                {content.contact.titleItalic}
              </h2>
              <p className="mt-8 text-lg text-charcoal/70 font-light leading-relaxed max-w-md">
                {content.contact.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 mt-auto pt-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-charcoal text-sm font-bold uppercase tracking-widest mb-1">Studio</h3>
              {content.contactInfo.address.map((line, i) => (
                <p key={i} className="text-charcoal/60">{line}</p>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-charcoal text-sm font-bold uppercase tracking-widest mb-1">Contact</h3>
              <a href={`mailto:${content.contactInfo.email}`} className="text-charcoal/60 hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4">{content.contactInfo.email}</a>
              <a href={`tel:${content.contactInfo.phone}`} className="text-charcoal/60 hover:text-primary transition-colors">{content.contactInfo.phone}</a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 w-full max-w-xl">
          <form className="flex flex-col gap-6 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-black/5 border border-[#e6e6dc]">
            <div className="flex flex-col gap-2">
              <label className="text-charcoal text-sm font-bold tracking-wide ml-2">{content.contact.form.name}</label>
              <input
                className="w-full rounded-2xl text-charcoal focus:outline-0 focus:ring-2 focus:ring-primary focus:border-transparent border-none bg-sand h-16 placeholder:text-charcoal/40 px-6 text-base font-medium transition-all"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-charcoal text-sm font-bold tracking-wide ml-2">{content.contact.form.email}</label>
              <input
                type="email"
                className="w-full rounded-2xl text-charcoal focus:outline-0 focus:ring-2 focus:ring-primary focus:border-transparent border-none bg-sand h-16 placeholder:text-charcoal/40 px-6 text-base font-medium transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-charcoal text-sm font-bold tracking-wide ml-2">{content.contact.form.details}</label>
              <textarea
                className="w-full rounded-2xl text-charcoal focus:outline-0 focus:ring-2 focus:ring-primary focus:border-transparent border-none bg-sand min-h-48 placeholder:text-charcoal/40 p-6 text-base font-medium transition-all resize-none"
                placeholder="Tell us about your space"
              ></textarea>
            </div>
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                className="group flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-primary hover:bg-[#e6e205] active:scale-95 transition-all duration-200 text-charcoal text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20"
              >
                <span className="truncate mr-2">{content.contact.form.button}</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Row: Copyright & Socials */}
      <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-charcoal/40 text-sm font-medium">{content.contact.copyright}</p>
        <div className="flex gap-6 items-center">
          {content.social.map((social) => (
            <a 
              key={social.label} 
              href={social.url} 
              className="flex items-center justify-center h-10 px-4 rounded-full bg-sand text-charcoal/60 hover:text-charcoal transition-colors text-xs font-bold uppercase tracking-widest"
              title={social.label}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};