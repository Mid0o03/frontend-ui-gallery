
import React from 'react';

const Reservations: React.FC = () => {
  return (
    <section id="visit" className="py-24 md:py-48 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary opacity-[0.03] pointer-events-none">
        <span className="material-symbols-outlined text-[400px]">stars</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-light italic mb-10 font-display">Join Us for an Unforgettable Evening</h2>
        <p className="text-charcoal/60 text-lg md:text-xl mb-14 max-w-2xl mx-auto italic font-serif">
          Reservations are released on the first of every month for the following month. We invite you to experience the essence of our craft.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="w-full md:w-auto px-14 py-5 bg-charcoal text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-primary hover:scale-105 transition-all shadow-2xl">
            Check Availability
          </button>
          <button className="w-full md:w-auto px-14 py-5 border border-charcoal/10 text-charcoal font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-charcoal hover:text-white transition-all">
            Private Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
