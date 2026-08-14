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
  longDescription?: string;
  challenges?: string;
  highlights?: string[];
  role?: string;
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
    longDescription:
      "THRYLOS is an enterprise-grade attendance management system designed specifically for organizations that rely on biometric hardware. The platform processes over a million check-ins and check-outs daily, synchronizing data across geographically distributed nodes in under 50 milliseconds. It was built from the ground up to handle the unpredictable load patterns that come with shift-based workforce environments, where thousands of employees might clock in simultaneously.",
    challenges:
      "Keeping sync latency under 50ms across distributed nodes during peak hours was the biggest challenge. We also had to build robust fallback mechanisms for when biometric devices went offline, ensuring no attendance records were lost.",
    highlights: [
      "Architected a distributed sync engine that handles 1.2M+ daily biometric events with sub-50ms latency",
      "Built an offline-first data buffer that queues records when devices lose connectivity, syncing them automatically on reconnection",
      "Achieved 99.9% uptime over 6 months of production operation",
      "Designed the React Native mobile interface used by admins across 40+ locations",
    ],
    role: "Lead Backend Engineer",
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
    longDescription:
      "Quiz Master is a real-time multiplayer quiz platform where players compete head-to-head in timed trivia matches. Every answer is broadcast instantly via WebSockets, with the leaderboard updating in real time as players respond. The system supports up to 20,000 concurrent connections, with response times consistently under 100ms. I built it to explore how far you can push real-time interaction in a browser without sacrificing reliability.",
    challenges:
      "Handling race conditions when multiple players answer at the exact same millisecond required careful server-side timestamp reconciliation. Scaling WebSocket connections past 10k also meant rethinking our Redis pub/sub architecture to avoid bottlenecks.",
    highlights: [
      "Built a WebSocket infrastructure supporting 20,000 concurrent players with sub-100ms broadcast latency",
      "Implemented server-side answer deduplication with nanosecond-precision timestamps to eliminate race conditions",
      "Designed a Redis-backed matchmaking system that pairs players by skill level in under 2 seconds",
      "Created an anti-cheat system that detects and flags suspiciously fast response patterns",
    ],
    role: "Full-Stack Developer",
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
    longDescription:
      "DSA Tracker is a structured study companion for anyone preparing for technical interviews or just trying to get better at algorithms. Instead of grinding random LeetCode problems, it organizes 230+ problem modules into curated learning paths and uses spaced repetition to surface the concepts you\u2019re about to forget. The goal was to build something I actually wanted to use myself, rather than another generic problem list.",
    challenges:
      "Designing an effective spaced repetition algorithm for algorithmic concepts (not just vocabulary) required a lot of trial and error. Getting the difficulty curve right so users don\u2019t get frustrated or bored was another constant iteration.",
    highlights: [
      "Built 230+ problem modules organized into progressive learning paths covering all major DSA topics",
      "Implemented a custom spaced repetition engine that tracks mastery per topic and adapts review scheduling",
      "Designed a visual progress dashboard with streak tracking and topic-level heatmap charts",
      "Integrated with Supabase for real-time sync across devices with offline-first support",
    ],
    role: "Solo Developer",
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
    longDescription:
      "AI Resume Analyzer takes the pain out of initial resume screening by using large language models to compare candidate resumes against job descriptions. It doesn\u2019t just keyword-match; it actually understands context, experience relevance, and skill transferability. The system produces a ranked shortlist with detailed reasoning for each score, giving hiring managers a head start without replacing human judgment.",
    challenges:
      "The hardest part was reducing hallucination in the LLM\u2019s scoring rationale \u2014 making sure the model justified its scores based on actual resume content, not fabricated details. We also needed to handle a wide variety of resume formats (PDF, DOCX, plain text) and normalize them into a consistent structure before analysis.",
    highlights: [
      "Achieved 88% match accuracy by fine-tuning prompt chains with structured output parsing",
      "Built a multi-format resume parser that handles PDF, DOCX, and plain text with layout-aware extraction",
      "Designed a scoring rubric system where hiring teams can weight different criteria (experience, skills, education)",
      "Reduced average screening time from 12 minutes to under 30 seconds per resume",
    ],
    role: "AI/ML Engineer",
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
    longDescription:
      "This starter kit exists because I got tired of setting up the same boilerplate for every new Spring Boot project. It comes pre-configured with JWT authentication, role-based access control, Swagger API documentation, Docker support, and a GitHub Actions CI/CD pipeline. The idea is to clone it, rename the packages, and start writing actual business logic from day one instead of spending hours on infrastructure setup.",
    challenges:
      "Making the template flexible enough for different project types without turning it into a bloated mess was tricky. I wanted it opinionated enough to be useful out of the box, but not so rigid that developers would fight against it.",
    highlights: [
      "Ships with production-ready JWT auth flow including refresh token rotation and role-based endpoint security",
      "Pre-configured Swagger UI with proper request/response DTOs and error code documentation",
      "Docker Compose setup for local dev with one-command startup (app + PostgreSQL + Redis)",
      "GitHub Actions workflow that builds, tests, and pushes Docker images on every merge to main",
    ],
    role: "Creator & Maintainer",
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
    longDescription:
      "ShopNest is a headless e-commerce storefront that separates the front-end shopping experience from the back-end product management. Products are managed through a CMS, and checkout is handled entirely by Stripe\u2019s embedded payment form. The focus was on making the purchase flow as frictionless as possible while keeping the codebase simple enough to deploy and maintain without a dedicated team.",
    challenges:
      "Integrating Stripe in a way that felt seamless without exposing sensitive payment logic on the client was a careful balancing act. Product data normalization from the CMS also required building a flexible mapping layer since the CMS schema wasn\u2019t always consistent.",
    highlights: [
      "Implemented a fully functional Stripe checkout flow with webhook handlers for order confirmation and fulfillment",
      "Built a CMS product sync layer that normalizes and caches product data for fast page loads",
      "Designed a responsive storefront with cart management, quantity controls, and order summary",
      "Set up automated inventory decrements via Stripe webhook events to prevent overselling",
    ],
    role: "Full-Stack Developer",
  },
];
