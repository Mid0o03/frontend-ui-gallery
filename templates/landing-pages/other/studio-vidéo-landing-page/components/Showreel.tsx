
import React from 'react';

const Showreel: React.FC = () => {
  return (
    <section id="showreel" className="py-24 md:py-32 px-6 lg:px-20 bg-background-dark border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Notre Showreel 2024</h2>
          <div className="flex items-center gap-2 text-primary group cursor-pointer">
            <span className="text-sm font-bold uppercase tracking-widest group-hover:underline transition-all">Watch full screen</span>
            <span className="material-symbols-outlined">fullscreen</span>
          </div>
        </div>

        <div className="relative group">
          {/* Subtle glowing halo */}
          <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/40 transition duration-1000"></div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden neon-glow bg-black border border-white/10 group">
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button className="size-20 md:size-28 rounded-full bg-primary flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(56,249,26,0.5)]">
                <span className="material-symbols-outlined text-4xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </button>
            </div>

            {/* Background Image / Still Frame */}
            <img 
              className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUqCB4pslrXhYOx4sxJ1BQsTu7AjlXm5wogciodTHUw4fpuYayNzBaEmFfJKwetEs-WwNtZnPpcCY8qerY4wUIu6tzpASDkZzzlqRF9lpmARLE_XeKUsCTxrzqhnUA6mX9SXDe7jkhOM0L-EEGLhUefbpAiiNo_537ooxbohYja9sUU3rG58qTnGCSLBlsRwwz__xRuujdom1S5h9xs3AxCFPk0Z3Bjb0kHWC1XKah38z-NO0EoVTiZM4PFznkItEZe5xKKa8M_Yes" 
              alt="Futuristic still frame"
            />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 bg-gradient-to-t from-black via-black/40 to-transparent">
              <div className="flex items-center gap-4">
                <span className="text-[10px] md:text-xs font-bold font-mono text-white/80">00:37</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden relative cursor-pointer">
                  <div className="absolute left-0 top-0 w-1/3 h-full bg-primary shadow-[0_0_10px_rgba(56,249,26,0.8)]"></div>
                </div>
                <span className="text-[10px] md:text-xs font-bold font-mono text-white/80">02:23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
