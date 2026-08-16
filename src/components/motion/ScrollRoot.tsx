"use client";

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import "lenis/dist/lenis.css";

type ScrollRootValue = {
  /** The centre column. Also the IntersectionObserver root when it scrolls. */
  ref: RefObject<HTMLElement | null>;
  /** True from xl up, where the shell is fixed and this column scrolls. */
  isScroller: boolean;
};

const ScrollRootContext = createContext<ScrollRootValue | null>(null);

export function useScrollRoot() {
  return useContext(ScrollRootContext);
}

/**
 * Wraps the scrolling centre column and publishes it so scroll-triggered
 * animations can observe against it instead of the window. Below xl the page
 * scrolls normally, so reveals fall back to the viewport.
 */
export function ScrollRoot({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScroller, setIsScroller] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const sync = () => setIsScroller(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Weighted, eased scrolling. Above xl it drives the centre column; below xl
  // it drives the window. `anchors` routes the in-page nav links through the
  // same easing, and reduced-motion users get plain 1:1 scrolling.
  useEffect(() => {
    const wrapper = ref.current;
    const content = contentRef.current;
    if (isScroller && (!wrapper || !content)) return;

    const lenis = new Lenis({
      ...(isScroller && wrapper && content ? { wrapper, content } : {}),
      lerp: 0.085,
      wheelMultiplier: 1,
      autoRaf: true,
      anchors: { offset: -20 },
      respectReducedMotion: true,
    });

    return () => lenis.destroy();
  }, [isScroller]);

  return (
    <ScrollRootContext.Provider value={{ ref, isScroller }}>
      <main ref={ref} id={id} className={className}>
        <div ref={contentRef}>{children}</div>
      </main>
    </ScrollRootContext.Provider>
  );
}
