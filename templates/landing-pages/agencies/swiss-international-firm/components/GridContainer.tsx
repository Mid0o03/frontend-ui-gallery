
import React from 'react';

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
  noBorderBottom?: boolean;
}

export const GridContainer: React.FC<GridContainerProps> = ({ children, className = "", noBorderBottom = false }) => {
  return (
    <div className={`grid grid-cols-12 border-l border-black border-r ${!noBorderBottom ? 'border-b border-black' : ''} ${className}`}>
      {children}
    </div>
  );
};
