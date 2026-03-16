
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 px-6 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 border border-secondary text-secondary text-[10px] font-bold uppercase tracking-[0.25em] mb-8 rounded-full">
          Established 1924
        </span>
        
        <h1 className="text-5xl md:text-7xl font-display italic font-medium text-slate-900 mb-8 leading-[1.1]">
          The Heritage of Sport
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 font-display italic max-w-2xl mx-auto mb-12 leading-relaxed">
          A timeless destination for tennis, golf, and refined leisure. Experience the enduring elegance of tradition in the heart of the countryside.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-[220px] bg-primary text-white py-4 px-8 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-blue-800 transition-all shadow-lg hover:shadow-primary/25">
            Explore the Club
          </button>
          <button className="w-full sm:w-[220px] bg-white border border-slate-200 text-slate-700 py-4 px-8 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-slate-50 transition-all">
            View Amenities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
