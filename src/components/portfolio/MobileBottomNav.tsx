'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { House, User, Code2, Briefcase, Search } from 'lucide-react';
import { openCommandPalette } from '@/components/portfolio/CommandPalette';

const navItems = [
  { id: 'home', icon: House, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Code2, label: 'Projects' },
  { id: 'search', icon: Search, label: 'Search', action: 'search' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
];

export function MobileBottomNav() {
  const [active, setActive] = useState('#home');

  const scrollTo = useCallback((id: string, action?: string) => {
    if (action === 'search') {
      openCommandPalette();
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        }),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="md:hidden fixed inset-x-0 bottom-0 z-40 h-16 border-t border-border/80 bg-background/75 backdrop-blur-2xl"
    >
      <ul className="flex h-full items-center justify-around px-2" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        {navItems.map((item) => {
          const isActive = active === `#${item.id}`;
          const Icon = item.icon;
          return (
            <li key={item.id} className="relative flex-1">
              <button
                onClick={() => scrollTo(item.id, item.action)}
                className={`relative flex h-full w-full flex-col items-center justify-center transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-muted-foreground/50'
                }`}
                aria-label={item.label}
              >
                {isActive && (
                  <span className="absolute -top-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-primary" />
                )}
                <Icon size={18} />
              </button>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}