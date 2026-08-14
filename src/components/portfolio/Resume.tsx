'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

export function Resume() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 group hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
        >
          {/* Hover accent glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <FileText size={28} />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
              Technical Curriculum Vitae
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A comprehensive overview of my technical background, engineering projects, and
              architectural philosophy. Last updated October 2024.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <a
              href="/resume/Vicky_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10"
            >
              <Download size={15} />
              Download PDF
            </a>
            <a
              href="/resume/Vicky_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-secondary/50 px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <ExternalLink size={15} />
              Preview
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}