'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { CONTACT } from '@/data/contact';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Secondary ambient glow */}
      <div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full opacity-[0.04] -z-10"
        style={{
          background: 'radial-gradient(circle, #f97316, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            Hey, I&apos;m{' '}
            <span className="text-primary">Vicky</span>
            <span className="text-muted-foreground">.</span>
            <br />
            <span className="text-muted-foreground text-4xl sm:text-5xl lg:text-6xl font-semibold">
              I build backends that don&apos;t break.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Backend engineer with a thing for Spring Boot, distributed systems, and
            making AI tools actually useful. Currently finishing my CS degree and
            looking for the right team to join.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-6 pt-10 text-xs text-muted-foreground/70 flex-wrap"
          >
            {['Spring Boot', 'PostgreSQL', 'React', 'AI/ML'].map((tech, i) => (
              <span key={tech} className="flex items-center gap-3">
                <span>{tech}</span>
                {i < 3 && <span className="w-1 h-1 rounded-full bg-border" />}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="block">
          <div className="w-5 h-8 rounded-full border-2 border-border/60 flex items-start justify-center p-1 hover:border-primary/40 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-muted-foreground/60"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
