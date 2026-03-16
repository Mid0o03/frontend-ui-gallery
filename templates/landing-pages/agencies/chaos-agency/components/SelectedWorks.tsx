import React from 'react';
import { CONTENT } from '../config';

const SelectedWorks: React.FC = () => {
  return (
    <section className="w-full border-b-3 border-black bg-neo-yellow py-20 overflow-hidden" id="work">
      <div className="container mx-auto mb-10 flex items-center justify-between px-6">
        <h2 className="inline-block -rotate-2 transform border-3 border-black bg-white px-4 py-1 text-4xl font-black uppercase tracking-tight shadow-neo">
          {CONTENT.projects.title}
        </h2>
        <a href="#" className="hidden items-center gap-2 font-bold uppercase decoration-4 hover:underline md:flex">
          {CONTENT.projects.viewAllLabel} <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="no-scrollbar flex gap-8 snap-x overflow-x-auto px-6 pb-10">
        {CONTENT.projects.items.map((project) => (
          <div key={project.id} className="min-w-[300px] snap-center md:min-w-[450px]">
            <div className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-[2rem] border-3 border-black bg-white shadow-neo">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 w-full translate-y-full border-t-3 border-black bg-black p-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-black uppercase text-white">{project.title}</h3>
                <p className="font-mono text-sm text-neo-green">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;