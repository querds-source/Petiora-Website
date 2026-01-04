import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
interface ComparisonIndicatorProps {
  label: string;
  usValue: number; // 0-100
  themValue: number; // 0-100
  usLabel?: string;
  themLabel?: string;
  unit?: string;
  highlight?: boolean;
}
export function ComparisonIndicator({
  label,
  usValue,
  themValue,
  usLabel = 'Petiora',
  themLabel = 'Otros',
  unit = '%',
  highlight = false
}: ComparisonIndicatorProps) {
  return <div className={`p-4 rounded-xl ${highlight ? 'bg-primary-50/50 border border-primary-100' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-charcoal-900 text-sm">{label}</span>
        {highlight && <span className="text-[10px] font-bold text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
            Superior
          </span>}
      </div>

      <div className="space-y-3">
        {/* Us */}
        <div className="relative">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-bold text-primary-800 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> {usLabel}
            </span>
            <span className="font-bold text-primary-800">
              {usValue}
              {unit}
            </span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div initial={{
            width: 0
          }} whileInView={{
            width: `${usValue}%`
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.2
          }} className="h-full bg-primary-600 rounded-full" />
          </div>
        </div>

        {/* Them */}
        <div className="relative opacity-60 grayscale">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium text-charcoal-500 flex items-center gap-1">
              <XCircle className="w-3 h-3" /> {themLabel}
            </span>
            <span className="font-medium text-charcoal-500">
              {themValue}
              {unit}
            </span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div initial={{
            width: 0
          }} whileInView={{
            width: `${themValue}%`
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.4
          }} className="h-full bg-charcoal-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>;
}