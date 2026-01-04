import React from 'react';
import { motion } from 'framer-motion';
interface SkeletonLoaderProps {
  className?: string;
  count?: number;
  variant?: 'text' | 'rectangular' | 'circular' | 'card' | 'product';
  height?: string | number;
  width?: string | number;
}
export function SkeletonLoader({
  className = '',
  count = 1,
  variant = 'rectangular',
  height,
  width
}: SkeletonLoaderProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'text':
        return 'rounded-md';
      case 'card':
      case 'product':
        return 'rounded-3xl';
      default:
        return 'rounded-xl';
    }
  };
  const items = Array.from({
    length: count
  });
  if (variant === 'product') {
    return <>
        {items.map((_, index) => <div key={index} className={`flex flex-col gap-4 ${className}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gray-100">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" initial={{
            x: '-100%'
          }} animate={{
            x: '100%'
          }} transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
            delay: index * 0.1
          }} />
            </div>
            <div className="space-y-3 px-2">
              <div className="h-4 w-2/3 rounded-md bg-gray-100 relative overflow-hidden">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" initial={{
              x: '-100%'
            }} animate={{
              x: '100%'
            }} transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
              delay: index * 0.1 + 0.1
            }} />
              </div>
              <div className="h-3 w-full rounded-md bg-gray-100 relative overflow-hidden">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" initial={{
              x: '-100%'
            }} animate={{
              x: '100%'
            }} transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
              delay: index * 0.1 + 0.2
            }} />
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="h-6 w-16 rounded-md bg-gray-100 relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" initial={{
                x: '-100%'
              }} animate={{
                x: '100%'
              }} transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'linear',
                delay: index * 0.1 + 0.3
              }} />
                </div>
                <div className="h-10 w-24 rounded-xl bg-gray-100 relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" initial={{
                x: '-100%'
              }} animate={{
                x: '100%'
              }} transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'linear',
                delay: index * 0.1 + 0.4
              }} />
                </div>
              </div>
            </div>
          </div>)}
      </>;
  }
  return <>
      {items.map((_, index) => <div key={index} className={`bg-gray-100 overflow-hidden relative ${getVariantClasses()} ${className}`} style={{
      height: height || (variant === 'text' ? '1em' : '100%'),
      width: width || '100%'
    }}>
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" initial={{
        x: '-100%'
      }} animate={{
        x: '100%'
      }} transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
        delay: index * 0.1
      }} />
        </div>)}
    </>;
}