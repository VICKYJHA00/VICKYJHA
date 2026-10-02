'use client';

import { useEffect, useState, useCallback, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Github, Linkedin, Mail } from 'lucide-react';
import { openCommandPalette } from '@/components/portfolio/CommandPalette';
import { CONTACT } from '@/data/contact';
import { EASE_OUT_SMOOTH } from '@/lib/animations';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#tech-stack', label: 'Tools' },
  { href: '#projects', label: 'Projects' },
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
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <header
      className={
        scrolled
          ? 'fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/80'
          : 'fixed top-0 inset-x-0 z-50'
      }
    >
      <div className="scroll-progress" style={{ width: `${progress}%`, opacity: progress > 0 ? 1 : 0 }} />

      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: EASE_OUT_SMOOTH }}
        className="max-w-6xl mx-auto h-16 flex items-center justify-between px-6"
      >
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-200 btn-press"
        >
          vicky<span className="text-primary">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
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
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            onClick={openCommandPalette}
            className="hidden lg:flex btn-press items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/60 bg-secondary/30 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/60 hover:border-border transition-all duration-200"
            aria-label="Open command palette"
          >
            <Search size={12} />
            <span>Search</span>
            <kbd className="ml-1 px-1 py-0.5 rounded bg-background border border-border text-[10px] font-mono text-muted-foreground/60">⌘K</kbd>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-1.5 relative z-[60] btn-press"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-background/95 backdrop-blur-2xl md:hidden"
              onClick={closeMobile}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="fixed inset-0 z-[56] flex flex-col items-center justify-center px-8 md:hidden pointer-events-none"
            >
              <nav className="flex flex-col gap-1 pointer-events-auto w-full max-w-xs">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{
                      delay: 0.06 + i * 0.04,
                      duration: 0.3,
                      ease: EASE_OUT_SMOOTH,
                    }}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg transition-colors duration-200 ${
                      active === l.href
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                    }`}
                  >
                    <span className={`text-xs font-mono tabular-nums transition-colors ${
                      active === l.href ? 'text-primary/50' : 'text-muted-foreground/25'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{l.label}</span>
                  </motion.a>
                ))}

              </nav>

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
                    className="text-muted-foreground/40 hover:text-foreground transition-colors duration-200"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
