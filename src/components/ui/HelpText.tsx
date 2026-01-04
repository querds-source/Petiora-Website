import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Lightbulb, AlertTriangle, ChevronDown, X } from 'lucide-react';
interface HelpTextProps {
  children: React.ReactNode;
  type?: 'info' | 'tip' | 'warning';
  title?: string;
  collapsible?: boolean;
  dismissible?: boolean;
  className?: string;
}
export function HelpText({
  children,
  type = 'info',
  title,
  collapsible = false,
  dismissible = false,
  className = ''
}: HelpTextProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(!collapsible);
  if (!isVisible) return null;
  const config = {
    info: {
      icon: Info,
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-800',
      iconColor: 'text-blue-600'
    },
    tip: {
      icon: Lightbulb,
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      text: 'text-amber-900',
      iconColor: 'text-amber-600'
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-orange-50',
      border: 'border-orange-100',
      text: 'text-orange-900',
      iconColor: 'text-orange-600'
    }
  }[type];
  const Icon = config.icon;
  return <motion.div initial={{
    opacity: 0,
    y: 5
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    scale: 0.95
  }} className={`rounded-xl border ${config.bg} ${config.border} p-3 ${className}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${config.iconColor}`} />

        <div className="flex-1 min-w-0">
          {title && <div className={`flex items-center justify-between ${collapsible ? 'cursor-pointer' : ''}`} onClick={() => collapsible && setIsExpanded(!isExpanded)}>
              <h4 className={`text-sm font-bold ${config.text} mb-0.5`}>
                {title}
              </h4>
              {collapsible && <ChevronDown className={`w-4 h-4 ${config.iconColor} transition-transform ${isExpanded ? 'rotate-180' : ''}`} />}
            </div>}

          <AnimatePresence initial={false}>
            {isExpanded && <motion.div initial={collapsible ? {
            height: 0,
            opacity: 0
          } : undefined} animate={{
            height: 'auto',
            opacity: 1
          }} exit={{
            height: 0,
            opacity: 0
          }} transition={{
            duration: 0.2
          }}>
                <div className={`text-xs leading-relaxed ${config.text} ${title ? 'mt-1' : ''}`}>
                  {children}
                </div>
              </motion.div>}
          </AnimatePresence>
        </div>

        {dismissible && <button onClick={() => setIsVisible(false)} className={`p-1 rounded-full hover:bg-black/5 ${config.iconColor}`} aria-label="Cerrar">
            <X className="w-3.5 h-3.5" />
          </button>}
      </div>
    </motion.div>;
}