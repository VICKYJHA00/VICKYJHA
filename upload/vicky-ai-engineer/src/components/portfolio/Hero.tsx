import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Terminal as TermIcon,
  FileCode,
  Server,
  Settings,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const codeTabs = [
  {
    id: "java",
    name: "LatencyManager.java",
    lang: "java",
    icon: FileCode,
    color: "text-amber-500",
    content: `@Component
public class LatencyManager {
    private final RedisTemplate<String, Object> redis;
    private static final Logger log = LoggerFactory.getLogger(LatencyManager.class);

    public Mono<ServerResponse> processBiometricSync(BiometricData data) {
        return Mono.just(data)
            .filter(d -> d.getQualityScore() > 0.85)
            .flatMap(this::saveToPostgres)
            .flatMap(d -> redis.opsForValue().set("auth:" + d.getUserId(), d))
            .doOnSuccess(s -> log.info("Sync success. latency={}ms", data.getLatency()))
            .map(s -> ServerResponse.ok().bodyValue(new SyncResponse(true)))
            .onErrorResume(e -> {
                log.error("Pipeline failure: {}", e.getMessage());
                return ServerResponse.status(500).build();
            });
    }
}`,
  },
  {
    id: "yaml",
    name: "docker-compose.yml",
    lang: "yaml",
    icon: Settings,
    color: "text-cyan-400",
    content: `version: '3.8'
services:
  gateway-service:
    build: ./api-gateway
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_URL=jdbc:postgresql://db:5432/thrylos
    depends_on:
      - cache
      - db
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: thrylos_db
      POSTGRES_PASSWORD: \${DB_PASSWD}
  cache:
    image: redis:7-alpine`,
  },
  {
    id: "log",
    name: "api.log",
    lang: "log",
    icon: Server,
    color: "text-emerald-400",
    content: `[INFO]  16:40:02.042  Starting ServiceApplication v1.0.0
[INFO]  16:40:02.195  Active profiles: production
[INFO]  16:40:03.114  HikariPool-1 - Connection pool initialized
[INFO]  16:40:03.489  Tomcat initialized on port 8080 (http)
[INFO]  16:40:04.281  Biometric auth engine loaded (P99 < 35ms)
[INFO]  16:40:05.109  Kafka consumer registered: 'attendance-group'
[INFO]  16:40:06.312  Connection established to Redis cache cluster
[SUCCESS] 16:40:06.418 Application booted successfully in 4.376s`,
  },
];

const workspaceFiles = [
  { name: " thrylos-core", isDir: true },
  { name: "   src/main/java", isDir: true },
  { name: "     LatencyManager.java", isDir: false, id: "java" },
  { name: "   docker-compose.yml", isDir: false, id: "yaml" },
  { name: "   api.log", isDir: false, id: "log" },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState("java");
  const [terminalLine, setTerminalLine] = useState("");
  const [logsList, setLogsList] = useState<string[]>([]);

  // Custom terminal stream emulation for the bottom panel
  useEffect(() => {
    const stream = [
      "git checkout main",
      "Switched to branch 'main'",
      "docker compose up -d thrylos-db",
      "Container thrylos-db Started - 12ms",
      "mvn clean package && java -jar app.jar",
      "Running maven compiler plugin...",
      "JVM initialized successfully",
      "Active connections: PostgreSQL (50/50)",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < stream.length) {
        setLogsList((prev) => [...prev, `vicky@linux-workstation:~$ ${stream[index]}`]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 flex items-center bg-grid"
    >
      {/* Background radial gradient mask for grid */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_transparent_30%,_var(--background)_90%)]" />

      {/* Decorative ambient blobs */}
      <div className="absolute left-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[130px] animate-drift1 pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 h-[280px] w-[280px] rounded-full bg-indigo-500/10 blur-[110px] animate-drift2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left: Headline & Bio Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground shadow-elegant">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              BUILDING ROBUST BACKENDS & INTELLIGENT PRODUCTS
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.0] text-foreground">
                I write system code that <span className="text-primary">scales</span>, not just
                runs.
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                BTech CSE student designing high-throughput backends with Spring Boot, robust Docker
                microservices, and LLM-powered tools. Obsessed with clean code, Linux-grade tooling,
                and API performance.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-xs font-mono font-bold hover:bg-foreground/90 transition-colors shadow-lg"
              >
                ./explore_projects.sh
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-xs font-mono font-semibold text-foreground hover:bg-white/5 transition-colors"
              >
                ssh hello@vicky.dev
              </a>
            </div>

            {/* Tech badges */}
            <div className="pt-4 space-y-2 select-none">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                // CURRENT STACK CONFIG
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                {["Spring Boot", "Java 21", "PostgreSQL", "Docker", "Linux", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/70 bg-neutral-900/60 px-3 py-1.5 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Interactive Workstation IDE Mockup */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-[2rem] border border-border/80 bg-neutral-950/80 shadow-elegant overflow-hidden flex flex-col h-[480px]"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-border/60 bg-neutral-900/80 px-4 py-3 select-none">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  <GitBranch size={10} className="text-primary" />
                  <span>vicky-workstation : thrylos-service</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* IDE Split Pane */}
              <div className="flex-grow flex divide-x divide-border/50 overflow-hidden">
                {/* File Tree Sidebar */}
                <div className="hidden sm:block w-48 bg-neutral-950/50 p-3 select-none font-mono text-[10px] leading-relaxed text-muted-foreground overflow-y-auto">
                  <div className="uppercase tracking-widest text-[8px] text-white/30 mb-2">
                    // Project Workspace
                  </div>
                  <div className="space-y-1">
                    {workspaceFiles.map((file) => (
                      <div
                        key={file.name}
                        onClick={() => file.id && setActiveTab(file.id)}
                        className={`cursor-pointer flex items-center gap-1.5 py-0.5 rounded px-1.5 ${
                          file.id === activeTab
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-neutral-900 hover:text-foreground"
                        }`}
                      >
                        {file.isDir ? "📁" : "📄"}
                        <span className="truncate">{file.name.trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editor Area */}
                <div className="flex-1 flex flex-col overflow-hidden bg-neutral-950">
                  {/* Editor Tab Headers */}
                  <div className="flex border-b border-border/40 bg-neutral-900/40 select-none overflow-x-auto">
                    {codeTabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = tab.id === activeTab;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-4 py-2 border-r border-border/40 font-mono text-[11px] transition-colors ${
                            isActive
                              ? "bg-neutral-950 text-foreground border-b border-b-primary font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-neutral-900/50"
                          }`}
                        >
                          <Icon size={12} className={tab.color} />
                          <span>{tab.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Code Snippet Screen */}
                  <div className="flex-grow p-4 overflow-y-auto font-mono text-[11px] text-left leading-relaxed text-foreground/80 bg-neutral-950 select-text">
                    <pre className="whitespace-pre-wrap">
                      {codeTabs.find((t) => t.id === activeTab)?.content}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Bottom Console / Terminal Log Panel */}
              <div className="h-28 bg-black border-t border-border/60 p-2 font-mono text-[10px] text-left overflow-y-auto leading-normal select-none">
                <div className="flex items-center justify-between text-[8px] text-muted-foreground uppercase tracking-widest border-b border-border/30 pb-1 mb-1">
                  <span>Terminal output stream</span>
                  <span>status: synced</span>
                </div>
                <div className="space-y-0.5 text-muted-foreground">
                  {logsList.map((log, i) => (
                    <div key={i} className={log.includes("SUCCESS") ? "text-green-400" : ""}>
                      {log}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-foreground">
                    <span>vicky@linux-workstation:~$</span>
                    <span className="w-1.5 h-3 bg-primary animate-blink" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
