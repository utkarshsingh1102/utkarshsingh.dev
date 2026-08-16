"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useScrollRoot } from "./ScrollRoot";

/** Slow-out curve — matches the restrained, technical feel of the design. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

type MotionDivProps = Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "whileInView" | "animate" | "variants" | "viewport"
>;

/**
 * Shared viewport config. Above xl the sections live inside the scrolling
 * centre column, so the observer has to root itself there rather than on the
 * window; below xl the page scrolls and the window is correct.
 */
function useViewport(amount: number) {
  const scrollRoot = useScrollRoot();

  return {
    once: true,
    amount,
    root:
      scrollRoot?.isScroller && scrollRoot.ref.current
        ? scrollRoot.ref
        : undefined,
  } as const;
}

type RevealProps = MotionDivProps & {
  children: ReactNode;
  delay?: number;
  /** Vertical travel in px. Pass 0 for a pure fade. */
  y?: number;
  amount?: number;
};

/**
 * Fades and lifts its children in the first time they scroll into view.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  amount = 0.25,
  transition,
  ...rest
}: RevealProps) {
  const viewport = useViewport(amount);

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={transition ?? { duration: 0.65, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = MotionDivProps & {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  amount?: number;
};

/**
 * Scroll-triggered container. Any `StaggerItem` below it in the tree inherits
 * the hidden/shown states and plays in sequence.
 */
export function Stagger({
  children,
  delay = 0,
  stagger = 0.08,
  amount = 0.2,
  ...rest
}: StaggerProps) {
  const viewport = useViewport(amount);

  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      variants={{
        hidden: {},
        shown: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  variants = riseVariants,
  ...rest
}: Omit<HTMLMotionProps<"div">, "children" | "variants"> & {
  children: ReactNode;
  variants?: Variants;
}) {
  return (
    <motion.div variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}

/** `StaggerItem` for use inside a `<ul>`/`<ol>`. */
export function StaggerLi({
  children,
  variants = riseVariants,
  ...rest
}: Omit<HTMLMotionProps<"li">, "children" | "variants"> & {
  children: ReactNode;
  variants?: Variants;
}) {
  return (
    <motion.li variants={variants} {...rest}>
      {children}
    </motion.li>
  );
}
