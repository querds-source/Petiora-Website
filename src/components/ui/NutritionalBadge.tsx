import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from './Tooltip';
interface NutritionalBadgeProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'emerald' | 'amber' | 'rose' | 'blue';
  tooltip?: string;
  compact?: boolean;
}
export function NutritionalBadge({
  label,
  value,
  unit = '',
  icon,
  color = 'primary',
  tooltip,
  compact = false
}: NutritionalBadgeProps) {
  const colors = {
    primary: 'bg-primary-50 text-primary-800 border-primary-100',
    secondary: 'bg-secondary-50 text-secondary-800 border-secondary-100',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    amber: 'bg-amber-50 text-amber-800 border-amber-100',
    rose: 'bg-rose-50 text-rose-800 border-rose-100',
    blue: 'bg-blue-50 text-blue-800 border-blue-100'
  };
  const content = <motion.div whileHover={{
    scale: 1.02
  }} className={`
        inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 font-medium transition-colors
        ${colors[color]}
        ${compact ? 'text-xs' : 'text-sm'}
      `}>
      {icon && <span className="shrink-0 opacity-80">{icon}</span>}
      <div className="flex flex-col leading-none">
        {!compact && <span className="text-[10px] uppercase tracking-wider opacity-70 mb-0.5 font-bold">
            {label}
          </span>}
        <span className="font-bold tabular-nums">
          {value}
          <span className="text-[0.9em] opacity-80 ml-0.5">{unit}</span>
        </span>
      </div>
    </motion.div>;
  if (tooltip) {
    return <Tooltip content={tooltip}>{content}</Tooltip>;
  }
  return content;
}