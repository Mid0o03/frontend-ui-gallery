
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${project.span} flex flex-col gap-6 group cursor-pointer`}
    >
      <div className={`relative overflow-hidden rounded-lg ${project.aspect} bg-neutral-900 shadow-2xl`}>
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

        {project.category && (
          <div className="absolute top-8 left-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 group-hover:text-white transition-colors">
              {project.category}
            </span>
          </div>
        )}

        {project.details && (
          <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex gap-4 text-[9px] uppercase tracking-[0.2em] font-bold text-white/80">
              {project.details.map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl italic font-light group-hover:text-primary transition-colors">{project.title}</h3>
          {project.subtitle && (
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mt-1">{project.subtitle}</p>
          )}
        </div>
        {project.indexLabel ? (
          <span className="text-[10px] opacity-40 font-mono tracking-tighter">{project.indexLabel}</span>
        ) : (
          <button className="text-[10px] uppercase tracking-widest border-b border-primary/30 text-primary/80 group-hover:text-primary group-hover:border-primary transition-all pb-1 hidden md:block">
            View Series
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
