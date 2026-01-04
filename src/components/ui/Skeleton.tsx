import React from 'react';
import { motion } from 'framer-motion';
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animate?: boolean;
}
export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  animate = true
}: SkeletonProps) {
  const variants = {
    text: 'rounded-md',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-xl'
  };
  const baseStyles = `bg-gray-200/80 ${variants[variant]} ${className}`;
  if (!animate) {
    return <div className={baseStyles} style={{
      width,
      height
    }} />;
  }
  return <div className={`relative overflow-hidden ${baseStyles}`} style={{
    width,
    height
  }}>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" initial={{
      x: '-100%'
    }} animate={{
      x: '100%'
    }} transition={{
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear'
    }} />
    </div>;
}