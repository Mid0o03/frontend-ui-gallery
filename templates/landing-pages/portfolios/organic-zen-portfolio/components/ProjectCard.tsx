
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <div className={`group cursor-pointer flex flex-col gap-6 ${className}`}>
      <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-stone/5 shadow-sm relative">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold">
          {project.number}. {project.category}
        </span>
        <h3 className="text-3xl font-light text-[#171412] group-hover:translate-x-2 transition-transform duration-500 font-display">
          {project.title}
        </h3>
        <p className="text-stone text-sm leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
