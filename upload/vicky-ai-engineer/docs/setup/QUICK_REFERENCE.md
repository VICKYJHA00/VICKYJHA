# Quick Reference Guide

Fast lookup for common tasks and patterns.

## Component Usage Quick Reference

### Import Components

```tsx
// Portfolio sections
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";

// Layout
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

// Effects
import { Particles } from "@/components/portfolio/Particles";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

// UI Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
```

## Common Tailwind Classes

### Layout

```tsx
// Flexbox
flex flex-col md:flex-row items-center justify-between gap-4

// Grid
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

// Container
max-w-7xl mx-auto px-6

// Positioning
absolute relative fixed sticky
```

### Spacing

```tsx
// Padding
p-6 py-8 px-4

// Margin
m-4 my-8 mx-auto

// Gap
gap-4 gap-y-6 gap-x-4
```

### Typography

```tsx
// Font size
text-sm text-base text-lg text-xl text-2xl

// Font weight
font-normal font-medium font-semibold font-bold

// Text color
text-foreground text-muted-foreground text-primary

// Text alignment
text-left text-center text-right
```

### Colors

```tsx
// Background
bg-background bg-surface bg-card bg-primary

// Text
text-foreground text-muted-foreground text-primary

// Border
border border-border border-primary

// Opacity
bg-primary/10 bg-primary/50 text-white/30
```

### Sizing

```tsx
// Width
w-full w-1/2 w-96 w-screen

// Height
h-full h-screen h-96

// Min/Max
min-w-full max-w-7xl min-h-screen
```

### Rounded Corners

```tsx
rounded rounded-lg rounded-xl rounded-2xl rounded-full
```

### Shadows

```tsx
shadow-sm shadow shadow-lg shadow-2xl shadow-elegant shadow-glow
```

### Display

```tsx
block hidden flex grid inline-flex
md:flex md:hidden lg:block
```

### Transitions

```tsx
transition transition-all duration-300 duration-500
ease-in ease-out ease-in-out
```

## Common Animation Patterns

### Scroll Reveal

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Effect

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 200 }}
>
  Click me
</motion.button>
```

### Fade In

```tsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  Content
</motion.div>
```

## Color Palette Reference

| Use Case        | Color             | Value   |
| --------------- | ----------------- | ------- |
| Primary Action  | primary           | #cfbcff |
| Main Background | background        | #141218 |
| Surface/Cards   | surface           | #141218 |
| Container       | surface-container | #211f24 |
| Text Primary    | foreground        | #e6e0e9 |
| Text Secondary  | muted-foreground  | varies  |
| Accent          | tertiary          | #e7c365 |
| Error           | error             | #ffb4ab |
| Border          | border            | varies  |

## Form Patterns

### Input Field

```tsx
<div className="space-y-2">
  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Label</label>
  <input
    type="text"
    placeholder="Placeholder"
    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
  />
</div>
```

### Button

```tsx
<button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all">
  Click Me
</button>
```

### Card

```tsx
<div className="p-6 rounded-2xl bg-surface border border-border shadow-elegant">Content</div>
```

## Responsive Breakpoints

```tsx
// Mobile first
sm: 640px   // Small devices
md: 768px   // Tablets
lg: 1024px  // Desktops
xl: 1280px  // Large screens
2xl: 1536px // Extra large

// Usage
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>
```

## Dark Mode Classes

```tsx
// Explicit dark mode
<div className="dark:bg-background dark:text-foreground">Content</div>

// System preference (via theme provider)
// Automatically applied based on system settings
```

## File Structure Template

### New Component Template

```tsx
"use client";

import { motion } from "framer-motion";

export interface MyComponentProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function MyComponent({ title, children, className }: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`p-6 rounded-2xl bg-surface border border-border ${className}`}
    >
      {title && <h2 className="font-display text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </motion.div>
  );
}
```

## Development Commands

```bash
# Start development
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Deploy
npm run deploy
```

## Testing Selectors

```tsx
// Common Tailwind selectors for testing
const element = document.querySelector(".flex.items-center");
const button = document.querySelector("button.bg-primary");
const card = document.querySelector("div.rounded-2xl");
```

## Performance Tips

1. **Use motion.div** for animations (not styled-components)
2. **Lazy load images** with loading="lazy"
3. **Code split** large components with dynamic imports
4. **Memoize** expensive components
5. **Debounce** scroll and resize handlers

## Debugging

```tsx
// Check computed styles
console.log(window.getComputedStyle(element));

// Debug Tailwind classes
element.className; // See applied classes

// Motion debugging
<motion.div
  initial={{ x: 0 }}
  animate={{ x: 100 }}
  transition={{ duration: 1 }}
  onAnimationStart={() => console.log("Started")}
  onAnimationComplete={() => console.log("Done")}
>
  Content
</motion.div>;
```

## Common Gotchas

❌ **Wrong**: `className="text-lg md"`
✅ **Correct**: `className="text-lg md:text-xl"`

❌ **Wrong**: Arbitrary values in component props
✅ **Correct**: Use predefined classes from Tailwind

❌ **Wrong**: Inline styles in motion components
✅ **Correct**: Use Tailwind classes

❌ **Wrong**: Multiple animations on same element
✅ **Correct**: Nest motion.div components

## Resources

- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
