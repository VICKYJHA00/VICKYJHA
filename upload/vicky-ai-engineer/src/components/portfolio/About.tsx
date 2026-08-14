import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Terminal, Box, Network } from "lucide-react";
import portrait from "@/assets/vicky-portrait.jpg";

function CountStat({
  value,
  suffix,
  start,
  duration = 1500,
}: {
  value: number;
  suffix: string;
  start: boolean;
  duration?: number;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, duration]);
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Years coding",
    desc: "Optimizing compilers and cloud infra since 2018.",
    Icon: Terminal,
  },
  {
    value: 24,
    suffix: "",
    label: "Projects shipped",
    desc: "From fintech gateways to generative AI engines.",
    Icon: Box,
  },
  {
    value: 150,
    suffix: "+",
    label: "Open source contribs",
    desc: "Active contributor to Rust and Go ecosystems.",
    Icon: Network,
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background Layer (matching snippet) */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center group"
          >
            <div className="relative">
              {/* Glow Ring Background */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-b from-primary/30 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_5px_rgba(59,130,246,0.25)]">
                  <img
                    src={portrait}
                    alt="Vicky Portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Vignette overlay */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-[11px] text-primary uppercase tracking-[0.28em]">
                About Vicky
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              Architecting the <span className="text-primary">Invisible Engine</span> of Modern
              Products.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="mt-8 space-y-6 text-muted-foreground"
            >
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                I am a backend engineer driven by the pursuit of hyper-precision. My work exists at
                the intersection of high-concurrency systems and cinematic user experiences,
                ensuring that the foundation of every product is as elegant as its interface.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                With an AI-first product mindset, I don't just build APIs; I design intelligence
                layers that anticipate user needs. I thrive in the complexity of distributed
                systems, obsessed with shaving milliseconds off latency and crafting robust
                architectures that scale without friction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="glass px-8 py-3 rounded-xl font-bold text-sm border border-white/10 hover:bg-white/5 transition-all"
              >
                Get in touch
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative glass p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col gap-4">
                <s.Icon
                  className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-5xl md:text-6xl font-bold text-primary leading-none">
                  <CountStat value={s.value} suffix={s.suffix} start={inView} />
                </h3>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest font-bold">
                  {s.label}
                </p>
                <div className="h-px bg-white/10 my-2" />
                <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
