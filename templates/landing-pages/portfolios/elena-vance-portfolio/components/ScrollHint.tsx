import React from 'react';

interface ScrollHintProps {
  visible: boolean;
}

export const ScrollHint: React.FC<ScrollHintProps> = ({ visible }) => {
  return (
    <div 
      className={`
        fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-2 
        bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 
        text-xs font-medium text-text-muted pointer-events-none transition-opacity duration-500
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <span className="material-symbols-outlined text-base">pan_tool_alt</span>
      <span>Scroll or Shift+Wheel</span>
    </div>
  );
};