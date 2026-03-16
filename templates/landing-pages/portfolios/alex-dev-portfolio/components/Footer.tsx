import React from 'react';
import { branding } from '../config/branding';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 mt-10">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {branding.author}. Built with Tailwind CSS & Passion.</p>
      </div>
    </footer>
  );
};