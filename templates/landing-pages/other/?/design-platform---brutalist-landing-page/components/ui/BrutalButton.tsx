
import React from 'react';

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shadowSize?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({ 
  shadowSize = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const shadows = {
    sm: '4px 4px 0px 0px #000000',
    md: '6px 6px 0px 0px #000000',
    lg: '8px 8px 0px 0px #000000',
  };

  const activeTranslation = {
    sm: 'translate(2px, 2px)',
    md: 'translate(3px, 3px)',
    lg: 'translate(4px, 4px)',
  };

  return (
    <button
      style={{
        boxShadow: shadows[shadowSize],
        border: '4px solid black',
      }}
      className={`
        font-black uppercase tracking-tight
        transition-all duration-75
        hover:-translate-x-1 hover:-translate-y-1
        active:translate-x-1 active:translate-y-1
        active:shadow-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
