import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/link-freight-logo.png.asset.json";

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
        width={56}
        height={36}
        className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow"
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
