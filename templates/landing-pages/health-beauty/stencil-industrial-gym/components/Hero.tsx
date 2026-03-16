
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background-dark">
      {/* Giant Stencil Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] font-black stencil-text opacity-10 tracking-tighter leading-none select-none">STENCIL</span>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
            <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
            Peak Performance Only
          </div>
          <h1 className="text-6xl md:text-[7.5rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
            Forge Your <br/>
            <span className="text-primary italic">Limits.</span><br/>
            No Mercy.
          </h1>
          <p className="text-lg text-white/60 max-w-md mb-10 border-l-2 border-primary pl-8 py-2 leading-relaxed">
            Experience high-intensity training in a raw, industrial environment. We don't do comfort zones. Only results.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary hover:bg-white hover:text-black transition-all px-12 py-5 text-sm font-black uppercase tracking-widest flex items-center gap-3 active:scale-95 shadow-[0_10px_30px_rgba(242,13,13,0.3)]">
              Claim Your Trial <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="border border-white/20 hover:border-primary hover:bg-white/5 px-12 py-5 text-sm font-black uppercase tracking-widest transition-all active:scale-95">
              View Schedule
            </button>
          </div>
        </div>

        <div className="md:col-span-5 relative group">
          <div className="aspect-[4/5] bg-concrete relative overflow-hidden grayscale contrast-125 border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
            <img 
              alt="Industrial Athlete" 
              className="w-full h-full object-cover opacity-90 scale-105 group-hover:scale-100 transition-transform duration-1000" 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-10 -left-10 bg-primary p-10 hidden lg:block shadow-2xl skew-x-[-12deg] hover:skew-x-0 transition-transform duration-500 cursor-default">
            <div className="skew-x-[12deg] group-hover:skew-x-0 transition-transform duration-500">
               <span className="text-4xl font-black italic block leading-none">EST. 2014</span>
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Iron District</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
