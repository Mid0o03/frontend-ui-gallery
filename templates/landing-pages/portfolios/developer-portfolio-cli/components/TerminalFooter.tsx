import React from 'react';
import { content } from '../config/content';
import { branding } from '../config/branding';

export const TerminalFooter: React.FC = () => {
    return (
        <footer className="bg-terminal-header border-t border-terminal-border py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-primary/60 select-none rounded-b-lg font-mono">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <span>{content.footer.copyright}</span>
                <span className="hidden md:inline">|</span>
                <div className="flex gap-4">
                    <a href={branding.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GITHUB</a>
                    <a href={branding.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
                    <a href={branding.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TWITTER</a>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <span className="flex items-center gap-2">
                    <span className="block size-2 rounded-full bg-primary animate-pulse"></span>
                    {content.footer.status}
                </span>
            </div>
        </footer>
    );
};