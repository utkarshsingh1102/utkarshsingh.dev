import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PreTitle } from "@/components/ui/PreTitle";
import { posts } from "@/data/site";

export function Blog() {
  return (
    <section id="blog" className="pb-[130px] pt-[160px]">
      <div className="flex flex-col gap-[40px]">
        <Reveal className="flex flex-col gap-[10px]">
          <PreTitle>Insights &amp; Ideas</PreTitle>
          <h2 className="t-h2 text-[clamp(34px,5vw,52px)] leading-[1.2] text-white">
            From My <span className="text-ink-muted">Design Desk</span>
          </h2>
        </Reveal>

        <Stagger
          stagger={0.12}
          amount={0.1}
          className="grid grid-cols-1 border-l border-t border-line md:grid-cols-3 3xl:grid-cols-4"
        >
          {posts.map((post) => (
            <StaggerItem key={post.href}>
              <a
                href={post.href}
                className="group flex h-full min-h-[317.2px] flex-col justify-between border-b border-r border-line bg-page p-[30px] transition-colors duration-300 hover:bg-panel"
              >
                <div className="flex flex-col gap-[20px] pb-[150px]">
                  <p className="t-label text-ink-muted">{post.date}</p>
                  <h3 className="t-h3 text-white">{post.title}</h3>
                </div>
                <p className="t-label text-accent transition-transform duration-300 group-hover:translate-x-[4px]">
                  Read full blog
                </p>
              </a>
            </StaggerItem>
          ))}

          <StaggerItem>
            <div className="flex h-full min-h-[317.2px] items-center justify-center border-b border-r border-line bg-page p-[30px]">
              <ButtonLink href="/blog" variant="secondary">
                View all blog
              </ButtonLink>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
