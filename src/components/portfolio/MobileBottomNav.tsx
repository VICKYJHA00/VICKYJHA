'use client';

import { useEffect, useState, useCallback } from 'react';
import { House, User, Code2, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', icon: House, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Code2, label: 'Projects' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export function MobileBottomNav() {
  const [active, setActive] = useState('#home');

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        }),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 h-14 bg-background/80 backdrop-blur-xl border-t border-border">
      <ul className="flex items-center justify-around h-full px-2" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        {navItems.map((item) => {
          const isActive = active === `#${item.id}`;
          const Icon = item.icon;
          return (
            <li key={item.id} className="relative flex-1 flex justify-center">
              <button
                onClick={() => scrollTo(item.id)}
                className={`relative flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-muted-foreground/50'
                }`}
                aria-label={item.label}
              >
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-primary" />
                )}
                <Icon size={18} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}