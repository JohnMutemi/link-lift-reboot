import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";

const slides = [
  {
    image: "/hero-carousel-1.jpg",
    tag: "Corridor Haulage",
    title: "Reliability in Delivery",
    subtitle:
      "Prime movers on the Northern Corridor at golden hour — dry, reefer, and genset freight across East and Central Africa.",
  },
  {
    image: "/hero-carousel-2.jpg",
    tag: "Fleet Capacity",
    title: "Scale You Can Count On",
    subtitle:
      "200+ units ready for dispatch — from Mombasa port shuttles to cross-border runs into Uganda, Rwanda, and South Sudan.",
  },
  {
    image: "/hero-carousel-3.jpg",
    tag: "Port & Yard Ops",
    title: "From Quay to Consignee",
    subtitle:
      "Container handling at port and yard — forklift-to-trailer transfers that keep your cargo moving without delay.",
  },
  {
    image: "/hero-carousel-4.jpg",
    tag: "Warehousing",
    title: "End-to-End Logistics",
    subtitle:
      "High-bay storage and distribution hubs that bridge port arrival and final delivery across Kenya's industrial corridors.",
  },
  {
    image: "/hero-carousel-5.jpg",
    tag: "On the Road",
    title: "Delivering with Integrity",
    subtitle:
      "GPS-tracked prime movers on every leg — your trusted logistics partner from Nairobi with precision at every mile.",
  },
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[480px] sm:min-h-[560px] md:min-h-[640px] lg:h-[85vh] flex items-center overflow-hidden bg-navy py-16 sm:py-20 lg:py-0">
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          aria-hidden={i !== active}
          width={1920}
          height={1080}
          fetchPriority={i === 0 ? "high" : undefined}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl lf-reveal relative min-h-[280px] sm:min-h-[320px]">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`transition-all duration-700 ${
                i === active
                  ? "opacity-100 translate-y-0 relative"
                  : "opacity-0 translate-y-4 absolute inset-x-0 top-0 pointer-events-none"
              }`}
              aria-hidden={i !== active}
            >
              <div className="inline-block bg-cyan px-3 py-1 mb-5 sm:mb-6">
                <span className="text-navy text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  {slide.tag}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.95] mb-6 sm:mb-8 font-extrabold drop-shadow-sm">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-5 max-w-lg drop-shadow-sm">
                {slide.subtitle}
              </p>
              {i === active && (
                <p className="text-sm sm:text-base text-cyan font-medium tracking-wide mb-8 sm:mb-10 drop-shadow-sm">
                  {SITE.tagline}
                </p>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10">
            <Link
              to="/services"
              className="bg-white text-navy px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-cyan hover:text-white transition-all text-center"
            >
              Explore Services
            </Link>
            <Link
              to="/quote"
              className="border border-white/50 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white/15 transition-all text-center backdrop-blur-sm"
            >
              Get A Quote
            </Link>
          </div>

          <div className="flex gap-2 mt-8 sm:mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => setActive(i)}
                className="relative size-11 -m-2 grid place-items-center touch-manipulation"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-cyan" : "w-4 bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
