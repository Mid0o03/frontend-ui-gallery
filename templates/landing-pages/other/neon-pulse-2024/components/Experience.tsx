
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">The Experience</h2>
      </div>

      <div className="flex gap-6 px-8 overflow-x-auto no-scrollbar pb-10 cursor-grab active:cursor-grabbing">
        {EXPERIENCES.map((item) => (
          <div key={item.id} className="min-w-[320px] md:min-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden group relative flex-shrink-0 shadow-2xl">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
              src={item.imageUrl} 
              alt={item.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">{item.title}</h4>
              <p className="text-sm md:text-base opacity-70 font-light leading-relaxed">{item.description}</p>
            </div>
            <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Explore Room</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
