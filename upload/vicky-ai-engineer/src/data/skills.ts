export type SkillGroup = {
  category: string;
  icon: string;
  color: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: "🔧",
    color: "#3b82f6",
    items: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Hibernate", "SQL", "JWT Auth"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "#06b6d4",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    color: "#8b5cf6",
    items: ["OpenAI API", "LangChain (basics)", "n8n", "Supabase", "AI Chatbots"],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠",
    color: "#10b981",
    items: ["Git", "GitHub", "Docker (basics)", "Postman", "Linux/Ubuntu", "VS Code"],
  },
];
