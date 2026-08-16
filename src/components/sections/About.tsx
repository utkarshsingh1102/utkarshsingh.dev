import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DownloadButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
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
              <h2 className="t-h2 text-[clamp(30px,4.2vw,46px)] leading-[1.2] text-ink">
                How I <span className="text-ink-muted">Solve Problems</span>
              </h2>
            </StaggerItem>

            <StaggerItem className="flex max-w-[400px] flex-col gap-[20px] pb-[20px] t-body text-ink-muted xl:max-w-[560px] 3xl:max-w-[720px]">
              <p>
                I’m a{" "}
                <span className={highlight}>
                  full-stack and cloud developer
                </span>
                . I build applications end to end — the interface, the services
                behind it, the database, and the cloud it runs on. Most of my
                work starts the same way: something is slow, brittle or breaks
                under load, and it has to be right before the business can move.
              </p>
              <p>
                At IBM I build platform software used across an enterprise
                banking organisation, where a wrong answer is expensive and easy
                to miss. Before that I built and ran the cloud workloads behind
                a games company’s market product{" "}
                <span className={highlight}>end to end</span>, and before that I
                shipped sites and portals for my own clients.
              </p>
              <p>
                The method doesn’t change between a React front end and a job
                running on a cluster: understand the system, make it observable,
                make it hard to break.
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
              <PreTitle>As a creative person</PreTitle>
            </Reveal>

            {/* Company names live in the experience section now — this reads as
                a creative timeline, with the third column left open. */}
            <Stagger stagger={0.1} className="flex flex-col gap-[20px]">
              {experience.map((item) => (
                <StaggerItem
                  key={item.period}
                  className="grid gap-x-[20px] gap-y-[2px] border-b border-line pb-[20px] t-label sm:grid-cols-[150px_1fr]"
                >
                  <span className="text-accent">{item.period}</span>
                  <span className="text-ink">{item.role}</span>
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
                    className="flex size-[26px] items-center justify-center text-ink-muted transition-[color,transform] duration-200 hover:scale-110 hover:text-ink"
                  >
                    <Icon src={social.icon} size={18} />
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
