import { CONTACT } from "./contact";

export type StackItem = {
  icon: string;
  label: string;
};

export type Project = {
  name: string;
  shortName?: string;
  description: string;
  longDescription?: string;
  stack: StackItem[];
  github?: string;
  demo?: string;
  featured?: boolean;
  tag: string;
  image: string;
  imageAlt: string;
  color: string;
  metrics?: string[];
  highlight?: string;
};

export const projects: Project[] = [
  {
    name: "THRYLOS",
    shortName: "Attendance Ecosystem",
    description:
      "An enterprise-grade attendance platform for biometric environments, built for scale and reliability.",
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB5hLQ0HJfHhUuv4AYj2jdsY0BRhBFGRxtHmcq6QheitGjn_lKH14Hy4BewoeSn_rPcxOqKiF22dMdhG28NjAclu5WgpFBV_JIkNnolALFFjhVjtfOTm35vg0FkB_AkDpeBynmhxpqFLq9gkfbGQQQ8ksvecaqBogu1knrOyUMX1cf8iah_HQeodXTS-SoWpfDHmoox1-h5tGTcsrp1_cEwkPBGf0s6V8i5N_MNttIrLmY0CbG17tuc_yGFrhNJkUDkdmU1-qUNGk",
    imageAlt: "A futuristic digital dashboard interface for an attendance system titled THRYLOS.",
    stack: [
      { icon: "memory", label: "React Native" },
      { icon: "database", label: "PostgreSQL" },
      { icon: "security", label: "Biometric Auth" },
    ],
    github: CONTACT.github,
    featured: true,
    color: "#3b82f6",
    metrics: ["1.2M checks/day", "<50ms biometric sync", "99.98% uptime"],
    highlight:
      "Delivered a secure, low-latency attendance engine that cuts sync failure rates by 37%.",
  },
  {
    name: "Quiz Master",
    shortName: "Real-time Learning",
    description:
      "A competitive learning platform with low-latency socket gameplay and fast feedback loops.",
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP0UclLfz5nT0k2VNBf9iosBzEI23EjQQMuB61TeBI8tWvXEpxH9VA2T3oOg3M0aSRMlbsK8mZxb7QhuQwIVUKkXbaZLY84nvYrNoxvzDJTwkfH8WwZ-fvn7IYmBaZqcj2UiiJHSkqkXrkuk9aC7K68fm-5nQf6LfTDxKTp4BLEh0hBMjoK3_V4fWqhgDoZac5cT_bPNWMDI6m_T5O7TKYdH2VWeq5NV9mFIUxv9ejy8bZZirdNUDAM4CYgeR90-H_TOlh1kK6xrQ",
    imageAlt: "An elegant quiz application interface called Quiz Master.",
    stack: [
      { icon: "hub", label: "Node.js" },
      { icon: "bolt", label: "Redis" },
      { icon: "zap", label: "Socket.IO" },
    ],
    github: CONTACT.github,
    featured: true,
    color: "#06b6d4",
    metrics: ["<100ms response", "20k concurrent users"],
    highlight: "Reduced multiplayer latency by 35% with a resilient socket reconnection layer.",
  },
  {
    name: "DSA Tracker",
    shortName: "Learning Dashboard",
    description:
      "A progress tracker for algorithm practice that blends spaced repetition with structured study paths.",
    tag: "Productivity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoeCyYlh1D-N0UeGJraQFJ6fFszL2NgjGjruJXPdwfbXqo3119NE_1cqS5VIdxrtq8QjHPw1YhT3tlUdyia9YDBNP6Vxf0BqGuer8bzuIQVkN76h77XLF-WpzP0W5Pd_T7BZNdsB8HPCn2vwEgUPuAQ8JphiPWp8BPbNqTPp-BHox5WS6Q7WZWxUp07bV02iUnwif4WcDtp1o7MudmjVYXnQ5SjT5nAGhCHzoBcY3K9YEfmmodHaPBbLTpddmtWNcRkG3_g8zbo94",
    imageAlt: "A clean data structures and algorithms visualization tool interface.",
    stack: [
      { icon: "analytics", label: "Next.js" },
      { icon: "cloud", label: "Supabase" },
    ],
    github: CONTACT.github,
    color: "#10b981",
    metrics: ["230+ modules", "personalized review"],
    highlight:
      "Built a study dashboard that helps learners retain algorithm concepts with active recall.",
  },
  {
    name: "AI Resume Analyzer",
    shortName: "Semantic Talent Match",
    description:
      "A recruitment assistant that uses LLMs to classify resumes and surface role-fit signals.",
    tag: "Machine Learning",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmpoMGM1O1hWft6ajgA-dFRqnj_S9HfrEvC2eEDaAVhPp6m21gXy7E7pzPD5DOdrDfolGBhRM0C8hTKEs9p9tDT74DVgLD_C6PmAyTuFyu578XdEM02lo3dcupCNQmflRXQl2ad9VIJCdAaCQ-GlKNggEZs8PRIwB8ucwUu1_crOJ4U3mMbYEQQP4DNp-YunD0TGvnsfCA26-ZKVx6V7NK5uUQZihFsgfQIcdZEBJ_E-644Nmnqw9HXGbcdXFP_fHTY7xbpEn_CoY",
    imageAlt: "A sophisticated artificial intelligence dashboard showing neural network patterns.",
    stack: [
      { icon: "psychology", label: "Python" },
      { icon: "smart_toy", label: "OpenAI API" },
    ],
    color: "#8b5cf6",
    metrics: ["88% accuracy", "semantic ranking"],
    highlight: "Designed a resume scoring engine that surfaced the strongest candidates faster.",
  },
  {
    name: "Spring Boot REST API Boilerplate",
    shortName: "Enterprise Foundation",
    description:
      "A reusable backend starter with JWT security, documentation, and deploy-ready configuration.",
    tag: "Architecture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Ht493IkEW7030ydEVX_xCt5weDJ20u10FMa753r-22WyeVrTJ9I4Jh3CfKChfOA5X8TpayyWfZXeWNOOeFijFkwa5NW-B6MFf_a39iFN7CLpmjmeTpkCbtufm4Q5eKNfvEHcTkHI2cUZ3KzwfjyQnN7kjnHRtvZThsYTfLkHdSKweN-QKuGN9ZtbrX33o6CQCi4uyohec_PQ2zEpDeRlnfUE9fUn1yKftqxlXJrSqZcPnA_DcOMmudJTG_BkRRzKlXgEcc8Nj80",
    imageAlt: "A clean code-centric visualization of a Spring Boot backend architecture.",
    stack: [
      { icon: "settings_ethernet", label: "Java" },
      { icon: "lock", label: "JWT Auth" },
    ],
    github: CONTACT.github,
    color: "#f59e0b",
    metrics: ["CI/CD ready", "Swagger docs"],
    highlight: "Created a polished backend starter that accelerates new service launches by weeks.",
  },
  {
    name: "ShopNest E-Commerce",
    shortName: "Commerce Engine",
    description:
      "A headless commerce platform with Stripe checkout, product storytelling, and CMS-backed inventory.",
    tag: "E-Commerce",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqy0gC-fiYOb8VzXt4uHPAfcdLnfuu9DOZ8ByB1Sv5jV9GZtNJVZFJYlykQ5TN6fxNMW9kEG06t7hdIhaUA-AlcNFeGyHFwV1DeLONfQwdzkYF40rQbkqwkaggPW8xu5qlH_gWm6Spp4HHRbEf-iZhZvQzB0BzA94bXDhZc6_e-4SJhET38pZP4yIbYcVi1ZePc0OhiaSeTWPN6edeMtGHTqLoCdBQH63lTA9BeJPbYjM-HKLxe4vnGhZtRs3JSZEGhbyR1jtnkUA",
    imageAlt: "A high-end e-commerce mobile app interface titled ShopNest.",
    stack: [
      { icon: "shopping_cart", label: "Tailwind CSS" },
      { icon: "credit_card", label: "Stripe" },
    ],
    github: CONTACT.github,
    color: "#ec4899",
    metrics: ["Stripe checkout", "headless CMS"],
    highlight: "Built a commerce engine with a modern store experience and seamless payment flow.",
  },
];
