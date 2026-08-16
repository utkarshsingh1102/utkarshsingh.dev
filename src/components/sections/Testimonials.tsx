import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PreTitle } from "@/components/ui/PreTitle";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section id="client-s-word" className="flex flex-col items-center pt-[80px]">
      <div className="flex w-full max-w-[500px] flex-col items-center gap-[40px] pt-[40px] xl:max-w-[640px] 3xl:max-w-[820px]">
        <Reveal className="flex flex-col items-center gap-[10px]">
          <PreTitle>What clients say</PreTitle>
          <h2 className="t-h2 text-center text-[clamp(34px,5vw,52px)] leading-[1.2] text-white">
            Feedback That
            <br />
            <span className="text-ink-muted">Fuels Me</span>
          </h2>
        </Reveal>

        <Stagger
          stagger={0.12}
          amount={0.15}
          className="relative flex w-full flex-col items-center justify-center gap-[30px]"
        >
          {testimonials.map((item) => (
            <StaggerItem
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 24, x: item.reversed ? 24 : -24 },
                shown: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="w-full"
            >
              <figure
                className={`flex w-full items-start gap-[20px] ${
                  item.reversed ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="size-[40px] shrink-0 rounded-full border border-line object-cover"
                />

                <div className="flex min-w-0 flex-1 flex-col gap-[20px] border border-line px-[20px] py-[20px]">
                  <blockquote className="t-body text-ink-muted">
                    {item.quote}
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-[8px] t-body">
                    <span className="text-white">{item.name},</span>
                    <span className="text-ink-faint">{item.title}</span>
                  </figcaption>
                </div>
              </figure>
            </StaggerItem>
          ))}

        </Stagger>
      </div>
    </section>
  );
}
