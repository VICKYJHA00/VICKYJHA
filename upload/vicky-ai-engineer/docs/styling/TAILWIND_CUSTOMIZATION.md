# Styling & Customization Guide

## Tailwind CSS Configuration

### Custom Color Palette

Located in `tailwind.config.ts`:

```javascript
colors: {
  // Primary colors
  primary: "#cfbcff",
  'on-primary': "#381e72",
  'primary-container': "#6750a4",

  // Surface colors
  surface: "#141218",
  'surface-bright': "#3b383e",
  'surface-dim': "#141218",
  'surface-container': "#211f24",

  // Secondary colors
  secondary: "#cdc0e9",
  'secondary-container': "#4d4465",

  // Tertiary/Accent
  tertiary: "#e7c365",
  'tertiary-container': "#c9a74d",

  // Error states
  error: "#ffb4ab",
  'error-container': "#93000a",

  // Other
  background: "#141218",
  outline: "#948e9c",
}
```

### Custom Spacing

```javascript
spacing: {
  'container-max': '1280px',
  'stack-lg': '32px',
  'stack-md': '16px',
  'stack-sm': '8px',
  'stack-xl': '64px',
  'gutter': '24px',
  'section-padding': '128px',
}
```

### Custom Typography

```javascript
fontFamily: {
  display: ['Syne'],
  body: ['Geist Sans'],
  mono: ['Geist Mono'],
}

fontSize: {
  'display-xl': ['80px', { lineHeight: '1.1', fontWeight: '800' }],
  'headline-lg': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
  'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
}
```

### Border Radius

```javascript
borderRadius: {
  DEFAULT: '0.25rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
}
```

## Font Setup

### Google Fonts

Three font families are loaded in the HTML:

1. **Syne** (Display/Heading)
   - Weights: 400, 600, 700, 800
   - Used for headings and large text

2. **Geist Sans** (Body)
   - Weights: 400, 500, 600
   - Used for body text and UI

3. **Geist Mono** (Code)
   - Weights: 400, 500
   - Used for code and technical text

### Font Usage Examples

```tsx
// Display heading
<h1 className="font-display text-display-xl font-bold">
  Your Heading
</h1>

// Body text
<p className="font-body text-body-md text-foreground">
  Your paragraph
</p>

// Mono/Code
<code className="font-mono text-code-sm">
  const x = 42;
</code>
```

## Color Tokens

### Semantic Colors

```
Primary Colors:
- primary: Main action color
- on-primary: Text on primary
- primary-container: Container background
- on-primary-container: Text on container

Surface Colors:
- surface: Main background
- surface-container: Card backgrounds
- surface-container-low: Subtle cards
- surface-container-high: Prominent cards

Foreground/Text:
- foreground: Main text (on-surface)
- muted-foreground: Secondary text
- on-surface-variant: Tertiary text

Other:
- border: Border colors
- background: Page background
```

## Gradient Classes

### Linear Gradients

```tsx
// Gradient directions
className = "bg-linear-to-r"; // left to right
className = "bg-linear-to-b"; // top to bottom
className = "bg-linear-to-tr"; // top-right diagonal
className = "bg-linear-to-br"; // bottom-right diagonal

// With color stops
className = "bg-linear-to-r from-primary via-blue-500 to-transparent";
```

## Custom CSS Classes

### Global Styles (in `styles.css`)

```css
/* Grid background pattern */
.grid-bg {
  background-size: 32px 32px;
  background-image: linear-gradient(...);
}

/* Radial mask for fade effect */
.radial-mask {
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
}

/* Animated gradient border */
.animated-gradient-border {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  padding: 1px;
  animation: rotate 6s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
```

## Responsive Design

### Tailwind Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Usage Examples

```tsx
// Mobile first approach
className = "w-full md:w-1/2 lg:w-1/3";

// Stack layout
className = "flex flex-col md:flex-row gap-4";

// Hidden/visible
className = "hidden md:block";
```

## Dark Mode

The project uses dark mode by default via `dark-mode: "class"` configuration.

### Theme Detection

```tsx
import { useTheme } from "@/components/portfolio/ThemeProvider";

export function MyComponent() {
  const { theme } = useTheme();

  return <div className={theme === "dark" ? "bg-background" : "bg-white"}>{/* content */}</div>;
}
```

### Color Override

```tsx
// Force dark colors
<div className="dark:bg-background dark:text-foreground">Content</div>
```

## Animation & Motion

### Framer Motion Integration

```tsx
import { motion } from "framer-motion";

// Simple fade-in
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Scroll trigger
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
  Content
</motion.div>
```

### Common Easing Functions

```tsx
// Smooth cubic easing
ease: [0.22, 1, 0.36, 1];

// Spring animation
type: "spring";
stiffness: 200;
damping: 18;
```

## Utility Classes

### Commonly Used Classes

```tsx
// Layout
className = "flex items-center justify-between";
className = "grid grid-cols-3 gap-4";

// Spacing
className = "p-4"; // padding
className = "m-4"; // margin
className = "gap-6"; // gap (flex/grid)

// Sizing
className = "w-full"; // 100% width
className = "h-screen"; // 100vh height

// Effects
className = "shadow-lg";
className = "blur-lg";
className = "backdrop-blur-xl";

// Hover effects
className = "hover:scale-105 transition-all duration-300";

// Transitions
className = "transition-all duration-500";
className = "transition-colors";
```

## Creating Custom Components

### Component Template

```tsx
import { motion } from "framer-motion";

interface MyComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export function MyComponent({ children, className }: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`relative p-6 rounded-2xl bg-surface border border-border shadow-elegant ${className}`}
    >
      {children}
    </motion.div>
  );
}
```

## CSS Variables

Access Tailwind values as CSS variables:

```css
:root {
  --primary: #cfbcff;
  --surface: #141218;
  --background: #141218;
}
```

## Performance Tips

1. **Use Tailwind Classes**: Prefer utility classes over inline styles
2. **Optimize Images**: Use WebP format with fallbacks
3. **Lazy Load**: Defer non-critical components
4. **Will-change**: Only on animated elements
5. **Debounce Handlers**: For scroll and resize events
