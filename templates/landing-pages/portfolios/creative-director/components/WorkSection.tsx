import React from 'react';
import { content } from '../config/content';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
  aspectRatio: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, category, description, image, aspectRatio }) => {
  return (
    <div className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer mb-8">
      <div className={`${aspectRatio} w-full overflow-hidden bg-gray-800`}>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="font-mono text-primary text-xs mb-2 block tracking-wider">{category}</span>
          <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="px-6 md:px-20 lg:px-40 py-10">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.work.title}</h2>
          <p className="font-mono text-gray-500 text-sm">{content.work.subtitle}</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-primary font-mono text-sm hover:underline underline-offset-4 group">
          {content.work.cta}
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>

      {/* Masonry Layout using Columns */}
      <div className="columns-1 md:columns-2 gap-8">
        {content.work.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <a href="#" className="bg-surface-dark border border-[#333] text-white px-6 py-3 rounded-full font-mono text-xs hover:bg-[#333] transition-colors">
          {content.work.mobileCta}
        </a>
      </div>
    </section>
  );
};

export default WorkSection;