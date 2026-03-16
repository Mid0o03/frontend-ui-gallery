import React from 'react';
import { content } from '../config/content';

export const ProjectList: React.FC = () => {
    const { projects } = content;
    return (
        <section className="mb-8">
            <h3 className="text-primary text-xl font-bold leading-tight tracking-wider border-b border-terminal-border pb-4 mb-6 flex items-center gap-2 font-mono">
                <span className="material-symbols-outlined">folder_open</span>
                {projects.title}
            </h3>

            <div className="grid grid-cols-1 gap-3">
                {projects.items.map((project) => (
                    <a
                        key={project.id}
                        href="#"
                        className="group flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary-dim transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 overflow-hidden">
                            <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary shrink-0 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">{project.icon}</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                                <h4 className="text-white font-bold text-lg truncate group-hover:text-primary transition-colors font-mono">
                                    {project.path}
                                </h4>
                                <p className="text-white/50 text-sm truncate">{project.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-white/5 text-xs text-white/70 font-mono">
                                {project.permissions}
                            </span>
                            <span className="material-symbols-outlined text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all">
                                arrow_forward
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};