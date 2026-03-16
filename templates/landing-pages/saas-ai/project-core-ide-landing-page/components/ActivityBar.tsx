
import React from 'react';

interface ActivityBarProps {
  active: string;
  onSelect: (id: string) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({ active, onSelect }) => {
  const activities = [
    { id: 'files', icon: 'description' },
    { id: 'search', icon: 'search' },
    { id: 'git', icon: 'account_tree' },
    { id: 'extensions', icon: 'extension' },
  ];

  return (
    <aside className="w-12 md:w-16 flex flex-col items-center py-4 gap-4 bg-activity-bg border-r border-white/5 z-20 shrink-0">
      {activities.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`p-2 cursor-pointer transition-all duration-200 border-l-2 ${
            active === item.id 
              ? 'text-white border-primary' 
              : 'text-white/40 border-transparent hover:text-white/70'
          }`}
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
        </div>
      ))}
      
      <div className="mt-auto flex flex-col gap-4">
        <div className="p-2 text-white/40 hover:text-white cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-2xl">account_circle</span>
        </div>
        <div className="p-2 text-white/40 hover:text-white cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-2xl">settings</span>
        </div>
      </div>
    </aside>
  );
};

export default ActivityBar;
