
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[4rem] overflow-hidden bg-slate-card border border-white/10 p-12 md:p-32 text-center group">
          {/* Dynamic Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute -top-32 -left-32 size-[30rem] bg-primary blur-[180px] rounded-full group-hover:scale-110 transition-transform duration-[3000ms]"></div>
            <div className="absolute -bottom-32 -right-32 size-[30rem] bg-accent-gold blur-[180px] rounded-full group-hover:scale-110 transition-transform duration-[3000ms]"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
              Ready to Elevate Your <br/>
              <span className="text-slate-500">Financial Standing?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-14 max-w-xl mx-auto font-light leading-relaxed">
              Join the exclusive circle of investors redefining wealth. Get priority access to the platform before the public launch.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="gold-gradient text-black text-xl font-extrabold px-16 py-6 rounded-3xl shadow-[0_20px_50px_rgba(249,212,6,0.2)] hover:scale-105 active:scale-95 transition-all">
                Apply for Access
              </button>
            </div>
          </div>

          <div className="absolute inset-0 border-[1px] border-white/5 rounded-[4rem] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
