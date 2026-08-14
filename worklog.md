# Vicky Portfolio — Redesign Worklog

---
Task ID: 1
Agent: Main
Task: Complete redesign of Vicky's AI engineer portfolio to look less AI-generated and more human/appealing

## Current Project Status
- Complete portfolio site rebuilt in Next.js 16 with App Router
- All sections rendered and verified via agent-browser (desktop + mobile)
- No JS errors, all 200 responses
- Server running on port 3000

## What Changed (Old → New)

### Design Philosophy Overhaul
| Aspect | Before (AI-feeling) | After (Human-feeling) |
|--------|-------------------|---------------------|
| **Color** | Blue/purple/indigo gradients | Warm orange (#f97316) accent on near-black |
| **Typography** | Monospace everywhere, tiny text | Geist sans-serif, proper hierarchy |
| **Theme** | Terminal/hacker/CLI metaphors everywhere | Clean, minimal, professional |
| **Copy** | Dramatic ("Architecting the Invisible Engine") | Conversational ("I build backends that don't break") |
| **Hero** | IDE mockup with code tabs + terminal | Simple centered text with name + tagline |
| **About** | Glow ring portrait, "cinematic" language | Clean photo + natural bio | 
| **Skills** | Pipeline metaphor + console log panel | Simple progress bars in 2x2 grid |
| **Projects** | Over-decorated cards with IDE visual simulations | Clean cards with real Unsplash images |
| **Timeline** | Git log terminal with commit hashes + diff view | Clean vertical timeline with colored dots |
| **Contact** | Terminal-themed form with fake SMTP logs | Normal form with proper labels |
| **Animations** | Heavy (cursor glow, particles, floating tech) | Subtle (fade-ins, progress bars) |
| **Footer** | Complex | Minimal, 3 lines |

### Files Created
- `src/data/contact.ts` — Contact info
- `src/data/projects.ts` — 6 projects with natural descriptions
- `src/data/skills.ts` — 4 skill groups with proficiency levels
- `src/data/timeline.ts` — 3 timeline entries
- `src/components/portfolio/Navbar.tsx` — Clean floating navbar
- `src/components/portfolio/Hero.tsx` — Centered text hero
- `src/components/portfolio/About.tsx` — Photo + bio + stats
- `src/components/portfolio/Skills.tsx` — Progress bar grid
- `src/components/portfolio/Projects.tsx` — Featured + grid cards
- `src/components/portfolio/Timeline.tsx` — Vertical timeline
- `src/components/portfolio/Services.tsx` — 3 service cards
- `src/components/portfolio/Resume.tsx` — Resume download card
- `src/components/portfolio/Contact.tsx` — Normal contact form
- `src/components/portfolio/Footer.tsx` — Minimal footer
- Updated `src/app/globals.css` — Warm dark theme
- Updated `src/app/layout.tsx` — Updated metadata
- Updated `src/app/page.tsx` — Assembled all sections

### Key Design Decisions
1. **Orange accent (#f97316)** — Distinctive, warm, NOT the typical AI blue/purple
2. **No monospace in body text** — Only used for code-like contexts if any
3. **Real Unsplash images** for project cards instead of AI-generated mockups
4. **Conversational copy** — "Here's a rough breakdown" vs "Modular Competency Pipeline"
5. **Subtle animations** — Just whileInView fade-ins, no particles/glow/cursor effects
6. **Proper spacing** — py-28 for sections, max-w-6xl for content

## Unresolved / Next Phase
- Portrait image loaded from /public but could be optimized (WebP)
- Resume PDF not actually present at /resume/Vicky_Resume.pdf path
- Could add dark/light theme toggle
- Could add a blog section or writing samples
- Mobile hamburger menu works but could be more polished
- Skills progress bars are static values — could animate on scroll more smoothly