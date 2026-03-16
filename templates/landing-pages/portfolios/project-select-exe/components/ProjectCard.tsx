
import React from 'react';
import { Project } from '../types';
import { Play, Code } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col bg-card-dark rounded-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all glow-border">
      {/* Visual Header */}
      <div className="crt-overlay aspect-video w-full bg-black relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
        />
        <div className="absolute top-3 left-3 bg-red-600 text-[8px] font-pixel px-2 py-1 animate-flicker z-10">
          REC
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-pixel text-white/50 z-10">
          LVL. {project.level}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h4 className="text-lg font-pixel text-white group-hover:text-primary transition-colors truncate mb-1 uppercase tracking-tighter">
            {project.name}
          </h4>
          <p className="text-white/40 text-xs font-medium">{project.description}</p>
        </div>

        {/* Stats Matrix */}
        <div className="space-y-3 py-2 border-y border-white/5">
          <StatBar label="STR (BACKEND)" value={project.stats.str} color="bg-primary" />
          <StatBar label="AGI (FRONTEND)" value={project.stats.agi} color="bg-neon-purple" />
          <StatBar label="INT (ARCH)" value={project.stats.int} color="bg-blue-400" />
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          <button className="flex items-center justify-center gap-2 py-3 bg-primary rounded text-[10px] font-pixel hover:brightness-110 transition-all">
            <Play size={12} fill="currentColor" /> START
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-white/20 rounded text-[10px] font-pixel hover:bg-white/10 transition-all">
            <Code size={12} /> SOURCE
          </button>
        </div>
      </div>
    </div>
  );
};

interface StatBarProps {
  label: string;
  value: number;
  color: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, value, color }) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between text-[9px] font-pixel">
      <span className="text-white/60">{label}</span>
      <span className={color.replace('bg-', 'text-')}>{value}%</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default ProjectCard;
