import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Info, CheckCircle2, Command } from 'lucide-react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'terracotta' | 'outline' | 'ghost' | 'danger' | 'white' | 'gradient' | 'soft' | 'info' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  pulse?: boolean;
  glow?: boolean;
  shortcut?: string;
}
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  pulse = false,
  glow = false,
  shortcut,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = 'group inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed relative overflow-hidden select-none tracking-wide active:scale-[0.98]';
  const variants = {
    primary: 'bg-primary-600 text-white shadow-soft-md border border-transparent hover:bg-primary-700 hover:shadow-soft-lg active:shadow-inner-sm',
    secondary: 'bg-charcoal-800 text-white shadow-soft-md border border-transparent hover:bg-charcoal-900 hover:shadow-soft-lg active:shadow-inner-sm',
    terracotta: 'bg-secondary-500 text-white shadow-soft-md border border-transparent hover:bg-secondary-600 hover:shadow-soft-lg active:shadow-inner-sm',
    outline: 'bg-transparent border-2 border-primary-600/30 text-primary-700 hover:bg-primary-50/50 hover:border-primary-600 hover:text-primary-800 active:bg-primary-100/50',
    ghost: 'bg-transparent text-primary-700 hover:bg-primary-50/50 hover:text-primary-800 border border-transparent active:bg-primary-100/50',
    danger: 'bg-red-600 text-white shadow-soft-md border border-transparent hover:bg-red-700 hover:shadow-soft-lg active:shadow-inner-sm',
    white: 'bg-white text-charcoal-900 shadow-soft-sm border border-gray-200 hover:shadow-soft-md hover:border-gray-300 hover:bg-gray-50 active:shadow-inner-sm',
    gradient: 'bg-gradient-to-r from-primary-700 to-primary-600 text-white shadow-soft-md border border-transparent hover:from-primary-800 hover:to-primary-700 hover:shadow-soft-lg active:shadow-inner-sm',
    soft: 'bg-primary-50 text-primary-800 border border-primary-100 hover:bg-primary-100 hover:border-primary-200 active:bg-primary-200 shadow-soft-xs',
    info: 'bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:bg-blue-200 shadow-soft-xs',
    success: 'bg-emerald-600 text-white shadow-soft-md border border-transparent hover:bg-emerald-700 hover:shadow-soft-lg active:shadow-inner-sm'
  };
  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5 min-h-[2.25rem]',
    md: 'px-6 py-2.5 text-sm gap-2 min-h-[2.75rem]',
    lg: 'px-8 py-3.5 text-base gap-2.5 min-h-[3.25rem]',
    xl: 'px-10 py-4 text-lg gap-3 min-h-[3.75rem]'
  };
  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();
  return <motion.button className={classes} disabled={disabled || isLoading} onClick={onClick} whileHover={{
    y: disabled ? 0 : -1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }} whileTap={{
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1
    }
  }} {...props}>
      {/* Glow Effect */}
      {glow && !disabled && <div className="absolute inset-0 rounded-xl bg-primary-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}

      {/* Pulse Effect for CTAs */}
      {pulse && !disabled && !isLoading && <span className="absolute inset-0 rounded-xl animate-pulse opacity-[0.1] bg-current pointer-events-none" />}

      {/* CSS-based Ripple Effect on Active */}
      <span className="absolute inset-0 bg-current opacity-0 active:opacity-10 transition-opacity duration-200 pointer-events-none" />

      <span className={`relative z-10 flex items-center justify-center gap-2 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
        {leftIcon && <span className="flex-shrink-0 group-hover:-translate-x-0.5 transition-transform duration-300">
            {leftIcon}
          </span>}

        {children}

        {rightIcon && <span className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-300">
            {rightIcon}
          </span>}

        {shortcut && <span className="ml-2 hidden lg:inline-flex items-center gap-0.5 text-[10px] font-medium opacity-60 bg-black/10 px-1.5 py-0.5 rounded border border-white/10">
            <Command className="w-3 h-3" /> {shortcut}
          </span>}
      </span>

      {isLoading && <div className="absolute inset-0 flex items-center justify-center z-20 gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          {loadingText && <span className="text-sm font-medium">{loadingText}</span>}
        </div>}
    </motion.button>;
}