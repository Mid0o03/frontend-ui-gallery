
import React from 'react';

const Editorial: React.FC = () => {
  return (
    <section id="story" className="py-32 px-8 bg-white border-y border-sage-soft">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <div className="flex-1 order-2 md:order-1">
          <span className="text-[10px] font-bold uppercase wide-tracking text-primary mb-6 block">Our Philosophy</span>
          <h2 className="font-serif text-5xl md:text-6xl italic mb-10 leading-tight">Grounded in nature, crafted with care.</h2>
          <p className="text-lg font-light leading-relaxed text-black/70 mb-12">
            Terra Glow was born from a simple observation: skincare had become too complex. We returned to the roots, using raw, botanical extracts and sustainable glass packaging to create a ritual that honors both your skin and the Earth.
          </p>
          <a href="#" className="inline-flex items-center gap-4 group">
            <span className="text-sm font-bold uppercase wide-tracking border-b border-primary pb-1">Read Our Story</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
          </a>
        </div>
        <div className="flex-1 order-1 md:order-2 w-full">
          <div className="aspect-square rounded-2xl overflow-hidden soft-shadow relative group">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKmM7M3CSvR3XM4NwKWvFsaMvOWcFM50CFhuTJdtivoeFFh8d-CIV3RmPM8tf12m6qrCzJgf2c2K6uMzvx2HzyDtvHNa5XhVjfWPu7d8Ey9--GLQyPwvrf-RfqPEow3Q6-5wudFfMrK3hmSCpLQc61Fxx_VlgHjOVFqiNpx3vCk93QIUXH1JJsfDAOSMWVUZ-Z50yhMCvrBBkop0KMLAFT5zmvrzcmqu4metfMt-q2UvUfYXiI_Vi24a7pW8zphgIrRdqD0wjBtCo')` }}
            />
            <div className="absolute inset-0 border-[24px] border-white/10 group-hover:border-white/0 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
