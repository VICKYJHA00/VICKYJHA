'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { FeaturedOn } from '@/components/portfolio/FeaturedOn';
import { Now } from '@/components/portfolio/Now';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { TechStackExplorer } from '@/components/portfolio/TechStackExplorer';
import { Projects } from '@/components/portfolio/Projects';
import { Timeline } from '@/components/portfolio/Timeline';
import { Services } from '@/components/portfolio/Services';
import { Writing } from '@/components/portfolio/Writing';
import { GitHubActivity } from '@/components/portfolio/GitHubActivity';
import { Testimonials } from '@/components/portfolio/Testimonials';
import { Resume } from '@/components/portfolio/Resume';
import { FAQ } from '@/components/portfolio/FAQ';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { MobileBottomNav } from '@/components/portfolio/MobileBottomNav';
import { BackToTop } from '@/components/portfolio/BackToTop';
import { CommandPalette } from '@/components/portfolio/CommandPalette';
import { PageSkeleton } from '@/components/portfolio/PageSkeleton';
import { PageMeta } from '@/components/portfolio/PageMeta';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PageSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
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
            <Navbar />
            <main id="main-content" className="flex-1">
              <Hero />
              <FeaturedOn />
              <Now />
              <About />
              <div className='section-divider' />
              <Skills />
              <TechStackExplorer />
              <Projects />
              <div className='section-divider' />
              <Timeline />
              <Services />
              <Writing />
              <GitHubActivity />
              <Testimonials />
              <Resume />
              <FAQ />
              <div className='section-divider' />
              <Contact />
            </main>
            <PageMeta />
            <Footer />
            <MobileBottomNav />
            <BackToTop />
            <CommandPalette />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}