
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <i className="fas fa-bolt text-white text-xs"></i>
            </div>
            <span className="text-lg font-bold">VisualGen</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 Dynamic Visual Studio. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-discord"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
