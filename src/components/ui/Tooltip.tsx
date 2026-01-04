import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'default' | 'info' | 'warning' | 'success';
  title?: string;
  footer?: ReactNode;
  delay?: number;
  maxWidth?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}
export function Tooltip({
  children,
  content,
  position = 'top',
  variant = 'default',
  title,
  footer,
  delay = 0.2,
  maxWidth = 250,
  className = '',
  size = 'sm'
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  let timeout: NodeJS.Timeout;
  const showTooltip = () => {
    timeout = setTimeout(() => setIsVisible(true), delay * 1000);
  };
  const hideTooltip = () => {
    clearTimeout(timeout);
    setIsVisible(false);
  };
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };
  const variants = {
    default: 'bg-charcoal-900/95 text-white border-transparent',
    info: 'bg-blue-600/95 text-white border-blue-500',
    warning: 'bg-amber-500/95 text-white border-amber-400',
    success: 'bg-emerald-600/95 text-white border-emerald-500'
  };
  const arrows = {
    top: `top-full left-1/2 -translate-x-1/2 border-t-current border-l-transparent border-r-transparent border-b-transparent`,
    bottom: `bottom-full left-1/2 -translate-x-1/2 border-b-current border-l-transparent border-r-transparent border-t-transparent`,
    left: `left-full top-1/2 -translate-y-1/2 border-l-current border-t-transparent border-b-transparent border-r-transparent`,
    right: `right-full top-1/2 -translate-y-1/2 border-r-current border-t-transparent border-b-transparent border-l-transparent`
  };
  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-sm'
  };
  const getIcon = () => {
    switch (variant) {
      case 'info':
        return <Info className="w-3.5 h-3.5 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="w-3.5 h-3.5 shrink-0" />;
      case 'success':
        return <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />;
      default:
        return null;
    }
  };
  return <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip} onFocus={showTooltip} onBlur={hideTooltip} onTouchStart={() => setIsVisible(!isVisible)}>
      {children}
      <AnimatePresence>
        {isVisible && <motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: position === 'top' ? 5 : position === 'bottom' ? -5 : 0,
        x: position === 'left' ? 5 : position === 'right' ? -5 : 0
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0
      }} exit={{
        opacity: 0,
        scale: 0.9
      }} transition={{
        duration: 0.2,
        ease: 'easeOut'
      }} className={`absolute z-50 backdrop-blur-md rounded-xl shadow-xl pointer-events-none border ${variants[variant]} ${className}`} style={{
        maxWidth
      }}>
            <div className={`${sizes[size]}`}>
              {title && <div className="flex items-center gap-2 font-bold mb-1 border-b border-white/20 pb-1">
                  {getIcon()}
                  <span>{title}</span>
                </div>}
              <div className="font-medium leading-relaxed">{content}</div>
              {footer && <div className="mt-2 pt-2 border-t border-white/20 text-[10px] opacity-90 flex items-center gap-1">
                  {footer}
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>}
            </div>

            {/* Arrow */}
            <div className={`absolute w-0 h-0 border-4 ${arrows[position]} ${variant === 'default' ? 'text-charcoal-900/95' : variant === 'info' ? 'text-blue-600/95' : variant === 'warning' ? 'text-amber-500/95' : 'text-emerald-600/95'}`} />
          </motion.div>}
      </AnimatePresence>
    </div>;
}