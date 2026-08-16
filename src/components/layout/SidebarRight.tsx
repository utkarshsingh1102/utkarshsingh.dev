"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "@/components/motion/Reveal";
import { indexNav } from "@/data/site";

const sectionIds = indexNav.map((item) => item.href.slice(1));

/**
 * Right rail index. Tracks which section is in view so the accent bar can
 * slide alongside the active link, matching the design's "Active Line".
 *
 * From xl up the sections scroll inside `#main-scroll` rather than the
 * document, so the observer roots itself on whichever is actually scrolling.
 */
export function SidebarRight() {
  const [activeId, setActiveId] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (targets.length === 0) return;

    let observer: IntersectionObserver | null = null;

    const connect = () => {
      observer?.disconnect();

      const scroller = document.getElementById("main-scroll");
      const scrolls =
        scroller !== null &&
        getComputedStyle(scroller).overflowY === "auto";

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visible[0]) setActiveId(visible[0].target.id);
        },
        {
          root: scrolls ? scroller : null,
          rootMargin: "-20% 0px -70% 0px",
          threshold: 0,
        },
      );

      targets.forEach((target) => observer?.observe(target));
    };

    connect();
    window.addEventListener("resize", connect);
    return () => {
      window.removeEventListener("resize", connect);
      observer?.disconnect();
    };
  }, []);

  return (
    <motion.aside
      className="hidden w-rail-right shrink-0 bg-panel xl:block"
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
    >
      <div className="flex h-full flex-col gap-[10px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="shrink-0 px-[30px] pt-[30px]">
          <p className="border-b border-line pb-[10px] t-body text-ink-muted">
            Index
          </p>
        </div>

        <motion.nav
          className="relative flex flex-col px-[30px] pb-[80px] pt-[10px]"
          initial="hidden"
          animate="shown"
          variants={{
            hidden: {},
            shown: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
          }}
        >
          {indexNav.map((item) => {
            const id = item.href.slice(1);
            const isActive = id === activeId;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                variants={{
                  hidden: { opacity: 0, x: 12 },
                  shown: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                }}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex min-h-[36px] items-center py-[8px] t-label transition-colors duration-200 hover:text-white ${
                  isActive ? "text-white" : "text-ink-muted"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute left-[-30px] h-[24px] w-[2px] bg-white transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {item.label}
              </motion.a>
            );
          })}
        </motion.nav>
      </div>
    </motion.aside>
  );
}
