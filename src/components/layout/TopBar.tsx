"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EASE } from "@/components/motion/Reveal";
import { profile, topNav } from "@/data/site";
import { LocalTime } from "./LocalTime";

export function TopBar() {
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 h-[28.6px] w-full shrink-0 border-b border-line bg-panel"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="flex h-full w-full items-stretch">
        <div className="hidden h-full w-rail-left shrink-0 items-center border-r border-line px-[30px] xl:flex">
          <p className="t-meta text-ink-muted">Open to freelance &amp; full-time</p>
        </div>

        <nav className="flex h-full min-w-0 flex-1 items-stretch overflow-hidden">
          <ul className="flex h-full shrink-0 items-stretch">
            {topNav.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.label} className="relative flex">
                  <Link
                    href={item.href}
                    className={`flex min-w-[120px] items-center justify-center px-[24px] t-meta transition-colors duration-200 hover:text-ink ${
                      active ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {active ? (
                    // Shared layoutId: the rule slides across to the new tab
                    // instead of blinking out and back in.
                    <motion.span
                      layoutId="nav-underline"
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-px bg-accent"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="ml-auto hidden shrink-0 items-center gap-[10px] pr-[30px] md:flex">
            <span className="flex items-center gap-[4px] rounded-[2px] bg-status-soft px-[8px] py-[2px]">
              <span className="relative flex size-[12px] items-center justify-center">
                <span className="size-[6px] rounded-[3px] bg-status" />
                <span
                  aria-hidden
                  className="absolute size-[10px] rounded-full bg-status opacity-25"
                />
                <span
                  aria-hidden
                  className="animate-status-ping absolute size-[10px] rounded-full bg-status"
                />
              </span>
              <span className="t-meta text-status">Open for projects</span>
            </span>

            <span className="t-meta text-ink-muted">{profile.details[1].label}</span>
            <span aria-hidden className="size-[5px] rounded-full bg-ink-muted" />
            <span className="flex min-w-[121px] items-center justify-end gap-[6px] t-meta text-ink-muted">
              <span>My time:</span>
              <LocalTime />
            </span>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
