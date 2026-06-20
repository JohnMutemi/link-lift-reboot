import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { fleetGallery } from "@/lib/media";

export function FleetGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-orange">Our Fleet</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy leading-tight">
                Built for <span className="text-cyan">East, Central &amp; Southern Africa</span>
              </h2>
              <p className="text-slate-600 mt-4">
                Prime movers, reefers, dry containers, and genset trailers — maintained, tracked, and
                ready for dispatch across East, Central, and Southern Africa.
              </p>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy hover:text-cyan transition-colors shrink-0"
            >
              Full Fleet Details <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Uniform card grid — 2 per row on mobile, 3 per row from md up.
              Every photo gets the same frame and aspect ratio; no special-cased
              "hero" cell, so the grid degrades gracefully at any item count. */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {fleetGallery.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden bg-slate-100 ring-1 ring-slate-200/80 shadow-sm hover:shadow-lg hover:shadow-navy/10 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy/90 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal
          aria-label="Fleet photo preview"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute top-4 right-4 size-11 grid place-items-center text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X className="size-6" />
          </button>
          <img
            src={fleetGallery[lightbox].src}
            alt={fleetGallery[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}