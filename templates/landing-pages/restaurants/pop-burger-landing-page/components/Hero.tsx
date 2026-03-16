
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 lg:px-20 py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left: Huge Burger Image */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative z-10 p-4">
          <div className="relative bg-black border-8 border-black rounded-[2.5rem] overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.2)]">
            <img 
              src="https://picsum.photos/seed/popburger/800/800" 
              alt="Ultimate Pop Burger" 
              className="w-full h-auto object-cover transform transition-transform group-hover:scale-105 duration-500"
            />
          </div>
          
          {/* Badge: New */}
          <div className="absolute -top-10 -right-4 bg-[#0099FF] text-white p-8 rounded-full border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transform rotate-12 z-20 animate-pulse">
            <span className="text-3xl font-black italic uppercase">NEW!</span>
          </div>
          
          {/* Badge: Price */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-6 z-20">
            <span className="text-2xl font-black text-[#E31B23]">$12.99</span>
          </div>
        </div>
      </div>

      {/* Right: Typography & CTA */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-black text-white bubble-text italic leading-[0.9] uppercase transform -rotate-2">
            BOOM!
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-black leading-none mt-4 uppercase tracking-tighter">
            THE JUICIEST <br/>BITE IN TOWN.
          </h2>
        </div>

        <div className="max-w-[540px] mb-12">
          <div className="bg-[#FFD700]/80 p-6 rounded-3xl border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] backdrop-blur-sm">
            <p className="text-xl md:text-2xl font-bold text-black leading-relaxed">
              Experience the explosion of flavor with our signature 100% beef patties and secret local spices. Bold, loud, and incredibly delicious.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="group relative bg-[#0df259] text-black text-3xl md:text-5xl font-black uppercase py-6 px-16 rounded-full border-4 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] transform -rotate-3 hover:rotate-0 hover:translate-y-2 hover:shadow-none transition-all">
            COMMANDER
            <span className="absolute -top-6 -right-6 bg-red-600 text-white text-base px-3 py-1 rounded-full border-2 border-black rotate-12 group-hover:animate-bounce">
              NOW!
            </span>
          </button>
          
          <div className="flex flex-col items-center gap-1 bg-white p-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-symbols-outlined text-[#E31B23] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-black text-xs uppercase tracking-widest text-black">5.0 REVIEWS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
