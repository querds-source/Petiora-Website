import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}
export function AnimatedCounter({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0
  });
  const displayValue = useTransform(springValue, current => {
    if (decimals === 0) {
      return Math.round(current).toLocaleString();
    }
    return current.toFixed(decimals);
  });
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);
  return <span ref={ref} className={`inline-flex items-baseline ${className}`}>
      {prefix && <span className="mr-0.5">{prefix}</span>}
      <motion.span>{displayValue}</motion.span>
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>;
}