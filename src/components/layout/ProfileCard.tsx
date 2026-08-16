import Image from "next/image";
import { DownloadButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { profile, socials } from "@/data/site";

/**
 * The left rail: brand, bio, contact facts, CV download and the two CTAs.
 * Shared between the sticky desktop sidebar and the stacked mobile header.
 */
export function ProfileCard() {
  return (
    <div className="flex h-full flex-col justify-between gap-[16px] overflow-y-auto pb-[16px] [scrollbar-width:none] xl:gap-[24px] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col">
        <div className="flex items-center px-[26px] pb-[14px] pt-[18px]">
          <a href="#top" className="group flex h-[44px] items-center gap-[10px]">
            <span className="relative flex size-[44px] shrink-0 items-center justify-center overflow-hidden border border-line">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={44}
                height={44}
                className="size-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src={profile.avatarHover}
                alt=""
                width={44}
                height={44}
                aria-hidden
                className="absolute inset-0 size-full -scale-x-100 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-mono text-[16px] leading-[22px] text-ink">
                {profile.name}
              </span>
              <span className="t-label text-ink-muted">{profile.role}</span>
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-[18px] px-[26px] pb-[18px]">
          <p className="t-body text-ink-muted">{profile.bio}</p>

          <ul className="flex flex-col gap-[12px]">
            {profile.details.map((detail) => {
              const content = (
                <>
                  <Icon
                    src={detail.icon}
                    className="text-ink-muted transition-colors duration-200 group-hover:text-ink"
                  />
                  <span className="t-label text-ink-muted transition-colors duration-200 group-hover:text-ink">
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

          {/* Profiles sit with the contact facts rather than in the footer */}
          <ul className="flex items-center gap-[10px]">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex size-[34px] items-center justify-center border border-line text-ink-muted transition-colors duration-200 hover:border-ink-muted hover:bg-line hover:text-ink"
                >
                  <Icon src={social.icon} />
                </a>
              </li>
            ))}
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

      <div className="flex flex-col gap-[10px] border-t border-line px-[26px] py-[18px]">
        <a
          href={profile.scheduleUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center border border-ink bg-ink px-[20px] py-[10px] t-button text-ink-inverse transition-colors duration-200 hover:bg-transparent hover:text-ink"
        >
          Schedule a call
        </a>
        <a
          href="#contact-me"
          className="flex items-center justify-center border border-ink px-[20px] py-[10px] t-button text-ink transition-colors duration-200 hover:bg-ink hover:text-ink-inverse"
        >
          Work with me
        </a>
      </div>
    </div>
  );
}
