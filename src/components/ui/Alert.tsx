import React, { useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, Info, XCircle, X } from 'lucide-react';
interface AlertProps {
  children: ReactNode;
  title?: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: boolean;
  action?: ReactNode;
  className?: string;
}
export function Alert({
  children,
  title,
  variant = 'info',
  dismissible = false,
  onDismiss,
  icon = true,
  action,
  className = ''
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };
  const variants = {
    info: {
      container: 'bg-blue-50 border-blue-100 shadow-sm shadow-blue-500/5',
      icon: 'text-blue-500',
      title: 'text-blue-900',
      text: 'text-blue-700',
      Icon: Info
    },
    success: {
      container: 'bg-emerald-50 border-emerald-100 shadow-sm shadow-emerald-500/5',
      icon: 'text-emerald-500',
      title: 'text-emerald-900',
      text: 'text-emerald-700',
      Icon: CheckCircle2
    },
    warning: {
      container: 'bg-amber-50 border-amber-100 shadow-sm shadow-amber-500/5',
      icon: 'text-amber-500',
      title: 'text-amber-900',
      text: 'text-amber-700',
      Icon: AlertCircle
    },
    error: {
      container: 'bg-rose-50 border-rose-100 shadow-sm shadow-rose-500/5',
      icon: 'text-rose-500',
      title: 'text-rose-900',
      text: 'text-rose-700',
      Icon: XCircle
    }
  };
  const style = variants[variant];
  const IconComponent = style.Icon;
  return <AnimatePresence>
      {isVisible && <motion.div initial={{
      opacity: 0,
      y: -10,
      scale: 0.98
    }} animate={{
      opacity: 1,
      y: 0,
      scale: 1
    }} exit={{
      opacity: 0,
      height: 0,
      marginBottom: 0,
      scale: 0.95
    }} transition={{
      duration: 0.3,
      ease: 'easeOut'
    }} className={`
            relative w-full rounded-xl border p-4 mb-4 overflow-hidden
            ${style.container}
            ${className}
          `}>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="flex items-start gap-4 relative z-10">
            {icon && <div className={`flex-shrink-0 mt-0.5 p-1.5 bg-white rounded-lg shadow-sm ${style.icon}`}>
                <IconComponent className="w-5 h-5" />
              </div>}

            <div className="flex-1 min-w-0 pt-0.5">
              {title && <h5 className={`font-bold mb-1 text-base ${style.title}`}>
                  {title}
                </h5>}
              <div className={`text-sm leading-relaxed font-medium ${style.text}`}>
                {children}
              </div>
              {action && <div className="mt-4">{action}</div>}
            </div>

            {dismissible && <button onClick={handleDismiss} className={`
                  flex-shrink-0 p-1.5 rounded-lg transition-all duration-200
                  hover:bg-black/5 active:bg-black/10 ${style.text}
                  focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current
                `} aria-label="Dismiss">
                <X className="w-4 h-4" />
              </button>}
          </div>
        </motion.div>}
    </AnimatePresence>;
}