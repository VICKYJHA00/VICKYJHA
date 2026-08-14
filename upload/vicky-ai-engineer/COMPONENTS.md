# Portfolio Components Documentation

## Project Structure

```
src/
├── components/
│   ├── portfolio/               # Main portfolio components
│   │   ├── About.tsx           # About section with intro & stats
│   │   ├── Contact.tsx         # Contact form & social links
│   │   ├── CursorGlow.tsx      # Custom cursor glow effect
│   │   ├── FloatingTech.tsx    # Floating tech stack animation
│   │   ├── Footer.tsx          # Footer section
│   │   ├── FullscreenToggle.tsx # Fullscreen mode toggle
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Particles.tsx       # Particle animation background
│   │   ├── Projects.tsx        # Projects showcase section
│   │   ├── Resume.tsx          # Resume/CV section
│   │   ├── ScrollProgress.tsx  # Scroll progress indicator
│   │   ├── Section.tsx         # Reusable section wrapper
│   │   ├── Services.tsx        # Services section
│   │   ├── Skills.tsx          # Skills & tech stack
│   │   ├── SmoothScroll.tsx    # Smooth scroll utility
│   │   ├── ThemeProvider.tsx   # Theme context provider
│   │   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   │   └── Timeline.tsx        # Timeline component
│   │
│   └── ui/                      # Reusable UI components (shadcn/ui)
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       └── ... (40+ more UI components)
│
├── data/                        # Data files
│   ├── projects.ts             # Projects data
│   ├── skills.ts               # Skills data
│   └── timeline.ts             # Timeline data
│
├── hooks/                       # Custom React hooks
│   └── use-mobile.tsx          # Mobile detection hook
│
├── lib/                         # Utilities & helpers
│   ├── error-capture.ts        # Error handling
│   ├── error-page.ts           # Error page component
│   └── utils.ts                # Utility functions
│
└── routes/                      # TanStack Router routes
    ├── __root.tsx              # Root layout
    └── index.tsx               # Home page
```

## Component Categories

### 🎨 Layout & Structure

- **Navbar.tsx** - Fixed navigation with theme toggle
- **Hero.tsx** - Landing hero section
- **Section.tsx** - Reusable section header wrapper
- **Footer.tsx** - Footer with links

### 📋 Content Sections

- **About.tsx** - Professional introduction with stats
- **Skills.tsx** - Technical skills showcase
- **Projects.tsx** - Featured projects display
- **Services.tsx** - Service offerings
- **Resume.tsx** - CV/Resume section with download
- **Contact.tsx** - Contact form & social links
- **Timeline.tsx** - Experience timeline

### ✨ Effects & Interactions

- **CursorGlow.tsx** - Custom glowing cursor
- **FloatingTech.tsx** - Animated floating tech icons
- **Particles.tsx** - Particle animation background
- **ScrollProgress.tsx** - Visual scroll progress indicator
- **SmoothScroll.tsx** - Smooth scrolling utility

### 🎛️ Utilities & Providers

- **ThemeProvider.tsx** - Dark/light theme context
- **ThemeToggle.tsx** - Theme switcher component
- **FullscreenToggle.tsx** - Fullscreen mode toggle

## Key Features

### Resume Component

- **Layout**: Horizontal card with PDF thumbnail preview
- **Actions**: View CV, Download PDF buttons
- **Metadata**: Shows format (PDF/240KB) and last update date
- **Animation**: Hover effects and motion transitions
- **Location**: `src/components/portfolio/Resume.tsx`

```tsx
<Resume />
```

### Contact Component

- **Layout**: Two-column (sidebar + form)
- **Left Column**: Title, description, email link, social icons
- **Right Column**: Contact form with validation
- **States**: Loading, sent, and idle states
- **Animation**: Smooth transitions and interactions
- **Location**: `src/components/portfolio/Contact.tsx`

```tsx
<Contact />
```

### About Component

- **Portrait**: Circular profile image with glow effect
- **Stats**: Animated counter stats (years coding, projects, contributions)
- **Content**: Professional description and CTA buttons
- **Interactive**: Hover effects and smooth animations
- **Location**: `src/components/portfolio/About.tsx`

```tsx
<About />
```

## Data Files

### `data/projects.ts`

Stores featured projects with:

- Title, description, tags
- Links (demo, code)
- Images

### `data/skills.ts`

Technical skills organized by category:

- Backend, Frontend, DevOps, Tools

### `data/timeline.ts`

Experience timeline entries with:

- Date, title, company, description

## Styling

- **Framework**: Tailwind CSS with custom config
- **UI Library**: shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React & Material Symbols

## Custom Tailwind Extensions

```javascript
{
  colors: { /* Custom color palette */ },
  fontFamily: { /* Display, body, code fonts */ },
  spacing: { /* Stack, gutter, padding values */ },
  fontSize: { /* Custom font sizes */ }
}
```

## Usage Examples

### Importing Components

```tsx
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { About } from "@/components/portfolio/About";
```

### Page Structure

```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
```

## Environment & Build

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Router**: TanStack Router (v1)
- **Animation**: Framer Motion
- **Deployment**: Cloudflare Workers (Wrangler)

## File Size & Performance

- **Resume PDF**: 240KB
- **Optimized Images**: WebP with lazy loading
- **Code Splitting**: Route-based splitting with TanStack Router

## Best Practices

1. **Reuse UI Components** from `components/ui/` for consistency
2. **Use Custom Hooks** in `hooks/` for shared logic
3. **Keep Data Separate** in `data/` folder for easy updates
4. **Organize by Feature** - portfolio components grouped together
5. **Leverage Animations** - Use Framer Motion for smooth UX

## Related Files

- **Router Config**: `src/router.tsx`
- **Global Styles**: `src/styles.css`
- **Tailwind Config**: `tailwind.config.ts` (in root)
- **TypeScript Config**: `tsconfig.json`
- **Vite Config**: `vite.config.ts`
