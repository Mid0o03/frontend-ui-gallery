import React, { useState } from 'react';
import { content } from '../config/content';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? content.portfolio.projects
    : content.portfolio.projects.filter(p => p.category === activeCategory || p.category === "Bespoke" && activeCategory === "Residential"); // Simplified logic for demo

  return (
    <section id="portfolio" className="bg-background-light py-20 border-t border-charcoal/5">
      <div className="flex flex-col items-center w-full pb-20">

        {/* Header Section */}
        <div className="w-full max-w-[1440px] px-6 md:px-10 mb-12 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-charcoal/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-[0.9] tracking-tight mb-6">
                {content.portfolio.title}
              </h2>
              <p className="text-charcoal/70 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                {content.portfolio.description}
              </p>
            </div>
            <div className="hidden md:block pb-2 text-charcoal/40">
              <span className="material-symbols-outlined text-4xl font-light">arrow_downward</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="w-full max-w-[1440px] px-6 md:px-10 mb-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {content.portfolio.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group flex h-9 items-center justify-center px-4 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                    ? 'bg-charcoal text-white hover:bg-charcoal/80'
                    : 'bg-transparent border border-charcoal/10 text-charcoal hover:border-charcoal/30 hover:bg-sand/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="w-full max-w-[1440px] px-6 md:px-10">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-none shadow-sm hover:shadow-2xl transition-all duration-500 bg-white">
                <div className={`relative w-full ${project.aspect} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 flex justify-between items-end">
                    <div>
                      <p className="text-primary text-xs font-bold tracking-wider uppercase mb-1 drop-shadow-md">{project.category}</p>
                      <h3 className="text-white font-serif text-2xl leading-none drop-shadow-md">{project.title}</h3>
                      <p className="text-white/80 text-sm mt-1 drop-shadow-md">{project.location}</p>
                    </div>
                    <div className="bg-primary text-charcoal rounded-full p-3 hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-lg block">arrow_outward</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-20">
          <button className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-sand text-charcoal text-sm font-bold leading-normal tracking-wide hover:bg-primary hover:text-charcoal hover:shadow-lg transition-all duration-300">
            Load More Projects
          </button>
        </div>

      </div>
    </section>
  );
};