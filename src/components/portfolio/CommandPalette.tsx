'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  User,
  BarChart3,
  FolderOpen,
  Briefcase,
  PenLine,
  HelpCircle,
  Copy,
  Check,
  Github,
} from 'lucide-react';

let openCommandPaletteRef: (() => void) | null = null;

export function openCommandPalette() {
  openCommandPaletteRef?.();
}

type CommandItem = {
  id: string;
  label: string;
  section: 'navigation' | 'actions';
  icon: React.ReactNode;
  hint?: string;
  action: () => void;
};

const NAV_ITEMS: Omit<CommandItem, 'action'>[] = [
  { id: 'home', label: 'Home', section: 'navigation', icon: <User size={16} /> },
  { id: 'about', label: 'About', section: 'navigation', icon: <User size={16} /> },
  { id: 'skills', label: 'Skills', section: 'navigation', icon: <BarChart3 size={16} /> },
  { id: 'tech-stack', label: 'Tools', section: 'navigation', icon: <FolderOpen size={16} /> },
  { id: 'projects', label: 'Projects', section: 'navigation', icon: <FolderOpen size={16} /> },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    openCommandPaletteRef = () => setOpen(true);
    return () => {
      openCommandPaletteRef = null;
    };
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('hello@vicky.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    close();
  }, [close]);

  const allItems: CommandItem[] = [
    ...NAV_ITEMS.map((item) => ({
      ...item,
      action: () => {
        scrollToSection(item.id);
        close();
      },
    })),
    {
      id: 'copy-email',
      label: copied ? 'Copied!' : 'Copy Email',
      section: 'actions',
      icon: copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />,
      action: copyEmail,
    },
    {
      id: 'github',
      label: 'Visit GitHub',
      section: 'actions',
      icon: <Github size={16} />,
      action: () => {
        window.open('https://github.com/vicky', '_blank', 'noopener,noreferrer');
        close();
      },
    },
  ];

  const filtered = query
    ? allItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : allItems;

  const navItems = filtered.filter((i) => i.section === 'navigation');
  const actionItems = filtered.filter((i) => i.section === 'actions');

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (!open) return;

      if (e.key === 'Escape') {
        close();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[activeIndex]) {
          filtered[activeIndex].action();
        }
      }
    },
    [open, close, filtered, activeIndex],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector('[data-active="true"]');
    activeEl?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  let globalIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Palette */}
          <motion.div
            className="relative max-w-lg w-full mx-4 rounded-2xl border border-border bg-background shadow-2xl overflow-hidden glass-card backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <Search size={16} className="text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search sections, actions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <kbd className="px-1.5 py-0.5 rounded bg-secondary text-[10px] font-mono text-muted-foreground border border-border">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No results found.
                </p>
              )}

              {navItems.length > 0 && (
                <div className="px-2 py-1.5">
                  <p className="text-[11px] font-medium text-muted-foreground/70 uppercase tracking-wider px-2">
                    Navigation
                  </p>
                  {navItems.map((item) => {
                    globalIndex++;
                    const idx = globalIndex;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        data-active={isActive}
                        onClick={item.action}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm transition-colors text-left cursor-pointer ${
                          isActive
                            ? 'bg-secondary text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <span className={isActive ? 'text-primary' : ''}>{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {actionItems.length > 0 && (
                <div className="px-2 py-1.5">
                  <p className="text-[11px] font-medium text-muted-foreground/70 uppercase tracking-wider px-2">
                    Actions
                  </p>
                  {actionItems.map((item) => {
                    globalIndex++;
                    const idx = globalIndex;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        data-active={isActive}
                        onClick={item.action}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm transition-colors text-left cursor-pointer ${
                          isActive
                            ? 'bg-secondary text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <span className={isActive ? 'text-primary' : ''}>{item.icon}</span>
                        <span className="flex-1">{item.label}</span>
                        {item.hint && (
                          <kbd className="px-1.5 py-0.5 rounded bg-secondary text-[10px] font-mono text-muted-foreground border border-border">
                            {item.hint}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center gap-4 px-4 py-2.5 border-t border-border text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 rounded bg-secondary border border-border font-mono">↑↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 rounded bg-secondary border border-border font-mono">↵</kbd>
                select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 rounded bg-secondary border border-border font-mono">esc</kbd>
                close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
