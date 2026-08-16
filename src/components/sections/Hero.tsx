"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/motion/Reveal";
import { PreTitle } from "@/components/ui/PreTitle";
import { hero } from "@/data/site";

const container = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const line = {
  hidden: { opacity: 0, y: 28 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Hero() {
  // Both halves stay on one line each — two lines total, at every width — by
  // sizing the type off the longer half's character count instead of letting
  // it wrap. 0.52em is the display face's average advance width.
  const longest = Math.max(hero.titleLead.length, hero.titleTrail.length);
  const titleSize = `clamp(28px, ${(100 / (0.52 * longest)).toFixed(1)}cqw, 92px)`;

  return (
    <section id="top" className="@container pt-[60px]">
      <motion.div
        className="flex max-w-[700px] flex-col gap-[19.4px] 2xl:max-w-[900px] 3xl:max-w-[1200px]"
        initial="hidden"
        animate="shown"
        variants={container}
      >
        <motion.div variants={line}>
          <PreTitle>{hero.preTitle}</PreTitle>
        </motion.div>

        {/* Each line clips its own mask so the headline wipes up into place */}
        <h1
          className="t-display leading-[1.1] text-white"
          style={{ fontSize: titleSize }}
        >
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block whitespace-nowrap"
              variants={line}
            >
              {hero.titleLead}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block whitespace-nowrap text-ink-muted"
              variants={line}
            >
              {hero.titleTrail}
            </motion.span>
          </span>
        </h1>

        <motion.p className="t-body text-ink-muted" variants={line}>
          {hero.body}
        </motion.p>
      </motion.div>
    </section>
  );
}
