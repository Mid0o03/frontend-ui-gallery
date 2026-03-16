import React from 'react';
import { Mail } from 'lucide-react';
import { branding } from '../config/branding';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './Icons';

export const SocialWidget: React.FC = () => {
  return (
    <div className="bento-card h-full rounded-[24px] bg-surface-dark border border-surface-border p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
        <div className="grid grid-cols-2 gap-3">
          <a href={branding.socials.github} target="_blank" rel="noopener noreferrer" className="aspect-square flex flex-col items-center justify-center bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all group/icon border border-white/5 hover:border-transparent">
            <GitHubIcon className="w-6 h-6 mb-1" />
          </a>
          <a href={branding.socials.linkedin} target="_blank" rel="noopener noreferrer" className="aspect-square flex flex-col items-center justify-center bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all group/icon border border-white/5 hover:border-transparent">
            <LinkedInIcon className="w-6 h-6 mb-1" />
          </a>
          <a href={branding.socials.twitter} target="_blank" rel="noopener noreferrer" className="aspect-square flex flex-col items-center justify-center bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all group/icon border border-white/5 hover:border-transparent">
            <TwitterIcon className="w-6 h-6 mb-1" />
          </a>
          <a href={`mailto:${branding.email}`} className="aspect-square flex flex-col items-center justify-center bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all group/icon border border-white/5 hover:border-transparent">
            <Mail size={24} className="mb-1" />
          </a>
        </div>
      </div>
    </div>
  );
};