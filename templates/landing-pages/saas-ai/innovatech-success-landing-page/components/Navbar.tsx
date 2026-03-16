
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight">VotreLogo</span>
          </div>
          <button className="bg-primary hover:bg-primary-dark transition-colors px-6 py-2 rounded-full font-bold text-sm text-slate-900 shadow-sm">
            Contactez-nous
          </button>
        </div>
      </div>
    </header>
  );
};
