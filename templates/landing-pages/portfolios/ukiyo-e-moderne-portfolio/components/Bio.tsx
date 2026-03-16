
import React from 'react';

const Bio: React.FC = () => {
  return (
    <section className="py-32 bg-primary/5 dark:bg-white/5 relative overflow-hidden" id="bio">
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4 select-none">
        <span className="font-traditional text-[40rem] leading-none">空</span>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="border-l-4 border-vermilion pl-8">
              <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-8">L'Esprit de Ma</h2>
              <div className="space-y-6 text-primary/80 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  Inspiré par le concept japonais de <strong>"Ma"</strong> — l'espace entre les choses — mon travail explore la tension entre l'encre traditionnelle et le vide numérique.
                </p>
                <p>
                  Chaque trait est une méditation sur la permanence du geste et l'éphémère du sujet. Je cherche à capturer l'essence de l'Ukiyo-e, non pas comme un artefact du passé, mais comme un langage vivant pour notre époque.
                </p>
              </div>
              <button className="mt-10 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-vermilion transition-all duration-300 shadow-lg hover:shadow-vermilion/20">
                Lire ma Biographie
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 group">
            <div className="relative">
              <div className="absolute -inset-4 border border-vermilion/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
              <img 
                alt="Atelier" 
                className="relative rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
