
import React from 'react';
import { content } from '../src/config/content';

const Hero: React.FC = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      <div className="bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-moss/5 dark:border-white/5">
        <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px]">
          {/* Content Column */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-20 gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-primary animate-pulse">{content.hero.est}</span>
              <h1 className="text-moss dark:text-white text-5xl lg:text-7xl font-serif leading-[1.1] font-normal italic">
                {content.hero.title} <br />
                <span className="not-italic font-bold">{content.hero.subtitle}</span>
              </h1>
              <p className="text-moss/70 dark:text-white/70 text-base md:text-lg max-w-md font-display leading-relaxed">
                {content.hero.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-moss text-white dark:bg-primary dark:text-background-dark rounded-full font-bold text-base hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                {content.hero.ctaPrimary}
              </button>
              <button className="px-8 py-4 border border-moss/20 dark:border-white/20 text-moss dark:text-white rounded-full font-bold text-base hover:bg-moss/5 dark:hover:bg-white/5 transition-all active:scale-95">
                {content.hero.ctaSecondary}
              </button>
            </div>
          </div>
          {/* Image Column */}
          <div className="flex-1 relative min-h-[350px] md:min-h-[400px] order-1 lg:order-2 bg-[#fdfdfd] dark:bg-transparent group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-95 dark:opacity-100 transition-transform duration-[2000ms] group-hover:scale-105"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxcpGvP-yNMQwk5dpqml4l5BhS8Y756nc16uWTCd3wYyyYD_BGpbgP5TQ_eCrn6kqLD4WVaE6YY0VBznsubGBTDnOorGCloOF7JBtlTqyKodzAhjU9qTrq95IARRImaPlT6SQzpkz9tJfghFegiBNcFBr-OHvVIW4c4FIMM8NzdMA_LFq9-hrE9-5EeEOl3gNI8MR9Nuugs05cKw28blN5A-y-zxpXJgCHZ2AWwoiUtHyhCYdqgkClDkztatIcGjQUkHCsU-Qif4I")`
              }}
              role="img"
              aria-label="Ancient Juniper bonsai tree"
            />
            {/* Soft overlay for texture */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
