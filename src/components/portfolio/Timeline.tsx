'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/timeline';
import { GraduationCap, Briefcase, Award, Github, Users, Code2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { EASE_OUT_SMOOTH } from '@/lib/animations';

const tagConfig: Record<string, { color: string; icon: typeof Briefcase; textColor: string; tagBg: string }> = {
  Certification: { color: 'border-amber-500/30 bg-amber-500/5', icon: Award, textColor: 'text-amber-400', tagBg: 'bg-amber-500/10 text-amber-400' },
  Internship: { color: 'border-emerald-500/30 bg-emerald-500/5', icon: Briefcase, textColor: 'text-emerald-400', tagBg: 'bg-emerald-500/10 text-emerald-400' },
  Education: { color: 'border-sky-500/30 bg-sky-500/5', icon: GraduationCap, textColor: 'text-sky-400', tagBg: 'bg-sky-500/10 text-sky-400' },
  'Open Source': { color: 'border-orange-500/30 bg-orange-500/5', icon: Github, textColor: 'text-orange-400', tagBg: 'bg-orange-500/10 text-orange-400' },
  Leadership: { color: 'border-rose-500/30 bg-rose-500/5', icon: Users, textColor: 'text-rose-400', tagBg: 'bg-rose-500/10 text-rose-400' },
  Project: { color: 'border-sky-500/30 bg-sky-500/5', icon: Code2, textColor: 'text-sky-400', tagBg: 'bg-sky-500/10 text-sky-400' },
};

const defaultConfig = { color: 'border-border bg-secondary', icon: Briefcase, textColor: 'text-sky-400', tagBg: 'bg-sky-500/10 text-sky-400' };

export function Timeline() {
  return (
    <section id="experience" className="py-28 px-6 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I&apos;ve been"
          description="The short version of my journey so far."
        />

        <div className="relative">
          {/* Vertical line — animated */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px">
            <motion.div
              className="w-full bg-border origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: EASE_OUT_SMOOTH }}
              style={{ height: '100%' }}
            />
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const config = tagConfig[item.tag] ?? defaultConfig;
              const Icon = config.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-12 group"
                >
                  {/* Dot / Icon */}
                  <div className={`absolute left-0 top-1 w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${config.color} group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:bg-primary/20`}>
                    <Icon size={16} className={config.textColor} />
                  </div>

                  <motion.div
                    whileHover={{ borderLeftColor: 'var(--color-primary-40, rgba(249,115,22,0.4))' }}
                    className="rounded-xl border border-border/60 bg-card/30 p-5 hover:border-border transition-all duration-300 border-l-2 border-l-border relative overflow-hidden hover:shadow-sm hover:shadow-primary/5"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground font-medium">
                        {item.date}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground/60">
                        —
                      </span>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${config.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {item.description}
                    </p>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
