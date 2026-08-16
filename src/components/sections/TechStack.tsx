import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { PreTitle } from "@/components/ui/PreTitle";
import { Icon } from "@/components/ui/Icon";
import { techRowOne, techRowThree, techRowTwo } from "@/data/site";

type Tech = {
  name: string;
  level: string;
  logo: string;
  /** Brands whose official mark is monochrome — painted in the theme ink. */
  mono?: boolean;
};

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="group relative flex h-[160px] w-[248.17px] shrink-0 flex-col justify-between border-r border-t border-line p-[20px]">
      <p className="t-label text-ink-muted transition-colors duration-200 group-hover:text-ink">
        {tech.name}
      </p>

      <div className="absolute inset-x-0 top-[58px] flex justify-center">
        {tech.mono ? (
          <Icon
            src={tech.logo}
            size={44}
            className="text-ink transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <Image
            src={tech.logo}
            alt=""
            width={44}
            height={44}
            className="size-[44px] object-contain transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </div>

      <p className="text-right t-label text-ink-faint">{tech.level}</p>
    </div>
  );
}

/** Card width from the artboard, and the widest column we design for. */
const CARD_WIDTH = 248.17;
const WIDEST_COLUMN = 3600;

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly Tech[];
  direction: "left" | "right";
}) {
  // The keyframes translate -50%, so the first half has to be at least as wide
  // as the column or the loop shows a gap. Shorter rows simply repeat more.
  const perHalf = Math.max(
    2,
    Math.ceil(WIDEST_COLUMN / (items.length * CARD_WIDTH)),
  );
  const cards = Array.from({ length: perHalf * 2 }, () => items).flat();

  return (
    <div className="flex w-max">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {cards.map((tech, index) => (
          <TechCard key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="pt-[160px]">
      <div className="flex flex-col gap-[30px]">
        <Reveal>
          <PreTitle>My tech stack</PreTitle>
        </Reveal>

        <Reveal
          y={32}
          amount={0.1}
          className="overflow-hidden border-b border-l border-line"
        >
          <MarqueeRow items={techRowOne} direction="left" />
          <MarqueeRow items={techRowTwo} direction="right" />
          <MarqueeRow items={techRowThree} direction="left" />
        </Reveal>
      </div>
    </section>
  );
}
