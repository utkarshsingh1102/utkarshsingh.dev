import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "secondary";

const base =
  "group relative inline-flex items-center justify-center px-[20px] py-[10px] t-button transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid:
    "bg-white text-panel border border-white hover:bg-transparent hover:text-white",
  outline:
    "border border-white text-white hover:bg-white hover:text-panel",
  secondary:
    "border border-ink-muted text-ink-muted hover:border-white hover:text-white",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({
  variant = "solid",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span className="whitespace-nowrap">{children}</span>
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
      <span className="t-button whitespace-nowrap text-white">{label}</span>
      <span className="flex size-[42px] shrink-0 items-center justify-center overflow-hidden bg-line transition-colors duration-200 group-hover:bg-[#3a3a3a]">
        <Image
          src="/icons/download.svg"
          alt=""
          width={15}
          height={16}
          className="h-[16px] w-[15.111px]"
        />
      </span>
    </a>
  );
}
