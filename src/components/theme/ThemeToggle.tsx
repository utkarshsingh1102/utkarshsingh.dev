"use client";

import { useTheme } from "./ThemeProvider";

function SunIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`size-[18px] ${className}`}
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="12"
          y1="2.6"
          x2="12"
          y2="5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </svg>
  );
}

function MoonIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`size-[18px] ${className}`}
      aria-hidden
    >
      <path
        d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Fixed bottom-right theme switch. Mounted from the root layout rather than
 * inside the shell: the top bar, rails and bottom bar are `motion` elements
 * whose transforms would become the containing block for `position: fixed`.
 *
 * Which glyph shows is decided by the `dark:` variant, not by React state, so a
 * returning dark-mode visitor sees the right icon on the very first paint —
 * before hydration has run. State only drives the ARIA state and the label.
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      role="switch"
      onClick={toggle}
      aria-checked={isDark}
      aria-label={label}
      title={label}
      className="fixed bottom-[20px] right-[20px] z-[60] flex size-[40px] items-center justify-center border border-line bg-panel text-ink-muted transition-colors duration-200 hover:border-ink-muted hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent xl:bottom-[52px] xl:right-[24px]"
    >
      <MoonIcon className="motion-safe:transition-transform motion-safe:duration-300 dark:hidden" />
      <SunIcon className="hidden motion-safe:transition-transform motion-safe:duration-300 dark:block" />
    </button>
  );
}
