export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  tag: string;
  image: string;
  imageAlt: string;
  color: string;
  metrics?: string[];
};

export const projects: Project[] = [
  {
    name: "THRYLOS",
    description:
      "Enterprise attendance platform built for biometric environments. Handles over a million daily checks with sub-50ms sync times across distributed nodes.",
    tag: "Systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    imageAlt: "Dashboard showing attendance analytics",
    stack: ["React Native", "PostgreSQL", "Biometric Auth"],
    github: "https://github.com/vickyjha00",
    featured: true,
    color: "#3b82f6",
    metrics: ["1.2M+ daily checks", "<50ms sync", "99.9% uptime"],
  },
  {
    name: "Quiz Master",
    description:
      "Real-time multiplayer quiz platform with competitive leaderboards. Built on WebSockets to keep response times under 100ms even at scale.",
    tag: "Real-time",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop",
    imageAlt: "Quiz platform interface",
    stack: ["Node.js", "Redis", "Socket.IO"],
    github: "https://github.com/vickyjha00",
    featured: true,
    color: "#06b6d4",
    metrics: ["<100ms responses", "20k concurrent"],
  },
  {
    name: "DSA Tracker",
    description:
      "Study tool that combines spaced repetition with structured learning paths. Helps retain algorithm concepts through active recall instead of rote practice.",
    tag: "Productivity",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    imageAlt: "Data visualization dashboard",
    stack: ["Next.js", "Supabase"],
    github: "https://github.com/vickyjha00",
    color: "#10b981",
    metrics: ["230+ modules"],
  },
  {
    name: "AI Resume Analyzer",
    description:
      "Uses LLMs to parse and rank resumes against job descriptions. Built to help hiring teams surface the right candidates faster.",
    tag: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    imageAlt: "AI analysis interface",
    stack: ["Python", "OpenAI API"],
    color: "#8b5cf6",
    metrics: ["88% match accuracy"],
  },
  {
    name: "Spring Boot API Starter",
    description:
      "Reusable backend template with JWT auth, Swagger docs, and CI/CD config. Something I kept rewriting, so I made it a proper starter kit.",
    tag: "Open Source",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop",
    imageAlt: "Code editor showing Spring Boot project",
    stack: ["Java", "JWT Auth", "Docker"],
    github: "https://github.com/vickyjha00",
    color: "#f59e0b",
    metrics: ["CI/CD ready", "Swagger docs"],
  },
  {
    name: "ShopNest",
    description:
      "Headless e-commerce setup with Stripe checkout and CMS-backed product management. Clean storefront experience with smooth payment flow.",
    tag: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    imageAlt: "E-commerce store interface",
    stack: ["Tailwind CSS", "Stripe"],
    github: "https://github.com/vickyjha00",
    color: "#ec4899",
    metrics: ["Stripe checkout"],
  },
];
