import Image from "next/image";
import { DownloadButton } from "@/components/ui/Button";
import { profile } from "@/data/site";

/**
 * The left rail: brand, bio, contact facts, CV download and the two CTAs.
 * Shared between the sticky desktop sidebar and the stacked mobile header.
 */
export function ProfileCard() {
  return (
    <div className="flex h-full flex-col justify-between gap-[40px] overflow-y-auto pb-[30px] [scrollbar-width:none] xl:gap-[95.2px] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col">
        <div className="flex items-center p-[30px]">
          <a href="#top" className="group flex h-[50px] items-center gap-[10px]">
            <span className="relative flex size-[50px] shrink-0 items-center justify-center overflow-hidden border border-line">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={50}
                height={50}
                className="size-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src={profile.avatarHover}
                alt=""
                width={50}
                height={50}
                aria-hidden
                className="absolute inset-0 size-full -scale-x-100 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-mono text-[18px] leading-[25.2px] text-white">
                {profile.name}
              </span>
              <span className="t-label text-ink-muted">{profile.role}</span>
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-[30px] px-[30px] pb-[30px]">
          <p className="t-body text-ink-muted">{profile.bio}</p>

          <ul className="flex flex-col gap-[20px]">
            {profile.details.map((detail) => {
              const content = (
                <>
                  <Image
                    src={detail.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="size-[16px] shrink-0 object-contain"
                  />
                  <span className="t-label text-ink-muted transition-colors duration-200 group-hover:text-white">
                    {detail.label}
                  </span>
                </>
              );

              return (
                <li key={detail.label}>
                  {"href" in detail && detail.href ? (
                    <a
                      href={detail.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-[12px]"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="group flex items-center gap-[12px]">
                      {content}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          <DownloadButton
            label="Download CV"
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="self-start"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] border-t border-line p-[30px]">
        <a
          href={profile.scheduleUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center border border-white bg-white px-[20px] py-[10px] t-button text-panel transition-colors duration-200 hover:bg-transparent hover:text-white"
        >
          Schedule a call
        </a>
        <a
          href="#contact-me"
          className="flex items-center justify-center border border-white px-[20px] py-[10px] t-button text-white transition-colors duration-200 hover:bg-white hover:text-panel"
        >
          Work with me
        </a>
      </div>
    </div>
  );
}
