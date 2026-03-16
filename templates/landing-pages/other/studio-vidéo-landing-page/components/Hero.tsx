
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center opacity-60 scale-105 animate-[pulse_8s_ease-in-out_infinite]"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPEpLzBOza6xExYCemJEmXYJ3xkPK7jfAwH2C0-nQHUNU0EXAwbIV7xVtPlFrWbycYNDn2zTy-saC38xnIhbuQhg_Ohg4tNvGMxJ41mvFrzKK_TqrlOJFTjvpNwV2WYwIad9XdJ2g4Uz2gbXgo5x9IST400lJYrK8nBFJmXwSlX-12hsywsUuge7gyRLEhrJIe9-FZjjZpXkdd-5Nt0xma1y_DkUmtKweEPkCDp5vO5Pp7NvH0H50YaTGuev5a3robTbIZa2XMPP3C')` }}
        ></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-[1400px]">
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tighter text-outline uppercase mb-6 md:mb-4">
          CRAFTING<br />VISUALS
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-xl font-light text-white/70 tracking-wide uppercase">
          High-end futuristic video production studio delivering cutting-edge visual experiences.
        </p>
        <div className="mt-16 sm:mt-24">
          <span className="material-symbols-outlined text-primary text-5xl animate-bounce cursor-pointer">expand_more</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
