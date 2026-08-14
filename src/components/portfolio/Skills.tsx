'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillGroups } from '@/data/skills';

const categoryIcons: Record<string, string> = {
  Backend: '⚙',
  Frontend: '🎨',
  'AI & Tools': '🤖',
  DevOps: '🔧',
};

const categoryColors: Record<string, string> = {
  Backend: 'from-orange-500 to-amber-400',
  Frontend: 'from-cyan-400 to-teal-400',
  'AI & Tools': 'from-violet-400 to-purple-400',
  DevOps: 'from-emerald-400 to-green-400',
};

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What I work with
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            I&apos;m strongest on the backend, but I can hold my own on the frontend too.
            Here&apos;s a rough breakdown.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/20 transition-all duration-300 group/skill relative overflow-hidden"
            >
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-base">{categoryIcons[group.category]}</span>
                <h3 className="text-base font-semibold">{group.category}</h3>
                <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                  {group.items.length} skills
                </span>
              </div>

              <div className="space-y-5">
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/90">{skill.name}</span>
                      <span className="text-muted-foreground tabular-nums text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: gi * 0.1 + si * 0.05 + 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          categoryColors[group.category] ?? 'from-orange-500 to-amber-400'
                        } opacity-90`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
