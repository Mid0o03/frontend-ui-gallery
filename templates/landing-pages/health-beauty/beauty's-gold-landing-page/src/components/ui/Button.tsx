import React from 'react';

export const Button: React.FC<{
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}> = ({ variant = 'primary', children, className = '', onClick }) => {
    const base = "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300";
    const styles = variant === 'primary'
        ? "bg-primary text-background-dark hover:bg-white"
        : "border border-primary text-primary hover:bg-primary hover:text-background-dark";

    return (
        <button className={`${base} ${styles} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};
