'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/timeline';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const tagConfig: Record<string, { color: string; icon: typeof Briefcase }> = {
  Certification: { color: 'border-amber-500/30 bg-amber-500/5', icon: Award },
  Internship: { color: 'border-emerald-500/30 bg-emerald-500/5', icon: Briefcase },
  Education: { color: 'border-sky-500/30 bg-sky-500/5', icon: GraduationCap },
};

export function Timeline() {
  return (
    <section id="experience" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;ve been
          </h2>
          <p className="text-muted-foreground mt-3">
            The short version of my journey so far.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const config = tagConfig[item.tag];
              const Icon = config?.icon ?? Briefcase;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-12"
                >
                  {/* Dot / Icon */}
                  <div className={`absolute left-0 top-1 w-10 h-10 rounded-xl border flex items-center justify-center ${config?.color ?? 'border-border bg-secondary'}`}>
                    <Icon size={16} className={
                      item.tag === 'Certification' ? 'text-amber-400' :
                      item.tag === 'Internship' ? 'text-emerald-400' :
                      'text-sky-400'
                    } />
                  </div>

                  <div className={`rounded-xl border border-border/60 bg-card/30 p-5 hover:border-border transition-colors`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground font-medium">
                        {item.date}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground/60">
                        —
                      </span>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                        item.tag === 'Certification' ? 'bg-amber-500/10 text-amber-400' :
                        item.tag === 'Internship' ? 'bg-emerald-500/10 text-emerald-400' :
                        'bg-sky-500/10 text-sky-400'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
