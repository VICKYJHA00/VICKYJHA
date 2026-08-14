'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />

          {/* Modal content */}
          <motion.div
            className="relative w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl border border-border bg-background"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} details`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header: name + tag + role */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {project.name}
                  </h2>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    {project.tag}
                  </span>
                </div>
                {project.role && (
                  <p className="text-sm text-muted-foreground">
                    Role: <span className="text-foreground/80">{project.role}</span>
                  </p>
                )}
              </div>

              {/* Metrics row */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}

              {/* Long description */}
              <div className="mt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Challenges */}
              {project.challenges && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Challenges
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Key Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stack tags */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  Tech Stack
                </h3>
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
              </div>

              {/* Links row */}
              {(project.github || project.demo) && (
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
                    >
                      Live Demo
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
