'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { TechStackExplorer } from '@/components/portfolio/TechStackExplorer';
import { Projects } from '@/components/portfolio/Projects';
import { CommandPalette } from '@/components/portfolio/CommandPalette';
import { PageSkeleton } from '@/components/portfolio/PageSkeleton';
import { FloatingDock } from '@/components/ui/floating-dock';
import { MobileBottomNav } from '@/components/portfolio/MobileBottomNav';
import CloudShader from '@/components/CloudShader';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <PageSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="min-h-screen flex flex-col">
            {/* Skip to content link for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium focus:shadow-lg focus:shadow-primary/20 focus:outline-none"
            >
              Skip to content
            </a>
            <div className="grain-overlay" />
            <div className="pointer-events-none fixed inset-0 -z-20">
              <CloudShader
                speed={0.7}
                count={6}
                cloudColor="#eef4ff"
                skyTopColor="#0b1b2a"
                skyBottomColor="#28517d"
                className="h-full w-full opacity-95"
              />
            </div>
            <main id="main-content" className="relative z-10 flex-1">
              <Hero />
              <About />
              <Skills />
              <TechStackExplorer />
              <Projects />
            </main>
            <CommandPalette />
            <FloatingDock />
            <MobileBottomNav />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}