'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Are you available for freelance or contract work?',
    a: 'Yes, I take on select freelance projects, especially backend architecture reviews, API development, and AI integration work. Reach out via the contact form and I\'ll get back to you within 24 hours.',
  },
  {
    q: 'What\'s your preferred tech stack?',
    a: 'For backends, I reach for Java + Spring Boot + PostgreSQL by default. For frontend, React or Next.js with TypeScript. For AI work, Python + OpenAI API. I\'m opinionated but pragmatic — the right tool for the right problem.',
  },
  {
    q: 'Can you work on frontend projects too?',
    a: 'Absolutely. I\'m comfortable with React, have shipped full-stack projects, and care deeply about user experience. My frontend isn\'t as polished as my backend, but it\'s solid.',
  },
  {
    q: 'Do you offer mentorship?',
    a: 'I\'ve informally helped several juniors get started with backend development. If you\'re looking for guidance, I\'m happy to chat — reach out and we can figure out a format that works.',
  },
  {
    q: 'What\'s your typical response time?',
    a: 'For email, usually within 24 hours. For anything urgent, GitHub Issues or LinkedIn messages tend to be faster since I check those more frequently.',
  },
];

function FAQItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-28 px-6 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Common questions
          </h2>
          <p className="text-muted-foreground mt-3">
            Things I get asked a lot. If yours isn\'t here, just ask.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card/30 overflow-hidden"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}