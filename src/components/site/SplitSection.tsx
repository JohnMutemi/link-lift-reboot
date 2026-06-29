import type { ReactNode } from "react";

type SplitSectionProps = {
  id?: string;
  tag?: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  reverse?: boolean;
  children?: ReactNode;
};

export function SplitSection({
  id,
  tag,
  title,
  description,
  image,
  alt,
  reverse = false,
  children,
}: SplitSectionProps) {
  const hasImage = Boolean(image);

  return (
    <section id={id} className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {hasImage ? (
        <div
          className={`absolute inset-y-0 ${reverse ? "left-0" : "right-0"} hidden lg:block w-1/2`}
          aria-hidden="true"
        >
          <div
            role="img"
            aria-label={alt ?? title}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      ) : null}

      <div className={`relative container mx-auto px-4 sm:px-6 ${hasImage ? (reverse ? "lg:pl-10" : "lg:pr-10") : ""}`}>
        <div
          className={`space-y-6 max-w-3xl mx-auto text-center ${
            hasImage
              ? reverse
                ? "lg:ml-auto lg:text-right"
                : "lg:mr-auto lg:text-left"
              : ""
          }`}
        >
          {tag ? (
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-orange">{tag}</span>
          ) : null}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold text-navy leading-tight">
            {title}
          </h2>
          <p className="text-slate-600 max-w-3xl leading-relaxed mx-auto sm:mx-0">{description}</p>
          {children ? <div className="space-y-4">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
