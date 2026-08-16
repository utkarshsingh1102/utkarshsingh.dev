"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

/** Kept in sync with the inline boot script in `src/app/layout.tsx`. */
export const THEME_STORAGE_KEY = "theme";

/**
 * The `<html>` class is the source of truth — the boot script sets it before
 * paint, so reading it (rather than mirroring it into state) keeps React and
 * the DOM from ever disagreeing.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Server and first client render agree on dark, the default for everyone. */
function getServerSnapshot(): Theme {
  return "dark";
}

type ThemeValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeValue | null>(null);

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}

/**
 * Dark is the default for every first-time visitor — the OS
 * `prefers-color-scheme` is deliberately never consulted. Only an explicit
 * toggle switches themes, and that choice is remembered for return visits.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // React's Strict Mode remount in dev rewrites <html> with only the
  // attributes it manages, dropping the class the boot script added. Re-apply
  // from storage once on mount; a no-op in production.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      stored = null;
    }

    document.documentElement.classList.toggle("dark", stored !== "light");
    listeners.forEach((listener) => listener());
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing or blocked storage — the toggle still works for this
      // session, it just won't be remembered.
    }

    listeners.forEach((listener) => listener());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
