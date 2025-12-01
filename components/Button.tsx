import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-charcoal disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md shadow-lg text-sm tracking-wide";
  
  let variantStyles = "";
  
  switch (variant) {
    case 'primary':
      variantStyles = "bg-brand-green/20 text-white border border-brand-green/50 hover:bg-brand-green/30 hover:shadow-[0_0_20px_rgba(168,225,163,0.6)] focus:ring-brand-green";
      break;
    case 'secondary':
      variantStyles = "bg-brand-lavender/20 text-white border border-brand-lavender/50 hover:bg-brand-lavender/30 hover:shadow-[0_0_20px_rgba(208,169,255,0.6)] focus:ring-brand-lavender";
      break;
    case 'outline':
      variantStyles = "bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 focus:ring-brand-cream";
      break;
  }

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};