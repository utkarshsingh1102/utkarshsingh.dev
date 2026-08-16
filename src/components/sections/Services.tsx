import {
  Reveal,
  Stagger,
  StaggerItem,
  StaggerLi,
} from "@/components/motion/Reveal";
import { PreTitle } from "@/components/ui/PreTitle";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="what-i-do" className="pt-[160px]">
      <div className="flex flex-col gap-[30px]">
        <Reveal>
          <PreTitle>What I do</PreTitle>
        </Reveal>

        <div className="flex flex-col gap-[40px]">
          {services.map((service) => (
            <Stagger
              key={service.title}
              stagger={0.06}
              className="flex flex-col gap-[20px]"
            >
              <StaggerItem>
                <h3 className="t-h3 text-ink">{service.title}</h3>
              </StaggerItem>

              <ul className="grid grid-cols-1 gap-x-[40px] gap-y-[14px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[60px] 3xl:grid-cols-4 3xl:gap-x-[90px]">
                {service.features.map((feature) => (
                  <StaggerLi
                    key={feature}
                    className="flex items-start gap-[10px]"
                  >
                    <span
                      aria-hidden
                      className="mt-[7px] size-[6px] shrink-0 rounded-[3px] bg-ink-muted"
                    />
                    <span className="t-body text-ink-muted">{feature}</span>
                  </StaggerLi>
                ))}
              </ul>
            </Stagger>
          ))}
        </div>
      </div>
    </section>
  );
}
