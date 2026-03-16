import React from 'react';
import { content } from '../config/content';

export const Philosophy: React.FC = () => {
  return (
    <section id="services" className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-20 md:py-32 bg-background-light">
      {/* Editorial Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* Left Column: Typography & Content */}
        <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-32">
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-charcoal"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal/60">{content.philosophy.label}</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-charcoal">
            {content.philosophy.title} <br />
            <span className="italic font-normal font-serif">{content.philosophy.titleItalic}</span>
          </h2>

          {/* Body Text */}
          <div className="flex flex-col gap-6 max-w-md">
            <p className="text-lg leading-relaxed text-charcoal/80 font-light">
              {content.philosophy.description1}
            </p>
            <p className="text-base leading-relaxed text-charcoal/60">
              {content.philosophy.description2}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider hover:gap-5 transition-all">
              <span className="bg-primary h-12 px-6 rounded-full flex items-center justify-center text-charcoal shadow-sm group-hover:shadow-md transition-shadow">
                {content.philosophy.cta}
              </span>
              <span className="material-symbols-outlined text-lg group-hover:text-primary transition-colors">arrow_forward</span>
            </button>
          </div>

          {/* Secondary Detail Image */}
          <div className="mt-12 hidden lg:block relative group overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
            <div
              className="w-full aspect-[4/3] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
              style={{ backgroundImage: `url('${content.philosophy.images.secondary}')` }}
            >
            </div>
            <div className="absolute bottom-4 left-4 z-20 bg-white/90 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-md rounded-sm">
              Materiality
            </div>
          </div>
        </div>

        {/* Right Column: Visuals & Pull Quote */}
        <div className="lg:col-span-7 flex flex-col gap-16 pt-10 lg:pt-0">

          {/* Large Hero Image */}
          <div className="w-full aspect-[3/4] md:aspect-[4/5] relative overflow-hidden rounded-sm group">
            <div
              className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[1.5s]"
              style={{ backgroundImage: `url('${content.philosophy.images.main}')` }}
            >
            </div>
          </div>

          {/* Pull Quote Section */}
          <div className="relative py-12 border-y border-charcoal/10">
            <span className="absolute -top-6 left-0 text-9xl text-charcoal/5 font-serif leading-none select-none">"</span>
            <blockquote className="text-3xl md:text-4xl font-light leading-snug text-center px-4 md:px-12">
              "{content.philosophy.quote}"
            </blockquote>
            <div className="flex justify-center mt-8">
              <span className="material-symbols-outlined text-primary text-3xl">temp_preferences_custom</span>
            </div>
          </div>

          {/* Grid of Smaller Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 group">
              <div
                className="w-full aspect-square bg-cover bg-center rounded-sm overflow-hidden"
                style={{ backgroundImage: `url('${content.philosophy.images.grid1}')` }}
              >
                <div className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <span className="text-xs uppercase tracking-widest text-right border-t border-charcoal/20 pt-2">Light</span>
            </div>

            <div className="flex flex-col gap-4 md:mt-16 group">
              <div
                className="w-full aspect-[3/4] bg-cover bg-center rounded-sm overflow-hidden"
                style={{ backgroundImage: `url('${content.philosophy.images.grid2}')` }}
              >
                <div className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <span className="text-xs uppercase tracking-widest text-left border-t border-charcoal/20 pt-2">Form</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};