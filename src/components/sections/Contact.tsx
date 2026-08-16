"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PreTitle } from "@/components/ui/PreTitle";

const fieldClass =
  "h-[60px] w-full border border-line bg-transparent px-[20px] t-body text-ink outline-none transition-colors duration-200 focus:border-ink-muted";

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-start gap-[2px] t-label text-ink-muted"
    >
      {children}
      {required ? (
        <span aria-hidden className="t-meta">
          *
        </span>
      ) : null}
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact-me" className="pb-[230px] pt-[130px]">
      <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-[0.8fr_1fr]">
        <Reveal className="flex flex-col gap-[10px] self-start">
          <PreTitle>Get in Touch</PreTitle>
          <h2 className="t-h2 text-[clamp(30px,4.2vw,46px)] leading-[1.2] text-ink">
            Let’s Work <br />
            <span className="text-ink-muted">Together</span>
          </h2>
        </Reveal>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[40px]">
          <Stagger
            stagger={0.08}
            amount={0.15}
            className="grid grid-cols-1 gap-x-[20px] gap-y-[19.6px] sm:grid-cols-2"
          >
            <StaggerItem className="flex flex-col gap-[10px]">
              <Label htmlFor="firstName" required>
                First name
              </Label>
              <input
                id="firstName"
                name="firstName"
                required
                placeholder="Jane"
                className={fieldClass}
              />
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-[10px]">
              <Label htmlFor="lastName" required>
                Last name
              </Label>
              <input
                id="lastName"
                name="lastName"
                required
                placeholder="Cooper"
                className={fieldClass}
              />
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-[10px] sm:col-span-2">
              <Label htmlFor="email" required>
                Email address
              </Label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@gmail.com"
                className={fieldClass}
              />
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-[10px] sm:col-span-2">
              <Label htmlFor="subject" required>
                Subject
              </Label>
              <input
                id="subject"
                name="subject"
                required
                placeholder="What do you need built?"
                className={fieldClass}
              />
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-[10px] sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder="A few lines about the project, timeline and budget"
                className="min-h-[140px] w-full resize-y border border-line bg-transparent p-[20px] text-[16px] leading-[19.2px] text-ink outline-none transition-colors duration-200 focus:border-ink-muted"
              />
            </StaggerItem>
          </Stagger>

          <Reveal className="flex items-center gap-[20px]">
            <button
              type="submit"
              className="border border-ink bg-ink px-[20px] py-[10px] t-button text-ink-inverse transition-colors duration-200 hover:bg-transparent hover:text-ink"
            >
              Send message
            </button>
            <p aria-live="polite" className="t-label text-accent">
              {sent ? "Thanks — I’ll reply within a day." : ""}
            </p>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
