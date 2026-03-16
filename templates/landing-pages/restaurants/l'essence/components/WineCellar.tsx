
import React from 'react';

const WineCellar: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop")' 
        }}
      ></div>
      
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <div className="bg-white/5 backdrop-blur-2xl p-12 md:p-24 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-white text-4xl md:text-6xl font-light italic mb-10 font-display">The Wine Cellar</h2>
          <p className="text-white/80 text-xl mb-12 leading-relaxed italic font-serif">
            "A collection of 2,000 labels curated to tell the story of the vine, from ancient European slopes to the emerging avant-garde."
          </p>
          <button className="px-12 py-4 bg-white text-charcoal font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary hover:text-white transition-all rounded-full shadow-lg">
            Explore the List
          </button>
        </div>
      </div>
    </section>
  );
};

export default WineCellar;
