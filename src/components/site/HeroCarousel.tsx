import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";
import { heroSlide } from "@/lib/media";

function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none leading-[0]">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 md:h-16 lg:h-20 text-white"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,48 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

export function HeroCarousel() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[85vh] flex items-center overflow-hidden bg-navy">
      <img
        src={heroSlide.image}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto lf-reveal flex flex-col items-center justify-center">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[1.05] font-extrabold drop-shadow-md">
            {heroSlide.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/85 mt-4 sm:mt-6 max-w-2xl mx-auto drop-shadow-sm">
            {heroSlide.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-cyan font-medium tracking-widest uppercase mt-6 sm:mt-8 drop-shadow-sm">
            {SITE.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center">
            <Link
              to="/services"
              className="bg-cyan text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-cyan-600 transition-all text-center w-full sm:w-auto"
            >
              Explore Services
            </Link>
            <Link
              to="/quote"
              className="border border-white/50 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white/15 transition-all text-center backdrop-blur-sm w-full sm:w-auto"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>

      <HeroWave />
    </section>
  );
}