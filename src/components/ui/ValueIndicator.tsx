import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
interface ValueIndicatorProps {
  text: string;
  subtext?: string;
  icon?: React.ElementType;
  variant?: 'primary' | 'secondary' | 'neutral';
  delay?: number;
}
export function ValueIndicator({
  text,
  subtext,
  icon: Icon = Check,
  variant = 'primary',
  delay = 0
}: ValueIndicatorProps) {
  const colors = {
    primary: 'text-primary-600 bg-primary-50',
    secondary: 'text-secondary-600 bg-secondary-50',
    neutral: 'text-charcoal-600 bg-gray-100'
  };
  return <motion.div initial={{
    opacity: 0,
    x: -10
  }} whileInView={{
    opacity: 1,
    x: 0
  }} viewport={{
    once: true
  }} transition={{
    delay,
    duration: 0.5
  }} className="flex items-start gap-3">
      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${colors[variant]}`}>
        <Icon className="w-3 h-3" strokeWidth={3} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-charcoal-900 leading-tight">
          {text}
        </span>
        {subtext && <span className="text-xs text-charcoal-500 mt-0.5">{subtext}</span>}
      </div>
    </motion.div>;
}