'use client';

import { motion } from 'framer-motion';
import { Database, BrainCircuit, Rocket, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Backend Development',
    num: '01',
    description:
      'REST and GraphQL APIs with Spring Boot or Node.js. I care about response times, error handling, and documentation that people actually read.',
    cta: 'View THRYLOS case study',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    num: '02',
    description:
      'Adding intelligence to products with LLMs, embeddings, and RAG pipelines. Not just wrapping OpenAI — building actual useful AI features.',
    highlight: true,
    cta: 'See Resume Analyzer',
  },
  {
    icon: Rocket,
    title: 'Full-Stack MVPs',
    num: '03',
    description:
      'When you need something working end-to-end fast. Next.js frontend, solid backend, deployed and ready for users.',
    cta: 'Browse all projects',
  },
];

export function Services() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">What I do</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How I can help
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 group hover:border-primary/20 relative overflow-hidden ${
                  s.highlight
                    ? 'border-primary/20 bg-primary/[0.03]'
                    : 'border-border bg-card/20'
                }`}
              >
                {/* Watermark number */}
                <span className="absolute -top-3 -right-2 text-7xl font-black text-foreground/[0.02] select-none pointer-events-none">
                  {s.num}
                </span>

                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {s.description}
                </p>
                {s.cta && (
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2 group-hover:gap-2.5 transition-all"
                  >
                    {s.cta}
                    <ArrowRight size={13} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}