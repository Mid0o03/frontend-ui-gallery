
import React from 'react';

const WorkshopBanner: React.FC = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-24">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-moss dark:bg-primary/20 p-12 lg:p-28 text-center shadow-2xl group">
        {/* Abstract overlay pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15] transition-opacity group-hover:opacity-[0.12]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, 
            backgroundSize: '40px 40px' 
          }}
        ></div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-white text-4xl lg:text-6xl font-serif italic leading-tight">
            Join Our <span className="font-bold not-italic">Bonsai Workshop</span>
          </h2>
          <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Learn the secrets of pruning, wiring, and styling from our resident master arborists in an intimate studio setting.
          </p>
          <div className="flex justify-center pt-6">
            <button className="bg-primary text-background-dark px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-moss transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopBanner;
