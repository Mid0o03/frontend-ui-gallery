
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none -z-10 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6 animate-pulse">
          Nouveau : Gemini 2.5 Flash Image est disponible
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Générez des liens dynamiques <br />
          <span className="text-blue-500">vers vos images en HTML</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Transformez vos prompts en visuels de haute qualité instantanément. Intégrez-les directement dans vos projets web grâce à nos APIs ultra-rapides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#studio" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20">
            Essayer le Studio
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all">
            Voir la Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
