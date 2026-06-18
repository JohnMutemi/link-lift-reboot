import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTA } from "./about";
import { SiteCard } from "@/components/site/SiteCard";
import { FleetGallery } from "@/components/site/FleetGallery";
import { HERO_CAROUSEL_1 } from "@/lib/media";

const truck = HERO_CAROUSEL_1;
const reefer = "/hero-showcase-truck-sunset.jpg";
const genset = "/feature.jpg";
const yard = "/hero-showcase-fleet.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Link Freight Logistics Ltd" },
      { name: "description", content: "Prime movers, reefer containers, dry containers and genset trailers — engineered for the Northern Corridor." },
      { property: "og:title", content: "Our Fleet" },
      { property: "og:description", content: "Engineered hardware for serious freight." },
    ],
  }),
  component: FleetPage,
});

const fleet = [
  { image: truck, id: "PM-044", name: "Prime Movers", specs: [["Horsepower", "480–540 HP"], ["Payload", "60–80 tons"], ["Fleet Size", "85 units"]] },
  { image: reefer, id: "RF-882", name: "Reefer Containers", specs: [["Temp Range", "−25°C to +25°C"], ["Capacity", "67.7 CBM"], ["Fleet Size", "60 units"]] },
  { image: yard, id: "DC-201", name: "Dry Containers", specs: [["Sizes", "20ft / 40ft / HC"], ["Max Payload", "28,200 kg"], ["Fleet Size", "120 units"]] },
  { image: genset, id: "GS-209", name: "Genset Trailers", specs: [["Power", "15–25 kW"], ["Runtime", "Continuous duty"], ["Fleet Size", "35 units"]] },
];

function FleetPage() {
  return (
    <>
      <PageHero
        tag="Our Fleet"
        title="Engineered hardware for serious freight."
        subtitle="A modern, maintained, GPS-tracked fleet built for the demands of the East African corridor — from coastal port to inland hub."
        image="/hero-showcase-fleet.jpg"
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {fleet.map((unit) => (
              <SiteCard key={unit.id} as="article" variant="media">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4 gap-3">
                    <h3 className="font-display text-xl sm:text-2xl uppercase text-navy font-extrabold">{unit.name}</h3>
                    <span className="font-mono text-xs text-orange bg-orange/10 px-2 py-1 shrink-0">{unit.id}</span>
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    {unit.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[10px] uppercase tracking-widest text-slate-500">{k}</dt>
                        <dd className="font-mono text-sm text-navy mt-1">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </SiteCard>
            ))}          </div>
        </div>
      </section>

      <FleetGallery />

      <section className="py-12 sm:py-16 lg:py-20 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl uppercase font-extrabold leading-tight">
            Every unit, <span className="text-cyan">live tracked</span>.
          </h2>
          <p className="text-white/70 mt-6">
            Our fleet operates under a 24/7 control tower: GPS telemetry, temperature monitoring on
            reefer units, fuel and route optimisation, and proactive maintenance scheduling — so
            your cargo is always accounted for.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
