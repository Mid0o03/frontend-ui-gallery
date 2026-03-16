import React from 'react';
import { content } from '../config/content';

export const SkillsCloud: React.FC = () => {
    const { skills } = content;
    return (
        <section className="mb-12">
            <h3 className="text-primary text-sm font-bold tracking-wider mb-4 uppercase opacity-80 flex items-center gap-2 font-mono">
                <span className="material-symbols-outlined text-base">extension</span>
                {skills.title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.items.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-primary-dim border border-terminal-border text-primary text-sm font-bold hover:bg-primary hover:text-terminal-black cursor-crosshair transition-all"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};