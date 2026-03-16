
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-20 pb-32 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="z-10 text-center max-w-4xl flex flex-col items-center gap-6">
        <div className="inline-block border border-primary/50 bg-primary/5 px-3 py-1 text-[10px] tracking-[0.4em] text-primary uppercase mb-4 animate-pulse">
          Phase 01: Molecular Reconstruction
        </div>
        
        <h1 className="text-white text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase">
          Precision <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Bio-Synthesis</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl mt-4 uppercase tracking-wider">
          Engineered for elite athletic recovery through hyper-solubility and sub-micron particle filtration. Zero residue. Maximum nitrogen retention.
        </p>

        {/* Product Card */}
        <div className="mt-12 relative group perspective-1000">
          <div className="absolute -inset-10 bg-primary/10 blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative w-72 h-[450px] bg-surface-dark border border-white/10 rounded-lg flex flex-col items-center justify-center shadow-2xl overflow-hidden transition-transform duration-500 hover:rotate-y-12">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent"></div>
            
            <div className="flex flex-col items-center gap-6 z-10">
              <span className="material-symbols-outlined text-8xl text-primary drop-shadow-[0_0_15px_rgba(13,89,242,0.8)]">database</span>
              <div className="text-center font-bold tracking-tighter">
                <div className="text-white text-2xl uppercase">PROTEIN</div>
                <div className="text-primary text-4xl">ALPHA-9</div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
              <div className="text-[8px] text-white/40 font-mono tracking-tighter uppercase leading-tight text-left">
                NET WT 2.0 LBS (907G)<br/>
                SERVING SIZE: 30G
              </div>
              <div className="text-primary text-xs font-mono uppercase font-bold">25G Protein</div>
            </div>
            
            {/* Scanning line animation */}
            <div className="absolute w-full h-[1px] bg-primary/40 top-0 left-0 animate-[scan_3s_ease-in-out_infinite] shadow-[0_0_10px_#0d59f2]"></div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center bg-primary px-8 py-4 text-white text-sm font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all glow-hover border border-primary">
            Initialize Order
          </button>
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
            View Lab Results
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};
