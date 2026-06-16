import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/link-freight-mark.png.asset.json";

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
      className={`flex items-center gap-2 sm:gap-3 group shrink-0 ${className}`}
      aria-label="Link Freight Logistics — Home"
    >
      <img
        src={logoAsset.url}
        alt="Link Freight Logistics"
        width={72}
        height={44}
        className="h-9 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 bg-transparent"
        style={{ background: "transparent" }}
      />
      <span
        className={`font-display text-lg sm:text-xl lg:text-2xl tracking-tight uppercase font-extrabold leading-none flex flex-col ${
          isLight ? "text-white" : "text-navy"
        }`}
      >
        <span>
          Link <span className="text-cyan">Freight</span>
        </span>
        <span
          className={`text-[9px] sm:text-[10px] font-medium tracking-[0.25em] mt-0.5 ${
            isLight ? "text-white/60" : "text-slate-500"
          }`}
        >
          LOGISTICS LIMITED
        </span>
      </span>
    </Link>
  );
}
