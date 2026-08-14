import { motion } from "framer-motion";
import { Database, BrainCircuit, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Section";

const services = [
  {
    icon: Database,
    title: "Backend API Development",
    points: [
      "High-performance GraphQL/REST",
      "Microservices Orchestration",
      "Database Schema Optimization",
    ],
    link: "EXPLORE MORE",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    points: ["LLM Pipeline Engineering", "Custom Vector Embeddings", "RAG Implementation"],
    link: "VIEW CASE STUDIES",
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Full-Stack MVPs",
    points: [
      "Rapid Prototyping (Next.js)",
      "End-to-End User Experience",
      "Scalable Deployment Flow",
    ],
    link: "START A PROJECT",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-surface-container-lowest/50">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-[11px] text-primary uppercase tracking-[0.22em] mb-5"
            >
              <span className="h-px w-7 bg-primary/60" /> EXPERTISE
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              Precision-Engineered Solutions
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-sm md:text-right"
          >
            <p className="text-sm md:text-base leading-relaxed">
              Building digital foundations that scale with your ambition using the latest in
              cloud-native technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`glass p-8 rounded-xl group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full border border-border/50 ${
                  s.highlight ? "border-t-primary/50 shadow-[0_0_50px_rgba(207,188,255,0.05)]" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">{s.title}</h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-sm font-mono text-muted-foreground"
                    >
                      <CheckCircle2 size={16} className="text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-primary font-mono text-xs font-bold tracking-widest uppercase group-hover:gap-4 transition-all"
                >
                  {s.link} <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
