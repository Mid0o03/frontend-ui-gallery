
import React from 'react';

const clients = [
  'NIKE', 'APPLE', 'REDBULL', 'TESLA', 'SONY', 'BEATS', 'BALENCIAGA', 'NIKE', 'APPLE', 'REDBULL', 'TESLA', 'SONY', 'BEATS', 'BALENCIAGA'
];

const Marquee: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-black overflow-hidden">
      <div className="mb-10 px-6 text-center">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30">ILS NOUS FONT CONFIANCE</h3>
      </div>
      <div className="relative flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-16 md:gap-24 px-10">
          {clients.map((client, idx) => (
            <span 
              key={idx} 
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-white"
            >
              {client}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-16 md:gap-24 px-10">
          {clients.map((client, idx) => (
            <span 
              key={`${idx}-clone`} 
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-white"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
