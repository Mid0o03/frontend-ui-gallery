import React from 'react';
import { content } from '../config/content';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-left max-w-2xl">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-heading sm:text-5xl lg:text-6xl">
              {content.hero.title} <span className="text-primary">{content.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-slate-text leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={content.hero.primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-blue-700 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {content.hero.primaryCta}
              </a>
              <a
                href={content.hero.secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-base font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50"></div>
            <div
              className="absolute inset-4 rounded-xl overflow-hidden shadow-inner bg-white bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${content.hero.image}')` }}
              role="img"
              aria-label={content.hero.imageAlt}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;