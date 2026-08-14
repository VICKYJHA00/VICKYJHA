# Utility & UI Components

## Overview

Reusable components for layout, effects, and interactions.

## Layout Components

### Navbar.tsx

**Purpose**: Fixed navigation bar

**Features**:

- Fixed positioning at top
- Logo/branding
- Navigation links
- Theme toggle button
- Responsive mobile menu

**Elements**:

- Brand name (V.)
- Nav links (About, Skills, Projects, Resume, Contact)
- Dark/light mode toggle
- Glassmorphism effect

**Styling**:

- Backdrop blur with transparency
- Sticky positioning (z-50)
- Responsive design

---

### Footer.tsx

**Purpose**: Page footer with links

**Features**:

- Copyright information
- Social links
- Utility links (Privacy, Sitemap)
- Minimal design

---

### Section.tsx

**Purpose**: Reusable section header wrapper

**Props**:

```tsx
interface SectionHeaderProps {
  kicker?: string; // Small label above title
  title?: React.ReactNode;
  subtitle?: string;
}
```

**Usage**:

```tsx
<SectionHeader
  kicker="About"
  title={
    <>
      Architecting the <span>Invisible Engine</span>
    </>
  }
  subtitle="My professional journey..."
/>
```

---

## Animation & Effects Components

### CursorGlow.tsx

**Purpose**: Custom glowing cursor effect

**Features**:

- Follows mouse position
- Glow effect with blur
- Responsive to interactions
- Hidden on touch devices

---

### FloatingTech.tsx

**Purpose**: Animated floating tech icons

**Features**:

- Floating animation
- Tech stack icons
- Parallax effects
- Random positioning and timing

---

### Particles.tsx

**Purpose**: Particle animation background

**Features**:

- Canvas-based particles
- Animation loop
- Mouse interaction (optional)
- Performance optimized

---

### ScrollProgress.tsx

**Purpose**: Visual scroll progress indicator

**Features**:

- Scroll position tracking
- Progress bar animation
- Percentage display (optional)
- Smooth updates

---

## Theme & Provider Components

### ThemeProvider.tsx

**Purpose**: Theme context provider

**Features**:

- Dark/light mode support
- Local storage persistence
- System preference detection
- Context-based state management

**Usage**:

```tsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

---

### ThemeToggle.tsx

**Purpose**: Theme switcher UI

**Features**:

- Toggle button with icon
- Smooth transitions
- Keyboard accessible
- Shows current theme

**Usage**:

```tsx
<ThemeToggle />
```

---

### FullscreenToggle.tsx

**Purpose**: Fullscreen mode toggle

**Features**:

- Enter/exit fullscreen
- Browser API integration
- Fallback support
- Keyboard shortcut (optional)

---

## Utility Components

### SmoothScroll.tsx

**Purpose**: Smooth scrolling utility

**Features**:

- Scroll to element by ID
- Smooth animation
- Focus management
- Accessibility support

**Usage**:

```tsx
const { scrollTo } = useSmoothScroll();
scrollTo("projects");
```

---

## UI Component Library (shadcn/ui)

The `ui/` folder contains 40+ reusable shadcn/ui components:

### Common Components

- **Button** - Primary and secondary buttons
- **Input** - Text input fields
- **Card** - Container with styling
- **Badge** - Label/tag component
- **Dialog** - Modal dialog
- **Form** - Form handling utilities
- **Select** - Dropdown select
- **Tabs** - Tabbed interface

### Advanced Components

- **Accordion** - Collapsible content
- **AlertDialog** - Alert modal
- **Carousel** - Image carousel
- **Drawer** - Side drawer/sidebar
- **Pagination** - Pagination controls
- **Progress** - Progress bar
- **Slider** - Range slider
- **Table** - Data table

## Component Hierarchy

```
Layout
├── Navbar
├── Section (wrapper)
├── Page Content (Hero, About, Skills, etc.)
└── Footer

Utilities
├── Particles (background)
├── FloatingTech (decorative)
├── CursorGlow (cursor effect)
└── ScrollProgress (indicator)

Theme
├── ThemeProvider (context)
├── ThemeToggle (UI)
└── FullscreenToggle (UI)
```

## Composition Pattern

Most components can be composed:

```tsx
export default function Page() {
  return (
    <>
      <Navbar />
      <Section>
        <Hero />
      </Section>
      <Section>
        <About />
      </Section>
      <Footer />
    </>
  );
}
```

## Common Props

All components follow consistent patterns:

```tsx
// Standard props
interface ComponentProps {
  className?: string; // Additional Tailwind classes
  children?: React.ReactNode;
  id?: string; // For scroll anchors
  animate?: boolean; // For animations
}
```

## Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: All interactive elements labeled
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG compliant
