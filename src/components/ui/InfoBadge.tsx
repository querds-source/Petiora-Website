import React, { useState } from 'react';
import { Info, ChevronDown, ExternalLink, Award, BookOpen } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { Badge } from './Badge';
import { motion, AnimatePresence } from 'framer-motion';
interface InfoBadgeProps {
  label: string;
  tooltipContent: React.ReactNode;
  variant?: 'default' | 'outline' | 'glass' | 'ghost' | 'scientific';
  size?: 'sm' | 'md';
  icon?: React.ElementType;
  className?: string;
  expandable?: boolean;
  details?: React.ReactNode;
  source?: {
    name: string;
    link?: string;
    year?: string;
  };
}
export function InfoBadge({
  label,
  tooltipContent,
  variant = 'glass',
  size = 'sm',
  icon: Icon = Info,
  className = '',
  expandable = false,
  details,
  source
}: InfoBadgeProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const badgeContent = <div className={`inline-flex flex-col ${className}`} onClick={e => {
    if (expandable) {
      e.preventDefault();
      e.stopPropagation();
      setIsExpanded(!isExpanded);
    }
  }}>
      <Badge variant={variant === 'scientific' ? 'glass' : variant} size={size} className={`
          flex items-center gap-1.5 transition-colors 
          ${expandable ? 'cursor-pointer hover:bg-primary-50 hover:text-primary-800' : 'cursor-help'}
          ${variant === 'scientific' ? 'border-primary-200 bg-primary-50/50 text-primary-900' : ''}
        `}>
        {variant === 'scientific' ? <BookOpen className="w-3.5 h-3.5 text-primary-600" /> : <Icon className="w-3.5 h-3.5 opacity-70" />}
        <span>{label}</span>
        {expandable && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />}
      </Badge>

      <AnimatePresence>
        {isExpanded && (details || source) && <motion.div initial={{
        height: 0,
        opacity: 0,
        marginTop: 0
      }} animate={{
        height: 'auto',
        opacity: 1,
        marginTop: 4
      }} exit={{
        height: 0,
        opacity: 0,
        marginTop: 0
      }} className="overflow-hidden bg-white border border-gray-100 rounded-lg shadow-soft-lg z-20 max-w-[250px]">
            <div className="p-3 text-xs text-charcoal-600 space-y-2">
              {details && <div>{details}</div>}

              {source && <div className="pt-2 border-t border-gray-100 mt-2">
                  <p className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider mb-1">
                    Fuente:
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium italic text-charcoal-800">
                      {source.name}
                    </span>
                    {source.year && <span className="text-[10px] text-charcoal-400">
                        ({source.year})
                      </span>}
                  </div>
                  {source.link && <a href={source.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-primary-600 hover:underline mt-1" onClick={e => e.stopPropagation()}>
                      Ver estudio <ExternalLink className="w-2.5 h-2.5" />
                    </a>}
                </div>}
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
  if (expandable) {
    return badgeContent;
  }
  return <Tooltip content={tooltipContent}>{badgeContent}</Tooltip>;
}