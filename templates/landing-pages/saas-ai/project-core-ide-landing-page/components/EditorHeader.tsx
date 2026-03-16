
import React from 'react';
import { INITIAL_TABS } from '../constants';

const EditorHeader: React.FC = () => {
  return (
    <div className="flex flex-col shrink-0">
      {/* File Tabs */}
      <header className="h-10 bg-sidebar-bg flex overflow-x-auto border-b border-black custom-scrollbar">
        {INITIAL_TABS.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center px-4 gap-2 min-w-[140px] border-r border-black/20 cursor-pointer transition-colors ${
              tab.isActive 
                ? 'bg-editor-bg border-t-2 border-primary text-white' 
                : 'hover:bg-[#2d2d2d] text-white/40'
            }`}
          >
            <span className={`material-symbols-outlined text-sm ${tab.iconColor || ''}`}>{tab.icon}</span>
            <span className="text-xs font-mono">{tab.name}</span>
            <span className="material-symbols-outlined text-[10px] ml-auto opacity-40 hover:opacity-100">close</span>
          </div>
        ))}
        <div className="flex-1 bg-sidebar-bg"></div>
      </header>

      {/* Breadcrumbs */}
      <div className="h-7 bg-editor-bg flex items-center px-4 text-[11px] text-white/40 gap-1 border-b border-black/20">
        <span className="hover:text-white/60 cursor-pointer">project-core</span>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="hover:text-white/60 cursor-pointer">src</span>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="text-white/70">App.js</span>
      </div>
    </div>
  );
};

export default EditorHeader;
