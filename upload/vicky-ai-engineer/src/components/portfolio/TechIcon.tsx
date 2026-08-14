import {
  SiSpringboot,
  SiPostgresql,
  SiHibernate,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiOpenai,
  SiLangchain,
  SiN8N,
  SiSupabase,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostman,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Boxes, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type TechKey =
  | "java"
  | "spring"
  | "postgres"
  | "hibernate"
  | "rest"
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "openai"
  | "langchain"
  | "n8n"
  | "supabase"
  | "github"
  | "docker"
  | "linux"
  | "postman"
  | "vscode"
  | "node";

type TechMeta = {
  label: string;
  Icon: IconType | LucideIcon;
  color: string;
};

export const TECH: Record<TechKey, TechMeta> = {
  java: { label: "Java", Icon: FaJava, color: "#f89820" },
  spring: { label: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  postgres: { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  hibernate: { label: "Hibernate", Icon: SiHibernate, color: "#59666C" },
  rest: { label: "REST API", Icon: Boxes, color: "#38bdf8" },
  react: { label: "React", Icon: SiReact, color: "#61DAFB" },
  nextjs: { label: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  typescript: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  tailwind: { label: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  openai: { label: "OpenAI", Icon: SiOpenai, color: "#10A37F" },
  langchain: { label: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  n8n: { label: "n8n", Icon: SiN8N, color: "#EA4B71" },
  supabase: { label: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  github: { label: "GitHub", Icon: SiGithub, color: "#ffffff" },
  docker: { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  linux: { label: "Linux", Icon: SiLinux, color: "#FCC624" },
  postman: { label: "Postman", Icon: SiPostman, color: "#FF6C37" },
  vscode: { label: "VS Code", Icon: VscVscode, color: "#007ACC" },
  node: { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
};

/* Map free-form labels in existing data to TechKey */
export function resolveTech(name: string): TechKey | null {
  const k = name.toLowerCase();
  if (k.includes("java") && !k.includes("script")) return "java";
  if (k.includes("spring")) return "spring";
  if (k.includes("postgres")) return "postgres";
  if (k.includes("hibernate")) return "hibernate";
  if (k.includes("rest")) return "rest";
  if (k === "react" || k.includes("react")) return "react";
  if (k.includes("next")) return "nextjs";
  if (k.includes("typescript")) return "typescript";
  if (k.includes("tailwind")) return "tailwind";
  if (k.includes("openai")) return "openai";
  if (k.includes("langchain")) return "langchain";
  if (k === "n8n") return "n8n";
  if (k.includes("supabase")) return "supabase";
  if (k.includes("github") || k === "git") return "github";
  if (k.includes("docker")) return "docker";
  if (k.includes("linux") || k.includes("ubuntu")) return "linux";
  if (k.includes("postman")) return "postman";
  if (k.includes("vs code") || k.includes("vscode")) return "vscode";
  if (k.includes("node")) return "node";
  return null;
}

export function TechChip({ name, size = 14 }: { name: string; size?: number }) {
  const key = resolveTech(name);
  const meta = key ? TECH[key] : null;
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-foreground/80 bg-surface-2 border border-border hover:border-primary/40 hover:text-foreground transition-colors">
      {meta ? <meta.Icon size={size} style={{ color: meta.color }} /> : null}
      {name}
    </span>
  );
}

export function TechPill({ techKey }: { techKey: TechKey }) {
  const meta = TECH[techKey];
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-border/60 text-sm font-mono text-foreground/85 hover:border-primary/40 hover:scale-[1.03] transition-all">
      <meta.Icon size={16} style={{ color: meta.color }} />
      {meta.label}
    </span>
  );
}
