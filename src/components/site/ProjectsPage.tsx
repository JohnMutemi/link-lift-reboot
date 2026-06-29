import { useState } from "react";
import { Box, ChevronDown, Layers, Users } from "lucide-react";
import { ScrollCue } from "@/components/site/ScrollCue";
import { SplitHero } from "@/components/site/SplitHero";
import { SplitSection } from "@/components/site/SplitSection";
import { SiteCard } from "@/components/site/SiteCard";
import { CTA } from "@/routes/about";

const projectOptions = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description:
      "Specialist containerization, crew logistics and field support for East Africa's oil and gas corridors.",
    icon: Box,
  },
];

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

function OilGasProject() {
  return (
    <section id="oil-gas" className="pb-16 bg-white">
      <SplitHero
        tag="Projects"
        title="Oil & Gas freight delivered with precision."
        subtitle="Our flagship project focuses on specialist containerization, crew logistics and on-site support for East Africa's oil and gas supply chain."
      />

      <div className="mt-8">
        <ScrollCue
          toId="projects-details"
          Icon={ChevronDown}
          label="See project details"
          subLabel="Scroll into our flagship Oil & Gas plan"
          variant="outline"
        />
      </div>

      <section id="projects-details" className="py-12 sm:py-16 lg:py-24 bg-white">
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
    </section>
  );
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string>("");

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Projects</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold text-navy mt-4 leading-tight">
                Browse our flagship logistics projects.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-relaxed text-base sm:text-lg">
                Hover the Projects menu item for fast navigation, then pick a project below to populate the details section without using a native select box.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {projectOptions.map(({ id, title, description, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedProject(id)}
                  className="group flex flex-col items-start gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-left transition-all duration-300 hover:border-cyan hover:bg-white"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan transition-colors duration-300 group-hover:bg-cyan group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl uppercase text-navy font-extrabold">{title}</h2>
                    <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </button>
              ))}
            </div>

            {selectedProject === "oil-gas" ? (
              <div className="mt-12">
                <OilGasProject />
              </div>
            ) : (
              <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center">
                <p className="text-slate-600">Select a project above to reveal the full logistics story.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
