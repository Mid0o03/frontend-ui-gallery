import React from 'react';
import { Monitor, FolderOpen, Trash2 } from 'lucide-react';

interface DesktopIconProps {
  label: string;
  iconType: 'computer' | 'folder' | 'trash';
  className?: string;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ label, iconType, className = '' }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'computer':
        return <Monitor size={48} className="text-primary drop-shadow-lg" strokeWidth={1.5} />;
      case 'folder':
        return <FolderOpen size={48} className="text-vapor-pink drop-shadow-lg" strokeWidth={1.5} />;
      case 'trash':
        return <Trash2 size={48} className="text-vapor-blue drop-shadow-lg" strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  return (
    <div className={`group cursor-pointer flex flex-col items-center gap-1 w-24 ${className}`}>
      {getIcon()}
      <span className="bg-[#000080] text-white px-1 text-xs text-center line-clamp-2 leading-tight">
        {label}
      </span>
    </div>
  );
};