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
    <section className="relative min-h-[calc(100vh-5.5rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-navy pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-10">
      <img
        src={heroSlide.image}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 18%" }}
      />

      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto lf-reveal flex flex-col items-center justify-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.05] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy via-cyan to-orange drop-shadow-md">
            {heroSlide.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-100/95 mt-4 sm:mt-6 max-w-2xl mx-auto drop-shadow-sm">
            Prime movers, <span className="text-cyan">reefer units</span>, and <span className="text-orange">genset-backed freight</span> across East and Central Africa.
          </p>

          <p className="text-[10px] sm:text-xs text-cyan font-medium tracking-widest uppercase mt-5 sm:mt-6 drop-shadow-sm">
            {SITE.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center">
            <Link
              to="/services"
              className="bg-cyan text-white px-5 sm:px-6 py-3 font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-cyan-600 transition-all text-center w-full sm:w-auto"
            >
              Explore Services
            </Link>
            <Link
              to="/quote"
              className="border border-white/50 text-white px-5 sm:px-6 py-3 font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white/15 transition-all text-center backdrop-blur-sm w-full sm:w-auto"
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