# Documentation Index

Complete documentation for the Vicky Portfolio Project.

## 📚 Quick Navigation

### Main Documentation

- **[COMPONENTS.md](./COMPONENTS.md)** - Overview of all components and folder structure

### Components

- **[Portfolio Sections](./docs/components/PORTFOLIO_SECTIONS.md)** - Hero, About, Skills, Projects, Resume, Contact, Services, Timeline
- **[Utilities & UI](./docs/components/UTILITIES_AND_UI.md)** - Layout, animations, theme, and UI components

### Styling

- **[Tailwind Customization](./docs/styling/TAILWIND_CUSTOMIZATION.md)** - Colors, typography, spacing, custom CSS, animations

### Setup & Development

- **[Development Guide](./docs/setup/DEVELOPMENT.md)** - Setup, project structure, adding components, deployment

---

## 🏗️ Project Structure

```
docs/
├── components/
│   ├── PORTFOLIO_SECTIONS.md      # Main content sections
│   └── UTILITIES_AND_UI.md        # Reusable components
├── styling/
│   └── TAILWIND_CUSTOMIZATION.md  # Design system & customization
└── setup/
    └── DEVELOPMENT.md             # Getting started & development
```

---

## 🎯 Common Tasks

### I want to...

#### Add a new section to the portfolio

1. Read: [Development Guide](./docs/setup/DEVELOPMENT.md#adding-new-components)
2. Reference: [Portfolio Sections](./docs/components/PORTFOLIO_SECTIONS.md)

#### Customize colors and styling

1. Read: [Tailwind Customization](./docs/styling/TAILWIND_CUSTOMIZATION.md)
2. Check: [COMPONENTS.md](./COMPONENTS.md#styling)

#### Understand component structure

1. Read: [COMPONENTS.md](./COMPONENTS.md)
2. Browse: [Portfolio Sections](./docs/components/PORTFOLIO_SECTIONS.md)

#### Set up development environment

1. Read: [Development Guide - Setup](./docs/setup/DEVELOPMENT.md#project-setup)

#### Add animations to components

1. Read: [Development Guide - Animations](./docs/setup/DEVELOPMENT.md#working-with-animations)
2. Reference: [Tailwind - Animation & Motion](./docs/styling/TAILWIND_CUSTOMIZATION.md#animation--motion)

#### Deploy the project

1. Read: [Development Guide - Deployment](./docs/setup/DEVELOPMENT.md#deployment)

---

## 📁 File Organization

### Source Code

```
src/
├── components/
│   ├── portfolio/          (Main sections)
│   └── ui/                (UI components)
├── data/                  (Content data)
├── hooks/                 (Custom hooks)
├── lib/                   (Utilities)
├── routes/                (Page routes)
└── styles.css             (Global styles)
```

### Configuration

```
root/
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── wrangler.jsonc
└── package.json
```

### Documentation

```
docs/
├── components/
├── styling/
└── setup/
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Build

```bash
npm run preview
```

---

## 🎨 Key Features

- ✨ **Smooth Animations** - Framer Motion with scroll triggers
- 🎭 **Dark Mode** - Built-in theme support
- 📱 **Responsive** - Mobile-first design
- ⚡ **Performance** - Optimized images and code splitting
- 🎨 **Customizable** - Tailwind with custom color palette
- ♿ **Accessible** - WCAG compliant components
- 🔍 **SEO Ready** - Semantic HTML and metadata

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Router**: TanStack Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Library**: shadcn/ui
- **Build**: Vite
- **Deployment**: Cloudflare Workers

---

## 📖 Component Categories

### Portfolio Sections (Main Content)

- Hero - Landing section
- About - Introduction with stats
- Skills - Technical expertise
- Projects - Showcase
- Services - Offerings
- Resume - CV/Download
- Contact - Form & links
- Timeline - Experience

### Layout Components

- Navbar - Navigation
- Footer - Bottom section
- Section - Header wrapper

### Effects & Animations

- CursorGlow - Custom cursor
- FloatingTech - Floating icons
- Particles - Background effect
- ScrollProgress - Progress indicator

### Theme & Utilities

- ThemeProvider - Context
- ThemeToggle - Switcher
- FullscreenToggle - Fullscreen
- SmoothScroll - Scroll utility

### UI Components (40+)

- Button, Input, Card, Badge
- Dialog, Form, Select, Tabs
- Accordion, Carousel, Table
- And many more...

---

## 🎯 Design System

### Colors

- Primary: `#cfbcff` (Purple)
- Surface: `#141218` (Dark)
- Secondary: `#cdc0e9` (Light Purple)
- Tertiary: `#e7c365` (Gold)

### Typography

- Display: Syne
- Body: Geist Sans
- Mono: Geist Mono

### Spacing

- Stack LG: 32px
- Stack MD: 16px
- Stack SM: 8px
- Gutter: 24px

---

## 📞 Need Help?

### Document Reference

1. Check the relevant documentation file
2. Search within the markdown files
3. Review code examples in components

### Common Issues

- See [Development Guide - Troubleshooting](./docs/setup/DEVELOPMENT.md#troubleshooting)

---

## 📝 Updating Documentation

When you:

- ✅ Add a new component → Update [COMPONENTS.md](./COMPONENTS.md)
- ✅ Change styling → Update [Tailwind Customization](./docs/styling/TAILWIND_CUSTOMIZATION.md)
- ✅ Add a development process → Update [Development Guide](./docs/setup/DEVELOPMENT.md)
- ✅ Add a utility component → Update [Utilities & UI](./docs/components/UTILITIES_AND_UI.md)

---

**Last Updated**: May 10, 2026
**Version**: 1.0
**Author**: Vicky (AI Engineer)
