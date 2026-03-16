import React from 'react';

interface WinButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'icon' | 'default';
}

export const WinButton: React.FC<WinButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const baseClasses = "bg-retro-gray shadow-win95 active:shadow-win95-in flex items-center justify-center active:bg-gray-300";
  const variantClasses = variant === 'icon' 
    ? "w-5 h-5 text-[10px] leading-none text-black font-bold" 
    : "px-2 py-1 text-black font-bold text-sm";

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};