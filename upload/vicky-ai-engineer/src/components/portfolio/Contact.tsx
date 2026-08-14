import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";
import { CONTACT } from "../../data/contact";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  const appendLogs = async (lines: string[]) => {
    for (const line of lines) {
      setLogs((prev) => [...prev, line]);
      await new Promise((r) => setTimeout(r, 400));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setState("sending");
    setLogs([]);

    await appendLogs([
      "vicky@portfolio:~$ ./send_transmission.sh",
      "Initializing secure SMTP connection pool...",
      "Resolving routing vectors to smtp.vicky.dev...",
      "TLS Handshake completed successfully (Cipher: ECDHE-RSA-AES256-GCM-SHA384)",
      "Verifying sender credentials... PASS",
      "Packaging message payloads as MIME-Multipart...",
      "Syncing mail queues...",
    ]);

    await new Promise((r) => setTimeout(r, 600));

    setState("success");
    await appendLogs([
      "Transmission dispatched! Message ID: msg_e4b82d91",
      "Closing SMTP connection. Done. Status code: 200 OK",
    ]);

    // The animation above is flavor — this is what actually delivers the
    // message. It opens the visitor's email client with everything
    // pre-filled so nothing gets lost.
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n—\n${formData.name}\n${formData.email}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setState("idle");
    setLogs([]);
  };

  return (
    <section className="max-w-7xl mx-auto py-32 px-6" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info & Metadata panel */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-primary uppercase tracking-[0.22em] select-none">
            <span className="h-px w-7 bg-primary/60" /> Connectivity
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.1]">
            Initialize <br />
            Transmission.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Open for high-impact engineering roles, backend consulting, or contract systems
            architecture. Drop a line to establish contact.
          </p>

          <div className="space-y-3 pt-4 font-mono text-xs">
            <div className="text-[10px] text-white/30 uppercase tracking-widest">
              // Direct Protocol
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 p-4 bg-neutral-950 rounded-2xl border border-border/60 hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={16} />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-muted-foreground uppercase">Mailbox Link</div>
                <div className="text-foreground font-semibold">{CONTACT.email}</div>
              </div>
            </a>

            <div className="flex gap-2.5 pt-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-neutral-950 border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-neutral-950 border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Command Prompt Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-border/85 bg-neutral-950/80 p-5 md:p-8 shadow-elegant text-left font-mono text-xs overflow-hidden flex flex-col justify-between"
          >
            {/* Console bar */}
            <div className="flex items-center justify-between border-b border-border/30 pb-3 mb-6 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                ssh://{CONTACT.email.split("@")[1] ?? "vicky.dev"}:22
              </span>
            </div>

            {state === "idle" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Simulated CLI prompts */}
                <div className="space-y-1">
                  <div className="text-primary font-bold select-none">
                    &gt; Enter candidate name (identity):
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-950 border-b border-border/50 focus-within:border-primary transition-colors py-1">
                    <span className="text-white/30 select-none">name:</span>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Isaac Newton"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-none text-foreground placeholder:text-white/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-primary font-bold select-none">
                    &gt; Enter return address (frequency):
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-950 border-b border-border/50 focus-within:border-primary transition-colors py-1">
                    <span className="text-white/30 select-none">email:</span>
                    <input
                      required
                      type="email"
                      placeholder="e.g. isaac@principia.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-none text-foreground placeholder:text-white/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-primary font-bold select-none">
                    &gt; Enter transmission details (message body):
                  </div>
                  <div className="flex items-start gap-2 bg-neutral-950 border-b border-border/50 focus-within:border-primary transition-colors py-1">
                    <span className="text-white/30 select-none mt-1">msg:</span>
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter details about your microservices, APIs, or contract specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-none text-foreground placeholder:text-white/20 focus:outline-none resize-none leading-relaxed"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 hover:opacity-95 transition-opacity font-bold text-xs select-none"
                >
                  <Send size={12} /> ./send_message
                </button>
              </form>
            )}

            {/* Simulated Live Logging screen */}
            {state !== "idle" && (
              <div className="space-y-4">
                <div className="bg-black/40 border border-border/40 rounded-2xl p-4 min-h-[160px] overflow-y-auto space-y-1 font-mono text-[10px] text-muted-foreground select-none">
                  {logs.map((line, i) => {
                    let textClass = "";
                    if (line.includes("vicky@portfolio")) textClass = "text-yellow-500 font-bold";
                    if (line.includes("dispatched") || line.includes("SUCCESS"))
                      textClass = "text-green-400 font-bold";
                    if (line.includes("Handshake") || line.includes("PASS"))
                      textClass = "text-cyan-400";
                    return (
                      <div key={i} className={textClass}>
                        {line}
                      </div>
                    );
                  })}
                  {state === "sending" && (
                    <div className="flex items-center gap-1.5 text-foreground mt-2">
                      <span className="w-1.5 h-3 bg-primary animate-blink" />
                      <span>transmitting data packets...</span>
                    </div>
                  )}
                </div>

                {state === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 text-xs font-bold flex items-center gap-1.5">
                        <Check size={14} className="text-green-400" />
                        Ready to send!
                      </span>
                      <button
                        onClick={resetForm}
                        className="text-[10px] text-primary hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      Your email app should have opened with the message pre-filled — hit send there
                      to deliver it.
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
