'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

interface TechItem {
  name: string;
  category: string;
  proficiency: number;
  yearsUsed: number;
  icon: string;
  description: string;
  color: string;
}

const techStack: TechItem[] = [
  { name: 'Java 21', category: 'Backend', proficiency: 92, yearsUsed: 4, icon: '☕', description: 'Primary language for all backend services', color: 'from-orange-500 to-amber-500' },
  { name: 'Spring Boot', category: 'Backend', proficiency: 90, yearsUsed: 3, icon: '🌿', description: 'Go-to framework for REST APIs and microservices', color: 'from-green-500 to-emerald-500' },
  { name: 'PostgreSQL', category: 'Backend', proficiency: 85, yearsUsed: 3, icon: '🐘', description: 'Advanced queries, indexing, and performance tuning', color: 'from-blue-400 to-sky-500' },
  { name: 'Redis', category: 'Backend', proficiency: 78, yearsUsed: 2, icon: '⚡', description: 'Caching layers, session storage, rate limiting', color: 'from-red-500 to-rose-500' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 82, yearsUsed: 2, icon: '🔷', description: 'Type-safe frontend and full-stack development', color: 'from-blue-500 to-indigo-500' },
  { name: 'React / Next.js', category: 'Frontend', proficiency: 80, yearsUsed: 2, icon: '⚛', description: 'Server components, SSR, and interactive UIs', color: 'from-cyan-400 to-teal-400' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 88, yearsUsed: 2, icon: '🎨', description: 'Utility-first CSS for rapid UI development', color: 'from-teal-400 to-cyan-400' },
  { name: 'Docker', category: 'DevOps', proficiency: 83, yearsUsed: 2, icon: '🐳', description: 'Containerization, multi-stage builds, Compose', color: 'from-blue-500 to-cyan-500' },
  { name: 'AWS', category: 'DevOps', proficiency: 72, yearsUsed: 2, icon: '☁', description: 'EC2, S3, Lambda, RDS, CloudFront deployment', color: 'from-amber-500 to-orange-500' },
  { name: 'Git / GitHub', category: 'DevOps', proficiency: 90, yearsUsed: 5, icon: '🔀', description: 'Branching strategies, CI/CD, open source workflows', color: 'from-gray-400 to-zinc-400' },
  { name: 'OpenAI API', category: 'AI', proficiency: 85, yearsUsed: 1, icon: '🧠', description: 'GPT integrations, embeddings, function calling, RAG', color: 'from-violet-400 to-purple-500' },
  { name: 'Python', category: 'AI', proficiency: 75, yearsUsed: 2, icon: '🐍', description: 'Scripting, data processing, ML model integration', color: 'from-yellow-400 to-green-500' },
];

const categories = ['All', ...Array.from(new Set(techStack.map((t) => t.category)))];

function ProficiencyRing({ value, color, size = 44 }: { value: number; color: string; size?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="stroke-secondary"
          strokeWidth={3}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={`stroke-current text-primary`}
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold tabular-nums text-foreground">
        {value}
      </span>
    </div>
  );
}

export function TechStackExplorer() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<TechItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'All'
    ? techStack
    : techStack.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <SectionHeading
          label="Tech Stack"
          title="Tools I use daily"
          description="Hover over any technology to see more details. Filter by category to narrow things down."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border border-transparent ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/15 border-primary'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onMouseEnter={() => setHoveredItem(tech)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative rounded-xl border border-border/60 bg-card/30 p-4 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5" role="img" aria-hidden>{tech.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold truncate">{tech.name}</h4>
                      <span className="text-[10px] text-muted-foreground/60 shrink-0">{tech.yearsUsed}y</span>
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{tech.category}</p>
                  </div>
                  <ProficiencyRing value={tech.proficiency} color={tech.color} size={38} />
                </div>

                <AnimatePresence>
                  {hoveredItem === tech && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-border/40">
                        <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1 rounded-full bg-secondary overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.proficiency}%` }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground tabular-nums">{tech.proficiency}%</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
