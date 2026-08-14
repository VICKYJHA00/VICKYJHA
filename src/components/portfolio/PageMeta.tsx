'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Clock, Sparkles } from 'lucide-react';

export function PageMeta() {
  const [meta, setMeta] = useState<{ time: string; count: string }>({ time: '...', count: '...' });

  useEffect(() => {
    const id = setTimeout(() => {
      const textContent = document.body.innerText || '';
      const wordsPerMinute = 200;
      const wordCount = textContent.split(/\s+/).length;
      const minutes = Math.ceil(wordCount / wordsPerMinute);
      const time = minutes < 1 ? '< 1 min' : `~${minutes} min`;

      const storageKey = 'vicky_portfolio_visits';
      let count = 1;
      try {
        const stored = localStorage.getItem(storageKey);
        count = stored ? parseInt(stored, 10) + 1 : 1;
        localStorage.setItem(storageKey, String(count));
      } catch {
        // No-op in restricted environments
      }
      setMeta({ time, count: count > 1 ? `${count} visits` : 'First visit' });
    }, 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-6 py-4 flex-wrap"
    >
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
        <Eye size={12} />
        <span className="tabular-nums">{meta.count}</span>
      </div>
      <span className="text-border">·</span>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
        <Clock size={12} />
        <span>{meta.time} read</span>
      </div>
      <span className="text-border">·</span>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
        <Sparkles size={12} className="text-primary/40" />
        <span>Built with Next.js</span>
      </div>
    </motion.div>
  );
}
