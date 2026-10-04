'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Search, Trophy } from 'lucide-react';

import { openCommandPalette } from '@/components/portfolio/CommandPalette';
import { CONTACT } from '@/data/contact';

const LEETCODE_URL = 'https://leetcode.com/u/Vicky76889/';

const dockItems = [
  { title: 'Search', action: 'search', icon: Search },
  { title: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail, external: true },
  { title: 'GitHub', href: CONTACT.github, icon: Github, external: true },
  { title: 'LinkedIn', href: CONTACT.linkedin, icon: Linkedin, external: true },
  { title: 'LeetCode', href: LEETCODE_URL, icon: Trophy, external: true },
];

export function FloatingDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-7 z-50 hidden justify-center px-4 md:flex">
      <motion.nav
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="pointer-events-auto flex items-center gap-2 rounded-full border border-border/80 bg-background/75 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.28)] backdrop-blur-2xl"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <motion.span
              whileHover={{ scale: 1.42, y: -6, rotate: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-secondary/20 text-foreground/80 shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:border-primary/40 group-hover:bg-secondary/70 group-hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </motion.span>
          );

          return (
            <motion.div
              key={item.title}
              className="group relative"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border/60 bg-background/95 px-2.5 py-1 text-[10px] font-medium text-foreground opacity-0 shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:translate-y-[-2px] group-hover:opacity-100">
                {item.title}
              </span>

              {item.action === 'search' ? (
                <button
                  type="button"
                  onClick={openCommandPalette}
                  aria-label={item.title}
                  className="block"
                >
                  {content}
                </button>
              ) : item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.title}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <Link href={item.href} aria-label={item.title} className="block">
                  {content}
                </Link>
              )}
            </motion.div>
          );
        })}
      </motion.nav>
    </div>
  );
}

export const FloatingDockDemo = FloatingDock;
