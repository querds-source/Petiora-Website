import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
interface TagProps {
  children: ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  active?: boolean;
  variant?: 'default' | 'primary' | 'outline';
  icon?: ReactNode;
  className?: string;
}
export function Tag({
  children,
  onRemove,
  onClick,
  active = false,
  variant = 'default',
  icon,
  className = ''
}: TagProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200';
  const variants = {
    default: active ? 'bg-charcoal-800 text-white shadow-md' : 'bg-gray-100 text-charcoal-600 hover:bg-gray-200',
    primary: active ? 'bg-primary-600 text-white shadow-md shadow-primary-900/20' : 'bg-primary-50 text-primary-700 hover:bg-primary-100',
    outline: active ? 'border-2 border-primary-600 text-primary-700 bg-primary-50' : 'border border-gray-200 text-charcoal-600 hover:border-primary-200 hover:text-primary-600 bg-white'
  };
  const Component = onClick ? motion.button : motion.div;
  return <Component className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} whileHover={onClick ? {
    scale: 1.02
  } : undefined} whileTap={onClick ? {
    scale: 0.98
  } : undefined} layout>
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{children}</span>
      {onRemove && <button onClick={e => {
      e.stopPropagation();
      onRemove();
    }} className={`
            ml-1 p-0.5 rounded-full hover:bg-black/10 transition-colors
            ${active ? 'text-white/80 hover:text-white' : 'text-charcoal-400 hover:text-charcoal-600'}
          `}>
          <X className="w-3.5 h-3.5" />
        </button>}
    </Component>;
}