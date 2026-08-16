"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/components/motion/Reveal";
import { footer, socials } from "@/data/site";

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

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-[10px] border-t border-line px-[20px] py-[4px]">
        <p className="t-meta text-ink-muted">{footer.note}</p>
        <ul className="flex items-center gap-[6px]">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex size-[26px] items-center justify-center opacity-80 transition-opacity duration-200 hover:opacity-100"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
