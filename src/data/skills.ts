export type SkillGroup = {
  category: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      { name: "Java", level: 92 },
      { name: "Spring Boot", level: 90 },
      { name: "REST APIs", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Hibernate", level: 82 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "AI & Tools",
    items: [
      { name: "OpenAI API", level: 75 },
      { name: "LangChain", level: 60 },
      { name: "n8n", level: 72 },
      { name: "Supabase", level: 70 },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 68 },
      { name: "Linux", level: 78 },
      { name: "Postman", level: 85 },
    ],
  },
];
