import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { TECH, type TechKey } from "./TechIcon";

type FloatItem = {
  key: TechKey;
  x: string; // left %
  y: string; // top %
  size: number; // px
  delay: number;
  drift: number; // movement amplitude
  depth: number; // 0..1 — parallax strength
  showLabel?: boolean;
};

function FloatingChip({
  item,
  mx,
  my,
}: {
  item: FloatItem;
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
}) {
  const meta = TECH[item.key];
  const reduceMotion = useReducedMotion();
  const tx = useTransform(mx, (v) => v * item.depth * 30);
  const ty = useTransform(my, (v) => v * item.depth * 30);
  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{ left: item.x, top: item.y, x: reduceMotion ? 0 : tx, y: reduceMotion ? 0 : ty }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        reduceMotion
          ? { opacity: 0.85, scale: 1 }
          : {
              opacity: [0.55, 0.9, 0.55],
              y: [0, -item.drift, 0],
              rotate: [-2, 2, -2],
              scale: 1,
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.4 }
          : {
              opacity: { duration: 6 + item.delay, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 8 + item.delay, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 12 + item.delay, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.8, delay: item.delay * 0.1 },
            }
      }
      whileHover={{ scale: 1.12, opacity: 1 }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl glass border border-border/60 shadow-elegant backdrop-blur-md"
        style={{
          boxShadow: `0 8px 32px -12px ${meta.color}33, 0 0 0 1px ${meta.color}1a`,
        }}
      >
        <meta.Icon size={item.size} style={{ color: meta.color }} />
        {item.showLabel && (
          <span className="text-xs font-mono text-foreground/80 hidden sm:inline">
            {meta.label}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function FloatingTech({
  items,
  density = "normal",
}: {
  items: FloatItem[];
  density?: "normal" | "sparse";
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    if (reduceMotion) {
      // Skip the mouse-parallax listener entirely for reduced-motion users.
      return () => window.removeEventListener("resize", check);
    }
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("mousemove", onMove);
    };
  }, [mx, my, reduceMotion]);

  const visible = isMobile
    ? items.filter((_, i) => i % 2 === 0).slice(0, 4)
    : density === "sparse"
      ? items.slice(0, Math.ceil(items.length * 0.6))
      : items;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {visible.map((it, i) => (
        <FloatingChip key={i} item={it} mx={sx} my={sy} />
      ))}
    </div>
  );
}

export const heroFloatItems: FloatItem[] = [
  { key: "java", x: "8%", y: "18%", size: 22, delay: 0, drift: 14, depth: 0.6, showLabel: true },
  {
    key: "spring",
    x: "86%",
    y: "22%",
    size: 22,
    delay: 1.2,
    drift: 18,
    depth: 0.8,
    showLabel: true,
  },
  {
    key: "react",
    x: "12%",
    y: "70%",
    size: 20,
    delay: 2.1,
    drift: 12,
    depth: 0.5,
    showLabel: true,
  },
  { key: "typescript", x: "82%", y: "72%", size: 20, delay: 0.6, drift: 16, depth: 0.7 },
  { key: "openai", x: "5%", y: "45%", size: 18, delay: 3.2, drift: 10, depth: 0.4 },
  { key: "supabase", x: "90%", y: "48%", size: 18, delay: 1.8, drift: 14, depth: 0.5 },
  { key: "docker", x: "20%", y: "88%", size: 16, delay: 2.6, drift: 8, depth: 0.3 },
  { key: "postgres", x: "78%", y: "88%", size: 16, delay: 0.9, drift: 10, depth: 0.35 },
];
