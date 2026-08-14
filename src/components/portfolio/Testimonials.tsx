'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

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


  const paginate = (newDir: number) => {
    setDirection(newDir);
    if (newDir === 0) return;
    setCurrent((prev) =>
      newDir === 1
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const t = testimonials[current];

  return (
    <section className="py-28 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-medium mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What people say
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            From coworkers, collaborators, and clients I\'ve had the pleasure of working with.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-border bg-card/30 p-8 sm:p-10 min-h-[280px] flex flex-col justify-between">
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
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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

                {/* Quote text */}
                <blockquote className="text-base sm:text-lg text-foreground/90 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 mt-8">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{
                      background: `${t.color}15`,
                      color: t.color,
                    }}
                  >
                    {t.avatar}
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
              <div className="flex gap-1.5">
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
