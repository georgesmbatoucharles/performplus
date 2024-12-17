import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300';
  
  const variants = {
    primary: 'border-secondary text-secondary bg-black hover:bg-secondary hover:text-black',
    secondary: 'border-secondary text-black bg-secondary hover:bg-black hover:text-secondary',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
};