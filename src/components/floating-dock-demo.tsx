import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  Briefcase,
  Code2,
  Github,
  Home,
  Linkedin,
  Mail,
  Sparkles,
  User,
} from 'lucide-react';

export default function FloatingDockDemo() {
  const links = [
    { title: 'Home', icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: '#' },
    { title: 'About', icon: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: '#about' },
    { title: 'Projects', icon: <Code2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: '#projects' },
    { title: 'Experience', icon: <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: '#experience' },
    { title: 'Email', icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: 'mailto:hello@example.com' },
    { title: 'GitHub', icon: <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: '#' },
    { title: 'LinkedIn', icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: '#' },
  ];

  return (
    <div className="flex h-[35rem] w-full items-center justify-center">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
