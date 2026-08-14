'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/timeline';

const tagColors: Record<string, string> = {
  Certification: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Internship: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Education: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
};

export function Timeline() {
  return (
    <section id="experience" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I've been
          </h2>
          <p className="text-muted-foreground mt-3">
            The short version of my journey so far.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-muted-foreground font-medium">
                      {item.date}
                    </span>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                        tagColors[item.tag] ?? 'bg-secondary text-muted-foreground border-border'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
