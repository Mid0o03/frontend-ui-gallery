
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-background-dark border-t border-primary/10 overflow-hidden relative">
      <div className="absolute -left-20 top-0 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[300px] text-primary">factory</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="material-symbols-outlined text-primary text-6xl mb-8">mail</span>
        <h2 className="text-white text-5xl font-black stamped-text mb-6 italic">Join the Union</h2>
        <p className="text-gray-400 mb-12 text-xl italic font-medium max-w-2xl mx-auto leading-relaxed">
          Subscribe to the <span className="text-primary border-b border-primary/30">Roastery Telegraph</span> for weekly dispatches, 
          brewing secrets, and exclusive artisanal blends.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto group">
          <input 
            className="flex-1 bg-coffee-black border-2 border-primary/30 text-primary placeholder:text-primary/30 rounded-lg focus:border-primary focus:ring-0 px-8 py-5 uppercase font-bold text-sm tracking-widest transition-all focus:bg-primary/5" 
            placeholder="YOUR TELEGRAM ADDRESS" 
            type="email"
            required
          />
          <button className="bg-primary hover:bg-brick-red text-white font-black px-12 py-5 rounded-lg uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-primary/20 transform hover:scale-105 active:scale-95">
            SIGN UP
          </button>
        </form>
        <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">Privacy ensured by order of the board.</p>
      </div>
    </section>
  );
};

export default Newsletter;
