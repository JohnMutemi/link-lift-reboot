import { Link } from "@tanstack/react-router";

const LOGO_SRC = "/link-freight-logo.png";

type Variant = "dark" | "light";

export function Logo({
  variant = "dark",
  className = "",
  imgClassName = "",
}: {
  variant?: Variant;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-1.5 sm:gap-3 group shrink-0 min-w-0 ${className}`}
      aria-label="Link Freight Logistics — Home"
    >
      <img
        src={LOGO_SRC}
        alt="Link Freight Logistics"
        width={260}
        height={88}
        className={`h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300 ${imgClassName}`}
        style={{ background: "transparent" }}
      />
    </Link>
  );
}