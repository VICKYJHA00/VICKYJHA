'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Loader2, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { CONTACT } from '@/data/contact';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

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
        setFormData({ name: '', email: '', message: '' });
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
      {/* Decorative orange gradient glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Contact</p>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s talk
            </h2>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Prefer email?
            </a>
          </div>
          <p className="text-muted-foreground mt-3 max-w-lg">
            I&apos;m open to backend engineering roles, freelance work, or just interesting
            conversations about systems design. Drop me a line.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{CONTACT.email}</p>
              </div>
            </a>

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
              className="space-y-5 rounded-2xl border border-border bg-card/20 p-6 sm:p-8"
            >
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
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
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
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all"
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
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/10 disabled:opacity-60 disabled:pointer-events-none"
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
