
import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="w-full bg-terminal-bg rounded-lg border border-white/10 shadow-2xl overflow-hidden font-mono text-[13px] md:text-sm">
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 text-center text-[10px] text-white/30 uppercase tracking-[0.2em] select-none">bash — terminal</div>
        <span className="material-symbols-outlined text-white/20 text-xs cursor-pointer">add</span>
      </div>
      <div className="p-6 h-72 md:h-96 overflow-y-auto custom-scrollbar flex flex-col gap-1 terminal-glow">
        <div className="flex gap-2">
          <span className="text-primary">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">git clone https://github.com/project-core/starter.git</span>
        </div>
        <div className="text-white/40">Cloning into 'starter'...</div>
        <div className="text-white/40">remote: Enumerating objects: 452, done.</div>
        <div className="text-white/40">remote: Total 452 (delta 124), reused 382 (delta 85)</div>
        <div className="text-white/40">Receiving objects: 100% (452/452), 2.12 MiB | 1.45 MiB/s, done.</div>
        
        <div className="flex gap-2 mt-3">
          <span className="text-primary">➜</span>
          <span className="text-blue-400">starter</span>
          <span className="text-white">npm install</span>
        </div>
        <div className="text-white/40 flex items-center gap-2">
          <span className="w-4 h-4 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></span>
          <span>added 1422 packages from 842 contributors...</span>
        </div>

        <div className="flex gap-2 mt-3">
          <span className="text-primary">➜</span>
          <span className="text-blue-400">starter</span>
          <span className="text-white">npm run dev</span>
        </div>
        <div className="text-primary/80 mt-2 font-bold leading-tight">
          &gt; starter@2.4.0 dev<br/>
          &gt; next dev
        </div>
        <div className="text-white flex flex-col mt-1">
          <span className="text-white/80">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</span>
          <span className="text-primary">event - compiled successfully in 1240 ms (143 modules)</span>
        </div>
        <div className="flex gap-2 mt-2 items-center">
          <span className="text-primary">➜</span>
          <span className="text-blue-400">starter</span>
          <span className="w-2 h-5 bg-primary animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

const MainHero: React.FC = () => {
  return (
    <section className="flex flex-col p-6 md:p-16 lg:p-24 items-center justify-center relative min-h-full">
      {/* Dynamic Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl w-full z-10 flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 self-center md:self-start mb-2">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">Now in Beta v2.4.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
            Build the future,<br/>
            <span className="text-primary italic">open source first.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            A modern, production-ready framework designed for high-performance development teams. 
            Fully modular, typed, and cloud-native. Experience the speed of next-gen architecture.
          </p>
        </div>

        {/* Terminal Section */}
        <Terminal />

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="group relative px-10 py-5 bg-primary text-black font-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(75,245,41,0.25)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">rocket_launch</span>
            <span className="tracking-tight text-lg">Deploy Now</span>
          </button>
          
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 active:scale-95 transition-all flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl">terminal</span>
            <span className="tracking-tight text-lg">Read the Docs</span>
          </button>
        </div>

        {/* Dynamic Image Section Demo */}
        <div className="mt-12 pt-12 border-t border-white/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-white/10"></div>
            <span className="text-white/30 text-[11px] uppercase tracking-widest font-bold">Trusted by creators</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {[1,2,3,4,5].map(i => (
                <img key={i} src={`https://picsum.photos/seed/project${i}/120/40`} alt="logo placeholder" className="h-8 object-contain" />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
