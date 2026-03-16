
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center overflow-hidden bg-background-dark">
      {/* Left Content: Vertical Text & Branding */}
      <div className="w-full lg:w-1/3 flex flex-row lg:flex-col justify-center items-center py-16 lg:py-0 gap-12 px-6">
        <div className="writing-vertical font-serif-jp text-5xl lg:text-7xl font-black tracking-tighter text-white/90 leading-none">
          静寂の味 <span className="text-primary italic">.</span>
        </div>
        
        <div className="max-w-[240px] text-center lg:text-right flex flex-col gap-6">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary font-bold">Le Goût du Silence</p>
          <p className="text-sm font-light leading-relaxed text-gray-400">
            Une expérience gastronomique où le temps s'arrête. L'essence même du minimalisme japonais dans chaque bouchée.
          </p>
          <div className="pt-4 flex justify-center lg:justify-end">
            <span className="material-symbols-outlined animate-bounce text-cedar text-3xl">expand_more</span>
          </div>
        </div>
      </div>

      {/* Right Content: Moody Hero Image */}
      <div className="w-full lg:w-2/3 h-[60vh] lg:h-screen relative group overflow-hidden">
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent z-10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 lg:hidden"></div>
        
        {/* Background Image */}
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACH8W_bF9GxXG-RecL1ajKwoa1TUT9poVDzZ-MqwcJ8vFRDV1RIq2RGwgT4dCIzCR9d35Pshl4GoTl3t0HumuIwj1Pp4jenemGaP-1_dS2ipf1zxFGYvktM811N-6-Q5zGBgdlvGzXrnhuJlA_U_B88M8R9iOirv3luoBgmIBX6hYirbknFQXz6QZ2qyTYTxe-dLAnBzwn54uVoC7NVyfTCG1z4G5xiv6gNFdphtXKtjay_svsSLUx0jwN4yDrDGOZmAVbnOWNEvO0")' }}
        ></div>

        {/* Floating Card Overlay */}
        <div className="absolute bottom-16 right-16 z-20 hidden lg:block animate-float">
          <div className="glass-dark border border-white/10 p-10 rounded-lg max-w-sm shadow-2xl">
            <span className="text-primary text-[10px] uppercase tracking-[0.6em] mb-4 block font-bold">Signature du Chef</span>
            <h3 className="text-3xl font-serif-jp mb-3 text-white">O-Toro Nigiri</h3>
            <p className="text-sm text-gray-300 font-light mb-8 leading-relaxed">
              Thon gras d'exception, riz vinaigré de Shizuoka, pointe de wasabi frais râpé à la minute.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-primary transition-colors group">
              Découvrir le menu 
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
