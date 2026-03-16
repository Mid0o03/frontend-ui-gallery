
import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <div 
          className="w-32 h-32 rounded-full border-4 border-white shadow-xl mb-6 bg-cover bg-center"
          style={{ backgroundImage: `url("https://picsum.photos/seed/jean-dupont/200/200")` }}
        />
        <h3 className="text-2xl font-bold text-slate-900">Jean Dupont</h3>
        <p className="text-slate-500 font-medium mb-6">PDG, Innovatech</p>
        <blockquote className="text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed">
          “Ce produit a changé notre façon de travailler. C'est un véritable tournant.”
        </blockquote>
      </div>
    </section>
  );
};
