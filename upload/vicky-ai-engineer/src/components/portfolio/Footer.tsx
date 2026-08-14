import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "../../data/contact";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-base font-bold text-foreground">
          vicky<span className="text-primary">.</span>dev
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vicky · Built with React, Tailwind & Framer Motion
        </div>
        <div className="flex gap-4 text-muted-foreground">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
