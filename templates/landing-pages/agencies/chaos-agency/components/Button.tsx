import React from 'react';

/**
 * Props for the Button component
 */
interface ButtonProps {
  /** The content to be displayed inside the button */
  children: React.ReactNode;
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'black' | 'white';
  /** Additional CSS classes */
  className?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Whether the button should stretch to full width */
  fullWidth?: boolean;
}

/**
 * A reusable Neo-Brutalist button component with multiple variants and active/hover states.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  fullWidth = false
}) => {
  // Base styling following the Neo-Brutalist aesthetic: bold borders and sharp transitions
  const baseClasses = "flex items-center justify-center rounded-full border-3 border-black font-bold uppercase transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-hover";

  // Style configurations for different button variants
  const variants = {
    primary: "bg-neo-green text-black shadow-neo hover:bg-neo-pink hover:text-white",
    secondary: "bg-neo-yellow text-black shadow-neo-lg hover:bg-white",
    black: "bg-black text-white shadow-neo-lg hover:bg-neo-pink hover:text-black",
    white: "bg-white text-black shadow-neo-lg hover:bg-neo-green",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;