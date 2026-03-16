import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import { content } from '../config/content';

const projects = content.work.projects;

/**
 * WorkSection Component
 * Displays a grid of projects (Work) and an "About Me" snippet card.
 * 
 * Projects are loaded from `src/config/content.ts` (projects array).
 * This component handles the grid layout and passing data to ProjectCard.
 */
const WorkSection: React.FC = () => {
  return (
    <section id="work" className="w-full py-20">
      <div className="flex items-end justify-between mb-12 px-4">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{content.work.title}</h2>
        <a href={content.work.viewAllCta.href} className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline">
          {content.work.viewAllCta.label}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* About Snippet Card - Embedded in Grid */}
        <div className="relative flex flex-col justify-center items-center gap-6 p-8 bg-gradient-to-br from-primary to-blue-400 text-white rounded-2xl shadow-clay dark:shadow-clay-dark md:col-span-1 lg:col-span-1">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="material-symbols-outlined text-4xl">{content.work.aboutSnippet.icon}</span>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{content.work.aboutSnippet.title}</h3>
            <p className="text-blue-50 text-sm mb-6 leading-relaxed">
              {content.work.aboutSnippet.description}
            </p>
            <button className="w-full py-3 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95">
              {content.work.aboutSnippet.buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;