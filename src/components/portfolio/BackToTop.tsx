'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RADIUS = 17;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function BackToTop() {
  const [visible, setVisible] = useState(() => typeof window !== 'undefined' && window.scrollY > 600);
  const [progress, setProgress] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
  });

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 600);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pct = Math.round(progress * 100);
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="group/btt relative fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary transition-colors"
          aria-label="Back to top"
        >
          <span className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-foreground text-background text-[11px] font-medium whitespace-nowrap opacity-0 group-hover/btt:opacity-100 transition-opacity pointer-events-none">
            Back to top
          </span>
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 40 40"
          >
            {/* Track */}
            <circle
              cx="20"
              cy="20"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-secondary"
              opacity="0.5"
            />
            {/* Progress */}
            <circle
              cx="20"
              cy="20"
              r={RADIUS}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          <span className="relative z-10 text-[10px] font-medium tabular-nums">
            {pct > 10 ? pct : ''}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
