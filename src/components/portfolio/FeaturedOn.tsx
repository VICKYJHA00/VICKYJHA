'use client';

import { motion } from 'framer-motion';

const brands = [
  'Google Developer Student Clubs',
  'Dev.to',
  'Medium',
  'Hashnode',
  'Product Hunt',
  'HackerNoon',
];

export function FeaturedOn() {
  return (
    <section className='py-16 border-t border-border'>
      <motion.div
        className='max-w-6xl mx-auto px-4 sm:px-6'
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className='text-xs uppercase tracking-[0.2em] text-muted-foreground/50 text-center mb-8 select-none'>
          As seen on
        </p>
        <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-12'>
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              className='text-lg sm:text-xl font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors select-none cursor-default'
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
