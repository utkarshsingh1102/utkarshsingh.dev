import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DownloadButton } from "@/components/ui/Button";
import { PreTitle } from "@/components/ui/PreTitle";
import { experience, profile, socials } from "@/data/site";
import { AboutGallery } from "./AboutGallery";

const highlight = "bg-accent-soft text-accent";

export function About() {
  return (
    <section id="about-me" className="pt-[160px]">
      <div className="flex flex-col gap-[30px] pt-[50px] lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col">
          <Stagger className="flex max-w-[900px] flex-col gap-[20px] 3xl:max-w-none">
            <StaggerItem className="flex flex-col gap-[10px]">
              <PreTitle>About me section</PreTitle>
              <h2 className="t-h2 text-[clamp(34px,5vw,52px)] leading-[1.2] text-white">
                Inside My <span className="text-ink-muted">Engineering Core</span>
              </h2>
            </StaggerItem>

            <StaggerItem className="flex max-w-[400px] flex-col gap-[20px] pb-[20px] t-body text-ink-muted xl:max-w-[560px] 3xl:max-w-[720px]">
              <p>
                I’m a{" "}
                <span className={highlight}>
                  Data Engineer and Full Stack Developer
                </span>{" "}
                working on enterprise data platforms — right now leading R&amp;D
                on a data-lineage platform for a UK banking estate at IBM,
                building multi-source parsers that feed a unified Neo4j
                knowledge graph.
              </p>
              <p>
                Before that I built a gaming market-intelligence pipeline on{" "}
                <span className={highlight}>Medallion architecture</span> at
                NextBigGames, from ingestion through to the report generator
                stakeholders actually read. I like problems that run from raw
                data all the way to the interface.
              </p>
            </StaggerItem>

            <StaggerItem className="self-start">
              <DownloadButton
                label="Download CV"
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
              />
            </StaggerItem>
          </Stagger>

          <div className="flex flex-col gap-[30px] pt-[160px]">
            <Reveal>
              <PreTitle>In a previous life</PreTitle>
            </Reveal>

            <Stagger stagger={0.1} className="flex flex-col gap-[20px]">
              {experience.map((item) => (
                <StaggerItem
                  key={item.period}
                  className="grid gap-x-[20px] gap-y-[2px] border-b border-line pb-[20px] t-label sm:grid-cols-[170.85px_237.3px_1fr]"
                >
                  <span className="text-accent">{item.period}</span>
                  <span className="text-white">{item.role}</span>
                  <span className="text-ink-muted">{item.company}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <Reveal
          y={32}
          className="w-full max-w-[250px] shrink-0 self-start border border-line lg:sticky lg:top-[60px] xl:max-w-[320px] 3xl:max-w-[460px]"
        >
          <AboutGallery />

          <div className="flex flex-wrap items-center justify-center gap-[10px] border-t border-line bg-panel p-[16px]">
            <span className="t-meta text-ink-muted">Follow me:</span>
            <ul className="flex items-start gap-[6px]">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex size-[26px] items-center justify-center opacity-80 transition-opacity duration-200 hover:scale-110 hover:opacity-100"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px] object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
