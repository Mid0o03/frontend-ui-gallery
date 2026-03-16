
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-text-light">
              Créez votre solution parfaite <span className="text-primary italic font-serif">en 2 minutes</span>
            </h1>
            <p className="text-xl text-text-muted-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Répondez à quelques questions rapides pour découvrir la configuration idéale qui répondra à tous vos besoins. C'est simple, rapide et 100% personnalisé.
            </p>
            <button 
              onClick={onStart}
              className="self-center lg:self-start bg-primary text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
            >
              Commencer le quiz
            </button>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-[3rem] overflow-hidden rotate-2 shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/tech-workspace/800/800" 
                alt="Workspace productivity"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
