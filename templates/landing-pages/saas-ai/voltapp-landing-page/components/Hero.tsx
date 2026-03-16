
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background-dark flex items-center pt-20 hero-skew overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit animate-pulse-slow">
            <span className="material-symbols-outlined text-primary text-sm">speed</span>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Version 2.0 Now Live</span>
          </div>
          
          <h1 className="text-white text-6xl md:text-8xl font-black italic leading-[0.9] tracking-tighter">
            MOVE AT THE <span className="text-primary text-glow">SPEED</span> OF LIGHT
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed">
            Experience the world's fastest mobile interface with zero latency, aggressive reliability, and high-octane performance for elite performers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 bg-primary text-black px-8 py-4 rounded font-black text-lg hover:bg-white transition-all group">
              DOWNLOAD NOW
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded font-black text-lg hover:bg-white/10 transition-all">
              WATCH DEMO
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-4">
            <div>
              <p className="text-primary text-3xl font-black italic tracking-tighter">2.4M+</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Active Users</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-primary text-3xl font-black italic tracking-tighter">0.001s</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Latency</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group perspective-1000">
             <div className="mockup-float relative w-[300px] h-[600px] bg-carbon rounded-[3rem] border-8 border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-y-12">
              <img 
                alt="Mobile app UI showing energy statistics" 
                className="w-full h-full object-cover opacity-80" 
                src="https://picsum.photos/600/1200?random=1" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-6 right-6 flex flex-col gap-4">
                <div className="h-12 w-full bg-primary rounded-lg flex items-center justify-center font-bold text-black cursor-pointer active:scale-95 transition-transform">POWER ON</div>
                <div className="flex gap-2">
                  <div className="h-12 flex-1 bg-white/10 rounded-lg backdrop-blur-md"></div>
                  <div className="h-12 flex-1 bg-white/10 rounded-lg backdrop-blur-md"></div>
                </div>
              </div>
            </div>
            {/* Secondary Mockup Shadow/Ghost */}
            <div className="absolute -bottom-10 -left-10 hidden md:block opacity-50 scale-75 -z-10 blur-sm">
              <div className="w-[300px] h-[600px] bg-carbon rounded-[3rem] border-8 border-white/10 overflow-hidden">
                <img 
                  alt="Mobile app analytics screen" 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/600/1200?random=2" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
