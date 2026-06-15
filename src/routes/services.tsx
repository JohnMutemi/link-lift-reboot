import { createFileRoute } from "@tanstack/react-router";
import { Container, Snowflake, Zap, Truck, ShieldCheck, MapPin, Wrench, FileCheck } from "lucide-react";
import { PageHero, CTA } from "./about";
import reefer from "@/assets/reefer-container.jpg";
import genset from "@/assets/genset.jpg";
import truck from "@/assets/fleet-truck.jpg";
import yard from "@/assets/yard.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Link Freight Logistics Ltd" },
      { name: "description", content: "Dry containers, reefer containers, gensets, inland haulage, customs clearance and project cargo across East Africa." },
      { property: "og:title", content: "Services — Link Freight Logistics" },
      { property: "og:description", content: "Specialised freight solutions tailored to every shipment." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { Icon: Container, image: yard, title: "Dry Containers", desc: "Versatile 20ft and 40ft dry containers for general cargo. Ideal for non-perishable goods moving across the corridor, with secure handling and end-to-end visibility.", points: ["20ft & 40ft units", "Standard & high-cube", "Door-to-door tracking"] },
  { Icon: Snowflake, image: reefer, title: "Reefer Containers", desc: "Active temperature-controlled containers for perishables, pharmaceuticals and other temperature-sensitive freight — from −25°C to +25°C.", points: ["Precise climate control", "Telemetry monitoring", "Pharma-grade handling"] },
  { Icon: Zap, image: genset, title: "Gensets", desc: "Clip-on and undermount generator sets that keep reefer units powered during long-haul inland transport — protecting the cold chain end-to-end.", points: ["Clip-on & undermount", "Continuous duty rated", "Fuel-efficient diesel"] },
  { Icon: Truck, image: truck, title: "Inland Haulage", desc: "Prime-mover fleet covering Kenya and the wider Northern Corridor — Mombasa to Nairobi, Kampala, Kigali, Juba and Goma.", points: ["480–540 HP units", "60–80 ton payload", "GPS tracked"] },
];

const extras = [
  { Icon: FileCheck, title: "Customs Clearance", desc: "Full documentation, customs and bond handling across East African borders." },
  { Icon: Wrench, title: "Project Cargo", desc: "Specialised handling for heavy, oversized and high-value industrial cargo." },
  { Icon: ShieldCheck, title: "Cargo Insurance", desc: "End-to-end insurance coverage tailored to the value and risk of every shipment." },
  { Icon: MapPin, title: "Last-Mile Delivery", desc: "Final delivery to warehouses, factories, and project sites across the region." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Our Services"
        title="Specialised freight, tailored to every shipment."
        subtitle="From dry containers to genset-backed reefer units, our service catalogue is engineered for the realities of East African trade."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-20">
          {services.map(({ Icon, image, title, desc, points }, i) => (
            <div key={title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <img src={image} alt={title} className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={900} />
              <div>
                <div className="w-12 h-12 bg-cyan/10 flex items-center justify-center mb-6">
                  <Icon className="size-6 text-cyan" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl uppercase font-extrabold text-navy">{title}</h2>
                <p className="text-slate-600 mt-6 leading-relaxed">{desc}</p>
                <ul className="mt-6 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-navy">
                      <span className="size-1.5 bg-orange" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-orange">Beyond Transport</span>
            <h2 className="font-display text-4xl uppercase mt-3 font-extrabold text-navy">Complementary Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 border-b-4 border-slate-200 hover:border-cyan transition-all shadow-sm">
                <Icon className="size-7 text-navy mb-5" />
                <h3 className="font-display text-lg uppercase text-navy mb-3">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
