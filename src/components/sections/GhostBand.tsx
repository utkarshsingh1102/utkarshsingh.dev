"use client";

import { motion, type Variants } from "framer-motion";
import { EASE } from "@/components/motion/Reveal";
import { useScrollRoot } from "@/components/motion/ScrollRoot";

/** Which edge a half slides in from — and slides back out to. */
type From = "left" | "right" | "down";

const hidden: Record<From, { x?: string; y?: string }> = {
  left: { x: "-55%" },
  right: { x: "55%" },
  down: { y: "60%" },
};

function halfVariants(from: From): Variants {
  return {
    hidden: { opacity: 0, ...hidden[from] },
    shown: {
      opacity: 1,
      x: "0%",
      y: "0%",
      transition: { duration: 0.9, ease: EASE },
    },
  };
}

type GhostBandProps = {
  /** Top-left word. */
  lead: string;
  /** Bottom-right word. */
  trail: string;
  leadFrom?: From;
  trailFrom?: From;
};

/**
 * Oversized watermark divider between sections — the lead word sits top-left
 * and the trail word bottom-right, both full-bleed across the centre column.
 *
 * Each half animates in as the band scrolls into view and animates straight
 * back out the way it came when it leaves, so scrolling up "un-does" it.
 */
export function GhostBand({
  lead,
  trail,
  leadFrom = "left",
  trailFrom = "right",
}: GhostBandProps) {
  const scrollRoot = useScrollRoot();

  const viewport = {
    once: false,
    amount: 0.15,
    root:
      scrollRoot?.isScroller && scrollRoot.ref.current
        ? scrollRoot.ref
        : undefined,
  } as const;

  const row = "flex overflow-hidden";
  const word =
    "block shrink-0 font-display font-bold uppercase leading-[0.95] tracking-[-0.02em]";

  // Each word is sized from its own character count so both rows fill roughly
  // the same share of the band no matter how long the word is, and the whole
  // thing scales with the column instead of topping out at a fixed size.
  const fill = (text: string) =>
    `clamp(40px, ${(96 / Math.max(text.length, 3)).toFixed(1)}cqw, 620px)`;

  // The band sits between two sections, so it carries its own top gap and
  // claws back part of the next section's 160px top padding. It bleeds to the
  // column edges, but only as far left as the line-number gutter — the gutter
  // is positioned and opaque, so anything tucked under it gets painted over and
  // the first letters read as trimmed.
  return (
    <motion.div
      aria-hidden
      data-band={lead.toLowerCase()}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      className="@container -mx-[20px] -mb-[70px] select-none pt-[70px] text-ghost sm:-mx-[30px] xl:-mb-[95px] xl:-ml-[30px] xl:-mr-[48px] xl:pt-[80px] 3xl:-ml-[48px] 3xl:-mr-[72px]"
    >
      <div className={`${row} justify-start`} style={{ fontSize: fill(lead) }}>
        <motion.span variants={halfVariants(leadFrom)} className={word}>
          {lead}
        </motion.span>
      </div>

      <div
        className={`${row} mt-[0.04em] justify-end`}
        style={{ fontSize: fill(trail) }}
      >
        <motion.span variants={halfVariants(trailFrom)} className={word}>
          {trail}
        </motion.span>
      </div>
    </motion.div>
  );
}
