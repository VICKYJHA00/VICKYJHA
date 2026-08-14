import React, { useState } from "react";
import { motion } from "framer-motion";
import { TerminalSquare, Server, Cpu, Database, Layout, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Section";
import { TechChip } from "./TechIcon";

type SkillNode = {
  name: string;
  category: "data" | "compute" | "delivery";
  description: string;
  details: string;
};

const skillPipeline: SkillNode[] = [
  // Data Layer
  {
    name: "PostgreSQL",
    category: "data",
    description: "Relational database architecting",
    details: "Connection pools (HikariCP), indexing, complex queries",
  },
  {
    name: "Hibernate",
    category: "data",
    description: "JPA ORM mapping and caching",
    details: "Entity mapping, transaction management, lazy loading",
  },
  {
    name: "SQL",
    category: "data",
    description: "Raw queries and optimization",
    details: "DQL/DDL schema optimization, performance tuning",
  },
  {
    name: "Supabase",
    category: "data",
    description: "Backend-as-a-service storage",
    details: "Row Level Security (RLS), real-time tables, edge functions",
  },
  {
    name: "JWT Auth",
    category: "data",
    description: "Secure stateless sessions",
    details: "Token signing, symmetric/asymmetric algorithms, security filters",
  },

  // Compute Layer
  {
    name: "Java",
    category: "compute",
    description: "Enterprise compile-time safety",
    details: "Multithreading, Lambdas, streams, JVM memory configuration",
  },
  {
    name: "Spring Boot",
    category: "compute",
    description: "Framework for microservices",
    details: "Spring Security, WebFlux (reactive), Spring Data JPA",
  },
  {
    name: "REST APIs",
    category: "compute",
    description: "Service integrations",
    details: "API versioning, documentation (Swagger), content negotiation",
  },
  {
    name: "Node.js",
    category: "compute",
    description: "Event-driven runtime engines",
    details: "Socket.IO real-time pipelines, Express middleware",
  },

  // Delivery & AI
  {
    name: "OpenAI API",
    category: "delivery",
    description: "Generative AI engines",
    details: "Semantic embeddings, model fine-tuning, prompt design",
  },
  {
    name: "n8n",
    category: "delivery",
    description: "Automated workflow streams",
    details: "Custom nodes, webhook integrations, error handler routines",
  },
  {
    name: "React",
    category: "delivery",
    description: "Dynamic reactive interfaces",
    details: "State synchronization, hooks, virtual DOM rendering",
  },
  {
    name: "Tailwind CSS",
    category: "delivery",
    description: "Utility utility stylesheets",
    details: "Fluid responsive designs, custom themes, dark-mode toggles",
  },
  {
    name: "Linux / Git",
    category: "delivery",
    description: "Deployment workstation rules",
    details: "Shell scripts, cronjobs, branching, ssh protocol actions",
  },
];

export function Skills() {
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);

  const dataLayer = skillPipeline.filter((n) => n.category === "data");
  const computeLayer = skillPipeline.filter((n) => n.category === "compute");
  const deliveryLayer = skillPipeline.filter((n) => n.category === "delivery");

  return (
    <section id="skills" className="relative py-32 px-6 bg-surface overflow-hidden">
      {/* Background scanline simulation */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <SectionHeader
          kicker="Architecture"
          title="Modular Competency Pipeline"
          subtitle="My technical stack mapped as an end-to-end data pipeline. Hover over any block to inspect integration logs and capabilities."
        />

        {/* Pipeline Layout Grid */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch mt-12">
          {/* Column 1: Data Ingestion Layer */}
          <div className="lg:col-span-4 rounded-[2rem] border border-border/70 bg-card/30 p-6 flex flex-col justify-between shadow-elegant relative group">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-border/40 select-none">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Database size={16} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">01 // Data Layer</h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {dataLayer.map((node) => (
                  <div
                    key={node.name}
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="flex flex-col text-left p-3 rounded-xl border border-border/60 bg-neutral-900/30 hover:border-blue-500/40 transition-colors cursor-crosshair"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-foreground">
                        {node.name}
                      </span>
                      <TechChip name={node.name} size={11} />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">{node.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center text-muted-foreground pt-4 select-none">
              <span className="font-mono text-[9px] uppercase tracking-wider">
                Ingests into Compute
              </span>
              <ArrowRight size={12} className="ml-1.5 animate-pulse text-blue-400" />
            </div>
          </div>

          {/* Column 2: Compute & Orchestration */}
          <div className="lg:col-span-4 rounded-[2rem] border border-border/70 bg-card/30 p-6 flex flex-col justify-between shadow-elegant relative group">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-border/40 select-none">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Cpu size={16} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  02 // Compute Engine
                </h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {computeLayer.map((node) => (
                  <div
                    key={node.name}
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="flex flex-col text-left p-3 rounded-xl border border-border/60 bg-neutral-900/30 hover:border-primary/40 transition-colors cursor-crosshair"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-foreground">
                        {node.name}
                      </span>
                      <TechChip name={node.name} size={11} />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">{node.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center text-muted-foreground pt-4 select-none">
              <span className="font-mono text-[9px] uppercase tracking-wider">
                Feeds UI & Intelligence
              </span>
              <ArrowRight size={12} className="ml-1.5 animate-pulse text-primary" />
            </div>
          </div>

          {/* Column 3: Delivery & Intelligence */}
          <div className="lg:col-span-4 rounded-[2rem] border border-border/70 bg-card/30 p-6 flex flex-col justify-between shadow-elegant relative group">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-border/40 select-none">
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                  <Layout size={16} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  03 // Delivery & AI
                </h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {deliveryLayer.map((node) => (
                  <div
                    key={node.name}
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="flex flex-col text-left p-3 rounded-xl border border-border/60 bg-neutral-900/30 hover:border-violet-500/40 transition-colors cursor-crosshair"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-foreground">
                        {node.name}
                      </span>
                      <TechChip name={node.name} size={11} />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">{node.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Console Details Log Panel */}
        <div className="mt-8 rounded-2xl border border-border bg-neutral-950 p-4 shadow-elegant h-28 flex flex-col justify-between font-mono text-[10px] text-left">
          <div className="flex items-center justify-between border-b border-border/30 pb-1.5 text-white/30 select-none">
            <span>COMPETENCY REGISTER LOG</span>
            <span>Hover a node to analyze capabilities</span>
          </div>

          <div className="flex-grow flex items-center">
            {hoveredNode ? (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-1"
              >
                <div>
                  <span className="text-yellow-500">module: </span>
                  <span className="text-foreground font-bold">{hoveredNode.name}</span>
                  <span className="text-white/40">
                    {" "}
                    | layer: {hoveredNode.category.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="text-primary">capability: </span>
                  <span className="text-foreground/95">{hoveredNode.description}</span>
                </div>
                <div>
                  <span className="text-green-400">subsystems: </span>
                  <span className="text-foreground/90">{hoveredNode.details}</span>
                </div>
              </motion.div>
            ) : (
              <div className="text-white/20 italic select-none">
                [SYSTEM READY] Move cursor over competency blocks above to inspect capabilities...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
