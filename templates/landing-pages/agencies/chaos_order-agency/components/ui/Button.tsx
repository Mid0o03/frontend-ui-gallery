import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-black uppercase border-[3px] border-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white text-black shadow-neo hover:bg-primary hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px]",
    secondary: "bg-primary text-black shadow-neo hover:bg-white hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px]",
    black: "bg-black text-white shadow-neo hover:text-primary hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;