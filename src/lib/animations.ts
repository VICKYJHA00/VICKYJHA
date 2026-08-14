// ─── Shared Animation System ────────────────────────────────────────────────
// Consistent animation variants used across the portfolio.
// Philosophy: short, purposeful, subtle. Everything feels alive, not everything moves.

import type { Variants, Transition } from 'framer-motion';

// ─── Easing ─────────────────────────────────────────────────────────────────

/** Premium ease-out curve — fast start, smooth settle */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Smooth ease-out — balanced */
export const EASE_OUT_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Spring config for interactive elements (nav pills, toggles) */
export const SPRING_SNAP: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

// ─── Transitions ────────────────────────────────────────────────────────────

export const TRANSITION_FAST: Transition = {
  duration: 0.2,
  ease: EASE_OUT_SMOOTH,
};

export const TRANSITION_DEFAULT: Transition = {
  duration: 0.5,
  ease: EASE_OUT_SMOOTH,
};

export const TRANSITION_SLOW: Transition = {
  duration: 0.7,
  ease: EASE_OUT_EXPO,
};

// ─── Scroll Reveal Variants ─────────────────────────────────────────────────

/** Fade in from below — the default scroll reveal */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: EASE_OUT_SMOOTH,
    },
  }),
};

/** Fade in with slight scale — for cards and featured items */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.97,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: EASE_OUT_SMOOTH,
    },
  }),
};

/** Fade in from left — for timeline items */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: EASE_OUT_SMOOTH,
    },
  }),
};

/** Simple fade — for subtle elements */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: EASE_OUT_SMOOTH,
    },
  }),
};

// ─── Stagger Containers ─────────────────────────────────────────────────────

/** Parent container that staggers its children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Faster stagger for lists and grids */
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// ─── Page Entrance ──────────────────────────────────────────────────────────

/** Staggered entrance sequence for the entire page */
export const pageEntrance = {
  /** Navbar slides down from top */
  navbar: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE_OUT_SMOOTH },
  },
  /** Hero status badge */
  heroBadge: {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay: 0.2, duration: 0.4, ease: EASE_OUT_SMOOTH },
  },
  /** Hero main heading */
  heroHeading: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.35, duration: 0.6, ease: EASE_OUT_EXPO },
  },
  /** Hero tagline / description */
  heroTagline: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.5, duration: 0.5, ease: EASE_OUT_SMOOTH },
  },
  /** Hero CTA buttons */
  heroCTA: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.65, duration: 0.4, ease: EASE_OUT_SMOOTH },
  },
  /** Hero tech badges */
  heroBadges: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.8, duration: 0.4 },
  },
  /** Scroll indicator */
  heroScroll: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 1.2, duration: 0.5 },
  },
};

// ─── Viewport Config ────────────────────────────────────────────────────────

/** Default viewport for scroll-triggered animations */
export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const;

/** Tighter viewport for elements closer to the fold */
export const VIEWPORT_TIGHT = { once: true, margin: '-40px' } as const;

/** Generous viewport for below-the-fold sections */
export const VIEWPORT_LOOSE = { once: true, margin: '-120px' } as const;
