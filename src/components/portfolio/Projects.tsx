'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { Github, ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from './SectionHeading';

const featuredNumbers = ['01', '02'];

const allTags = ['All', ...Array.from(new Set(projects.map((p) => p.tag)))];

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
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Things I&apos;ve built"
          description="A mix of production work, side projects, and open source. Each one taught me something new."
        />

        {/* Tag filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border border-transparent ${
                activeTag === tag
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/15 border-primary'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <AnimatePresence mode="wait">
          {showFeatured && (
            <motion.div
              key={`featured-${activeTag}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredFeatured.map((project, index) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-border bg-card/30 overflow-hidden hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer relative animated-border"
                  onClick={() => setSelected(project)}
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/70" />
                      <div className="absolute top-4 left-4 text-5xl font-black text-foreground/5 select-none lg:text-7xl">
                        {featuredNumbers[index]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col justify-center space-y-4">
                      {/* Expand icon hint */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight size={18} className="text-primary" />
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                          {project.tag}
                        </span>
                        {project.metrics?.map((m) => (
                          <span
                            key={m}
                            className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md"
                          >
                            {m}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="text-xs text-muted-foreground border border-border/60 px-2.5 py-1 rounded-md hover:border-primary/30 hover:text-foreground/80 transition-colors"
                          >
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
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={15} />
                            <span>Source</span>
                            {project.stars != null && (
                              <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                                <svg viewBox="0 0 16 16" width="12" height="12" className="fill-current">
                                  <path d="M8 .25a.75.75 0 0 1 .673.418l-.528.89-1.017 1.718a.75.75 0 0 1-.634 1.115l-.957 1.532-.634-.893L7.636 6.1l-1.017-1.718a.75.75 0 0 1 .231-1.057l1.017 1.718L5.25 6.75l-1.766 2.327a.75.75 0 0 1-1.094-.025L.25 8.25l2.55 1.869a.75.75 0 0 1-.963.086l-2.55-1.87-.017.06-.017.12V15.25a.75.75 0 0 1-.75.75Z" />
                                </svg>
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
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
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

        {/* Other Projects Grid */}
        <AnimatePresence mode="wait">
          {showOther && (
            <motion.div
              key={`other-${activeTag}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 pt-10 border-t border-border"
            >
              {filteredOther.map((project, index) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-xl border border-border bg-card/20 overflow-hidden hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col cursor-pointer relative shine-effect"
                  onClick={() => setSelected(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 brightness-[0.8]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Expand icon hint */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={16} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-medium text-primary">
                        {project.tag}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.stars != null && (
                          <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground/50">
                            <svg viewBox="0 0 16 16" width="10" height="10" className="fill-current"><path d="M8 .25a.75.75 0 0 1 .673.418l-.528.89-1.017 1.718a.75.75 0 0 1-.634 1.115l-.957 1.532-.634-.893L7.636 6.1l-1.017-1.718a.75.75 0 0 1 .231-1.057l1.017 1.718L5.25 6.75l-1.766 2.327a.75.75 0 0 1-1.094-.025L.25 8.25l2.55 1.869a.75.75 0 0 1-.963.086l-2.55-1.87-.017.06-.017.12V15.25a.75.75 0 0 1-.75.75Z"/></svg>
                            {project.stars}
                          </span>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`${project.name} GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4 pt-4 border-t border-border/50 text-[11px] text-muted-foreground">
                      {project.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {!showFeatured && !showOther && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="text-muted-foreground text-sm">No projects match &quot;{activeTag}&quot;.</p>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
