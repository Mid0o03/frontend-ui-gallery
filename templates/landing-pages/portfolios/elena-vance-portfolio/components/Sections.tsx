import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

// Common wrapper for all sections to ensure snap behavior and sizing
const SectionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  widthClass?: string;
}> = ({ children, className = "", widthClass = "w-[100vw]" }) => (
  <section className={`snap-start shrink-0 h-full flex flex-col justify-center ${widthClass} ${className}`}>
    {children}
  </section>
);

/* 1. Intro Panel */
export const IntroSection: React.FC = () => {
  return (
    <SectionWrapper
      className="px-8 md:px-16 lg:pl-24 lg:pr-12 relative bg-white border-r border-gray-50"
      widthClass="w-[100vw] md:w-[45vw] lg:w-[35vw]"
    >
      <div className="max-w-md flex flex-col gap-8 animate-fade-in">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-text-main">
            {content.intro.title}
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed font-light">
            {content.intro.description}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <button className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase hover:opacity-80 transition-opacity group">
            <span>{content.intro.cta}</span>
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Static Visual Hint inside the section */}
      <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 flex items-center gap-3 opacity-40">
        <span className="material-symbols-outlined text-xl animate-pulse">arrow_right_alt</span>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </SectionWrapper>
  );
};

/* 2. Full Bleed Portrait */
export const FullBleedImageSection: React.FC = () => {
  const { fullBleed } = content.sections;
  return (
    <SectionWrapper widthClass="w-auto" className="px-2 md:px-6">
      <div className="relative h-[85%] md:h-[90%] aspect-[2/3] group overflow-hidden rounded-sm">
        <img
          src={fullBleed.image}
          alt={fullBleed.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-serif text-2xl">{fullBleed.caption}</p>
          <p className="text-white/80 text-sm font-display">{fullBleed.subCaption}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

/* 3. Padded Image with Caption */
export const PaddedImageSection: React.FC = () => {
  const { padded } = content.sections;
  return (
    <SectionWrapper widthClass="min-w-[400px]" className="justify-end pb-20 md:pb-32 px-12 md:px-20">
      <div className="flex flex-col gap-4">
        <div className="h-[50vh] w-auto aspect-[4/5] overflow-hidden rounded-lg shadow-sm">
          <img
            src={padded.image}
            alt={padded.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-text-main font-serif text-xl italic">{padded.title}</p>
          <p className="text-text-muted text-xs uppercase tracking-wider mt-1">{padded.category}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

/* 4. Full Height Strip */
export const StripImageSection: React.FC = () => {
  const { strip } = content.sections;
  return (
    <SectionWrapper widthClass="w-[60vh] relative">
      <div className="w-full h-full relative">
        <img
          src={strip.image}
          alt={strip.alt}
          className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute bottom-10 left-6 mix-blend-difference text-white pointer-events-none">
          <p className="font-serif text-3xl">{strip.title}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

/* 5. Two Stacked Images */
export const DualImageSection: React.FC = () => {
  const { dual } = content.sections;
  return (
    <SectionWrapper widthClass="min-w-[300px]" className="px-12 gap-6">
      <div className="h-[35%] w-64 overflow-hidden rounded-lg self-start">
        <img
          src={dual.image1}
          alt={dual.title}
          className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="h-[35%] w-64 overflow-hidden rounded-lg self-end">
        <img
          src={dual.image2}
          alt={dual.title}
          className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="text-right">
        <p className="text-text-main font-serif text-lg">{dual.title}</p>
        <p className="text-text-muted text-xs">{dual.category}</p>
      </div>
    </SectionWrapper>
  );
};

/* 6. Wide Cinematic Shot */
export const CinematicSection: React.FC = () => {
  const { cinematic } = content.sections;
  return (
    <SectionWrapper widthClass="w-auto" className="px-4 md:px-12">
      <div className="w-[80vw] md:w-[60vw] h-[60%] overflow-hidden rounded-xl shadow-sm relative group">
        <img
          src={cinematic.image}
          alt={cinematic.alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="absolute -bottom-10 right-0 flex items-center gap-3">
          <span className="h-[1px] w-12 bg-primary"></span>
          <p className="text-text-main font-bold text-sm">{cinematic.title}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

/* 7. Collection Grid */
export const GridCollectionSection: React.FC = () => {
  const { lookbook } = content.sections;

  return (
    <SectionWrapper widthClass="w-auto" className="items-center px-12 md:px-24">
      <div className="flex gap-6 items-center h-full">
        <div className="grid grid-cols-2 gap-4 h-[70%] aspect-[4/5]">
          <div className="bg-gray-100 rounded overflow-hidden">
            <img src={lookbook.images[0]} alt="Lookbook 1" className="h-full w-full object-cover" />
          </div>
          <div className="bg-gray-100 rounded overflow-hidden mt-8">
            <img src={lookbook.images[1]} alt="Lookbook 2" className="h-full w-full object-cover" />
          </div>
          <div className="bg-gray-100 rounded overflow-hidden -mt-8">
            <img src={lookbook.images[2]} alt="Lookbook 3" className="h-full w-full object-cover" />
          </div>
          <div className="bg-gray-100 rounded overflow-hidden">
            <img src={lookbook.images[3]} alt="Lookbook 4" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="self-end mb-[25%]">
          <p className="font-serif text-2xl mb-1">{lookbook.title}</p>
          <p className="text-primary font-bold text-sm">{lookbook.year}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

/* 8. Outro / Contact */
export const ContactSection: React.FC = () => {
  const { contact } = content.sections;
  return (
    <SectionWrapper
      widthClass="w-[100vw] md:w-[50vw]"
      className="bg-background-light items-center text-center px-8 relative border-l border-gray-50"
    >
      <div className="max-w-lg flex flex-col gap-6 items-center">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
          <span className="material-symbols-outlined text-3xl">mail</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-text-main">{contact.heading}</h2>
        <p className="text-text-muted text-lg font-light">
          {contact.availability}
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-4 px-8 py-4 bg-primary text-white text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
        >
          {contact.cta}
        </a>
      </div>
      <footer className="absolute bottom-6 w-full text-center">
        <p className="text-text-muted text-xs">© {new Date().getFullYear()}{contact.copyright}</p>
      </footer>
    </SectionWrapper>
  );
};