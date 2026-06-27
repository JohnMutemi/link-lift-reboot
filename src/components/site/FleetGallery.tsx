import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { fleetGallery } from "@/lib/media";

const FLEET_GALLERY_STORAGE_KEY = "lf-selected-fleet-gallery";

function parseGalleryId(src: string) {
  const match = src.match(/fleet-gallery-(\d+)\./);
  return match ? Number(match[1]) : 0;
}

function shuffleArray<T>(items: T[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickRandom<T>(items: T[], count: number) {
  const array = [...items];
  const picked: T[] = [];
  while (picked.length < count && array.length > 0) {
    const index = Math.floor(Math.random() * array.length);
    picked.push(array[index]);
    array.splice(index, 1);
  }
  return picked;
}

function makeFleetSelection(previousSrcs: string[] | null) {
  const firstGroup = fleetGallery.filter((item) => {
    const id = parseGalleryId(item.src);
    return id >= 1 && id <= 11;
  });

  const secondGroup = fleetGallery.filter((item) => {
    const id = parseGalleryId(item.src);
    return id >= 12 && id <= 28;
  });

  let selection = [...pickRandom(firstGroup, 3), ...pickRandom(secondGroup, 6)];
  selection = shuffleArray(selection);

  const selectionSrcs = selection.map((item) => item.src);
  if (
    previousSrcs &&
    previousSrcs.length === selectionSrcs.length &&
    selectionSrcs.every((src) => previousSrcs.includes(src))
  ) {
    const alternative = [...pickRandom(firstGroup, 3), ...pickRandom(secondGroup, 6)];
    return shuffleArray(alternative);
  }

  return selection;
}

export function FleetGallery() {
  const defaultSelection = useMemo(() => {
    const firstGroup = fleetGallery.filter((item) => {
      const id = parseGalleryId(item.src);
      return id >= 1 && id <= 11;
    }).slice(0, 3);

    const secondGroup = fleetGallery.filter((item) => {
      const id = parseGalleryId(item.src);
      return id >= 12 && id <= 28;
    }).slice(0, 6);

    return [...firstGroup, ...secondGroup];
  }, []);

  const [selectedImages, setSelectedImages] = useState(defaultSelection);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const refreshGallery = () => {
    if (typeof window === "undefined") return;

    const previousSelection = selectedImages.map((item) => item.src);
    const selection = makeFleetSelection(previousSelection);
    setSelectedImages(selection);

    try {
      window.localStorage.setItem(
        FLEET_GALLERY_STORAGE_KEY,
        JSON.stringify(selection.map((item) => item.src)),
      );
    } catch {
      // ignore storage failures
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    let previousSelection: string[] | null = null;
    try {
      const stored = window.localStorage.getItem(FLEET_GALLERY_STORAGE_KEY);
      previousSelection = stored ? JSON.parse(stored) : null;
    } catch {
      previousSelection = null;
    }

    const selection = makeFleetSelection(previousSelection);
    setSelectedImages(selection);

    try {
      window.localStorage.setItem(
        FLEET_GALLERY_STORAGE_KEY,
        JSON.stringify(selection.map((item) => item.src)),
      );
    } catch {
      // ignore storage failures
    }
  }, []);

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
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy hover:text-cyan transition-colors shrink-0"
              >
                Full Fleet Details <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={refreshGallery}
                className="inline-flex items-center justify-center rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-navy transition-colors hover:border-cyan hover:text-cyan"
              >
                Refresh Gallery
              </button>
            </div>
          </div>

          {/* Uniform card grid — 2 per row on mobile, 3 per row from md up.
              Every photo gets the same frame and aspect ratio; no special-cased
              "hero" cell, so the grid degrades gracefully at any item count. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {selectedImages.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-[1.75rem] bg-slate-100 ring-1 ring-slate-200/80 shadow-md shadow-slate-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={900}
                    height={675}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            src={selectedImages[lightbox].src}
            alt={selectedImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}