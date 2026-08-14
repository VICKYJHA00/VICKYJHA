'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/portfolio/ThemeToggle';
import { openCommandPalette } from '@/components/portfolio/CommandPalette';
import { CONTACT } from '@/data/contact';

const links = [
  { href: '#home', label: 'Home', icon: '01' },
  { href: '#about', label: 'About', icon: '02' },
  { href: '#skills', label: 'Skills', icon: '03' },
  { href: '#projects', label: 'Projects', icon: '04' },
  { href: '#experience', label: 'Experience', icon: '05' },
  { href: '#contact', label: 'Contact', icon: '06' },
];

const socialLinks = [
  { href: CONTACT.github, icon: Github, label: 'GitHub' },
  { href: CONTACT.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${CONTACT.email}`, icon: Mail, label: 'Email' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 20);
  const [active, setActive] = useState('#home');
  const [progress, setProgress] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.min((window.scrollY / docHeight) * 100, 100) : 0;
  });

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setProgress(Math.min((y / docHeight) * 100, 100));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const headerClass = scrolled
    ? 'fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border'
    : 'fixed top-0 inset-x-0 z-50';

  const closeMobile = () => setOpen(false);

  return (
    <header className={headerClass}>
      <div className="scroll-progress" style={{ width: `${progress}%`, opacity: progress > 0 ? 1 : 0 }} />

      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between px-6">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          vicky<span className="text-primary">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  active === l.href
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-secondary border-l-2 border-l-primary shadow-sm shadow-primary/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
          <button
            onClick={openCommandPalette}
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-secondary/50 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Open command palette"
          >
            <Search size={12} />
            <span>Search</span>
            <kbd className="ml-1 px-1 py-0.5 rounded bg-background border border-border text-[10px] font-mono">⌘K</kbd>
          </button>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-1.5 relative z-[60]"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-background/95 backdrop-blur-2xl md:hidden"
              onClick={closeMobile}
            />

            {/* Menu content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="fixed inset-0 z-[56] flex flex-col items-center justify-center px-8 md:hidden pointer-events-none"
            >
              <nav className="flex flex-col gap-2 pointer-events-auto w-full max-w-xs">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{
                      delay: 0.08 + i * 0.04,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`group/item flex items-center gap-4 px-4 py-3 rounded-xl text-lg transition-colors ${
                      active === l.href
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <span className={`text-xs font-mono tabular-nums transition-colors ${
                      active === l.href ? 'text-primary/60' : 'text-muted-foreground/30 group-hover/item:text-muted-foreground/50'
                    }`}>
                      {l.icon}
                    </span>
                    <span className="font-medium">{l.label}</span>
                  </motion.a>
                ))}

                {/* CTA button */}
                <motion.a
                  href="#contact"
                  onClick={closeMobile}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="mt-4 flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground text-base font-medium"
                >
                  Get in touch
                </motion.a>
              </nav>

              {/* Social links at bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="absolute bottom-12 flex items-center gap-5 pointer-events-auto"
              >
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={s.href.startsWith('mailto') ? undefined : 'noreferrer'}
                    onClick={closeMobile}
                    aria-label={s.label}
                    className="text-muted-foreground/50 hover:text-foreground transition-colors"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </motion.div>

              {/* Keyboard hints */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute bottom-6 text-[10px] text-muted-foreground/30 pointer-events-none"
              >
                Press <kbd className="px-1 py-0.5 rounded border border-border/40 bg-secondary/50 text-[9px]">T</kbd> to toggle theme
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
