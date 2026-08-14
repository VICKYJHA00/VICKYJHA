'use client';

import { useState, FormEvent } from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { CONTACT } from '@/data/contact';

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
  { href: '#home', label: 'Top', icon: ArrowUp },
];

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed || !isValidEmail(trimmed)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.message || 'Something went wrong.');
        return;
      }

      setSubscribed(true);
      toast.success('You\'re subscribed!');
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-border py-12 px-6 pb-16 md:pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Subscribe */}
        <div className="max-w-md mx-auto text-center mb-10">
          <p className="text-sm text-muted-foreground mb-1">
            Stay in the loop
          </p>
          <p className="text-xs text-muted-foreground/70 mb-4">
            Get notified when I write something new. No spam, ever.
          </p>
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (subscribed) setSubscribed(false);
              }}
              placeholder="you@example.com"
              disabled={loading}
              required
              aria-label="Email address"
              className="border border-border rounded-lg bg-secondary/50 px-3 py-2 text-sm flex-1 min-w-0 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 disabled:opacity-50 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || subscribed}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shrink-0 hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:opacity-60 transition-all flex items-center gap-1.5"
            >
              {loading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : subscribed ? (
                <CheckCircle2 size={14} />
              ) : null}
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Separator */}
        <div className="border-b border-border mb-8" />

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

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-6">
          <p className="text-[10px] text-muted-foreground/40 flex items-center gap-1">
            Press{' '}
            <kbd className="px-1.5 py-0.5 rounded border border-border/60 bg-secondary/50 text-[9px]">
              T
            </kbd>{' '}
            to toggle theme
          </p>
          <span className="text-[10px] text-muted-foreground/20">·</span>
          <p className="text-[10px] text-muted-foreground/40 flex items-center gap-1">
            Press{' '}
            <kbd className="px-1.5 py-0.5 rounded border border-border/60 bg-secondary/50 text-[9px]">
              1-7
            </kbd>{' '}
            to navigate sections
          </p>
        </div>
      </div>
    </footer>
  );
}
