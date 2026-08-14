export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  tag: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "Present",
    title: "Cloud Architecture Cert",
    description:
      "Currently pursuing AWS Solutions Architect Professional to master hyperscale infrastructure.",
    tag: "Certification",
  },
  {
    date: "Summer 2024",
    title: "FinTech Internship",
    description: "Engineered real-time transaction pipelines processing 10k+ requests per second.",
    tag: "Internship",
  },
  {
    date: "2021 — 2025",
    title: "B.Tech in Computer Science",
    description: "Focused on Distributed Systems and AI. Ranked top 5% in the engineering cohort.",
    tag: "Education",
  },
];
