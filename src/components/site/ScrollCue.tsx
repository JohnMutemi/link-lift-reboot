import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ScrollCueProps = {
  label: string;
  subLabel?: string;
  Icon: LucideIcon;
  toId: string;
  variant?: "solid" | "ghost" | "outline";
  className?: string;
};

export function ScrollCue({
  label,
  subLabel,
  Icon,
  toId,
  variant = "solid",
  className,
}: ScrollCueProps) {
  const buttonStyles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50",
    variant === "ghost"
      ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
      : variant === "outline"
      ? "bg-white text-navy border border-slate-200 hover:bg-slate-50"
      : "bg-navy text-white border border-navy/80 hover:bg-cyan"
  );

  return (
    <div className={cn("mx-auto max-w-max text-center", className)}>
      <button
        type="button"
        onClick={() => {
          const element = document.getElementById(toId);
          if (element) {
            const headerOffset = 96;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: Math.max(elementTop - headerOffset, 0),
              behavior: "smooth",
            });
          }
        }}
        className={buttonStyles}
        aria-label={`${label}, scroll down to ${toId}`}
      >
        <Icon className="size-4" />
        <span>{label}</span>
      </button>
      {subLabel ? (
        <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-slate-500">{subLabel}</p>
      ) : null}
    </div>
  );
}
