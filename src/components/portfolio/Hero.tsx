'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { CONTACT } from '@/data/contact';

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary blob - large, slow */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          aria-hidden
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-orange-400 to-amber-500 blur-3xl" />
        </motion.div>

        {/* Secondary blob - medium, offset timing */}
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -40, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
          }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          aria-hidden
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-500 via-primary to-rose-500 blur-3xl" />
        </motion.div>

        {/* Tertiary blob - small, fast */}
        <motion.div
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full opacity-[0.04]"
          aria-hidden
        >
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-cyan-400 to-primary blur-3xl" />
        </motion.div>

        {/* Radial gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 backdrop-blur-sm px-4 py-1.5 text-xs text-muted-foreground shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            Hey, I&apos;m{' '}
            <span className="relative">
              <span className="text-primary">Vicky</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-primary/60 to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
            <span className="text-muted-foreground">.</span>
            <br />
            <span className="text-muted-foreground text-4xl sm:text-5xl lg:text-6xl font-semibold">
              I build backends that don&apos;t break.
            </span>
          </motion.h1>

          {/* Rotating tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg sm:text-xl text-foreground/75 max-w-xl mx-auto leading-relaxed"
              >
                {taglines[taglineIndex]}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle rounded-sm"
                />
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group/btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:shadow-xl"
            >
              See my work
              <ArrowDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="group/gh inline-flex items-center gap-2 border border-border bg-card/50 backdrop-blur-sm px-6 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/20 active:scale-[0.98] transition-all duration-200"
            >
              <Github size={16} className="group-hover/gh:text-primary transition-colors" />
              GitHub
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-2.5 sm:gap-3 pt-8 flex-wrap"
          >
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
                className="group/tech inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border/60 bg-card/40 text-xs text-muted-foreground/80 hover:border-primary/30 hover:text-foreground hover:bg-card/60 transition-all duration-200"
              >
                <span className="text-[15px]">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.span>
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
        <a href="#about" className="group/scroll block">
          <div className="w-5 h-8 rounded-full border-2 border-border/60 flex items-start justify-center p-1 group-hover/scroll:border-primary/40 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-muted-foreground/60 group-hover/scroll:bg-primary/60 transition-colors"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
