import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-input border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-gray-400 transition-colors duration-200 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20 ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
