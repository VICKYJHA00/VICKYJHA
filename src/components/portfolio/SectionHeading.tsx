'use client';

import { motion } from 'framer-motion';
import { EASE_OUT_SMOOTH, VIEWPORT_ONCE } from '@/lib/animations';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ label, title, description, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.5, ease: EASE_OUT_SMOOTH }}
      className={`mb-14 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-4 h-[2px] rounded-full bg-primary" />
        <p className="text-sm text-primary font-medium tracking-wide">{label}</p>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
