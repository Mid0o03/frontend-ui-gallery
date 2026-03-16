
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="px-6 py-32 lg:px-20">
      <div className="max-w-5xl mx-auto relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="glass-effect p-16 md:p-24 rounded-[3rem] text-center border-white/40 shadow-2xl relative overflow-hidden">
          {/* Animated bg elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            Ready to see through <br className="hidden md:block"/> the noise?
          </h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join over 500+ modern brands that use our glass-morphism philosophy to stand out in a crowded digital space. Your future starts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all">
              Claim Your Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
