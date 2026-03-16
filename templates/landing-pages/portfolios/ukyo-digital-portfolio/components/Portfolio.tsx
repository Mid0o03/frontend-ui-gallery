
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-32 bg-washi" id="work">
      <div className="flex justify-between items-end mb-20">
        <div className="max-w-xl">
          <span className="text-vermilion font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            — Portfolio Showcase
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-ink leading-tight">
            Selected Works
          </h2>
        </div>
        <div className="hidden md:block writing-vertical text-[8rem] font-black text-primary/5 select-none pointer-events-none">
          作品集
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className={`flex flex-col gap-6 group cursor-pointer ${project.offset || ''}`}
          >
            <div className={`relative ${project.aspectRatio} overflow-hidden rounded-sm border-[12px] border-white shadow-2xl transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:shadow-vermilion/10`}>
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-ink mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
