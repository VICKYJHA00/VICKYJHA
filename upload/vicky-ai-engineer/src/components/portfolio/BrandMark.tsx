import { motion } from "framer-motion";

/**
 * Minimal futuristic "B" monogram for Vicky's brand.
 * Geometric, gradient-filled, with a soft glow on hover.
 */
export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <motion.a
      href="#home"
      aria-label="Home"
      initial={false}
      whileHover="hover"
      className="group relative inline-flex items-center gap-2.5 pl-0.5 select-none"
    >
      <span className="relative inline-flex items-center justify-center">
        {/* Soft ambient glow */}
        <motion.span
          aria-hidden
          variants={{ hover: { opacity: 0.9, scale: 1.15 } }}
          initial={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 rounded-[10px] blur-md"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, oklch(0.78 0.16 295 / 0.55), transparent 70%)",
          }}
        />
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={{ hover: { rotate: -2, scale: 1.04 } }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="relative drop-shadow-[0_2px_8px_rgba(160,120,255,0.35)]"
        >
          <defs>
            <linearGradient
              id="bm-fill"
              x1="6"
              y1="4"
              x2="34"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="oklch(0.85 0.12 295)" />
              <stop offset="55%" stopColor="oklch(0.7 0.18 290)" />
              <stop offset="100%" stopColor="oklch(0.55 0.2 270)" />
            </linearGradient>
            <linearGradient
              id="bm-stroke"
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="oklch(0.95 0.05 295 / 0.9)" />
              <stop offset="100%" stopColor="oklch(0.6 0.18 280 / 0.5)" />
            </linearGradient>
          </defs>
          {/* Rounded square container */}
          <rect
            x="1.25"
            y="1.25"
            width="37.5"
            height="37.5"
            rx="10"
            fill="url(#bm-fill)"
            stroke="url(#bm-stroke)"
            strokeWidth="1"
          />
          {/* Geometric "V" */}
          <path
            d="M10.5 11h4.1l5.4 12.6L25.4 11h4.1l-7.6 18h-3.8L10.5 11z"
            fill="oklch(0.99 0.01 295)"
            fillOpacity="0.97"
          />
          {/* Tiny corner accent dot */}
          <circle cx="32" cy="8" r="1.4" fill="oklch(0.95 0.08 295)" />
        </motion.svg>
      </span>
      <span className="hidden sm:inline-block font-display text-[15px] font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
        Vicky
      </span>
    </motion.a>
  );
}

export default BrandMark;
