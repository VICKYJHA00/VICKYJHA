'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_OUT_SMOOTH } from '@/lib/animations';
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const testimonials = [
  {
    quote:
      'Vicky joined our fintech team as a backend intern and quickly became one of our most reliable engineers. His approach to system design — always thinking about failure modes first — made our payment pipeline significantly more robust.',
    name: 'Rahul Mehta',
    role: 'Engineering Manager, FinTech Startup',
    avatar: 'RM',
    color: '#f97316',
  },
  {
    quote:
      'We worked together on the college quiz platform project. Vicky handled the entire real-time multiplayer layer with WebSockets. The system scaled to 20k concurrent users during our college fest without a single crash. Impressive work.',
    name: 'Ananya Sharma',
    role: 'Full-Stack Developer',
    avatar: 'AS',
    color: '#06b6d4',
  },
  {
    quote:
      'I reviewed Vicky\'s Spring Boot boilerplate and it was one of the best-structured starter kits I\'ve seen. Proper auth flow, Swagger docs out of the box, and clean separation of concerns. The kind of code that makes code reviews easy.',
    name: 'Prateek Gupta',
    role: 'Senior Backend Engineer',
    avatar: 'PG',
    color: '#10b981',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 0 idle, 1 right
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDir: number) => {
    setDirection(newDir);
    if (newDir === 0) return;
    setCurrent((prev) =>
      newDir === 1
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-advance every 6 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => paginate(1), 6000);
    return () => clearInterval(interval);
   }, [isPaused, paginate]);

  const t = testimonials[current];

  return (
    <section className="py-28 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Testimonials"
          title="What people say"
          description="From coworkers, collaborators, and clients I\'ve had the pleasure of working with."
        />

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-2xl border border-border bg-card/30 p-8 sm:p-10 min-h-[280px] flex flex-col justify-between hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 glass-card backdrop-blur-sm">
            {/* Quote icon */}
            <Quote
              size={32}
              className="text-primary/10 absolute top-6 right-6"
              strokeWidth={1.5}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                transition={{ duration: 0.35, ease: EASE_OUT_SMOOTH }}
                className="flex-1"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className={s <= 5 ? 'text-amber-400 fill-amber-400' : 'text-foreground/10'}
                    />
                  ))}
                </div>

                {/* Quote text with left border accent */}
                <blockquote className="text-base sm:text-lg text-foreground/90 leading-relaxed italic border-l-2 border-l-primary/20 pl-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 mt-8">
                  <div className="relative shrink-0">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border-2"
                      style={{
                        background: `${t.color}15`,
                        color: t.color,
                        borderColor: `${t.color}4D`, // 30% opacity of the hex color
                      }}
                    >
                      {t.avatar}
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 bg-background rounded-full flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-green-500" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Dots */}
              <div className="flex gap-1.5" role="tablist">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : i < current ? -1 : 1);
                      setCurrent(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 bg-primary'
                        : 'w-1.5 bg-border hover:bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
