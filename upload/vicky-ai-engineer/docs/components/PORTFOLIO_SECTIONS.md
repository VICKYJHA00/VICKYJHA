# Portfolio Section Components

## Overview

Main content sections that make up the portfolio website. Each component represents a distinct section of the page.

## Components

### Hero.tsx

**Purpose**: Landing hero section with animated introduction

**Features**:

- Animated headline with scroll trigger
- CTA buttons (View Projects, Get in touch)
- Particle background effects
- Gradient text effects

**Usage**:

```tsx
import { Hero } from "@/components/portfolio/Hero";

export default function Page() {
  return <Hero />;
}
```

---

### About.tsx

**Purpose**: Professional introduction with statistics

**Features**:

- Circular profile image with glow effect
- Animated counter stats
- Professional description
- CTA buttons

**Props**: None (self-contained)

**Key Elements**:

- 6+ years coding experience
- 24+ projects shipped
- 150+ open source contributions

**Animation**:

- Scroll-triggered reveal
- Hover effects on image
- Animated counters with easing

---

### Skills.tsx

**Purpose**: Display technical skills and expertise

**Features**:

- Organized by category (Backend, Frontend, DevOps, etc)
- Tech icon displays
- Proficiency levels (optional)
- Interactive hover effects

**Data Source**: `data/skills.ts`

**Categories**:

- Backend (Node.js, Python, Go, Rust)
- Frontend (React, TypeScript, Tailwind)
- DevOps (Docker, Kubernetes, AWS)
- Tools & Platforms

---

### Projects.tsx

**Purpose**: Showcase featured projects

**Features**:

- Grid layout with project cards
- Project images/thumbnails
- Tags and technologies
- Demo and GitHub links
- Hover effects and animations

**Data Source**: `data/projects.ts`

**Card Features**:

- Image with hover zoom
- Title and description
- Technology tags
- CTA links (Demo, Code)

---

### Services.tsx

**Purpose**: Highlight services offered

**Features**:

- Service cards with icons
- Description and key points
- Visual hierarchy
- Interactive hover states

**Services Included**:

- Backend Architecture
- AI Integration
- System Design
- DevOps & Infrastructure

---

### Resume.tsx

**Purpose**: Display and download CV/Resume

**Features**:

- PDF preview thumbnail
- Download button
- File metadata (format, size, updated date)
- View online link
- Animated interactions

**Props**: None

**Key Data**:

- File: `Vicky_Resume.pdf`
- Size: 240KB
- Format: PDF
- Updated: Oct 2024

**Animations**:

- Scroll-triggered entrance
- Thumbnail hover effects
- Button scale on hover

---

### Contact.tsx

**Purpose**: Contact form and social links

**Features**:

- Two-column layout
- Contact form with validation
- Social media links
- Email contact method
- Form state management (idle, loading, sent)

**Form Fields**:

- Name (required)
- Email (required, type: email)
- Subject
- Message (required)

**States**:

- `idle`: Initial state
- `loading`: Form submitting
- `sent`: Success message

**Integrations**:

- Email: hello@vicky.dev
- GitHub, LinkedIn, Portfolio links

---

### Timeline.tsx

**Purpose**: Display experience timeline

**Features**:

- Vertical timeline layout
- Date and title display
- Company/organization info
- Description text
- Interactive expand/collapse

**Data Source**: `data/timeline.ts`

**Timeline Entry Structure**:

```typescript
{
  date: string;
  title: string;
  company: string;
  description: string;
}
```

---

## Component Integration

### Page Layout Example

```tsx
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Resume />
      <Contact />
    </>
  );
}
```

## Styling Patterns

All components follow consistent patterns:

- **Spacing**: Uses custom spacing tokens (stack-lg, stack-md, gutter)
- **Typography**: Font-display, font-headline, font-body
- **Colors**: Semantic color tokens (primary, surface, background)
- **Animations**: Framer Motion with consistent easing functions

## Best Practices

1. **Reuse Section Wrapper**: Use `Section.tsx` for consistent headers
2. **Load Data Separately**: Import data from `data/` folder
3. **Optimize Images**: Use WebP with lazy loading
4. **Mobile Responsive**: All components are mobile-first
5. **Accessibility**: Proper ARIA labels and semantic HTML

## Performance Tips

- Lazy load project images
- Use React.memo for expensive components
- Optimize animations with will-change
- Code-split large sections with dynamic imports
