
import React from 'react';

interface SidebarProps {
  text: string;
  orientation: 'left' | 'right';
}

const Sidebar: React.FC<SidebarProps> = ({ text, orientation }) => {
  return (
    <aside className="hidden lg:flex col-span-1 border-[6px] border-black bg-white flex-col items-center justify-between py-12 pixel-shadow overflow-hidden relative group">
      <div className={`vertical-text font-heading text-4xl text-black ${orientation === 'left' ? 'rotate-180' : ''}`}>
        {text}
      </div>
      <div className="w-full h-32 mt-12 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 halftone"></div>
      </div>
      {/* Decorative dot */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-black flex items-center justify-center ${orientation === 'left' ? '-right-4' : '-left-4'}`}>
        <div className="w-2 h-2 bg-black"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
