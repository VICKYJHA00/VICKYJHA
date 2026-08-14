'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { CONTACT } from '@/data/contact';
import {
  EASE_OUT_EXPO,
  EASE_OUT_SMOOTH,
} from '@/lib/animations';

const taglines = [
  'Backend engineer with a thing for Spring Boot, distributed systems, and making AI tools actually useful.',
  'Currently finishing my CS degree and looking for the right team to join.',
  'I build APIs that handle millions of requests and don\'t wake me up at 3 AM.',
];

const techBadges = [
  { name: 'Spring Boot', icon: '☕' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'React', icon: '⚛' },
  { name: 'AI/ML', icon: '🧠' },
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background: single subtle radial glow + fine grid */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 fine-grid"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.05) 0%, transparent 70%)',
          }}
        />
        {/* Single subtle ambient glow — no moving blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-6">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.45, ease: EASE_OUT_SMOOTH }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: EASE_OUT_EXPO }}
            className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.08]"
          >
            Hey, I&apos;m{' '}
            <span className="text-primary">Vicky</span>
            <span className="text-muted-foreground">.</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              I build backends that don&apos;t break.
            </span>
          </motion.h1>

          {/* Rotating tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: EASE_OUT_SMOOTH }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE_OUT_SMOOTH }}
                className="text-base sm:text-lg text-foreground/65 max-w-xl mx-auto leading-relaxed"
              >
                {taglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.45, ease: EASE_OUT_SMOOTH }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="group/btn link-arrow btn-press inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
            >
              See my work
              <ArrowDown size={14} className="transition-transform duration-300 group-hover/btn:translate-y-0.5" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="group/gh btn-press inline-flex items-center gap-2 border border-border bg-card/40 backdrop-blur-sm px-6 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/15 transition-all duration-200"
            >
              <Github size={15} className="group-hover/gh:text-primary transition-colors duration-200" />
              GitHub
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="flex items-center justify-center gap-2 sm:gap-3 pt-8 flex-wrap"
          >
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 + i * 0.06, duration: 0.35, ease: EASE_OUT_SMOOTH }}
                className="group/tech btn-press inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border/40 bg-card/20 text-xs text-muted-foreground/70 hover:border-primary/25 hover:text-foreground/80 hover:bg-card/40 transition-all duration-200"
              >
                <span className="text-[15px]">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="group/scroll block" aria-label="Scroll to about">
          <div className="w-5 h-8 rounded-full border-2 border-border/40 flex items-start justify-center p-1 group-hover/scroll:border-primary/30 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-muted-foreground/40 group-hover/scroll:bg-primary/50 transition-colors duration-300"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
