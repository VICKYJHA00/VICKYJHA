'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { EASE_OUT_SMOOTH } from '@/lib/animations';
import { skillGroups } from '@/data/skills';
import { SectionHeading } from './SectionHeading';

const categoryIcons: Record<string, string> = {
  Backend: '⚙',
  Frontend: '🎨',
  'AI & Tools': '🤖',
  DevOps: '🔧',
};

const categoryColors: Record<string, string> = {
  Backend: 'from-orange-500 to-amber-400',
  Frontend: 'from-cyan-400 to-teal-400',
  'AI & Tools': 'from-violet-400 to-purple-400',
  DevOps: 'from-emerald-400 to-green-400',
};

/** 4 axes: top, right, bottom, left */
const ANGLE_OFFSET = -Math.PI / 2;
const ANGLE_STEP = (2 * Math.PI) / 4;
const CENTER = 120;
const MAX_RADIUS = 80;

function polarToCartesian(index: number, value: number): string {
  const angle = ANGLE_OFFSET + index * ANGLE_STEP;
  const r = (value / 100) * MAX_RADIUS;
  const x = CENTER + r * Math.cos(angle);
  const y = CENTER + r * Math.sin(angle);
  return `${x.toFixed(2)},${y.toFixed(2)}`;
}

function gridPolygonPoints(level: number): string {
  return [0, 1, 2, 3].map((i) => polarToCartesian(i, level)).join(' ');
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const averages = useMemo(
    () =>
      skillGroups.map((g) => {
        const sum = g.items.reduce((acc, s) => acc + s.level, 0);
        return Math.round(sum / g.items.length);
      }),
    [],
  );

  const dataPoints = useMemo(
    () => [0, 1, 2, 3].map((i) => polarToCartesian(i, averages[i])).join(' '),
    [averages],
  );

  const centerPoints = useMemo(
    () => [0, 1, 2, 3].map((i) => polarToCartesian(i, 0)).join(' '),
    [],
  );

  const labels = useMemo(() => {
    const labelPositions: { x: number; y: number; anchor: string }[] = [];
    for (let i = 0; i < 4; i++) {
      const angle = ANGLE_OFFSET + i * ANGLE_STEP;
      const r = MAX_RADIUS + 22;
      const x = CENTER + r * Math.cos(angle);
      const y = CENTER + r * Math.sin(angle);
      let anchor = 'middle';
      if (Math.abs(Math.cos(angle)) > 0.5) {
        anchor = Math.cos(angle) > 0 ? 'start' : 'end';
      }
      labelPositions.push({ x, y, anchor });
    }
    return labelPositions;
  }, []);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] border border-border/80 bg-[#09090b]/95 p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.2)]" ref={ref}>
        <SectionHeading
          label="Skills"
          title="What I work with"
          description="I&apos;m strongest on the backend, but I can hold my own on the frontend too. Here&apos;s a rough breakdown."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT_SMOOTH }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="rounded-[1.8rem] border border-border bg-[#111113]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <svg
                viewBox="0 0 240 240"
                className="w-full"
                style={{ width: 280, height: 280, margin: '0 auto', display: 'block' }}
                role="img"
                aria-label="Skills radar chart"
              >
                <g className="fill-none stroke-current text-border/30" strokeWidth={0.5}>
                  {[25, 50, 75, 100].map((level) => (
                    <polygon key={level} points={gridPolygonPoints(level)} />
                  ))}
                  {[0, 1, 2, 3].map((i) => {
                    const angle = ANGLE_OFFSET + i * ANGLE_STEP;
                    const x = CENTER + MAX_RADIUS * Math.cos(angle);
                    const y = CENTER + MAX_RADIUS * Math.sin(angle);
                    const d = `M${CENTER},${CENTER} L${x.toFixed(2)},${y.toFixed(2)}`;
                    return <path key={`axis-${i}`} d={d} />;
                  })}
                </g>

                <motion.polygon
                  points={inView ? dataPoints : centerPoints}
                  fill="var(--color-primary)"
                  fillOpacity={0.25}
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  transition={{ duration: 1, ease: EASE_OUT_SMOOTH }}
                />
                <motion.polygon
                  points={inView ? dataPoints : centerPoints}
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeOpacity={0.4}
                  strokeWidth={6}
                  strokeLinejoin="round"
                  filter="blur(6px)"
                  transition={{ duration: 1, ease: EASE_OUT_SMOOTH }}
                />

                {[0, 1, 2, 3].map((i) => {
                  const angle = ANGLE_OFFSET + i * ANGLE_STEP;
                  const fullR = (averages[i] / 100) * MAX_RADIUS;
                  const cx = CENTER + fullR * Math.cos(angle);
                  const cy = CENTER + fullR * Math.sin(angle);
                  return (
                    <motion.circle
                      key={`dot-${i}`}
                      cx={CENTER}
                      cy={CENTER}
                      r={4}
                      fill="var(--color-primary)"
                      animate={inView ? { cx, cy } : { cx: CENTER, cy: CENTER }}
                      transition={{ duration: 1, ease: EASE_OUT_SMOOTH }}
                    />
                  );
                })}

                {labels.map((lbl, i) => (
                  <text
                    key={`label-${i}`}
                    x={lbl.x}
                    y={lbl.y}
                    textAnchor={lbl.anchor}
                    dominantBaseline="central"
                    className="fill-muted-foreground"
                    style={{ fontSize: 11, fontWeight: 500 }}
                  >
                    {skillGroups[i].category}
                  </text>
                ))}
                <text x={CENTER} y={CENTER + MAX_RADIUS + 36} textAnchor="middle" className="fill-muted-foreground/40" style={{ fontSize: 9 }}>
                  avg. proficiency
                </text>
              </svg>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-border bg-[#111113]/80 p-5 transition-all duration-300 hover:border-primary/25 hover:bg-[#151518]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[group.category]} opacity-[0.08]`}></div>
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-base">{categoryIcons[group.category]}</span>
                    <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
                    <span className="ml-auto rounded-full border border-border bg-background/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {group.items.length}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((skill, si) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-foreground/90">{skill.name}</span>
                          <span className="tabular-nums text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                              delay: gi * 0.1 + si * 0.05 + 0.2,
                              ease: EASE_OUT_SMOOTH,
                            }}
                            className={`h-full rounded-full bg-gradient-to-r ${
                              categoryColors[group.category] ?? 'from-orange-500 to-amber-400'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}