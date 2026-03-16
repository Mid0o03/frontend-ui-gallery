
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <footer className="h-6 bg-primary text-black flex items-center px-3 text-[11px] font-bold justify-between shrink-0 select-none z-30">
      <div className="flex items-center h-full">
        <div className="flex items-center gap-1.5 hover:bg-black/10 px-3 h-full cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm font-bold">rebase</span>
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1.5 hover:bg-black/10 px-2 h-full cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm font-bold">sync</span>
        </div>
        <div className="flex items-center gap-3 hover:bg-black/10 px-3 h-full cursor-pointer transition-colors">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">error</span>
            <span>0</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>0</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center h-full">
        <div className="hidden md:flex items-center gap-4 h-full">
          <div className="flex items-center px-3 h-full cursor-default hover:bg-black/5">
            <span>Ln 42, Col 12</span>
          </div>
          <div className="flex items-center px-3 h-full cursor-default hover:bg-black/5">
            <span>Spaces: 2</span>
          </div>
          <div className="flex items-center px-3 h-full cursor-default hover:bg-black/5">
            <span>UTF-8</span>
          </div>
        </div>
        <div className="flex items-center gap-1 hover:bg-black/10 px-3 h-full cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-sm font-bold">notifications</span>
        </div>
      </div>
    </footer>
  );
};

export default StatusBar;
