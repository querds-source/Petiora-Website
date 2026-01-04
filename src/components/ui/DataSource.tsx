import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, FileText, Award, ChevronDown } from 'lucide-react';
interface DataSourceProps {
  source: string;
  year?: string;
  link?: string;
  type?: 'study' | 'certification' | 'report' | 'article';
  className?: string;
  compact?: boolean;
}
export function DataSource({
  source,
  year,
  link,
  type = 'study',
  className = '',
  compact = false
}: DataSourceProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const getIcon = () => {
    switch (type) {
      case 'certification':
        return Award;
      case 'report':
        return FileText;
      case 'article':
        return BookOpen;
      default:
        return BookOpen;
    }
  };
  const Icon = getIcon();
  if (compact) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 text-[10px] text-charcoal-500 hover:text-primary-600 transition-colors bg-gray-50 hover:bg-primary-50 px-2 py-1 rounded-md border border-gray-200 hover:border-primary-200 ${className}`}>
        <Icon className="w-3 h-3" />
        <span className="font-medium truncate max-w-[150px]">{source}</span>
        {year && <span className="opacity-70">({year})</span>}
      </a>;
  }
  return <div className={`border border-gray-200 rounded-xl bg-white overflow-hidden ${className}`}>
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
            <Icon className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-charcoal-700">
            Fuente Científica
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isExpanded && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.2
      }}>
            <div className="px-3 pb-3 pt-0 border-t border-gray-100 mt-1">
              <p className="text-xs text-charcoal-600 pt-3 italic leading-relaxed">
                "{source}"
              </p>
              <div className="flex items-center justify-between mt-2">
                {year && <span className="text-[10px] font-bold text-charcoal-400 bg-gray-100 px-1.5 py-0.5 rounded">
                    Año: {year}
                  </span>}
                {link && <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-bold text-primary-600 hover:text-primary-800 hover:underline">
                    Ver estudio completo <ExternalLink className="w-3 h-3" />
                  </a>}
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}