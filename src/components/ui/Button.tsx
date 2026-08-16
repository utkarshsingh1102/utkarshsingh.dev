import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * In-app routes have to go through `next/link` — a bare `<a>` is a real browser
 * navigation, which tears the whole shell down and rebuilds it. Anchors,
 * mailto: and external URLs stay plain anchors.
 */
export function isInternalRoute(href?: string): href is string {
  return typeof href === "string" && href.startsWith("/");
}

type Variant = "solid" | "outline" | "secondary";

const base =
  "group relative inline-flex items-center justify-center px-[20px] py-[10px] t-button transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-ink-inverse border border-ink hover:bg-transparent hover:text-ink",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-ink-inverse",
  secondary:
    "border border-ink-muted text-ink-muted hover:border-ink hover:text-ink",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({
  variant = "solid",
  className = "",
  children,
  href,
  ...rest
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const label = <span className="whitespace-nowrap">{children}</span>;

  if (isInternalRoute(href)) {
    return (
      <Link href={href} className={classes} {...rest}>
        {label}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...rest}>
      {label}
    </a>
  );
}

type IconButtonLinkProps = ComponentProps<"a"> & {
  label: string;
};

/**
 * Label + trailing 42px square icon slot — the "Download CV" control.
 */
export function DownloadButton({
  label,
  className = "",
  ...rest
}: IconButtonLinkProps) {
  return (
    <a
      className={`group relative inline-flex items-center justify-center gap-[20px] border border-line pl-[20px] transition-colors duration-200 hover:border-ink-muted ${className}`}
      {...rest}
    >
      <span className="t-button whitespace-nowrap text-ink">{label}</span>
      <span className="flex size-[42px] shrink-0 items-center justify-center overflow-hidden bg-line text-accent transition-colors duration-200 group-hover:bg-line-strong">
        <Icon src="/icons/download.svg" width={15.111} height={16} />
      </span>
    </a>
  );
}
