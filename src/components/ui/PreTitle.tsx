type PreTitleProps = {
  children: string;
  className?: string;
};

/**
 * The `<!-- label -->` eyebrow that opens every section.
 */
export function PreTitle({ children, className = "" }: PreTitleProps) {
  return (
    <p
      className={`flex items-center gap-[10px] text-ink-faint t-meta ${className}`}
    >
      <span aria-hidden>{"<!--"}</span>
      <span className="leading-[14.4px]">{children}</span>
      <span aria-hidden>{"-->"}</span>
    </p>
  );
}
