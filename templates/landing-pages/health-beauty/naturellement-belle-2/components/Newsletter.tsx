
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto bg-terracotta/10 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden border border-terracotta/5">
        {/* Decorative elements */}
        <span className="material-symbols-outlined absolute -top-8 -left-8 text-[12rem] text-terracotta/5 rotate-12 pointer-events-none">potted_plant</span>
        <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[12rem] text-terracotta/5 -rotate-12 pointer-events-none">local_florist</span>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-olive mb-8 tracking-tighter">Join the Greenhouse</h2>
          <p className="text-xl text-olive/70 mb-12 max-w-lg mx-auto leading-relaxed">
            Receive organic skincare tips, artisanal stories, and exclusive early access to our seasonal harvests.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 rounded-full border-none bg-white px-8 py-5 text-olive focus:ring-4 focus:ring-primary/20 shadow-xl transition-all"
              required
            />
            <button className="bg-olive text-white px-10 py-5 rounded-full font-black text-lg hover:bg-terracotta hover:scale-105 transition-all shadow-2xl active:scale-95">
              Subscribe
            </button>
          </form>
          
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-olive/30 text-sm">lock</span>
            <p className="text-xs text-olive/40 uppercase tracking-[0.2em] font-black">
              Nature respects privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
