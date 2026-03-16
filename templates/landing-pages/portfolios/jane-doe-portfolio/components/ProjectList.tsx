import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { content } from '../config/content';

const ProjectList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 divide-y divide-border-color bg-background-dark">
      {content.projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} reversed={index % 2 !== 0} />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reversed }) => {
  return (
    <article className={`group relative flex flex-col ${reversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} min-h-[480px]`}>
      {/* Content Side */}
      <div className={`p-8 lg:p-12 xl:w-1/2 flex flex-col justify-between relative z-10 ${reversed ? 'xl:border-l border-border-color' : ''}`}>
        <div className="flex flex-col gap-6">
          <div className="font-mono text-xs text-primary flex items-center gap-2">
            <span className="size-2 bg-primary rounded-full"></span>
            {project.number} / {project.category}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 whitespace-pre-line">
            {project.title}
          </h2>
          <p className="text-gray-400 max-w-sm font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <div className="flex flex-wrap gap-2 font-mono text-xs text-gray-500 uppercase">
            {project.tags.map(tag => (
              <span key={tag} className="border border-border-color px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <button className="flex w-fit items-center gap-2 text-white group-hover:text-primary transition-colors mt-4">
            <span className="text-sm font-medium tracking-wide">VIEW CASE STUDY</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Image Side */}
      <div className={`xl:w-1/2 h-64 xl:h-auto overflow-hidden relative ${!reversed ? 'xl:border-l border-border-color' : ''}`}>
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${project.imageUrl}')` }}
          role="img"
          aria-label={project.imageAlt}
        ></div>
      </div>
    </article>
  );
};

export default ProjectList;