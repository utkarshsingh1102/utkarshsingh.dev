"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/motion/Reveal";
import { ProfileCard } from "./ProfileCard";

export function SidebarLeft() {
  return (
    <motion.aside
      className="hidden w-rail-left shrink-0 bg-panel xl:block"
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
    >
      <ProfileCard />
    </motion.aside>
  );
}
