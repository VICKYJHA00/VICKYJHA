'use client';

import { motion } from 'framer-motion';
import { EASE_OUT_SMOOTH, VIEWPORT_TIGHT } from '@/lib/animations';

const brands = [
  { name: 'Google Developer Student Clubs', short: 'GDSC' },
  { name: 'Dev.to', short: 'Dev.to' },
  { name: 'Medium', short: 'Medium' },
  { name: 'Hashnode', short: 'Hashnode' },
  { name: 'Product Hunt', short: 'Product Hunt' },
  { name: 'HackerNoon', short: 'HackerNoon' },
];

export function FeaturedOn() {
  return (
    <section className='py-14 border-t border-border/40'>
      <motion.div
        className='max-w-6xl mx-auto px-4 sm:px-6'
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_TIGHT}
        transition={{ duration: 0.5, ease: EASE_OUT_SMOOTH }}
      >
        <p className='text-[11px] uppercase tracking-[0.2em] text-muted-foreground/35 text-center mb-8 select-none font-medium'>
          As seen on
        </p>
        <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-12'>
          {brands.map((brand, i) => (
            <motion.span
              key={brand.name}
              className='text-base sm:text-lg font-bold text-muted-foreground/20 hover:text-muted-foreground/50 transition-all duration-300 select-none cursor-default hover-underline'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT_TIGHT}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE_OUT_SMOOTH }}
            >
              {brand.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
