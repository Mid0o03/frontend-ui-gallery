
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="relative py-48 overflow-hidden">
      {/* Background Skew */}
      <div className="absolute inset-0 bg-primary skew-bg origin-bottom-right -z-10 translate-y-16 scale-105"></div>
      
      <div className="max-w-7xl mx-auto px-6 skew-content text-center py-16">
        <h2 className="text-carbon text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] mb-10">
          Ready to <br />Accelerate?
        </h2>
        <p className="text-carbon/80 text-2xl font-bold max-w-2xl mx-auto mb-16 leading-relaxed">
          Join the elite circle of users pushing the boundaries of mobile technology. The future waits for no one.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <button className="bg-carbon text-white px-16 py-7 rounded-2xl font-black uppercase text-2xl tracking-widest hover:scale-105 transition-transform shadow-[0_20px_60px_rgba(0,0,0,0.3)] group flex items-center gap-4">
            Get the App Now
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
          </button>
          
          <div className="flex items-center gap-6 mt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  className="w-14 h-14 rounded-full border-4 border-primary ring-2 ring-carbon/10" 
                  src={`https://picsum.photos/seed/${i + 50}/100/100`} 
                  alt="User"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-carbon text-lg font-black uppercase tracking-widest">+12k joined today</p>
              <p className="text-carbon/60 text-xs font-bold uppercase tracking-widest">Growing faster than ever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
