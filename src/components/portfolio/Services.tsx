'use client';

import { motion } from 'framer-motion';
import { Database, BrainCircuit, Rocket } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Backend Development',
    description:
      'REST and GraphQL APIs with Spring Boot or Node.js. I care about response times, error handling, and documentation that people actually read.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    description:
      'Adding intelligence to products with LLMs, embeddings, and RAG pipelines. Not just wrapping OpenAI — building actual useful AI features.',
    highlight: true,
  },
  {
    icon: Rocket,
    title: 'Full-Stack MVPs',
    description:
      'When you need something working end-to-end fast. Next.js frontend, solid backend, deployed and ready for users.',
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
                className={`rounded-2xl border p-6 sm:p-8 transition-colors group hover:border-primary/30 ${
                  s.highlight
                    ? 'border-primary/30 bg-primary/5'
                    : 'border-border bg-card/20'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
