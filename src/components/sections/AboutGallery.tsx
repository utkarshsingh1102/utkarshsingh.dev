"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { aboutImages } from "@/data/site";

/**
 * The stacked portraits in the About rail. The design ships four frames
 * layered on top of each other; here they cross-fade on a slow loop.
 */
export function AboutGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % aboutImages.length),
      3200,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative h-[289.33px] w-full">
      {aboutImages.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== index}
          className={`absolute inset-x-0 top-[38.16px] h-[213px] transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="250px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
