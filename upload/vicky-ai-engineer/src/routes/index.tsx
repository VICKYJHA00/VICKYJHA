import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/portfolio/Navbar";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { Projects } from "../components/portfolio/Projects";
import { Timeline } from "../components/portfolio/Timeline";
import { Services } from "../components/portfolio/Services";
import { Resume } from "../components/portfolio/Resume";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";
import { ScrollProgress } from "../components/portfolio/ScrollProgress";
import { SmoothScroll } from "../components/portfolio/SmoothScroll";
import { CursorGlow } from "../components/portfolio/CursorGlow";
import { FullscreenToggle } from "../components/portfolio/FullscreenToggle";
import { ThemeProvider } from "../components/portfolio/ThemeProvider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vicky — Java Backend Engineer & AI Product Builder" },
      {
        name: "description",
        content:
          "BTech CSE student building production-grade Java/Spring Boot backends and AI-powered products. Open for internships and freelance.",
      },
      { property: "og:title", content: "Vicky — Java Backend Engineer & AI Product Builder" },
      {
        property: "og:description",
        content: "Production-grade backends. AI products that ship. Available for internships.",
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Services />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <FullscreenToggle />
      </div>
    </ThemeProvider>
  );
}
