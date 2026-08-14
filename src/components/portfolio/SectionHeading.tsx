'use client';

import { motion } from 'framer-motion';

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
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="relative w-5 h-[2px] rounded-full bg-primary">
          <span className="absolute -left-1.5 -top-1 w-1.5 h-1.5 rounded-full bg-primary/40 animate-ping" />
        </span>
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
