export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  tag: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "2025",
    title: "AWS Solutions Architect Prep",
    description:
      "Studying for the Professional certification. Focused on multi-AZ replication, auto-scaling groups, and infrastructure-as-code with Terraform.",
    tag: "Certification",
  },
  {
    date: "Summer 2024",
    title: "FinTech Backend Intern",
    description:
      "Built real-time transaction pipelines handling 10k+ requests per second. Added a Redis caching layer that brought p99 latency under 35ms.",
    tag: "Internship",
  },
  {
    date: "2021 — 2025",
    title: "B.Tech in Computer Science",
    description:
      "Focused on distributed systems and AI. Finished in the top 5% of the engineering cohort. Built THRYLOS, Quiz Master, and several other projects during this time.",
    tag: "Education",
  },
];
