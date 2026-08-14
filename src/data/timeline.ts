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
    date: "Spring 2024",
    title: "Open Source Contributor",
    description:
      "Contributed to Spring Security and Apache Commons. Shipped bug fixes and documentation improvements that got merged into main branches.",
    tag: "Open Source",
  },
  {
    date: "2023",
    title: "Founded College Tech Club",
    description:
      "Started a weekly systems design reading group that grew to 40+ members. Organized 3 hackathons and brought in industry speakers from Amazon and Razorpay.",
    tag: "Leadership",
  },
  {
    date: "2022",
    title: "First Real Project — Quiz Master",
    description:
      "Built a real-time multiplayer quiz platform as a side project. Learned WebSockets, Redis pub/sub, and how to handle 20k concurrent connections. This project changed how I thought about backend engineering.",
    tag: "Project",
  },
  {
    date: "2021 — 2025",
    title: "B.Tech in Computer Science",
    description:
      "Focused on distributed systems and AI. Finished in the top 5% of the engineering cohort. Built THRYLOS, Quiz Master, and several other projects during this time.",
    tag: "Education",
  },
];
