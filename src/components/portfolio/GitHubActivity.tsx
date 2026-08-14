'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

function generateActivityData() {
  const weeks = 26;
  const days = weeks * 7;
  const data: number[] = [];

  // Simple seeded random for consistency
  let seed = 42;
  const next = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < days; i++) {
    // More likely to have activity on weekdays
    const dayOfWeek = i % 7;
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
    const activityLevel = next();
    if (!isWeekday && activityLevel > 0.3) {
      data.push(0);
    } else if (activityLevel < 0.25) {
      data.push(0);
    } else if (activityLevel < 0.5) {
      data.push(1);
    } else if (activityLevel < 0.7) {
      data.push(2);
    } else if (activityLevel < 0.88) {
      data.push(3);
    } else {
      data.push(4);
    }
  }
  return data;
}

function getMonthLabels(weeks: number) {
  // Approximate month labels based on week position
  // Starting ~6 months ago from now
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - weeks * 7);

  const labels: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;

  for (let w = 0; w < weeks; w++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + w * 7);
    const month = date.getMonth();
    if (month !== lastMonth) {
      labels.push({
        label: date.toLocaleString('en', { month: 'short' }),
        weekIndex: w,
      });
      lastMonth = month;
    }
  }

  return labels;
}

const WEEKS = 26;
const activityData = generateActivityData();
const monthLabels = getMonthLabels(WEEKS);

const activityClasses = [
  'bg-secondary',       // 0: no activity
  'bg-primary/20',      // 1: low
  'bg-primary/40',      // 2: medium
  'bg-primary/60',      // 3: high
  'bg-primary',         // 4: very high
];

const dayLabels = ['Mon', '', 'Wed', '', 'Fri', '', ''];

export function GitHubActivity() {
  // Organize data into weeks (columns) x 7 days (rows)
  const weeks: number[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(activityData[w * 7 + d]);
    }
    weeks.push(week);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="py-16 bg-secondary/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="GitHub Activity"
          title="I ship code regularly"
          className="mb-8"
        />

        {/* Contribution Grid */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[640px]">
            {/* Month labels row */}
            <div className="flex ml-8 mb-2">
              {monthLabels.map((m, i) => {
                const nextMonth = monthLabels[i + 1];
                const span = nextMonth ? nextMonth.weekIndex - m.weekIndex : WEEKS - m.weekIndex;
                return (
                  <div
                    key={`${m.label}-${m.weekIndex}`}
                    className="text-[10px] text-muted-foreground/60"
                    style={{ width: `${span * 13}px` }}
                  >
                    {m.label}
                  </div>
                );
              })}
            </div>

            {/* Grid: day labels + cells */}
            <div className="flex gap-0">
              {/* Day labels column */}
              <div className="flex flex-col mr-1.5">
                {dayLabels.map((label, i) => (
                  <div
                    key={i}
                    className="w-6 h-[10px] flex items-center text-[10px] text-muted-foreground/50 leading-none"
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Weeks grid */}
              <div className="flex gap-[3px]">
                {weeks.map((week, w) => (
                  <div key={w} className="flex flex-col gap-[3px]">
                    {week.map((level, d) => (
                      <div
                        key={d}
                        className={`w-[10px] h-[10px] rounded-[2px] ${activityClasses[level]} transition-transform duration-100 hover:scale-150 hover:ring-1 hover:ring-foreground/20 cursor-default`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end mt-3 gap-1.5">
          <span className="text-[10px] text-muted-foreground/50 mr-1">Less</span>
          {activityClasses.map((cls, i) => (
            <div
              key={i}
              className={`w-[10px] h-[10px] rounded-[2px] ${cls}`}
            />
          ))}
          <span className="text-[10px] text-muted-foreground/50 ml-1">More</span>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground font-semibold">1,247</strong>{' '}
            contributions in the last year
          </span>
          <span>
            Longest streak:{' '}
            <strong className="text-foreground font-semibold">23 days</strong>
          </span>
          <span>
            Current streak:{' '}
            <strong className="text-foreground font-semibold">5 days</strong>
          </span>
        </div>
      </div>
    </motion.section>
  );
}
