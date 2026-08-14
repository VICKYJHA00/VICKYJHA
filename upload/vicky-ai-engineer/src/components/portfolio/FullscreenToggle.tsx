import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, Sparkles } from "lucide-react";

export function FullscreenToggle() {
  const [isFs, setIsFs] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const enter = async () => {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      /* ignore */
    }
  };
  const exit = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
    } catch {
      /* ignore */
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isFs ? (
        <motion.button
          key="exit"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={exit}
          className="fixed bottom-6 right-6 z-[80] flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border shadow-elegant text-xs font-mono text-foreground hover:bg-accent transition-colors"
          aria-label="Exit fullscreen"
        >
          <Minimize2 size={13} />
          Exit fullscreen
        </motion.button>
      ) : (
        <motion.button
          key="enter"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ delay: 1.2 }}
          onClick={enter}
          className="fixed bottom-6 right-6 z-[80] group flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-xs font-mono font-medium shadow-elegant hover:shadow-glow transition-all"
          aria-label="Enter fullscreen experience"
        >
          <Sparkles size={13} className="group-hover:rotate-12 transition-transform" />
          Enter Experience
          <Maximize2 size={11} className="opacity-70" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
