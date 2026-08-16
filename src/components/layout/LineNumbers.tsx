"use client";

import { useEffect, useRef, useState } from "react";

/** Vertical rhythm of the gutter, in px. */
const LINE_HEIGHT = 22;

/**
 * Code-editor line numbers running down the left edge of the centre column.
 *
 * A track of its own: it belongs to neither rail nor the content, so nothing
 * can ever overlap it. It carries the page colour rather than the rail colour,
 * which is what makes the content read as starting at the gutter's right edge
 * and running to the right rail.
 *
 * It is taken out of flow on purpose. As a flex item its own height fed back
 * into the row height, which fed back into the number count — a loop that
 * inflated the scroll height on every re-layout. Positioned absolutely, the row
 * is sized purely by the content and the count can only follow it.
 */
export function LineNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;

    const measure = () => {
      const height = host.getBoundingClientRect().height;
      if (height) setCount(Math.ceil(height / LINE_HEIGHT));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 hidden w-[54px] select-none overflow-hidden border-r border-line bg-page pr-[12px] pt-[10px] text-right font-mono text-[11px] leading-[22px] text-line-strong xl:block 3xl:w-[68px] 3xl:pr-[16px]"
    >
      {Array.from({ length: count }, (_, index) => (
        <span key={index} className="block h-[22px]">
          {index + 1}
        </span>
      ))}
    </div>
  );
}
