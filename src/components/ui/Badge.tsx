import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Award, Info } from 'lucide-react';
import { Tooltip } from './Tooltip';
interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'glass' | 'glass-dark' | 'info' | 'certified' | 'new' | 'trending';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  tooltip?: string;
}
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  animate = false,
  icon,
  dismissible = false,
  onDismiss,
  tooltip
}: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-charcoal-800 border border-gray-200',
    primary: 'bg-primary-50 text-primary-800 border border-primary-100',
    secondary: 'bg-secondary-50 text-secondary-800 border border-secondary-100',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-100',
    warning: 'bg-amber-50 text-amber-800 border border-amber-100',
    error: 'bg-red-50 text-red-800 border border-red-100',
    outline: 'bg-transparent border border-charcoal-200 text-charcoal-600',
    glass: 'bg-white/80 backdrop-blur-md border border-white/50 text-charcoal-900 shadow-sm',
    'glass-dark': 'bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-white shadow-sm',
    info: 'bg-blue-50 text-blue-800 border border-blue-100',
    certified: 'bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-900 border border-amber-200 shadow-sm',
    new: 'bg-primary-600 text-white border border-primary-700 shadow-sm',
    trending: 'bg-rose-50 text-rose-700 border border-rose-100'
  };
  const sizes = {
    xs: 'px-1.5 py-0.5 text-[9px] gap-0.5',
    sm: 'px-2 py-0.5 text-[10px] gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2'
  };
  const getIcon = () => {
    if (icon) return icon;
    switch (variant) {
      case 'certified':
        return <Award className="w-3 h-3" />;
      case 'trending':
        return <TrendingUp className="w-3 h-3" />;
      case 'info':
        return <Info className="w-3 h-3" />;
      default:
        return null;
    }
  };
  const BadgeContent = <span className={`
      inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wide relative
      ${variants[variant]}
      ${sizes[size]}
      ${className}
      ${dismissible ? 'pr-1' : ''}
    `}>
      {variant === 'new' && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full animate-ping" />}

      {getIcon() && <span className="flex-shrink-0">{getIcon()}</span>}
      {children}

      {dismissible && <button onClick={e => {
      e.stopPropagation();
      onDismiss?.();
    }} className="ml-1 p-0.5 hover:bg-black/10 rounded-full transition-colors" aria-label="Dismiss">
          <X className="w-3 h-3" />
        </button>}
    </span>;
  const Component = animate ? motion.div : 'div';
  const content = <Component className="inline-block" {...animate ? {
    initial: {
      scale: 0.9,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    exit: {
      scale: 0.9,
      opacity: 0
    },
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  } : {}}>
      {BadgeContent}
    </Component>;
  if (tooltip) {
    return <Tooltip content={tooltip}>{content}</Tooltip>;
  }
  return content;
}