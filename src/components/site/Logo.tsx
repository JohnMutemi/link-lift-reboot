import { Link } from "@tanstack/react-router";

const LOGO_SRC = "/link-freight-rams.png";

type Variant = "dark" | "light";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <Link
      to="/"
      className={`flex items-center gap-1.5 sm:gap-3 group shrink-0 min-w-0 ${className}`}
      aria-label="Link Freight Logistics — Home"
    >
      <img
        src={LOGO_SRC}
        alt="Link Freight Logistics"
        width={276}
        height={57}
        className="h-7 sm:h-10 lg:h-11 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 border-0 bg-transparent p-0 shadow-none"
        style={{ background: "transparent" }}
      />
      <span
        className={`font-display text-[11px] sm:text-xl lg:text-2xl tracking-tight uppercase font-extrabold leading-none flex flex-col min-w-0 ${
          isLight ? "text-white" : "text-navy"
        }`}
      >
        <span className="truncate">
          Link <span className="text-cyan">Freight</span>
        </span>
        <span
          className={`text-[6.5px] sm:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.25em] mt-0.5 truncate ${
            isLight ? "text-white/60" : "text-slate-500"
          }`}
        >
          LOGISTICS LIMITED
        </span>
      </span>
    </Link>
  );
}