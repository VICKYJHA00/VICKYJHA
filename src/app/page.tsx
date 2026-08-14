'use client';

import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { FeaturedOn } from '@/components/portfolio/FeaturedOn';
import { Now } from '@/components/portfolio/Now';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
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
import { BackToTop } from '@/components/portfolio/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grain-overlay" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedOn />
        <Now />
        <About />
        <div className='section-divider' />
        <Skills />
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
      <Footer />
      <BackToTop />
    </div>
  );
}