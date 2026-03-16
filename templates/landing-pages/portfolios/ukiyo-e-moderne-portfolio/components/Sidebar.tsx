
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

interface SidebarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-24 border-r border-primary/10 flex flex-col items-center py-8 bg-aged-paper/80 dark:bg-background-dark/80 backdrop-blur-sm z-50">
      <div className="mb-12">
        <div className="h-12 w-12 bg-vermilion flex items-center justify-center text-white font-traditional text-xl rounded-sm shadow-md hover:scale-110 transition-transform cursor-pointer" title="Logo Ukiyo-e">
          浮
        </div>
      </div>

      <nav className="flex flex-col gap-12 items-center grow">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} className="group flex flex-col items-center gap-2" to={link.href}>
            <span className="material-symbols-outlined text-primary dark:text-gray-400 group-hover:text-vermilion transition-colors">
              {link.icon}
            </span>
            <span className="vertical-text text-[10px] uppercase tracking-widest font-bold dark:text-gray-300">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-6 items-center">
        <button
          onClick={toggleDarkMode}
          className="text-primary dark:text-gray-400 hover:text-vermilion transition-colors"
        >
          <span className="material-symbols-outlined">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <Link className="text-primary dark:text-gray-400 hover:text-vermilion transition-colors" to="#">
          <span className="material-symbols-outlined text-lg">public</span>
        </Link>
        <Link className="text-primary dark:text-gray-400 hover:text-vermilion transition-colors" to="#">
          <span className="material-symbols-outlined text-lg">camera_alt</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
