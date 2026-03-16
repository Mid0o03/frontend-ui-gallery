
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <div className="inline-flex w-fit items-center rounded-full bg-seafoam-muted px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-muted">
            Professional Consulting
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-text-dark md:text-6xl lg:text-7xl">
              A Space for <span className="text-primary">Clarity</span> and Growth.
            </h1>
            <p className="max-w-[500px] text-lg leading-relaxed text-text-muted">
              Find professional guidance in a calming environment. Tailored therapeutic approaches designed to help you navigate life's complexities with peace.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-text-dark transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20">
              Book Your Session
            </button>
            <button className="flex h-14 items-center justify-center rounded-xl border border-primary/30 bg-white px-8 text-base font-bold text-text-dark transition-all hover:bg-soft-beige">
              Learn More
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-soft-beige shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1598439119086-3565e18c3ee1?q=80&w=1000&auto=format&fit=crop" 
              alt="Cozy sunlit office interior with plants" 
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-light/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
