import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  CheckCircle,
  XCircle,
  Database,
  Cpu,
  Send,
  Search,
  Sparkles,
  Terminal as TermIcon,
  CreditCard,
  FileCode,
  ShieldCheck,
  Zap,
} from "lucide-react";

// 1. THRYLOS (Attendance Ecosystem)
export function ThrylosVisual() {
  const [logs, setLogs] = useState<
    Array<{
      id: number;
      name: string;
      time: string;
      status: "success" | "retry" | "fail";
      ms: number;
    }>
  >([
    { id: 1, name: "Marcus Aurelius", time: "16:40:02", status: "success", ms: 12 },
    { id: 2, name: "Lucius Verus", time: "16:40:15", status: "success", ms: 14 },
    { id: 3, name: "Commodus", time: "16:40:22", status: "fail", ms: 89 },
    { id: 4, name: "Seneca the Younger", time: "16:40:35", status: "success", ms: 11 },
  ]);
  const [logCounter, setLogCounter] = useState(5);

  useEffect(() => {
    const names = [
      "Cicero",
      "Plato",
      "Aristotle",
      "Socrates",
      "Epictetus",
      "Cato the Younger",
      "Pliny the Elder",
    ];
    const interval = setInterval(() => {
      const isSuccess = Math.random() > 0.15;
      const newLog = {
        id: logCounter,
        name: names[Math.floor(Math.random() * names.length)],
        time: new Date().toTimeString().split(" ")[0],
        status: (isSuccess ? "success" : Math.random() > 0.5 ? "retry" : "fail") as
          | "success"
          | "retry"
          | "fail",
        ms: Math.floor(Math.random() * 20) + (isSuccess ? 8 : 60),
      };
      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
      setLogCounter((c) => c + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [logCounter]);

  return (
    <div className="w-full bg-neutral-950 rounded-2xl border border-border/80 overflow-hidden font-mono text-xs flex flex-col h-[280px]">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-neutral-900 border-b border-border/60 px-4 py-2 text-[10px] text-muted-foreground uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Biometric-Sync: Active</span>
        </div>
        <span>Nodes: Cluster-04</span>
      </div>

      {/* Main Console Grid */}
      <div className="grid grid-cols-3 divide-x divide-border/50 flex-grow overflow-hidden">
        {/* Logs Console */}
        <div className="col-span-2 p-3 overflow-y-auto space-y-2 select-none">
          <div className="text-[10px] text-muted-foreground border-b border-border/30 pb-1 mb-2">
            Live Authentication Feed
          </div>
          <AnimatePresence initial={false}>
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-between py-1 border-b border-white/5"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  {log.status === "success" && (
                    <CheckCircle size={12} className="text-green-500 shrink-0" />
                  )}
                  {log.status === "retry" && (
                    <Zap size={12} className="text-amber-500 shrink-0 animate-pulse" />
                  )}
                  {log.status === "fail" && <XCircle size={12} className="text-red-500 shrink-0" />}
                  <span className="truncate text-foreground/90">{log.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 text-muted-foreground">
                  <span>{log.ms}ms</span>
                  <span className="text-[10px] text-white/30">{log.time}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Telemetry panel */}
        <div className="p-3 space-y-3 bg-neutral-950/50">
          <div className="text-[10px] text-muted-foreground border-b border-border/30 pb-1">
            System Latency
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground">P99 TARGET</div>
            <div className="text-lg font-bold text-foreground font-sans">&lt; 35ms</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground">CURRENT P99</div>
            <div className="text-lg font-bold text-green-400 font-sans">13.8ms</div>
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="text-[9px] text-muted-foreground uppercase">Queued Buffers</div>
            <div className="flex gap-0.5">
              {[0.2, 0.4, 0.3, 0.1, 0.5, 0.8, 0.2, 0.1].map((val, i) => (
                <div
                  key={i}
                  className="flex-1 bg-neutral-900 rounded-sm h-6 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-primary/40"
                    animate={{ height: `${val * 100}%` }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Quiz Master (Real-time Learning)
export function QuizMasterVisual() {
  const [gameTime, setGameTime] = useState(10);
  const [scores, setScores] = useState({ vicky: 1840, guest_x: 1680 });
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setGameTime((t) => {
        if (t === 1) {
          // Reset game loop
          setSelected(null);
          return 10;
        }
        if (t === 8) {
          // Vicky answers Map (Correct)
          setSelected(1);
          setScores((prev) => ({ ...prev, vicky: prev.vicky + 120 }));
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const choices = [
    { id: 0, text: "Collection", state: "normal" },
    { id: 1, text: "Map", state: "correct" },
    { id: 2, text: "List", state: "normal" },
    { id: 3, text: "Set", state: "normal" },
  ];

  return (
    <div className="w-full bg-neutral-950 rounded-2xl border border-border/80 p-4 font-mono text-xs flex flex-col justify-between h-[280px]">
      {/* Quiz Header */}
      <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2">
        <span className="text-[10px] uppercase text-primary tracking-widest flex items-center gap-1.5 font-bold">
          <Zap size={12} className="text-yellow-400 fill-yellow-400" />
          socket.io active
        </span>
        <span className="text-white/60">
          Time Remaining: <strong className="text-red-400 font-bold">{gameTime}s</strong>
        </span>
      </div>

      {/* Quiz Question */}
      <div className="my-2 text-foreground font-semibold leading-relaxed">
        Q: In Java collections, which interface does HashMap implement?
      </div>

      {/* Multi-choice options */}
      <div className="grid grid-cols-2 gap-2 my-2 font-sans">
        {choices.map((c) => {
          let borderStyle = "border-border/60 bg-neutral-900/40 text-foreground/80";
          if (selected === c.id) {
            borderStyle =
              c.state === "correct"
                ? "border-green-500 bg-green-950/20 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
                : "border-red-500 bg-red-950/20 text-red-400";
          }
          return (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`p-2.5 rounded-xl border text-left text-xs transition-all duration-300 ${borderStyle}`}
            >
              <div className="flex items-center justify-between">
                <span>{c.text}</span>
                {selected === c.id && c.state === "correct" && (
                  <CheckCircle size={12} className="text-green-500" />
                )}
                {selected === c.id && c.state !== "correct" && (
                  <XCircle size={12} className="text-red-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Leaderboard */}
      <div className="border-t border-border/30 pt-2 flex items-center justify-between text-[11px] text-muted-foreground select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>
              vicky: <strong className="text-foreground">{scores.vicky} pts</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>
              guest_28: <strong className="text-foreground">{scores.guest_x} pts</strong>
            </span>
          </div>
        </div>
        <span className="text-[10px] bg-neutral-900 border border-border/50 px-2 py-0.5 rounded-md">
          Ping: 14ms
        </span>
      </div>
    </div>
  );
}

// 3. DSA Tracker (Spaced Repetition & Binary Search Tree)
export function DsaTrackerVisual() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState(70);
  const [status, setStatus] = useState("idle");

  const nodes = [
    { id: 50, x: 140, y: 30, left: 30, right: 70 },
    { id: 30, x: 60, y: 90, left: 10, right: 40 },
    { id: 70, x: 220, y: 90, left: 60, right: 85 },
    { id: 85, x: 260, y: 150, left: null, right: null },
  ];

  const searchTree = async () => {
    setStatus("searching");
    setActiveNode(50);
    await new Promise((r) => setTimeout(r, 1000));
    setActiveNode(70);
    await new Promise((r) => setTimeout(r, 1000));
    setActiveNode(85);
    await new Promise((r) => setTimeout(r, 800));
    setStatus("found");
  };

  const resetTree = () => {
    setActiveNode(null);
    setStatus("idle");
  };

  return (
    <div className="w-full bg-neutral-950 rounded-2xl border border-border/80 p-4 font-mono text-xs flex flex-col justify-between h-[280px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2 select-none">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
          <Search size={12} className="text-primary" />
          BST Search Simulation
        </span>
        <div className="flex gap-2">
          <button
            onClick={searchTree}
            disabled={status !== "idle"}
            className="px-2 py-0.5 rounded bg-primary/20 border border-primary/40 text-primary text-[10px] hover:bg-primary/30 disabled:opacity-50"
          >
            Search 85
          </button>
          <button
            onClick={resetTree}
            className="p-0.5 rounded bg-neutral-950 border border-border/50 text-muted-foreground hover:bg-neutral-900"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* SVG Canvas for Tree Representation */}
      <div className="relative flex-grow flex items-center justify-center min-h-[160px] select-none">
        <svg viewBox="0 0 280 180" className="w-full h-full max-w-[280px]">
          {/* Branch lines */}
          <line
            x1="140"
            y1="30"
            x2="60"
            y2="90"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
          />
          <line
            x1="140"
            y1="30"
            x2="220"
            y2="90"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
          />
          <line
            x1="220"
            y1="90"
            x2="260"
            y2="150"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
          />

          {/* Render nodes */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            const isTarget = node.id === 85 && status === "found";
            return (
              <g key={node.id}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="16"
                  className={`${
                    isTarget
                      ? "fill-green-950 stroke-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                      : isActive
                        ? "fill-primary/20 stroke-primary"
                        : "fill-neutral-900 stroke-border"
                  } transition-colors duration-300`}
                  strokeWidth="1.5"
                  animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ duration: 0.5 }}
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  className={`text-[10px] font-bold ${
                    isTarget ? "fill-green-400" : isActive ? "fill-primary" : "fill-foreground/90"
                  }`}
                >
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Text Prompt overlay */}
        <div className="absolute bottom-1 left-2 text-[10px] text-muted-foreground font-mono">
          {status === "idle" && "Click 'Search 85' to traverse the BST."}
          {status === "searching" && `Traversing tree -> current: Node(${activeNode})`}
          {status === "found" && "Target Node(85) located in O(log N) time."}
        </div>
      </div>
    </div>
  );
}

// 4. AI Resume Analyzer
export function AiResumeAnalyzerVisual() {
  const [step, setStep] = useState<"idle" | "upload" | "scanning" | "result">("idle");
  const [fileName, setFileName] = useState("Vicky_CV_Backend.pdf");

  const startAnalysis = async () => {
    setStep("upload");
    await new Promise((r) => setTimeout(r, 600));
    setStep("scanning");
    await new Promise((r) => setTimeout(r, 2200));
    setStep("result");
  };

  return (
    <div className="w-full bg-neutral-950 rounded-2xl border border-border/80 p-4 font-mono text-xs flex flex-col justify-between h-[280px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2 select-none">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles size={12} className="text-violet-400" />
          Semantic Talent Analyzer
        </span>
        <button
          onClick={startAnalysis}
          disabled={step !== "idle"}
          className="px-2.5 py-1 rounded bg-violet-500/20 border border-violet-500/40 text-violet-400 hover:bg-violet-500/30 disabled:opacity-60"
        >
          {step === "idle" ? "Upload Resume" : "Processing"}
        </button>
      </div>

      {/* Analysis Container */}
      <div className="flex-grow flex flex-col justify-center relative overflow-hidden select-none">
        {step === "idle" && (
          <div
            className="text-center py-6 border-2 border-dashed border-border/50 rounded-xl bg-neutral-900/20 hover:border-violet-500/40 transition-colors cursor-pointer"
            onClick={startAnalysis}
          >
            <FileCode size={28} className="mx-auto text-muted-foreground mb-2" />
            <p className="text-[11px] text-muted-foreground">
              Drag candidate dossier here or click to select
            </p>
          </div>
        )}

        {step === "upload" && (
          <div className="space-y-2 text-center py-6">
            <div className="animate-pulse text-violet-400 text-sm">Uploading {fileName}...</div>
            <div className="h-1 w-32 bg-neutral-900 mx-auto rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-violet-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        )}

        {step === "scanning" && (
          <div className="space-y-3 p-2">
            <div className="flex items-center gap-2 text-violet-400">
              <span className="h-2 w-2 rounded-full bg-violet-500 animate-ping" />
              <span>Scanning NLP embedding space...</span>
            </div>
            <div className="space-y-1 font-mono text-[10px] text-muted-foreground leading-normal">
              <div>&gt; Extracting key tokens from PDF metadata</div>
              <div>&gt; Mapping vectors onto 1536-dimensional matrix</div>
              <div>&gt; Core clusters detected: Backend, Java, AI-Product</div>
            </div>
            {/* Visual scanner bar */}
            <div
              className="absolute inset-x-0 h-0.5 bg-violet-500/50 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              style={{
                top: 0,
                animation: "scanLine 1.5s linear infinite",
              }}
            />
            <style>{`
              @keyframes scanLine {
                0% { top: 0% }
                100% { top: 100% }
              }
            `}</style>
          </div>
        )}

        {step === "result" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            <div className="flex items-center justify-between border-b border-border/20 pb-1.5">
              <span className="text-foreground font-semibold truncate max-w-[150px]">
                {fileName}
              </span>
              <span className="text-emerald-400 font-bold bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20">
                96% Role Fit
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-neutral-900 border border-border/50 p-2 rounded-lg">
                <div className="text-muted-foreground uppercase text-[8px] tracking-wide mb-1">
                  Primary Alignment
                </div>
                <div className="font-semibold text-foreground">Java / Spring Boot</div>
              </div>
              <div className="bg-neutral-900 border border-border/50 p-2 rounded-lg">
                <div className="text-muted-foreground uppercase text-[8px] tracking-wide mb-1">
                  Semantic Confidence
                </div>
                <div className="font-semibold text-foreground">High (98.2%)</div>
              </div>
            </div>
            <div className="text-[10px] text-muted-foreground bg-violet-950/10 border border-violet-500/15 rounded p-2 text-left italic">
              "Strong matching score on JWT security, database connection pooling, and
              multi-threaded JVM engineering workflows."
            </div>
            <button
              onClick={() => setStep("idle")}
              className="text-[9px] text-violet-400 hover:underline inline-flex items-center gap-1"
            >
              Reset scanner
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// 5. Spring Boot REST API Boilerplate
type SpringBootMetrics = {
  status: string;
  uptime: string;
  jvm: {
    heap_used_mb: number;
    heap_max_mb: number;
    active_threads: number;
    garbage_collector: string;
  };
  database: {
    driver: string;
    pool_active_connections: number;
    pool_idle_connections: number;
  };
  latency: {
    p95: string;
    p99: string;
  };
};

export function SpringBootApiVisual() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<SpringBootMetrics | null>(null);

  const fetchMetrics = async () => {
    setLoading(true);
    setResponse(null);
    await new Promise((r) => setTimeout(r, 1000));
    setResponse({
      status: "UP",
      uptime: "34 days, 12 hours",
      jvm: {
        heap_used_mb: 184.2,
        heap_max_mb: 2048.0,
        active_threads: 18,
        garbage_collector: "G1 Collector",
      },
      database: {
        driver: "org.postgresql.Driver",
        pool_active_connections: 5,
        pool_idle_connections: 45,
      },
      latency: {
        p95: "12ms",
        p99: "31ms",
      },
    });
    setLoading(false);
  };

  return (
    <div className="w-full bg-neutral-950 rounded-2xl border border-border/80 p-4 font-mono text-xs flex flex-col justify-between h-[280px]">
      {/* API Console Header */}
      <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2 select-none">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
          <Database size={12} className="text-amber-500" />
          Spring Boot Actuator Log
        </span>
        <span className="text-green-500 text-[10px] font-bold">200 OK</span>
      </div>

      {/* URL bar */}
      <div className="flex items-center gap-1 bg-neutral-900 border border-border/60 rounded px-2.5 py-1.5 mb-2">
        <span className="text-green-400 font-bold">GET</span>
        <span className="text-white/40 font-mono text-[10px]">
          https://vicky.dev/actuator/health
        </span>
        <button
          onClick={fetchMetrics}
          disabled={loading}
          className="ml-auto text-amber-500 font-bold hover:text-amber-400 disabled:opacity-50 text-[10px]"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      {/* Code panel output */}
      <div className="flex-grow bg-neutral-950/80 rounded border border-border/30 p-2 overflow-y-auto text-[10px] leading-relaxed text-left relative">
        {loading && (
          <div className="absolute inset-0 bg-neutral-950/80 flex items-center justify-center">
            <span className="animate-spin text-amber-500 text-sm">✦</span>
          </div>
        )}
        {!loading && !response && (
          <span className="text-white/30 italic">
            Click "Send" in the request bar to fetch JVM Actuator metrics...
          </span>
        )}
        {!loading && response && (
          <pre className="text-amber-300 font-mono">{JSON.stringify(response, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

// 6. ShopNest E-Commerce
export function ShopNestVisual() {
  const [step, setStep] = useState<"product" | "stripe" | "success">("product");

  const runPayment = async () => {
    setStep("stripe");
    await new Promise((r) => setTimeout(r, 2000));
    setStep("success");
  };

  return (
    <div className="w-full bg-neutral-950 rounded-2xl border border-border/80 p-4 font-mono text-xs flex flex-col justify-between h-[280px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2 select-none">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
          <CreditCard size={12} className="text-pink-400" />
          Headless Stripe checkout
        </span>
        <span className="text-white/40">API-V3</span>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center select-none font-sans">
        {step === "product" && (
          <div className="w-full text-center space-y-4">
            <div className="max-w-[200px] mx-auto bg-neutral-900 border border-border/60 p-3 rounded-2xl">
              <div className="aspect-square bg-gradient-to-tr from-pink-500/20 to-violet-500/20 rounded-xl mb-3 flex items-center justify-center text-pink-400 text-2xl font-bold">
                ⌨
              </div>
              <h4 className="text-xs font-semibold text-foreground">CyberKey Mechanical</h4>
              <p className="text-[10px] text-muted-foreground mt-1">$189.00 USD</p>
            </div>
            <button
              onClick={runPayment}
              className="w-full bg-pink-500 text-white font-bold py-2 rounded-xl text-xs hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/10 font-mono"
            >
              Checkout via Stripe
            </button>
          </div>
        )}

        {step === "stripe" && (
          <div className="text-center space-y-4">
            <div className="animate-spin text-pink-400 text-3xl">🛞</div>
            <div className="space-y-1">
              <p className="text-xs font-mono text-foreground font-semibold">
                stripe.confirmPayment()
              </p>
              <p className="text-[10px] font-mono text-muted-foreground">
                Authenticating webhook transmission...
              </p>
            </div>
          </div>
        )}

        {step === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-3 w-full"
          >
            <div className="h-10 w-10 bg-emerald-950/50 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Payment Succeeded!</p>
              <p className="text-[10px] text-muted-foreground mt-1 font-mono">
                Invoice: inv_92fba82c9e
              </p>
            </div>
            <div className="border border-dashed border-border/50 rounded-xl p-2 bg-neutral-900/30 text-left font-mono text-[9px] text-muted-foreground">
              <div>POST /webhooks/stripe-completed</div>
              <div className="text-green-400">Status: 200 OK (Event logged)</div>
              <div>Database: Orders table updated (ID: 1042)</div>
            </div>
            <button
              onClick={() => setStep("product")}
              className="text-[9px] text-pink-400 hover:underline font-mono"
            >
              Return to product
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
