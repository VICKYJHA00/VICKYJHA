'use client';

import { motion } from 'framer-motion';
import { MapPin, Music, Coffee, BookOpen, Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

const nowItems = [
  {
    icon: BookOpen,
    label: 'Studying',
    value: 'AWS Solutions Architect Professional',
  },
  {
    icon: Coffee,
    label: 'Building',
    value: 'A RAG-powered code review tool',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'India, open to remote',
  },
];

const playlist = [
  { title: 'Lo-fi beats', artist: 'Chillhop' },
  { title: 'The Less I Know the Better', artist: 'Tame Impala' },
  { title: 'Electric Feel', artist: 'MGMT' },
  { title: 'Summertime Magic', artist: 'Shawn Desman' },
];

export function Now() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrentTrack((t) => (t + 1) % playlist.length);
          return 0;
        }
        return p + 0.3;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const next = useCallback(() => {
    setCurrentTrack((t) => (t + 1) % playlist.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrentTrack((t) => (t - 1 + playlist.length) % playlist.length);
    setProgress(0);
  }, []);

  const track = playlist[currentTrack];

  return (
    <section className="py-20 px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sm text-primary font-medium mb-3">Now</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What I&apos;m up to lately
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated June 2025
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nowItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-xl border border-border/50 bg-card/20 p-5 hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="relative flex h-2 w-2 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground/90 leading-snug">
                  {item.value}
                </p>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 3 * 0.08, duration: 0.4 }}
            className="rounded-xl border border-border/50 bg-card/20 p-5 hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <Music size={14} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">
                Listening to
              </span>
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/40 via-primary/20 to-amber-500/20 flex items-center justify-center shrink-0">
                <Play size={14} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground/90 truncate">{track.title}</p>
                <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div
                ref={progressRef}
                className="h-1 rounded-full bg-secondary overflow-hidden cursor-pointer group/progress"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setProgress(((e.clientX - rect.left) / rect.width) * 100);
                }}
              >
                <div
                  className="h-full rounded-full bg-primary/80 group-hover/progress:bg-primary transition-colors"
                  style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={prev}
                  className="p-1 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Previous track"
                >
                  <SkipBack size={12} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                </button>
                <button
                  onClick={next}
                  className="p-1 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Next track"
                >
                  <SkipForward size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
