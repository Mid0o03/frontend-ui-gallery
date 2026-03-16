
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center px-12 md:px-24" id="home">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578321272176-b7bbc067985c?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-aged-paper via-aged-paper/60 to-transparent dark:from-background-dark dark:via-background-dark/80"></div>
      </div>

      <div className="relative z-10 max-w-2xl animate-fade-in">
        <div className="flex items-start gap-8">
          <div className="hidden md:block">
            <h2 className="vertical-text font-traditional text-6xl lg:text-9xl text-primary/10 dark:text-white/5 leading-none select-none tracking-tighter">
              現代の浮世絵
            </h2>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-vermilion"></div>
              <span className="uppercase tracking-[0.4em] text-xs font-extrabold text-vermilion">
                Portfolio d'Illustration
              </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-primary dark:text-white leading-[0.9] tracking-tighter drop-shadow-sm">
              Ukiyo-e<br/>Moderne
            </h1>
            
            <p className="text-lg md:text-xl text-primary/80 dark:text-gray-300 max-w-md leading-relaxed">
              Une fusion de l'esthétique traditionnelle de la gravure sur bois et du minimalisme numérique contemporain.
            </p>
            
            <div className="mt-4 flex items-center gap-6">
              <a 
                className="hanko-btn inline-flex items-center justify-center bg-vermilion text-white px-3 py-6 font-traditional text-xl shadow-lg hover:shadow-vermilion/40"
                href="#galerie"
              >
                探検
              </a>
              <span className="text-sm font-bold uppercase tracking-widest text-primary/60 dark:text-white/40 block">
                Découvrir la<br/>collection
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
