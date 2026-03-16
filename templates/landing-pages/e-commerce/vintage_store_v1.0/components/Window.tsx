import React from 'react';
import { Minus, Square, X } from 'lucide-react';
import { WinButton } from './WinButton';

interface WindowProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  controls?: boolean;
}

/**
 * Window Component
 * 
 * A reusable container component that mimics the Windows 95 classic window look.
 * Supports a title, an optional icon, and optional window controls (minimize, maximize, close).
 */
export const Window: React.FC<WindowProps> = ({
  title,
  icon,
  children,
  className = '',
  controls = true
}) => {
  return (
    <div className={`bg-retro-gray p-1 shadow-win95 ${className}`}>
      <div className="flex items-center justify-between bg-retro-blue px-2 py-1 mb-1">
        <div className="flex items-center gap-2 text-white font-bold select-none">
          {icon}
          <span>{title}</span>
        </div>
        {controls && (
          <div className="flex gap-1">
            <WinButton variant="icon" aria-label="Minimize">_</WinButton>
            <WinButton variant="icon" aria-label="Maximize">□</WinButton>
            <WinButton variant="icon" aria-label="Close">x</WinButton>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};