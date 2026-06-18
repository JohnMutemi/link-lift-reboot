/** Centralised public asset paths — keep filenames stable for OG/social meta. */

export const HERO_CAROUSEL_1 = "/hero-carousel-1.jpg";

export const heroSlide = {
  image: HERO_CAROUSEL_1,
  title: "Reliability in Delivery",
  subtitle:
    "Prime movers, reefer units, and genset-backed freight across East and Central Africa.",
} as const;

export const fleetGallery = Array.from({ length: 9 }, (_, i) => ({
  src: `/fleet-gallery-${i + 1}.jpg`,
  alt: `Link Freight fleet unit ${i + 1}`,
}));