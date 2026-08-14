import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { CONTACT } from '@/data/contact';

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="font-semibold">vicky</span>
            <span className="text-primary">.</span>
            <span className="text-muted-foreground">dev</span>
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with Next.js & Tailwind
            <Heart size={10} className="text-red-400" />
          </p>

          <div className="flex gap-3 text-muted-foreground">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="hover:text-foreground transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
