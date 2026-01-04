import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'outline' | 'elevated' | 'flat' | 'premium' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  glow?: boolean;
  animateOnScroll?: boolean;
}
export function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
  interactive = false,
  onClick,
  glow = false,
  animateOnScroll = false
}: CardProps) {
  const variants = {
    default: 'bg-white border border-gray-100 shadow-soft-sm hover:border-gray-200',
    glass: 'bg-white/80 backdrop-blur-lg border border-white/60 shadow-soft-md supports-[backdrop-filter]:bg-white/60 hover:bg-white/90',
    outline: 'bg-transparent border border-gray-200 hover:border-gray-300',
    elevated: 'bg-white shadow-soft-lg border border-gray-50',
    flat: 'bg-gray-50 border border-transparent',
    premium: 'bg-white/95 backdrop-blur-xl border border-white/40 shadow-soft-xl supports-[backdrop-filter]:bg-white/80 ring-1 ring-white/50',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-white/60 shadow-soft-md'
  };
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10'
  };
  // Determine if the card should be interactive
  const isInteractive = interactive || !!onClick || hover;
  // Only apply hover styles if explicitly requested or interactive
  const hoverStyles = isInteractive ? 'cursor-pointer' : '';
  const glowStyles = glow ? 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary-500/5 before:via-transparent before:to-secondary-500/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500' : '';
  const classes = `
    rounded-2xl sm:rounded-3xl
    ${variants[variant]}
    ${paddings[padding]}
    ${hoverStyles}
    ${glowStyles}
    ${className}
    transition-colors duration-300
  `.trim();
  // If animateOnScroll is true, use motion.div with viewport props
  if (animateOnScroll) {
    return <motion.div className={classes} onClick={onClick} initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: '-50px'
    }} transition={{
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98]
    }} whileHover={isInteractive ? {
      y: -4,
      boxShadow: '0 12px 32px rgba(45, 74, 62, 0.12), 0 8px 16px rgba(45, 74, 62, 0.08)',
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    } : undefined} whileTap={isInteractive ? {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    } : undefined}>
        {children}
      </motion.div>;
  }
  // If interactive but not animating on scroll
  if (isInteractive) {
    return <motion.div className={classes} onClick={onClick} whileHover={{
      y: -4,
      boxShadow: '0 12px 32px rgba(45, 74, 62, 0.12), 0 8px 16px rgba(45, 74, 62, 0.08)',
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }} whileTap={{
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }}>
        {children}
      </motion.div>;
  }
  // Static card
  return <div className={classes} onClick={onClick}>
      {children}
    </div>;
}