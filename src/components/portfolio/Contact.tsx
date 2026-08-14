'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Loader2, MapPin, Clock, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { CONTACT } from '@/data/contact';
import { SectionHeading } from './SectionHeading';

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Freelance / Contract Work',
  'Job Opportunity',
  'Open Source Collaboration',
  'Speaking / Mentoring',
  'Other',
] as const;

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' as string });
  const [emailCopied, setEmailCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.subject) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(data.message);
        setFormData({ name: '', email: '', message: '', subject: '' });
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-14">
          <SectionHeading
            label="Contact"
            title="Let&apos;s talk"
            description="I&apos;m open to backend engineering roles, freelance work, or just interesting conversations about systems design. Drop me a line."
            className="mb-0"
          />
          <div className="flex items-center gap-3 flex-wrap -mt-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 border border-border/50 rounded-full px-2.5 py-1">
              <Clock size={12} />
              Usually responds within 24h
            </span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Prefer email?
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 group">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium truncate">{CONTACT.email}</p>
                </div>
              </a>
              <button
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(CONTACT.email);
                  } catch {
                    // Fallback: no-op in restricted environments
                  }
                  setEmailCopied(true);
                  toast.success('Email copied to clipboard');
                  setTimeout(() => setEmailCopied(false), 2000);
                }}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shrink-0"
                aria-label="Copy email"
              >
                {emailCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                <Github size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">@vickyjha00</p>
              </div>
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">vickyjha00</p>
              </div>
            </a>

            {/* Availability + Location cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-border bg-card/20 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock size={13} className="text-green-400" />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Status</span>
                </div>
                <p className="text-sm font-medium text-green-400">Available</p>
              </div>
              <div className="rounded-xl border border-border bg-card/20 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin size={13} className="text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Location</span>
                </div>
                <p className="text-sm font-medium">India</p>
                <p className="text-[10px] text-muted-foreground">Open to remote</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-card/20 p-6 sm:p-8 glass-card backdrop-blur-sm"
            >
              {/* Subject selector */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-secondary/70 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a topic…
                  </option>
                  {SUBJECT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background/80 px-4 py-2.5 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background/80 px-4 py-2.5 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all duration-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background/80 px-4 py-2.5 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 disabled:opacity-60 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
