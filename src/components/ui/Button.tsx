import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'neumorphic';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg transition-shadow";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    neumorphic: "bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)]"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}