import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}
export function ScrollReveal({
  children,
  width = 'fit-content',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  className = '',
  once = true,
  threshold = 0.2
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold
  });
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return {
          y: distance,
          x: 0
        };
      case 'down':
        return {
          y: -distance,
          x: 0
        };
      case 'left':
        return {
          x: distance,
          y: 0
        };
      case 'right':
        return {
          x: -distance,
          y: 0
        };
      case 'none':
        return {
          x: 0,
          y: 0
        };
      default:
        return {
          y: distance,
          x: 0
        };
    }
  };
  const initial = {
    opacity: 0,
    ...getInitialPosition()
  };
  const animate = {
    opacity: 1,
    x: 0,
    y: 0
  };
  return <div ref={ref} style={{
    width
  }} className={className}>
      <motion.div initial={initial} animate={isInView ? animate : initial} transition={{
      duration,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98]
    }}>
        {children}
      </motion.div>
    </div>;
}