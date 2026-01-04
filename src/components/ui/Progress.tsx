import React from 'react';
import { motion } from 'framer-motion';
interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gradient-primary' | 'gradient-success';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  className?: string;
  type?: 'linear' | 'circular';
}
export function Progress({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  label,
  className = '',
  type = 'linear'
}: ProgressProps) {
  const percentage = Math.min(Math.max(value / max * 100, 0), 100);
  const variants = {
    default: 'bg-gray-600',
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-rose-500',
    'gradient-primary': 'bg-gradient-to-r from-primary-600 to-primary-400',
    'gradient-success': 'bg-gradient-to-r from-emerald-600 to-emerald-400'
  };
  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };
  if (type === 'circular') {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - percentage / 100 * circumference;
    return <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg className="transform -rotate-90 w-16 h-16">
          <circle className="text-gray-100" strokeWidth="6" stroke="currentColor" fill="transparent" r={radius} cx="32" cy="32" />
          <motion.circle className={variant.includes('gradient') ? 'text-primary-600' : variants[variant].replace('bg-', 'text-')} strokeWidth="6" strokeDasharray={circumference} initial={{
          strokeDashoffset: circumference
        }} animate={{
          strokeDashoffset
        }} transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1] // Custom easing for smoother feel
        }} strokeLinecap="round" stroke="currentColor" fill="transparent" r={radius} cx="32" cy="32" />
        </svg>
        {showLabel && <div className="absolute flex flex-col items-center">
            <span className="text-sm font-bold text-charcoal-900 tabular-nums">
              {Math.round(percentage)}%
            </span>
          </div>}
      </div>;
  }
  return <div className={`w-full ${className}`}>
      {(showLabel || label) && <div className="flex justify-between items-center mb-2">
          {label && <span className="text-xs font-bold text-charcoal-600 uppercase tracking-wide">
              {label}
            </span>}
          {showLabel && <span className="text-xs font-bold text-charcoal-900 tabular-nums">
              {Math.round(percentage)}%
            </span>}
        </div>}
      <div className={`w-full bg-gray-100 rounded-full overflow-hidden ${sizes[size]} shadow-inner`}>
        <motion.div className={`h-full rounded-full ${variants[variant]} relative`} initial={{
        width: 0
      }} whileInView={{
        width: `${percentage}%`
      }} viewport={{
        once: true
      }} transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] // Custom easing
      }}>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -translate-x-full animate-shimmer skew-x-[-15deg]" />
        </motion.div>
      </div>
    </div>;
}