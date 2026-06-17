import { createFileRoute } from "@tanstack/react-router";
import { Container, Snowflake, Zap, Truck, ShieldCheck, MapPin, Wrench, FileCheck, Route as RouteIcon, Building2 } from "lucide-react";
import { PageHero, CTA } from "./about";
import { SiteCard } from "@/components/site/SiteCard";
const reefer = "/hero-carousel-5.jpg";
const genset = "/feature.jpg";
const truck = "/hero-carousel-1.jpg";
const yard = "/hero-carousel-3.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Link Freight Logistics Ltd" },
      { name: "description", content: "Long distance haulage, short distance transport, and associated logistics services across East Africa." },
      { property: "og:title", content: "Services — Link Freight Logistics" },
      { property: "og:description", content: "Long distance, short distance, and associated freight solutions." },
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
    desc: "Cross-border and corridor freight across the Northern Corridor — Mombasa to Nairobi, Kampala, Kigali, Juba, and Goma. Dry, reefer, and genset-backed loads with GPS tracking and on-time delivery.",
    points: ["Northern Corridor routes", "Cross-border documentation support", "480–540 HP prime movers", "Dry, reefer & genset equipment"],
    equipment: [
      { Icon: Container, title: "Dry Containers", desc: "20ft and 40ft dry units for general cargo across long-haul corridors." },
      { Icon: Snowflake, title: "Reefer Containers", desc: "Temperature-controlled units from −25°C to +25°C for perishables and pharma." },
      { Icon: Zap, title: "Gensets", desc: "Clip-on and undermount power to protect the cold chain on long inland legs." },
    ],
  },
  {
    id: "short-distance",
    tag: "Short Distance",
    Icon: Truck,
    image: yard,
    title: "Short Distance Haulage",
    desc: "Local and regional moves within Kenya — port shuttles, yard transfers, last-mile delivery to warehouses, factories, and project sites in Nairobi, Mombasa, and surrounding hubs.",
    points: ["Port-to-yard transfers", "Nairobi & Mombasa local runs", "Last-mile warehouse delivery", "Flexible scheduling"],
    equipment: [
      { Icon: Truck, title: "Inland Haulage", desc: "Prime-mover fleet for short-haul and metro-area container moves." },
      { Icon: MapPin, title: "Last-Mile Delivery", desc: "Final delivery to warehouses, factories, and project sites." },
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
      { Icon: FileCheck, title: "Customs Clearance", desc: "Full documentation, customs, and bond handling across East African borders." },
      { Icon: Wrench, title: "Project Cargo", desc: "Specialised handling for heavy, oversized, and high-value industrial cargo." },
      { Icon: ShieldCheck, title: "Cargo Insurance", desc: "Coverage tailored to the value and risk of every shipment." },
    ],
  },
] as const;

function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Our Services"
        title="Long distance. Short distance. Full support."
        subtitle="Three service pillars — corridor haulage, local transport, and associated logistics — engineered for East African trade."
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 lg:space-y-24">
          {serviceCategories.map(({ id, tag, Icon, image, title, desc, points, equipment }, i) => (
            <div key={id} id={id} className={`scroll-mt-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <img src={image} alt={title} className="w-full aspect-[4/3] object-cover lg:sticky lg:top-28" loading="lazy" width={1280} height={900} />
              <div>
                <div className="w-12 h-12 bg-cyan/10 flex items-center justify-center mb-6">
                  <Icon className="size-6 text-cyan" />
                </div>
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-orange">{tag}</span>
                <h2 className="font-display text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy">{title}</h2>
                <p className="text-slate-600 mt-6 leading-relaxed">{desc}</p>
                <ul className="mt-6 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-navy">
                      <span className="size-1.5 bg-orange shrink-0" /> {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {equipment.map(({ Icon: EqIcon, title: eqTitle, desc: eqDesc }) => (
                    <SiteCard key={eqTitle} variant="compact">
                      <EqIcon className="size-5 text-navy mb-3" />
                      <h3 className="font-display text-sm uppercase text-navy mb-2">{eqTitle}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{eqDesc}</p>
                    </SiteCard>
                  ))}
                </div>              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
