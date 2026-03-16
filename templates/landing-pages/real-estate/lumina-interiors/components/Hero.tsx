import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col group/design-root overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transform scale-100 group-hover/design-root:scale-105 transition-transform duration-[2000ms]"
          style={{ backgroundImage: `url("${content.hero.backgroundImage}")` }}
          role="img"
          aria-label="Luxurious modern living room interior"
        >
        </div>
      </div>

      {/* Navigation Bar (Absolute on Hero) */}
      <header className="relative z-20 w-full px-6 py-6 md:px-12 lg:px-20 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <div className="size-8 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-4xl">grid_view</span>
          </div>
          <h2 className="text-white text-lg font-bold tracking-widest uppercase">{branding.projectName}</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {content.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/90 text-sm font-medium hover:text-primary transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="md:hidden text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
          <button className="hidden md:flex items-center justify-center size-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-primary hover:text-charcoal hover:border-primary transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
        </div>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="max-w-[1000px] flex flex-col items-center gap-8 animate-fade-in-up">
          <div className="flex flex-col gap-6">
            <p className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              {content.hero.label}
            </p>
            <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-[1] tracking-tight">
              {content.hero.title}<br /> {content.hero.titleItalic}
            </h1>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-[540px] mx-auto mt-2">
              {content.hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a href={content.hero.cta.primary.href} className="group flex h-14 min-w-[180px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 text-charcoal transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,245,6,0.4)]">
              <span className="text-base font-bold tracking-wide">{content.hero.cta.primary.label}</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a href={content.hero.cta.secondary.href} className="group flex h-14 min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 text-white transition-colors duration-300 hover:bg-white hover:text-charcoal">
              <span className="text-base font-medium tracking-wide">{content.hero.cta.secondary.label}</span>
            </a>
          </div>
        </div>
      </main>

      {/* Bottom UI Elements */}
      <div className="relative z-20 w-full px-6 py-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-end md:items-center justify-between gap-6 pointer-events-none">
        {/* Social Links */}
        <div className="hidden md:flex flex-col gap-4 pointer-events-auto">
          {content.social.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="flex items-center justify-center size-10 rounded-full border border-white/20 text-white hover:bg-primary hover:text-charcoal hover:border-primary transition-all duration-300"
            >
              <span className="text-xs font-bold">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a href="#services" className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-white/60 text-[10px] tracking-widest uppercase">Scroll</span>
          <span className="material-symbols-outlined text-white/60">keyboard_arrow_down</span>
        </a>

        {/* Location Info */}
        <div className="flex flex-col items-end text-right text-white/80 pointer-events-auto">
          <div className="backdrop-blur-md bg-black/20 p-5 rounded-2xl border border-white/10 hover:bg-black/30 transition-colors cursor-default">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">{content.contactInfo.studioName}</p>
            {content.contactInfo.address.map((line, i) => (
              <p key={i} className="text-sm font-medium leading-snug">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};