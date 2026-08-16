"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  EASE,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion/Reveal";
import { PreTitle } from "@/components/ui/PreTitle";
import { certifications, workExperience } from "@/data/site";

/** The rule that draws itself outward as a row lands. */
const rule = {
  hidden: { scaleX: 0 },
  shown: {
    scaleX: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.15 },
  },
};

type Job = (typeof workExperience)[number];

/**
 * One role, collapsible. The header row stays visible; the stack line and
 * highlights expand underneath. The first entry opens by default.
 */
function JobEntry({ job }: { job: Job }) {
  const [open, setOpen] = useState(job === workExperience[0]);
  const panelId = `job-${job.company.toLowerCase().replace(/\W+/g, "-")}`;

  return (
    <Stagger
      stagger={0.08}
      className="border-t border-line last:border-b"
    >
      <StaggerItem>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full flex-col gap-[10px] py-[26px] text-left transition-colors duration-200 lg:flex-row lg:items-center lg:gap-[60px]"
        >
          <span className="flex shrink-0 flex-col gap-[6px] lg:w-[260px] 3xl:w-[320px]">
            <span className="block t-label text-accent">{job.period}</span>
            <span className="block t-h3 text-ink">{job.company}</span>
          </span>

          <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-[16px] gap-y-[6px]">
            <span className="t-body text-ink">{job.role}</span>
            <span className="t-label text-ink-muted">{job.team}</span>
            <motion.span
              aria-hidden
              className="hidden h-px min-w-0 flex-1 origin-left bg-line sm:block"
              variants={rule}
            />
            <span
              aria-hidden
              className={`flex size-[34px] shrink-0 items-center justify-center border border-line text-ink-muted transition-all duration-300 group-hover:border-ink-muted group-hover:text-ink ${
                open ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </span>
        </button>
      </StaggerItem>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-[16px] pb-[30px] lg:pl-[320px] 3xl:pl-[380px]">
              <p className="t-meta text-ink-faint">{job.stack}</p>

              <ul className="flex flex-col gap-[12px]">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-[12px]">
                    <span
                      aria-hidden
                      className="mt-[8px] size-[6px] shrink-0 rounded-[3px] bg-ink-faint"
                    />
                    <span className="t-body text-ink-muted">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Stagger>
  );
}

/**
 * Experience owns the section: one collapsible entry per role, with the
 * certifications below it as a two-column grid of name + exam code, verifiable
 * on Credly.
 */
export function Achievements() {
  return (
    <section id="awards" className="pb-[80px] pt-[160px]">
      <div className="flex flex-col gap-[40px]">
        <Reveal>
          <PreTitle>Work experience</PreTitle>
        </Reveal>

        <div className="flex flex-col">
          {workExperience.map((job) => (
            <JobEntry key={job.company} job={job} />
          ))}
        </div>

        <div className="flex flex-col gap-[20px] pt-[60px]">
          <Reveal className="flex flex-wrap items-center justify-between gap-[16px]">
            <PreTitle>Certifications</PreTitle>
            <a
              href={certifications.credlyUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-[8px] t-label text-accent transition-opacity duration-200 hover:opacity-80"
            >
              Verify on Credly
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-[3px]"
              >
                ↗
              </span>
            </a>
          </Reveal>

          <Stagger
            stagger={0.06}
            amount={0.1}
            className="grid grid-cols-1 border-l border-t border-dotted border-line sm:grid-cols-2"
          >
            {certifications.items.map((item) => (
              <StaggerItem
                key={item.code}
                className="flex flex-col gap-[8px] border-b border-r border-dotted border-line p-[24px] transition-colors duration-300 hover:bg-panel"
              >
                <p className="t-body text-ink">{item.name}</p>
                <p className="t-meta text-accent">{item.code}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
