import Link from "next/link";
import { GhostBand } from "@/components/sections/GhostBand";
import { PreTitle } from "@/components/ui/PreTitle";

type ComingSoonProps = {
  /** Eyebrow label, e.g. "Work archive". */
  eyebrow: string;
  /** Headline halves — the second is set in muted grey. */
  titleLead: string;
  titleTrail: string;
  body: string;
  /** Watermark words for the band under the copy. */
  bandLead: string;
  bandTrail: string;
};

/**
 * Placeholder screen for routes that aren't built yet. Same type ramp and
 * watermark band as the home page so it reads as part of the site, not a gap.
 */
export function ComingSoon({
  eyebrow,
  titleLead,
  titleTrail,
  body,
  bandLead,
  bandTrail,
}: ComingSoonProps) {
  return (
    <section className="flex min-h-[calc(100dvh-200px)] flex-col justify-center pb-[80px] pt-[120px]">
      <div className="flex max-w-[760px] flex-col gap-[24px] 3xl:max-w-[1000px]">
        <PreTitle>{eyebrow}</PreTitle>

        <h1 className="t-display text-[clamp(48px,7vw,92px)] leading-[1.1] text-white">
          {titleLead} <span className="text-ink-muted">{titleTrail}</span>
        </h1>

        <p className="max-w-[520px] t-body text-ink-muted">{body}</p>

        <div className="flex flex-wrap items-center gap-[16px] pt-[10px]">
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-white bg-white px-[20px] py-[10px] t-button text-panel transition-colors duration-200 hover:bg-transparent hover:text-white"
          >
            Back to home
          </Link>
          <Link
            href="/#contact-me"
            className="inline-flex items-center justify-center border border-ink-muted px-[20px] py-[10px] t-button text-ink-muted transition-colors duration-200 hover:border-white hover:text-white"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <GhostBand lead={bandLead} trail={bandTrail} />
    </section>
  );
}
