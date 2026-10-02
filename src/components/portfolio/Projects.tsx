'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { Github, ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from './SectionHeading';
import {
  EASE_OUT_SMOOTH,
  VIEWPORT_TIGHT,
  staggerContainer,
  fadeInUp,
} from '@/lib/animations';

const allTags = ['All', ...Array.from(new Set(projects.map((p) => p.tag)))];

/** Proper 16×16 star icon path */
const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" width="12" height="12" className={className}>
    <path d="M8 .25a.75.75 0 0 1 .673.418l.562 1.14.294.596a.75.75 0 0 0 .564.414l1.323.193a.75.75 0 0 1 .415 1.279l-.957.933-.419.41a.75.75 0 0 0-.216.665l.223 1.317a.75.75 0 0 1-1.089.79l-1.183-.622-.542-.285a.75.75 0 0 0-.699 0l-.542.285-1.183.622a.75.75 0 0 1-1.089-.79l.223-1.317a.75.75 0 0 0-.216-.665l-.419-.41-.957-.933a.75.75 0 0 1 .415-1.279l1.323-.193a.75.75 0 0 0 .564-.414l.294-.596.562-1.14A.75.75 0 0 1 8 .25Z" />
  </svg>
);

export function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  const filteredOther = activeTag === 'All'
    ? other
    : other.filter((p) => p.tag === activeTag);

  const filteredFeatured = activeTag === 'All'
    ? featured
    : featured.filter((p) => p.tag === activeTag);

  const showFeatured = filteredFeatured.length > 0;
  const showOther = filteredOther.length > 0;

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/80 bg-[#09090b]/95 p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
        <SectionHeading
          label="Projects"
          title="Things I&apos;ve built"
          description="A mix of production work, side projects, and open source. Each one taught me something new."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_TIGHT}
          className="mb-10 flex flex-wrap gap-2"
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              variants={fadeInUp}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/15'
                  : 'border-border bg-secondary/50 text-muted-foreground hover:border-border hover:bg-secondary hover:text-foreground'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {showFeatured && (
            <motion.div
              key={`featured-${activeTag}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE_OUT_SMOOTH }}
              className="space-y-8"
            >
              {filteredFeatured.map((project, index) => (
                <motion.article
                  key={project.name}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_TIGHT}
                  custom={index * 0.1}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-border bg-[#111113]/85 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
                  onClick={() => setSelected(project)}
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-[280px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-transparent" />
                    </div>

                    <div className="relative flex flex-col justify-center space-y-4 p-6 sm:p-8">
                      <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={18} className="text-primary" />
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          <span className="text-[10px] font-semibold text-primary/60">{String(index + 1).padStart(2, '0')}</span>
                          {project.tag}
                        </span>
                        {project.metrics?.map((m) => (
                          <span key={m} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                            {m}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                        {project.name}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                          <span key={s} className="rounded-full border border-border/70 bg-secondary/30 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-foreground">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={15} />
                            <span>Source</span>
                            {project.stars != null && (
                              <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                                <StarIcon className="fill-current" />
                                {project.stars}
                              </span>
                            )}
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live demo
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showOther && (
            <motion.div
              key={`other-${activeTag}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE_OUT_SMOOTH }}
              className="mt-10 grid gap-5 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {filteredOther.map((project, index) => (
                <motion.article
                  key={project.name}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_TIGHT}
                  custom={index * 0.08}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[1.4rem] border border-border bg-[#111113]/75 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                  onClick={() => setSelected(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] brightness-[0.8]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                    <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={16} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-primary">{project.tag}</span>
                      <div className="flex items-center gap-1.5">
                        {project.stars != null && (
                          <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground/60">
                            <StarIcon className="fill-current" />
                            {project.stars}
                          </span>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={`${project.name} GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 border-t border-border/50 pt-3">
                      {project.stack.map((s) => (
                        <span key={s} className="rounded-full bg-secondary/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!showFeatured && !showOther && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center">
            <p className="text-muted-foreground text-sm">No projects match &quot;{activeTag}&quot;.</p>
          </motion.div>
        )}

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
