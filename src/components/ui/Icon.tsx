type IconProps = {
  /** Path to a monochrome SVG under /public/icons. */
  src: string;
  /** Square size in px. */
  size?: number;
  /** Non-square icons pass an explicit width/height instead. */
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Monochrome icon painted in the current text colour.
 *
 * The SVGs in /public/icons have their fills baked in (white, #EEEEEE, accent
 * yellow, mid grey), and rendering them through `next/image` puts them in an
 * `<img>` where no CSS can reach those fills — so they can't follow a theme.
 * Masking the shape and filling it with `currentColor` makes every icon inherit
 * whatever ink colour its context already uses. Alpha drives the mask, so
 * stroke-drawn icons (briefcase, pin, mail, phone) work the same as filled ones.
 */
export function Icon({
  src,
  size = 16,
  width,
  height,
  className = "",
}: IconProps) {
  const mask = `url(${src})`;

  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        width: width ?? size,
        height: height ?? size,
        maskImage: mask,
        WebkitMaskImage: mask,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
