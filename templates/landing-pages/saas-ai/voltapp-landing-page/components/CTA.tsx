
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-carbon py-24 relative skew-divider overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffff00 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-white text-5xl md:text-7xl font-black italic tracking-tighter mb-8">
          READY TO BREAK THE <br /> <span className="text-primary">SPEED BARRIER?</span>
        </h2>
        <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
          Join over 2 million high-performers who have upgraded their mobile experience. The future is fast. Don't get left behind.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-primary text-black px-12 py-5 rounded font-black text-xl hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-[0_0_20px_rgba(255,255,0,0.3)]">
            GET THE APP NOW
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded font-black text-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 active:scale-95">
            ENTERPRISE ACCESS
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
