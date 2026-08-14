'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const writings = [
  {
    title: 'Why I Stopped Using try-catch in Spring Boot Controllers',
    description: 'How @ControllerAdvice and proper exception hierarchy made my code cleaner and my error responses consistent.',
    date: 'Mar 2025',
    readTime: '5 min',
    url: '#',
    tag: 'Backend',
  },
  {
    title: 'Building a Real-Time Quiz App with 20k Concurrent Users',
    description: 'The architecture decisions behind Quiz Master — from WebSocket connection pooling to Redis pub/sub for state sync.',
    date: 'Feb 2025',
    readTime: '8 min',
    url: '#',
    tag: 'Architecture',
  },
  {
    title: 'My Approach to RAG: Less Pipeline, More Pragmatism',
    description: 'Most RAG implementations are over-engineered. Here is what actually worked for my AI Resume Analyzer project.',
    date: 'Jan 2025',
    readTime: '6 min',
    url: '#',
    tag: 'AI',
  },
  {
    title: 'Docker Compose for Backend Devs: A No-Nonsense Guide',
    description: 'Skip the Docker 101 stuff. This is the setup I use for every new Spring Boot project.',
    date: 'Dec 2024',
    readTime: '4 min',
    url: '#',
    tag: 'DevOps',
  },
];

const tagColors: Record<string, string> = {
  Backend: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Architecture: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  AI: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  DevOps: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const allCategories = ['All', ...Array.from(new Set(writings.map((w) => w.tag)))];

function getCategoryCount(category: string): number {
  if (category === 'All') return writings.length;
  return writings.filter((w) => w.tag === category).length;
}

export function Writing() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles =
    activeCategory === 'All'
      ? writings
      : writings.filter((w) => w.tag === activeCategory);

  return (
    <section id="writing" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="Writing"
          title="Thoughts &amp; learnings"
          description="Notes on things I&apos;ve figured out while building."
        />

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border border-transparent transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary/10 text-primary border-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {category} ({getCategoryCount(category)})
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card/20 overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 glass-card backdrop-blur-sm"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.a
                key={article.title}
                href={article.url}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 py-5 hover:bg-secondary/30 transition-all duration-200 group border-b border-border last:border-b-0 hover:pl-7"
              >
                {/* Tag badge */}
                <span
                  className={`inline-flex items-center shrink-0 px-2.5 py-1 rounded-md text-xs font-medium border ${
                    tagColors[article.tag] ?? 'bg-secondary text-muted-foreground border-border'
                  }`}
                >
                  {article.tag}
                </span>

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    {article.description}
                  </p>
                </div>

                {/* Date + read time */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0 shrink-0 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                {/* Hover arrow */}
                <ArrowRight
                  size={14}
                  className="shrink-0 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all text-primary"
                />
              </motion.a>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {filteredArticles.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center text-sm text-muted-foreground"
            >
              No articles in this category yet.
            </motion.p>
          )}
        </motion.div>

        {/* View all link */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-sm text-primary hover:underline underline-offset-4 inline-flex items-center gap-1.5"
          >
            View all articles
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}