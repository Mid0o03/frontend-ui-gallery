
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 py-12 md:py-20">
      <div 
        className="mx-auto flex min-h-[500px] max-w-5xl flex-col items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat p-8 text-center shadow-2xl md:p-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAexZAbPz323vf6C0kqvjXjbMPPWWXlYXSdFQB78JB-sGyzTvLwZuMzL3jmUoTgOCqe-M-5iErMhsUBlhl9KM0_YVn85u3-92SP8kqCaH3Ul60cyQgBCsPs1DugwBD9gb4MzVhQQ8x_NTdJY5x6Z_Z80mR7e5FhC2svgiOnaI1iwVkwMQW0jJ7KGpcd1N7yXIrhwAUcgB3u07xlU30_hygsR7XSW77dayTFnEG7FsgwwXH1X_it3EWU4q47-IAezXwhrJQaDWkUvB8N')`
        }}
      >
        <h1 className="font-heading text-5xl font-black uppercase leading-[1] tracking-tight text-white md:text-8xl">
          Brisez les codes.<br />
          <span className="text-primary">Dominez votre marché.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
          Oubliez les solutions génériques. Adoptez une approche conçue pour vous propulser loin devant la concurrence.
        </p>
        <button className="mt-10 rounded-full bg-primary px-10 py-4 text-lg font-black uppercase tracking-widest text-white shadow-[0_0_25px_rgba(248,0,88,0.6)] transition-all hover:scale-105 hover:brightness-110 active:scale-95">
          Révolutionner mes résultats
        </button>
      </div>
    </section>
  );
};

export default Hero;
