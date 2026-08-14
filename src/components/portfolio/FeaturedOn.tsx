'use client';

import { motion } from 'framer-motion';

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
    <section className='py-14 border-t border-border/50 relative overflow-hidden'>
      {/* Subtle gradient orb behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden />
      <motion.div
        className='max-w-6xl mx-auto px-4 sm:px-6 relative'
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className='text-[11px] uppercase tracking-[0.25em] text-muted-foreground/40 text-center mb-8 select-none font-medium'>
          As seen on
        </p>
        <div className='flex flex-wrap items-center justify-center gap-6 sm:gap-10'>
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              className='group/brand relative'
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className='text-base sm:text-lg font-bold text-muted-foreground/25 group-hover/brand:text-muted-foreground/60 transition-all duration-300 select-none cursor-default'>
                {brand.name}
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary/0 group-hover/brand:bg-primary/30 transition-all duration-300 scale-x-0 group-hover/brand:scale-x-100 origin-center" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
