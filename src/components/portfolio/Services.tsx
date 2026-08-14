'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, BrainCircuit, Rocket, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

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
  const [tilt, setTilt] = useState({ x: 0, y: 0, card: -1 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -3, y: x * 3, card: index });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, card: -1 });
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="What I do"
          title="How I can help"
        />

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
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={handleMouseLeave}
                style={tilt.card === i ? { transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform 150ms ease-out' } : { transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)', transition: 'transform 500ms ease-out' }}
                className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden ${
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