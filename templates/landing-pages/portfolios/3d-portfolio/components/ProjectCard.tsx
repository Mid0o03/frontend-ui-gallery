import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className={`
        group relative flex flex-col gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl 
        shadow-clay dark:shadow-clay-dark transition-all hover:-translate-y-2 hover:shadow-xl cursor-pointer
        ${project.spanRows ? 'md:row-span-2' : ''}
      `}
    >
      <div className={`
        w-full rounded-xl overflow-hidden relative
        ${project.spanRows ? 'h-full min-h-[300px]' : 'aspect-square'}
      `}>
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.colorClass} opacity-50`}></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-white shadow-sm">
          {project.category}
        </div>
      </div>
      
      <div className="px-2 pb-2">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">{project.category} Details</p>
      </div>
    </div>
  );
};

export default ProjectCard;