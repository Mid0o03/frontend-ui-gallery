import React from 'react';
import { content } from '../config/content';

export const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2 text-primary/60 text-sm font-medium tracking-wider mb-2 font-mono">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>LAST_LOGIN: <span className="text-white">{content.hero.lastLogin}</span></span>
            </div>

            <h1 className="text-primary text-glow text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {content.hero.title}
                <span className="animate-blink-cursor ml-1 inline-block w-3 h-8 md:h-12 bg-primary align-middle"></span>
            </h1>

            <div className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-[800px] mt-4 border-l-2 border-primary/30 pl-4 py-1 font-mono">
                {content.hero.systemStatus.map((status, index) => (
                    <p key={index}>
                        <span className="text-primary font-bold">[{status.type}]</span> {status.text}
                    </p>
                ))}
                <p className="font-display mt-2 text-white/90">
                    {content.hero.welcomeMessage}
                </p>
            </div>
        </section>
    );
};