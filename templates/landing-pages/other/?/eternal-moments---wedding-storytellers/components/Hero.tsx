
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-16 text-center">
      <span className="font-script text-primary text-5xl block mb-2">Testimonials</span>
      <h1 className="text-[#1b0d10] text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto italic">
        Love Stories & Kind Words
      </h1>
      <div className="mt-6 flex justify-center items-center gap-4">
        <div className="h-px w-12 bg-primary/30"></div>
        <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Real Celebrations</span>
        <div className="h-px w-12 bg-primary/30"></div>
      </div>
    </section>
  );
};
