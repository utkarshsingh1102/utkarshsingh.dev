"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { EASE } from "./Reveal";

/**
 * Cross-route fade for the centre column. The shell around it stays mounted, so
 * a navigation reads as the new page settling in rather than the site
 * reloading.
 *
 * Deliberately no `AnimatePresence`: holding the outgoing page through an exit
 * animation keeps a stale App Router subtree mounted alongside the incoming
 * one. Both carry the router's own segment key, so bouncing between two routes
 * faster than the exit duration produced duplicate-key collisions and left the
 * centre column wedged until a hard reload. Remounting on `pathname` gives the
 * fade without ever holding two route trees at once.
 */
export function PageFade({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
