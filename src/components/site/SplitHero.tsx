import type { ReactNode } from "react";

export function SplitHero({
  tag,
  title,
  subtitle,
  image,
  alt,
  reverse = false,
  aside,
}: {
  tag: string;
  title: string;
  subtitle: string;
  image?: string;
  alt?: string;
  reverse?: boolean;
  aside?: ReactNode;
}) {
  const hasImage = Boolean(image);
  const hasAside = Boolean(aside);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-[calc(100vh-5.5rem)] py-20 sm:py-24 lg:py-28">
      <div className="relative container mx-auto px-4 sm:px-6 h-full">
        <div
          className={`relative flex h-full flex-col items-center justify-center gap-10 ${
            hasAside
              ? reverse
                ? "lg:flex-row-reverse lg:items-center lg:justify-between"
                : "lg:flex-row lg:items-center lg:justify-between"
              : "lg:flex-row lg:items-center lg:justify-center"
          }`}
        >
          <div className={`w-full max-w-2xl text-center ${hasAside ? "lg:text-left" : ""}`}>
            <span className="text-xs uppercase tracking-[0.2em] text-orange font-semibold">{tag}</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl uppercase font-extrabold mt-4 leading-tight bg-gradient-to-r from-navy via-cyan to-orange text-transparent bg-clip-text">
              {title}
            </h1>
            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto sm:mx-0">
              {subtitle}
            </p>
          </div>
          {aside ? (
            <div className="w-full max-w-[26rem] rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl ring-1 ring-slate-200/80 backdrop-blur-sm">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
