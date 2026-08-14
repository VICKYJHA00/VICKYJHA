'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Github, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Things I've built
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            A mix of production work, side projects, and open source. Each one taught me
            something new.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8">
          {featured.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-border bg-card/30 overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/60" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-center space-y-4">
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

                  <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs text-muted-foreground border border-border px-2.5 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={15} />
                        Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
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
        </div>

        {/* Other Projects Grid */}
        {other.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 pt-10 border-t border-border">
            {other.map((project, index) => (
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
                className="group rounded-xl border border-border bg-card/20 overflow-hidden hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium text-primary">
                      {project.tag}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.name} GitHub`}
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
