'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { EASE_OUT_SMOOTH, VIEWPORT_ONCE } from '@/lib/animations';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
};

export function FadeIn({ children, delay = 0, direction = 'up', className, duration = 0.5 }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const directionOffset = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
    none: {},
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration, delay, ease: EASE_OUT_SMOOTH }}
      className={className}
    >
      {children}
    </motion.div>
  );
}