
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-[10px] font-bold">AI</span>
              </div>
              <span className="font-bold tracking-tight">Gemini Studio</span>
            </div>
            <p className="text-sm text-gray-500">
              L'avenir de la génération d'images à portée de clic.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Gemini Dynamic Studio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
