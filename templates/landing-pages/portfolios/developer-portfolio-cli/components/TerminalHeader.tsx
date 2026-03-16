import React from 'react';
import { branding } from '../config/branding';

export const TerminalHeader: React.FC = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap bg-terminal-header border-b border-terminal-border px-6 py-4 select-none rounded-t-lg">
            <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-[20px] animate-spin-slow">terminal</span>
                <h2 className="text-primary/90 text-sm md:text-base font-bold tracking-widest uppercase font-mono">
                    {branding.tagline}
                </h2>
            </div>
            <div className="flex gap-2">
                <div className="size-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg" />
                <div className="size-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors cursor-pointer shadow-lg" />
                <div className="size-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer shadow-lg" />
            </div>
        </header>
    );
};