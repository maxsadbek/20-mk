import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea: React.FC<TextareaProps> = ({ 
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
      <textarea
        className={`w-full rounded-input border border-gray-300 bg-white px-4 py-3 text-text-primary placeholder-gray-400 transition-colors duration-200 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20 resize-none ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
