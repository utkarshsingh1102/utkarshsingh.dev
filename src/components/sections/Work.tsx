"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EASE, Reveal, Stagger } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PreTitle } from "@/components/ui/PreTitle";
import { works } from "@/data/site";

type Layout = "two" | "three";

// Wide screens gain a column so the cards stay a sane size as the centre
// column grows rather than blowing up to fill it.
const layoutClass: Record<Layout, string> = {
  two: "sm:grid-cols-2 3xl:grid-cols-3",
  three: "sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4",
};

const MotionLink = motion.create(Link);

const card = {
  hidden: { opacity: 0, y: 40 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Work() {
  const [layout, setLayout] = useState<Layout>("two");

  return (
    <section id="work" className="pt-[160px]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[20px]">
          <Reveal className="flex flex-wrap items-center justify-between gap-[20px]">
            <PreTitle>Featured work</PreTitle>

            <div className="flex border border-line">
              {(["two", "three"] as const).map((option, index) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLayout(option)}
                  aria-pressed={layout === option}
                  aria-label={
                    option === "two" ? "Two column grid" : "Three column grid"
                  }
                  className={`flex size-[34px] items-center justify-center transition-colors duration-200 ${
                    index === 0 ? "border-r border-line" : ""
                  } ${
                    layout === option
                      ? "bg-line text-ink"
                      : "bg-transparent text-ink-faint"
                  }`}
                >
                  <Icon
                    src={
                      option === "two"
                        ? "/icons/grid-two.svg"
                        : "/icons/grid-three.svg"
                    }
                  />
                </button>
              ))}
            </div>
          </Reveal>

          <Stagger
            stagger={0.09}
            amount={0.05}
            className={`grid grid-cols-1 gap-[30px] ${layoutClass[layout]}`}
          >
            {works.map((work, index) => (
              <MotionLink
                key={work.title}
                href={work.href}
                layout
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group flex flex-col overflow-hidden border border-line"
              >
                <div className="relative flex items-center bg-panel py-[16px] pl-[18px] pr-[70px]">
                  <p className="t-body text-ink">{work.title}</p>
                  <span
                    aria-hidden
                    className="absolute inset-y-0 right-0 flex w-[54px] items-center justify-center border-l border-line bg-panel text-accent"
                  >
                    <Icon
                      src="/icons/arrow-right.svg"
                      width={22}
                      height={19.13}
                      className="transition-transform duration-300 group-hover:translate-x-[4px] group-hover:-translate-y-[4px]"
                    />
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px bg-line"
                  />
                </div>

                {/* Photography sits in its own dark well in both themes — it
                    also stops the plate flashing through the hover crossfade */}
                <div className="relative aspect-[434.5/338.94] w-full overflow-hidden bg-well">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(min-width: 1280px) 435px, (min-width: 640px) 45vw, 90vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <Image
                    src={work.hoverImage}
                    alt=""
                    fill
                    aria-hidden
                    sizes="(min-width: 1280px) 435px, (min-width: 640px) 45vw, 90vw"
                    className="scale-105 object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
              </MotionLink>
            ))}
          </Stagger>
        </div>

        <Reveal className="flex flex-col items-end gap-[20px] pt-[30px]">
          <p className="max-w-[280px] text-right text-[12px] leading-[14.4px] text-ink-faint">
            Explore the full collection of my design and development work.
          </p>
          <ButtonLink href="/work">View all works</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
