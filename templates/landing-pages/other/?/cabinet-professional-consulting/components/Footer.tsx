
import React from 'react';
import { Leaf, Globe, Share2, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light border-t border-seafoam-muted py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Leaf size={16} fill="currentColor" />
            </div>
            <span className="text-lg font-bold text-text-dark">Cabinet Landing</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <Globe size={20} />
            </a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <Share2 size={20} />
            </a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-sm text-text-muted/70 font-medium">
            © 2024 Cabinet Landing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
