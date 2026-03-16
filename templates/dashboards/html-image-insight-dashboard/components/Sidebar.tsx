
import React from 'react';
import { LayoutDashboard, FileCode, Image as ImageIcon, Settings, Globe } from 'lucide-react';
import { DashboardTab } from '../types';

interface SidebarProps {
  currentTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentTab, onTabChange }) => {
  const items = [
    { id: DashboardTab.OVERVIEW, label: 'Dashboard', icon: LayoutDashboard },
    { id: DashboardTab.PROCESSOR, label: 'HTML Processor', icon: FileCode },
    { id: DashboardTab.GALLERY, label: 'Image Gallery', icon: ImageIcon },
    { id: DashboardTab.SETTINGS, label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
          <Globe className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-900">ImgFlow</span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentTab === item.id
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Power Source</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-medium text-slate-700">Gemini 3 Flash</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
