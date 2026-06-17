import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-pill px-6 py-3 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2'
  
  const variantStyles = {
    primary: 'bg-brand-yellow text-text-primary hover:bg-yellow-600',
    secondary: 'border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-white',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
