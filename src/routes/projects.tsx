import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Box, Layers } from "lucide-react";
import { SplitHero } from "@/components/site/SplitHero";
import { SplitSection } from "@/components/site/SplitSection";
import { SiteCard } from "@/components/site/SiteCard";
import { CTA } from "./about";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Link Freight Logistics Ltd" },
      { name: "description", content: "Explore Link Freight's flagship Oil & Gas logistics project delivering specialist containerization, crew transport and supply chain resilience." },
      { property: "og:title", content: "Projects — Link Freight Logistics" },
      { property: "og:description", content: "Discover our Oil & Gas freight and logistics project on East Africa's most demanding corridors." },
    ],
  }),
  component: ProjectsPage,
});

const projectSections = [
  {
    title: "Containerized Oil & Gas freight",
    text: "We move specialist equipment, valves, line pipe and packaged cargo using certified containers and tailored trailer combinations. Every shipment is tracked with abnormal load planning and driver safety checks built in.",
    image: "/fleet-gallery-17.jpeg",
    icon: Box,
  },
  {
    title: "Dedicated project personnel",
    text: "Our operations team, drivers and field support crews are trained for the Oil & Gas sector — from rig site access to customs clearance and camp logistics.",
    image: "/fleet-gallery-21.jpeg",
    icon: Users,
  },
  {
    title: "Integrated logistics command",
    text: "A single control tower connects equipment, warehousing and on-site delivery windows so every load arrives on schedule and site handover is seamless.",
    image: "/feature.jpg",
    icon: Layers,
  },
];

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState("");
  const projectSelected = selectedProject === "oil-gas";

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm text-center">
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Select project</label>
            <div className="mt-3 relative">
              <select
                value={selectedProject}
                onChange={(event) => setSelectedProject(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
              >
                <option value="">Select Project</option>
                <option value="oil-gas">Oil & Gas</option>
              </select>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Begin with the flagship Oil & Gas project. Once selected, the hero and project details will appear for a cleaner experience.
            </p>
          </div>
        </div>
      </section>

      {projectSelected && (
        <>
          <SplitHero
            tag="Projects"
            title="Oil & Gas freight delivered with precision."
            subtitle="Our flagship project focuses on specialist containerization, crew logistics and on-site support for East Africa's oil and gas supply chain."
          />

          <section className="py-12 sm:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs uppercase tracking-[0.22em] text-orange font-semibold">Ongoing Project</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold text-navy mt-4 leading-tight">
                  Oil & Gas logistics that keeps rigs moving.
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg">
                  Link Freight supports terminal handling, project cargo, and field crew movement across the Northern Corridor. Our Oil & Gas programme is built around high-value loads, specialised containers and a safety-first crew network.
                </p>
              </div>

              <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10">
              <SplitSection
                tag="Specialist Freight"
                title="Oil & Gas shipments handled as project cargo."
                description="From rack containers to modular equipment, we move sensitive and oversized oilfield freight with corridor permits, physical escorts and document-led customs support."
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <SiteCard variant="compact">
                    <h3 className="font-display text-sm uppercase text-navy mb-2">Rig site readiness</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Route validation, borehole access planning and load sequencing to meet tight field windows.</p>
                  </SiteCard>
                  <SiteCard variant="compact">
                    <h3 className="font-display text-sm uppercase text-navy mb-2">Terminal staging</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Yard consolidation and asset handover with customs clearance for oilfield consignments.</p>
                  </SiteCard>
                </div>
              </SplitSection>

              <div className="grid gap-6 md:grid-cols-2">
                {projectSections.slice(0, 2).map(({ title, text, image, icon: Icon }) => (
                  <SiteCard key={title} variant="media">
                    <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
                      <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4 text-slate-500">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                          <Icon className="size-5" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.3em] font-semibold">Project focus</span>
                      </div>
                      <h3 className="font-display text-xl uppercase text-navy font-extrabold mb-3">{title}</h3>
                      <p className="text-slate-600 leading-relaxed">{text}</p>
                    </div>
                  </SiteCard>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {projectSections.slice(2).map(({ title, text, image, icon: Icon }) => (
                <SiteCard key={title} variant="accent">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{title}</span>
                      <h3 className="font-display text-2xl uppercase text-navy font-extrabold mt-3 leading-tight">{title.split(" ")[0]}</h3>
                    </div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 mb-5">
                    <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">{text}</p>
                </SiteCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 grid gap-6 lg:grid-cols-3">
          <SiteCard variant="accent">
            <span className="text-xs uppercase tracking-[0.3em] text-orange">End-to-end support</span>
            <h3 className="font-display text-2xl uppercase text-navy font-extrabold mt-4">Dispatch & routing</h3>
            <p className="text-slate-600 mt-4 leading-relaxed">Dedicated route planning, fuel monitoring, and regulatory liaison for oilfield cargo and services.</p>
          </SiteCard>
          <SiteCard variant="accent">
            <span className="text-xs uppercase tracking-[0.3em] text-orange">Quality assurance</span>
            <h3 className="font-display text-2xl uppercase text-navy font-extrabold mt-4">Project compliance</h3>
            <p className="text-slate-600 mt-4 leading-relaxed">Inspections, documentation and HSE checks are embedded into every lift, move and delivery.</p>
          </SiteCard>
          <SiteCard variant="accent">
            <span className="text-xs uppercase tracking-[0.3em] text-orange">People-first</span>
            <h3 className="font-display text-2xl uppercase text-navy font-extrabold mt-4">Crew logistics</h3>
            <p className="text-slate-600 mt-4 leading-relaxed">Personnel movement, accommodation coordination and site transfer services for project teams.</p>
          </SiteCard>
        </div>
      </section>

      <CTA />
    </>
  );
}
