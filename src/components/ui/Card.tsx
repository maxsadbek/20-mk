import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  animate = true 
}) => {
  const MotionDiv = animate ? motion.div : 'div'

  return (
    <MotionDiv
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={animate ? { once: true, margin: '-100px' } : undefined}
      transition={animate ? { duration: 0.5, ease: 'easeOut' } : undefined}
      className={`bg-white rounded-input shadow-soft p-6 ${className}`}
    >
      {children}
    </MotionDiv>
  )
}
