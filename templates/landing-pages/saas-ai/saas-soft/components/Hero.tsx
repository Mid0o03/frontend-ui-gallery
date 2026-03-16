
import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 md:pt-48 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-text-dark">
          Simplifiez votre <span className="text-primary">workflow</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10 font-medium">
          La plateforme de productivité tout-en-un conçue pour les équipes modernes qui privilégient la clarté et la fluidité.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-full shadow-soft-raised hover:shadow-soft-pressed transition-all duration-300 transform active:scale-95">
            Commencer gratuitement
          </button>
          <button className="w-full sm:w-auto px-10 py-4 text-gray-600 font-bold flex items-center justify-center gap-2 hover:text-primary transition-colors">
            <PlayCircle className="w-6 h-6" />
            Voir la démo
          </button>
        </div>

        {/* Floating Mockup */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative z-10 p-6 bg-white rounded-[2rem] shadow-soft-card transition-transform duration-700 hover:-translate-y-4">
            <div className="rounded-2xl overflow-hidden shadow-soft-pressed border border-gray-100">
              <img 
                className="w-full h-auto object-cover" 
                alt="Floating dashboard mockup" 
                src="https://picsum.photos/seed/dash/1200/800"
              />
            </div>
          </div>
          {/* Soft Glow behind mockup */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full scale-90"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
