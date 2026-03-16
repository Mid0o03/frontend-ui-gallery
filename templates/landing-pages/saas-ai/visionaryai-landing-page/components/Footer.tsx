
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">
              V
            </div>
            <span className="text-lg font-display font-bold text-white">
              VisionaryAI
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>

          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} VisionaryAI. Built with Gemini.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
