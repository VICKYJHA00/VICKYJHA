import { Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT } from '@/data/contact';

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <span className="font-semibold">vicky</span>
          <span className="text-primary">.</span>
          <span className="text-muted-foreground">dev</span>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vicky
        </p>

        <div className="flex gap-4 text-muted-foreground">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
