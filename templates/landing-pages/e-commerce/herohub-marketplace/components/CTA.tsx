
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="relative bg-gradient-to-r from-primary to-[#f88f6c] rounded-[3.5rem] p-12 md:p-24 overflow-hidden text-center shadow-[0_35px_60px_-15px_rgba(245,110,61,0.3)]">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to start your <span className="underline decoration-white/30 underline-offset-8">Hero journey?</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            Whether you're looking to buy unique gear or sell your own creations, there's a place for you in our global maker community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-background-dark text-white font-black px-12 py-6 rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-primary/20">
              Open Shop for Free
            </button>
            <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 font-black px-12 py-6 rounded-full hover:bg-white/30 transition-all hover:scale-105 active:scale-95">
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
