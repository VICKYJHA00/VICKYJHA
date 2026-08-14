import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GitCommit,
  GitBranch,
  GitMerge,
  FileText,
  Calendar,
  Terminal as TermIcon,
  Check,
} from "lucide-react";
import { SectionHeader } from "./Section";

type CommitDetail = {
  hash: string;
  date: string;
  tag: string;
  author: string;
  message: string;
  branch: string;
  highlights: string[];
  diff: { file: string; additions: string[]; deletions: string[] }[];
};

const commits: CommitDetail[] = [
  {
    hash: "3ab107d",
    date: "Present",
    tag: "Certification",
    author: "Vicky <vicky@vicky.dev>",
    branch: "infra/aws-pro",
    message: "chore(infra): architect multi-region AWS high-availability clusters",
    highlights: [
      "Currently pursuing AWS Solutions Architect Professional certification.",
      "Designing multi-AZ database replication configurations and auto-scaling logic.",
      "Deploying infrastructure as code using Terraform scripts.",
    ],
    diff: [
      {
        file: "terraform/main.tf",
        additions: [
          'resource "aws_route53_record" "failover" {',
          '  name = "api.vicky.dev"',
          '  type = "A"',
          "  failover_routing_policy {",
          '    type = "PRIMARY"',
          "  }",
          "}",
        ],
        deletions: [],
      },
    ],
  },
  {
    hash: "9fa2c1b",
    date: "Summer 2024",
    tag: "Internship",
    author: "Vicky <vicky@vicky.dev>",
    branch: "feature/fintech-pipeline",
    message: "feat(api): scale real-time payment gateway to 10k+ rps",
    highlights: [
      "Engineered high-concurrency transaction routing and processing pipelines.",
      "Integrated Redis caching layer to lower db write load, reducing p99 synchronization latency to <35ms.",
      "Collaborated on failover clusters handling 1.2M daily checks.",
    ],
    diff: [
      {
        file: "src/main/java/com/fintech/Gateway.java",
        additions: [
          "+ public Mono<PaymentResponse> authorize(Transaction tx) {",
          '+     return redis.opsForValue().increment("rate:" + tx.getApiKey())',
          "+         .filter(count -> count <= 10000)",
          "+         .flatMap(ok -> processPipeline(tx));",
          "+ }",
        ],
        deletions: [
          "- public PaymentResponse authorize(Transaction tx) {",
          "-     db.save(tx); // Direct db hits deprecated",
          "- }",
        ],
      },
    ],
  },
  {
    hash: "e7f21a0",
    date: "2021 — 2025",
    tag: "Education",
    author: "Vicky <vicky@vicky.dev>",
    branch: "main",
    message: "init: create core human database (B.Tech Computer Science)",
    highlights: [
      "Focused on Distributed Systems, Databases, and Software Architecture.",
      "Graduated in the top 5% of the engineering cohort.",
      "Built multi-tier projects including Quiz Master and attendance scanners.",
    ],
    diff: [
      {
        file: "academic/credentials.json",
        additions: [
          "+ {",
          '+   "major": "Computer Science and Engineering",',
          '+   "gpa_standing": "Top 5%",',
          '+   "focus_areas": ["Distributed Systems", "AI Product Engineering"]',
          "+ }",
        ],
        deletions: [],
      },
    ],
  },
];

export function Timeline() {
  const [selectedHash, setSelectedHash] = useState("3ab107d");
  const activeCommit = commits.find((c) => c.hash === selectedHash) || commits[0];

  return (
    <section id="experience" className="relative py-32 px-6 bg-surface overflow-hidden">
      {/* Subtle dots layout background */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          kicker="Timeline"
          title="Git Log Experience Graph"
          subtitle="Click commits in the repository history on the left to inspect detailed file diffs and system metrics on the right."
        />

        <div className="grid gap-8 lg:grid-cols-12 mt-12 items-start">
          {/* Left Panel: Git Graph CLI Console */}
          <div className="lg:col-span-5 rounded-[2rem] border border-border bg-neutral-950 p-5 shadow-elegant font-mono text-xs text-left h-[440px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-border/40 pb-2.5 mb-3 text-[10px] text-muted-foreground uppercase tracking-widest select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span>bash - git history</span>
            </div>

            <div className="flex-grow space-y-4 overflow-y-auto pr-2">
              <div className="text-[10px] text-white/30 select-none mb-1">
                vicky@linux:~$ git log --graph --oneline --all
              </div>

              {/* Commit 1 */}
              <div
                onClick={() => setSelectedHash("3ab107d")}
                className={`group cursor-pointer rounded-xl p-3 border transition-colors ${
                  selectedHash === "3ab107d"
                    ? "bg-primary/10 border-primary text-primary-foreground"
                    : "border-transparent hover:bg-neutral-900 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 select-none font-bold animate-pulse">●</span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500 font-bold">commit 3ab107d</span>
                      <span className="text-[9px] bg-primary/20 border border-primary/40 text-primary px-1.5 rounded-md uppercase font-bold tracking-wider scale-90">
                        present
                      </span>
                    </div>
                    <p
                      className={`font-mono text-xs ${selectedHash === "3ab107d" ? "text-foreground font-semibold" : "text-foreground/85"}`}
                    >
                      chore(infra): architect multi-region AWS high-availability clusters
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector lines & Commit 2 */}
              <div className="pl-3.5 space-y-3">
                <div className="h-6 w-0.5 bg-gradient-to-b from-primary to-cyan-500 ml-[3px] select-none" />

                <div
                  onClick={() => setSelectedHash("9fa2c1b")}
                  className={`group cursor-pointer rounded-xl p-3 border transition-colors ${
                    selectedHash === "9fa2c1b"
                      ? "bg-cyan-500/10 border-cyan-500 text-foreground"
                      : "border-transparent hover:bg-neutral-900 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 select-none font-bold">●</span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-bold">commit 9fa2c1b</span>
                        <span className="text-[9px] bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 px-1.5 rounded-md uppercase font-bold tracking-wider scale-90">
                          internship
                        </span>
                      </div>
                      <p
                        className={`font-mono text-xs ${selectedHash === "9fa2c1b" ? "text-foreground font-semibold" : "text-foreground/85"}`}
                      >
                        feat(api): scale real-time payment gateway to 10k+ rps
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-500 to-indigo-500 ml-[3px] select-none" />

                {/* Commit 3 */}
                <div
                  onClick={() => setSelectedHash("e7f21a0")}
                  className={`group cursor-pointer rounded-xl p-3 border transition-colors ${
                    selectedHash === "e7f21a0"
                      ? "bg-indigo-500/10 border-indigo-500 text-foreground"
                      : "border-transparent hover:bg-neutral-900 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5 select-none font-bold">●</span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-bold">commit e7f21a0</span>
                        <span className="text-[9px] bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 px-1.5 rounded-md uppercase font-bold tracking-wider scale-90">
                          education
                        </span>
                      </div>
                      <p
                        className={`font-mono text-xs ${selectedHash === "e7f21a0" ? "text-foreground font-semibold" : "text-foreground/85"}`}
                      >
                        init: create core human database (B.Tech Computer Science)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-muted-foreground border-t border-border/30 pt-2 flex justify-between select-none">
              <span>Branch: {activeCommit.branch}</span>
              <span>Total Commits: 3</span>
            </div>
          </div>

          {/* Right Panel: Detailed Commit Diff Card */}
          <div className="lg:col-span-7 rounded-[2rem] border border-border bg-card/40 p-6 md:p-8 shadow-elegant flex flex-col justify-between h-[440px]">
            <div className="space-y-6 overflow-y-auto pr-2">
              {/* Commit Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/30 pb-4 select-none">
                <div className="space-y-1 text-left">
                  <div className="text-xs text-muted-foreground">COMMIT META</div>
                  <div className="font-mono text-sm font-semibold text-foreground">
                    hash: {activeCommit.hash}
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-muted-foreground space-y-1">
                  <div>Author: {activeCommit.author}</div>
                  <div>Date: {activeCommit.date}</div>
                </div>
              </div>

              {/* Message & highlights */}
              <div className="space-y-4 text-left">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {activeCommit.message}
                </h3>
                <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {activeCommit.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1 shrink-0">✦</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Git diff mock output */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-muted-foreground select-none text-left">
                  $ git show --stat {activeCommit.hash}
                </div>
                {activeCommit.diff.map((d, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/60 overflow-hidden font-mono text-[10px] text-left"
                  >
                    <div className="bg-neutral-900 px-3 py-1.5 text-muted-foreground border-b border-border/40 select-none">
                      diff --git a/{d.file} b/{d.file}
                    </div>
                    <div className="p-3 bg-neutral-950 space-y-1 overflow-x-auto leading-relaxed select-text">
                      {d.deletions.map((del, j) => (
                        <div key={j} className="text-red-400 bg-red-950/20 px-1">
                          {del}
                        </div>
                      ))}
                      {d.additions.map((add, j) => (
                        <div key={j} className="text-green-400 bg-green-950/20 px-1">
                          {add}
                        </div>
                      ))}
                      {d.additions.length === 0 && d.deletions.length === 0 && (
                        <div className="text-white/30 italic">
                          No direct file changes in this visualization.
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
