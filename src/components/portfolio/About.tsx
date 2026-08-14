'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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

  // Duplicate items for seamless loop
  const doubledItems = [...marqueeItems, ...marqueeItems];

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group lg:col-span-2 flex justify-center"
          >
            <div className="relative group-hover:scale-[1.02] transition-transform duration-700">
              {/* Animated gradient border ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 p-[1px] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-border bg-background">
                <Image
                  src="/vicky-portrait.jpg"
                  alt="Vicky"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">That&apos;s me 👋</p>
          </motion.div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <SectionHeading
              label="About me"
              title="Backend engineer who actually cares about the code running in production."
              className="!mb-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['Spring Boot', 'Java 21', 'PostgreSQL', 'Docker', 'Linux', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:text-foreground/80 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tech ticker marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 overflow-hidden relative"
        >
          <div
            ref={marqueeRef}
            className="flex gap-3 animate-marquee"
          >
            {doubledItems.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="shrink-0 px-3 py-1.5 text-[11px] rounded-lg border border-border/50 bg-card/30 text-muted-foreground/70 whitespace-nowrap hover:border-primary/30 hover:text-foreground/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </motion.div>

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                <CountUp value={s.value} suffix={s.suffix} start={inView} />
              </div>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}