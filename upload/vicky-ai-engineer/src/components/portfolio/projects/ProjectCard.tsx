import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../../../data/projects";
import { TechChip } from "../TechIcon";
import {
  ThrylosVisual,
  QuizMasterVisual,
  DsaTrackerVisual,
  AiResumeAnalyzerVisual,
  SpringBootApiVisual,
  ShopNestVisual,
} from "./ProjectVisuals";

function renderProjectVisual(name: string) {
  switch (name) {
    case "THRYLOS":
      return <ThrylosVisual />;
    case "Quiz Master":
      return <QuizMasterVisual />;
    case "DSA Tracker":
      return <DsaTrackerVisual />;
    case "AI Resume Analyzer":
      return <AiResumeAnalyzerVisual />;
    case "Spring Boot REST API Boilerplate":
      return <SpringBootApiVisual />;
    case "ShopNest E-Commerce":
      return <ShopNestVisual />;
    default:
      return null;
  }
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const visualElement = renderProjectVisual(project.name);
  const isEven = index % 2 === 0;

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] border border-border/85 bg-card/30 p-6 md:p-10 shadow-elegant hover:border-primary/30 transition-colors group mb-12"
      >
        {/* Soft background glow */}
        <div
          className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full opacity-[0.04] blur-3xl transition-opacity group-hover:opacity-[0.08]"
          style={{ background: project.color }}
        />

        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Details Column */}
          <div className={`space-y-6 lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-primary border border-primary/20">
                {project.tag}
              </span>
              {project.metrics?.[0] && (
                <span className="rounded-full bg-neutral-900 border border-border/60 px-3 py-1 text-[11px] font-mono text-muted-foreground">
                  {project.metrics[0]}
                </span>
              )}
            </div>

            <div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>
              {project.shortName && (
                <p className="mt-2 text-xs font-mono uppercase tracking-[0.28em] text-muted-foreground">
                  // {project.shortName}
                </p>
              )}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              {project.description}
            </p>

            {project.highlight && (
              <div className="relative rounded-2xl border-l-[3px] border-primary/50 bg-neutral-900/50 p-4 font-mono text-xs text-foreground/80 leading-relaxed">
                <span className="text-primary font-bold">Metrics:</span> {project.highlight}
              </div>
            )}

            {/* Metrics List */}
            {project.metrics && project.metrics.length > 1 && (
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {project.metrics.slice(1).map((m) => (
                  <div
                    key={m}
                    className="bg-neutral-900/40 border border-border/40 rounded-xl px-3.5 py-2.5 text-muted-foreground"
                  >
                    ⚡ {m}
                  </div>
                ))}
              </div>
            )}

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.stack.map((item) => (
                <TechChip key={item.label} name={item.label} />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-3">
              {project.github && (
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 border border-border px-4 py-2.5 text-xs font-mono text-foreground hover:bg-neutral-800 transition-colors"
                >
                  <Github size={14} /> git clone
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Visual Simulation Column */}
          <div className={`lg:col-span-6 w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative p-2 rounded-[2rem] border border-border/80 bg-neutral-900/20 shadow-inner">
              {visualElement}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Non-featured secondary projects: standard grid card with embedded simulator
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/20 p-5 shadow-elegant hover:border-primary/30 transition-colors flex flex-col justify-between h-full"
    >
      <div className="space-y-4">
        {/* Visual pane */}
        <div className="rounded-2xl overflow-hidden border border-border/80 relative">
          {visualElement}
        </div>

        {/* Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary/80">
              {project.tag}
            </span>
            <div className="flex gap-1.5">
              {project.github && (
                <a
                  href={project.github}
                  aria-label={`${project.name} Github`}
                  className="p-1.5 rounded-lg border border-border hover:bg-neutral-900 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={13} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  aria-label={`${project.name} Demo`}
                  className="p-1.5 rounded-lg border border-border hover:bg-neutral-900 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>

          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-border/30 mt-4">
        {project.metrics?.[0] && (
          <div className="text-[10px] font-mono text-muted-foreground">⚡ {project.metrics[0]}</div>
        )}
        <div className="flex flex-wrap gap-1">
          {project.stack.map((item) => (
            <TechChip key={item.label} name={item.label} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
