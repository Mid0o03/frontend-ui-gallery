
import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

export const Quote: React.FC = () => {
  return (
    <section className="bg-soft-beige py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-8">
          <QuoteIcon size={24} fill="currentColor" />
        </div>
        <h2 className="mx-auto max-w-[850px] text-3xl font-medium italic leading-snug text-text-dark md:text-4xl">
          "The professional support I received transformed my outlook on life and work. The environment is truly serene and welcoming."
        </h2>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-text-muted">
          — Sarah J., Private Client
        </p>
      </div>
    </section>
  );
};
