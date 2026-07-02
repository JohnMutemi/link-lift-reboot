import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownCircle, Container, Snowflake, Zap, Truck, ShieldCheck, Wrench, FileCheck, Route as RouteIcon, Building2 } from "lucide-react";
import { CTA } from "./about";
import { ScrollCue } from "@/components/site/ScrollCue";
import { SplitHero } from "@/components/site/SplitHero";
import { SplitSection } from "@/components/site/SplitSection";
import { SiteCard } from "@/components/site/SiteCard";
import { HERO_CAROUSEL_3 } from "@/lib/media";

const reefer = "/fleet-gallery-1.jpg";
const genset = "/fleet-gallery-7.jpg";
const truck = HERO_CAROUSEL_3;
const yard = "/fleet-gallery-6.jpg";
const dryContainerImage = "/fleet-gallery-16.jpeg";
const reeferImage = "/fleet-gallery-15.jpeg";
const gensetImage = "/fleet-gallery-26.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Link Freight Logistics Ltd" },
      { name: "description", content: "Long-distance freight, corridor support, and associated logistics services across East & Southern Africa." },
      { property: "og:title", content: "Services — Link Freight Logistics" },
      { property: "og:description", content: "Long-distance freight and associated logistics solutions." },
    ],
  }),
  component: ServicesPage,
});

const serviceCategories = [
  {
    id: "long-distance",
    tag: "Long Distance",
    Icon: RouteIcon,
    image: truck,
    title: "Long Distance Haulage",
    desc: "Cross-border and corridor freight across the East & Southern trade corridors — from coastal ports to inland hubs in Kenya, Uganda, Rwanda, Tanzania, Zambia, and Zimbabwe. Dry, reefer, and genset-backed loads with GPS tracking and on-time delivery.",
    points: ["East & Southern corridor routes", "Cross-border documentation support", "480–540 HP prime movers", "Dry, reefer & genset equipment"],
    equipment: [
      { Icon: Container, title: "Dry Containers", desc: "20ft and 40ft dry units for general cargo across long-haul corridors." },
      { Icon: Snowflake, title: "Reefer Containers", desc: "Temperature-controlled units from −25°C to +25°C for perishables and pharma." },
      { Icon: Zap, title: "Gensets", desc: "Clip-on and undermount power to protect the cold chain on long inland legs." },
    ],
  },
  {
    id: "corridor-haulage",
    tag: "Corridor Haulage",
    Icon: Truck,
    image: yard,
    title: "Corridor Haulage",
    desc: "Regional and cross-border specialist haulage for high-value cargo moving across major East and Southern trade corridors with precise planning and reliable execution.",
    points: ["Port-to-hub transfers", "Cross-border corridor planning", "Route optimisation", "Flexible scheduling"],
    equipment: [
      { Icon: Truck, title: "Inland Haulage", desc: "Prime-mover fleet for long-haul container moves across the region." },
      { Icon: ShieldCheck, title: "Secure Delivery", desc: "Service continuity, tracking, and milestone reporting on every run." },
    ],
  },
  {
    id: "associated",
    tag: "Associated Services",
    Icon: Building2,
    image: genset,
    title: "Associated Services",
    desc: "End-to-end support beyond the truck — documentation, clearance, insurance, and specialised cargo handling so your shipment moves without friction.",
    points: ["Customs & bond handling", "Project & oversized cargo", "Cargo insurance", "Documentation support"],
    equipment: [
      { Icon: FileCheck, title: "Customs Clearance", desc: "Full documentation, customs, and bond handling across East & Southern Africa borders." },
      { Icon: Wrench, title: "Project Cargo", desc: "Specialised handling for heavy, oversized, and high-value industrial cargo." },
      { Icon: ShieldCheck, title: "Cargo Insurance", desc: "Coverage tailored to the value and risk of every shipment." },
    ],
  },
] as const;

function ServicesPage() {
  return (
    <>
      <SplitHero
        tag="Our Services"
        title="Long distance. Full support."
        subtitle="Service pillars built for East & Southern corridor trade — corridor haulage, specialist equipment, and associated logistics support."
        action={
          <ScrollCue
            toId="services-details"
            Icon={ArrowDownCircle}
            label="Click for more"
            subLabel="Discover each service pillar below"
            variant="outline"
          />
        }
      />

      <div id="services-details" className="space-y-12 sm:space-y-16 lg:space-y-24">
        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Dry Containers", image: dryContainerImage, desc: "Robust 20ft and 40ft units for general cargo and long-haul corridor freight." },
              { title: "Reefer Containers", image: reeferImage, desc: "Temperature-controlled equipment for sensitive cargo, pharma, and fresh produce." },
              { title: "Gensets", image: gensetImage, desc: "Reliable power support to keep cold-chain shipments protected on the move." },
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-display text-lg uppercase text-navy font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {serviceCategories.map(({ id, tag, Icon, title, desc, points, equipment }, i) => (
          <SplitSection
            key={id}
            tag={tag}
            title={title}
            description={desc}
            reverse={i % 2 === 1}
          >
            <ul className="mt-6 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-navy">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange shrink-0" /> {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4">
              {equipment.map(({ Icon: EqIcon, title: eqTitle, desc: eqDesc }) => (
                <SiteCard key={eqTitle} variant="compact">
                  <EqIcon className="size-5 text-navy mb-3" />
                  <h3 className="font-display text-sm uppercase text-navy mb-2">{eqTitle}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{eqDesc}</p>
                </SiteCard>
              ))}
            </div>
          </SplitSection>
        ))}
      </div>

      <CTA />
    </>
  );
}
