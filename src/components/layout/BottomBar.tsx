"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/motion/Reveal";
import { footer } from "@/data/site";

export function BottomBar() {
  return (
    // The bar itself only spans from the left rail's edge to the right of the
    // shell; the 300px beside it is the left rail carrying on to the very
    // bottom of the screen, divider line included.
    <motion.div
      className="flex shrink-0 bg-panel"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
    >
      <div
        aria-hidden
        className="hidden w-rail-left shrink-0 border-r border-line xl:block"
      />

      {/* The profile links live in the left rail now, so the bar is just the note */}
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-[10px] border-t border-line px-[20px] py-[10px]">
        <p className="t-meta text-ink-muted">{footer.note}</p>
      </div>
    </motion.div>
  );
}
