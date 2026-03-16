
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="mx-6 md:mx-20 lg:mx-40 mb-24 rounded-xl bg-old-rose p-12 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg className="fill-primary" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="40"></circle>
        </svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 italic">Ready to tell your story?</h2>
        <p className="text-base mb-8 max-w-lg mx-auto opacity-80">
          Let’s create something timeless together. We are currently booking for the 2025-2026 wedding season.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
            Inquire Now
          </button>
          <button className="border border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all active:scale-95">
            View Portfolio
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
        <svg className="fill-primary" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="40"></circle>
        </svg>
      </div>
    </section>
  );
};
