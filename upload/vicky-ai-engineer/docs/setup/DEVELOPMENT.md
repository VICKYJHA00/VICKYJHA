# Setup & Development Guide

## Project Setup

### Prerequisites

- Node.js 18+ (recommend LTS)
- npm or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd vicky-ai-engineer

# Install dependencies
npm install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file:

```env
# API endpoints (if needed)
VITE_API_URL=https://api.example.com

# Cloudflare Workers (optional)
VITE_WORKER_URL=https://worker.example.com
```

## Development

### Start Development Server

```bash
npm run dev
```

This starts the Vite dev server on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Outputs optimized files to `dist/`

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

Validates TypeScript types

## Project Structure Overview

```
vicky-ai-engineer/
├── src/
│   ├── components/          # React components
│   ├── data/               # Data files
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities
│   ├── routes/             # Route definitions
│   ├── styles.css          # Global styles
│   ├── router.tsx          # Router setup
│   └── start.ts            # Entry point
├── public/                 # Static assets
├── docs/                   # Documentation
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
├── wrangler.jsonc         # Cloudflare Workers config
├── package.json
└── COMPONENTS.md          # Components overview
```

## Adding New Components

### Create a New Portfolio Section

```bash
# Create component file
touch src/components/portfolio/NewSection.tsx
```

### Component Template

```tsx
import { motion } from "framer-motion";

export function NewSection() {
  return (
    <section id="new-section" className="relative py-32 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section content */}
        </motion.div>
      </div>
    </section>
  );
}
```

### Register in Router

Update `src/routes/index.tsx`:

```tsx
import { NewSection } from "@/components/portfolio/NewSection";

export default function Home() {
  return (
    <>
      {/* existing sections */}
      <NewSection />
    </>
  );
}
```

## Adding New Data

### Create Data File

```tsx
// src/data/mydata.ts
export const myData = [
  {
    id: 1,
    title: "Example",
    description: "Description here",
  },
];
```

### Use in Component

```tsx
import { myData } from "@/data/mydata";

export function MyComponent() {
  return (
    <>
      {myData.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}
```

## Working with Animations

### Motion Patterns

```tsx
// Scroll reveal
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
/>

// Hover effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>

// Stagger children
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

## Styling Tips

### Apply Custom Classes

```tsx
// Use Tailwind utilities
<div className="p-6 bg-surface rounded-xl border border-border">
  Content
</div>

// Combine with custom CSS
<div className="relative overflow-hidden group">
  <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
</div>
```

### Responsive Design

```tsx
// Mobile-first approach
<div className="flex flex-col md:flex-row lg:grid-cols-3">
  {/* Stack on mobile, row on tablet, grid on desktop */}
</div>
```

## Testing

### Run Tests (if configured)

```bash
npm run test
```

### Type Checking

```bash
npm run type-check
```

## Deployment

### Cloudflare Workers

```bash
# Deploy with Wrangler
npm run deploy
```

Configured in `wrangler.jsonc`

### Manual Build

```bash
npm run build
# Deploy dist/ folder to your hosting
```

## Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3000
```

### Clear Cache

```bash
# Remove dependencies and reinstall
rm -rf node_modules pnpm-lock.yaml
npm install
```

### TypeScript Errors

```bash
# Regenerate types
npm run type-check
```

## Performance Optimization

### Lazy Load Components

```tsx
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("@/components/portfolio/Large"));

export function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Image Optimization

```tsx
// Use WebP with fallbacks
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>

// With next/image equivalent
<img
  src="image.jpg"
  alt="Description"
  loading="lazy"
  width={1024}
  height={1024}
/>
```

## Code Quality

### ESLint

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## Documentation

### Update Docs

Edit markdown files in `docs/`:

- `docs/components/` - Component docs
- `docs/styling/` - Styling guides
- `docs/setup/` - Setup guides

### Root Documentation

Update `COMPONENTS.md` for overview

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Quality
npm run type-check   # Check types
npm run lint         # Run linter
npm run format       # Format code

# Deployment
npm run deploy       # Deploy to Cloudflare Workers
```

## Resources

- [TanStack Router](https://tanstack.com/router)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Documentation](https://react.dev/)
