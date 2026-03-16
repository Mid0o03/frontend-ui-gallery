import React from 'react';
import { content } from '../config/content';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-110 hover:scale-100"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 hero-gradient-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-10">
        <div className="space-y-4">
          <p className="text-primary font-display uppercase tracking-[0.5em] text-xs md:text-sm animate-[fadeInDown_1s_ease-out]">
            {content.hero.badge}
          </p>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-bold leading-tight md:leading-[1.1] animate-[fadeInUp_1s_ease-out]">
            {content.hero.title.split('.').map((part, i, arr) => (
              <span key={i}>
                {part}{i < arr.length - 1 ? '.' : ''}
                {i === 0 && <br className="hidden md:block" />}
              </span>
            ))}
          </h1>
        </div>

        <p className="text-white/70 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto animate-[fadeIn_1.5s_ease-out]">
          {content.hero.description}
        </p>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6 animate-[fadeInUp_2s_ease-out]">
          <button className="w-full md:w-auto bg-transparent border border-primary text-primary hover:bg-primary hover:text-background-dark font-display font-bold text-xs uppercase tracking-widest px-12 py-5 rounded-lg transition-all duration-500 shadow-lg hover:shadow-primary/20">
            {content.hero.ctaPrimary}
          </button>
          <button className="w-full md:w-auto bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-display font-bold text-xs uppercase tracking-widest px-12 py-5 rounded-lg transition-all duration-500">
            {content.hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em]">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Hero;
