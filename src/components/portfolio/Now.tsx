'use client';

import { motion } from 'framer-motion';
import { MapPin, Music, Coffee, BookOpen } from 'lucide-react';

const nowItems = [
  {
    icon: BookOpen,
    label: 'Studying',
    value: 'AWS Solutions Architect Professional',
  },
  {
    icon: Coffee,
    label: 'Building',
    value: 'A RAG-powered code review tool',
  },
  {
    icon: Music,
    label: 'Listening to',
    value: 'Lo-fi beats & Tame Impala',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'India, open to remote',
  },
];

export function Now() {
  return (
    <section className="py-20 px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sm text-primary font-medium mb-3">Now</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What I&apos;m up to lately
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated June 2025
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nowItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-xl border border-border/50 bg-card/20 p-5 hover:border-primary/20 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="relative flex h-2 w-2 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground/90 leading-snug">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
