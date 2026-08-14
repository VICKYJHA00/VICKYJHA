'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { CONTACT } from '@/data/contact';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Hey, I'm{' '}
            <span className="text-primary">Vicky</span>.
            <br />
            <span className="text-muted-foreground">I build backends that don't break.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Backend engineer with a thing for Spring Boot, distributed systems, and
            making AI tools actually useful. Currently finishing my CS degree and
            looking for the right team to join.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              See my work
              <ArrowDown size={14} className="animate-bounce" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-secondary/50 px-6 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 text-xs text-muted-foreground">
            <span>Java / Spring Boot</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>PostgreSQL</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>React</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>AI/ML</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-muted-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
}
