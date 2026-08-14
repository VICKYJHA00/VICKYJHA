'use client';

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { CONTACT } from '@/data/contact';

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
  { href: '#home', label: 'Top', icon: ArrowUp },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              {'icon' in l && l.icon ? <l.icon size={12} /> : null}
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="font-semibold">vicky</span>
            <span className="text-primary">.</span>
            <span className="text-muted-foreground">dev</span>
            <span className="text-muted-foreground/60 ml-1">© {new Date().getFullYear()}</span>
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with Next.js & Tailwind
            <Heart size={10} className="text-red-400" />
          </p>

          <div className="flex gap-3 text-muted-foreground">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="hover:text-foreground transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <p className="text-[10px] text-muted-foreground/40 mt-6 text-center">
          Press{' '}
          <kbd className="px-1.5 py-0.5 rounded border border-border/60 bg-secondary/50 text-[9px]">
            T
          </kbd>{' '}
          to toggle theme
        </p>
      </div>
    </footer>
  );
}
