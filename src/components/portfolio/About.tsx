'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { EASE_OUT_SMOOTH } from '@/lib/animations';
import { SectionHeading } from './SectionHeading';

function CountUp({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1500);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

const stats = [
  { value: 6, suffix: '+', label: 'Years coding' },
  { value: 24, suffix: '', label: 'Projects shipped' },
  { value: 150, suffix: '+', label: 'Open source contributions' },
];

const marqueeItems = [
  'Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'React',
  'TypeScript', 'Tailwind CSS', 'Git', 'Linux', 'OpenAI API', 'Next.js',
  'Node.js', 'GraphQL', 'Socket.IO', 'Supabase', 'Nginx', 'REST APIs',
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const marqueeRef = useRef<HTMLDivElement>(null);
  const doubledItems = [...marqueeItems, ...marqueeItems];

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[2rem] border border-border/80 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.12),_transparent_28%),linear-gradient(180deg,rgba(17,17,19,0.72),rgba(9,9,11,0.9))] p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE_OUT_SMOOTH }}
              className="space-y-6"
            >
              <SectionHeading
                label="About me"
                title="Backend engineer who actually cares about the code running in production."
                className="!mb-0"
              />

              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m a BTech CSE student who fell in love with backend engineering after my
                  first real API call in college. Since then I&apos;ve been obsessed with building
                  systems that are fast, reliable, and actually maintainable.
                </p>
                <p>
                  Most of my work revolves around Java and Spring Boot, but I also enjoy
                  dabbling in AI integrations — particularly making LLMs do useful things beyond
                  chatbots. I&apos;ve shipped real products used by thousands of people, and I&apos;m
                  always looking for the next interesting problem to solve.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Spring Boot', 'Java 21', 'PostgreSQL', 'Docker', 'Linux', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/80 bg-background/30 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT_SMOOTH }}
              className="grid gap-4"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border bg-background">
                    <Image
                      src="/vicky-portrait.jpg"
                      alt="Vicky"
                      width={120}
                      height={120}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Profile</p>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">Vicky Jha</h3>
                    <p className="text-sm text-primary">Software engineer</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.3rem] border border-border bg-secondary/30 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Focus</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">Systems</p>
                  <p className="mt-1 text-sm text-muted-foreground">High-scale backend</p>
                </div>
                <div className="rounded-[1.3rem] border border-border bg-secondary/30 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Mode</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">Product</p>
                  <p className="mt-1 text-sm text-muted-foreground">AI + UX-minded</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="relative mt-12 overflow-hidden rounded-[1.6rem] border border-border/70 bg-background/25"
          >
            <div ref={marqueeRef} className="flex gap-3 py-4 animate-marquee">
              {doubledItems.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#09090b] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#09090b] to-transparent pointer-events-none" />
          </motion.div>

          <div ref={ref} className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE_OUT_SMOOTH }}
                className="rounded-[1.2rem] border border-border bg-secondary/20 p-4 text-center"
              >
                <div className="text-3xl font-bold text-foreground sm:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} start={inView} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}