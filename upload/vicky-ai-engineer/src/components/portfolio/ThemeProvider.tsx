import { useEffect, type ReactNode } from "react";

/**
 * The site currently ships a single, deliberately-designed dark theme.
 * This provider just makes sure the `dark` class and native color-scheme
 * are applied before paint so there's no flash of unstyled content.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }, []);

  return <>{children}</>;
}
