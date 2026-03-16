import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { content } from '../config/content';
import { branding } from '../config/branding';

export const ProfileCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(branding.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bento-card w-full h-full rounded-[24px] bg-surface-dark border border-surface-border p-8 flex flex-col justify-between relative overflow-hidden group">
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all duration-500"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-surface-border p-1 bg-surface-dark">
              <img
                alt={`Portrait of ${content.profile.name}`}
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                src={content.profile.avatar}
              />
            </div>
            <div className="absolute bottom-1 right-1 flex items-center justify-center w-6 h-6 bg-surface-dark rounded-full">
              <div className="relative w-3 h-3 bg-primary rounded-full">
                <div className="pulse-ring"></div>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
            <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              {content.profile.status}
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1] tracking-tight" dangerouslySetInnerHTML={{ __html: content.hero.title }}>
        </h1>
      </div>

      <div className="relative z-10">
        <p className="text-gray-400 text-lg max-w-md mb-6 leading-relaxed">
          {content.profile.bio}
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
            <span>{content.hero.cta}</span>
            <Download size={18} />
          </button>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};