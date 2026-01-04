import React, { Children } from 'react';
import { motion } from 'framer-motion';
interface EnhancedScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number; // 0-1 visibility threshold
  staggerChildren?: number;
}
export function EnhancedScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.2,
  staggerChildren = 0
}: EnhancedScrollRevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: direction === 'none' ? 0.95 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
        staggerChildren
      }
    }
  };
  return <motion.div initial="hidden" whileInView="visible" viewport={{
    once: true,
    amount: threshold
  }} variants={variants} className={className}>
      {children}
    </motion.div>;
}