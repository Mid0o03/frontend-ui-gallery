
import React from 'react';
import { INITIAL_FILES } from '../constants';
import { FileItem } from '../types';

const FileTreeItem: React.FC<{ item: FileItem; depth: number }> = ({ item, depth }) => {
  return (
    <div className="w-full">
      <div 
        className={`flex items-center gap-1 py-0.5 px-2 text-sm cursor-pointer hover:bg-white/5 rounded transition-colors ${
          item.name === 'App.js' && depth > 0 ? 'bg-white/5 text-white' : 'text-white/70'
        }`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        <span className={`material-symbols-outlined text-[18px] ${item.iconColor || ''}`}>
          {item.icon}
        </span>
        <span className={item.type === 'folder' && depth === 0 ? 'font-bold text-xs uppercase tracking-wider' : ''}>
          {item.name}
        </span>
      </div>
      {item.isOpen && item.children?.map((child, idx) => (
        <FileTreeItem key={idx} item={child} depth={depth + 1} />
      ))}
    </div>
  );
};

const SidebarExplorer: React.FC = () => {
  return (
    <nav className="hidden md:flex w-64 flex-col bg-sidebar-bg border-r border-black/40 shrink-0">
      <div className="px-4 py-3 flex justify-between items-center text-[11px] uppercase tracking-wider text-white/50 font-bold">
        <span>Explorer</span>
        <span className="material-symbols-outlined text-sm cursor-pointer hover:text-white">more_horiz</span>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar pt-2">
        {INITIAL_FILES.map((file, idx) => (
          <FileTreeItem key={idx} item={file} depth={0} />
        ))}
      </div>
    </nav>
  );
};

export default SidebarExplorer;
