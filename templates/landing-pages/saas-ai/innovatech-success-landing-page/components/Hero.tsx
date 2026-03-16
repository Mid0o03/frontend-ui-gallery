
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div 
          className="relative min-h-[400px] md:min-h-[520px] rounded-3xl overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-6"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000")`
          }}
        >
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Comment Innovatech a doublé sa productivité en 60 jours
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium">
              Découvrez l'histoire inspirante d'une transformation réussie grâce à notre solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
