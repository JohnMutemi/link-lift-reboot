import { useEffect, useState } from "react";
import { Box, ChevronDown, Layers, Package, ShieldCheck, Truck, Users } from "lucide-react";
import { ScrollCue } from "@/components/site/ScrollCue";
import { SplitHero } from "@/components/site/SplitHero";
import { SplitSection } from "@/components/site/SplitSection";
import { SiteCard } from "@/components/site/SiteCard";
import { CTA } from "@/routes/about";

const projectOptions = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description: "Specialist containerization, crew logistics and field support for East & Southern Africa's oil and gas corridors.",
    icon: Box,
  },
  {
    id: "cold-chain",
    title: "Cold Chain",
    description: "Temperature-controlled freight and reefer support for fresh produce, pharma and time-sensitive cargo.",
    icon: ShieldCheck,
  },
  {
    id: "industrial-cargo",
    title: "Industrial Cargo",
    description: "Dedicated transport planning for project materials, oversized freight and site delivery sequences.",
    icon: Package,
  },
] as const;

const projectSections = [
  {
    id: "oil-gas",
    title: "Oil & Gas freight delivered with precision.",
    subtitle: "Our flagship project focuses on specialist containerization, crew logistics and on-site support for East & Southern Africa's oil and gas supply chain.",
    header: "Ongoing Project",
    heading: "Oil & Gas logistics that keeps rigs moving.",
    description:
      "Link Freight supports terminal handling, project cargo, and field crew movement across the East & Southern trade corridors. Our Oil & Gas programme is built around high-value loads, specialised containers and a safety-first crew network.",
    image: "/fleet-gallery-17.jpeg",
    points: [
      "Rig site readiness",
      "Terminal staging",
      "Route validation",
      "HSE-led handovers",
    ],
    highlights: [
      { title: "Specialist Freight", text: "From rack containers to modular equipment, we move sensitive and oversized oilfield freight with corridor permits, physical escorts and document-led customs support." },
      { title: "Project Personnel", text: "Our operations team, drivers and field support crews are trained for the Oil & Gas sector — from rig site access to customs clearance and camp logistics." },
      { title: "Integrated Command", text: "A single control tower connects equipment, warehousing and on-site delivery windows so every load arrives on schedule and site handover is seamless." },
    ],
    icon: Box,
  },
  {
    id: "cold-chain",
    title: "Cold chain distribution, built for the journey.",
    subtitle: "Temperature-controlled transport and cold-chain coordination for perishables, healthcare cargo and high-value exports.",
    header: "Featured Programme",
    heading: "Cold chain freight that protects every mile.",
    description:
      "We deploy reefers, gensets and monitoring-led planning to protect product integrity from origin to final delivery across East & Southern trade corridors.",
    image: "/fleet-gallery-15.jpeg",
    points: [
      "Reefer deployment",
      "Genset backup support",
      "Product-grade monitoring",
      "Rapid response dispatch",
    ],
    highlights: [
      { title: "Fresh Produce", text: "Reliable cold-chain transport for exports and regional distribution with tight delivery windows." },
      { title: "Healthcare Logistics", text: "Specialised temperature-controlled movements for sensitive pharmaceutical cargo and diagnostics." },
      { title: "Route Reliability", text: "Active monitoring and contingency planning keep loads protected even on long inland legs." },
    ],
    icon: ShieldCheck,
  },
  {
    id: "industrial-cargo",
    title: "Industrial cargo handled as a project.",
    subtitle: "From heavy equipment to site-ready consumables, we pair asset planning with route intelligence and site coordination.",
    header: "Special Project",
    heading: "Industrial freight that keeps operations on schedule.",
    description:
      "We support large-scale movements with tailored equipment, cross-border coordination and field-ready support for production, construction and infra projects.",
    image: "/feature.jpg",
    points: [
      "Heavy equipment moves",
      "Oversized cargo planning",
      "Site coordination",
      "Yard and terminal support",
    ],
    highlights: [
      { title: "Equipment Transfer", text: "Dedicated load planning and equipment matching for oversized and specialised industrial freight." },
      { title: "Site Delivery", text: "Flexible mobilisation and staging support for industrial facilities, depots and project sites." },
      { title: "Cross-Border Execution", text: "Clear permit, customs and routing support for corridor movements across the region." },
    ],
    icon: Package,
  },
] as const;

function ProjectShowcase({
  id,
  title,
  subtitle,
  header,
  heading,
  description,
  image,
  points,
  highlights,
  icon: Icon,
}: (typeof projectSections)[number]) {
  return (
    <section id={id} className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan">
            <Icon className="size-3.5" />
            {header}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl uppercase font-extrabold text-navy mt-5 leading-tight">
            {title}
          </h3>
          <p className="mt-4 text-slate-600 leading-relaxed">{subtitle}</p>
          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-display text-xl uppercase text-navy font-extrabold">{heading}</h4>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{description}</p>
            <ul className="mt-5 space-y-2 text-sm text-navy">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange" /> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
            <img src={image} alt={title} className="h-64 w-full object-cover" loading="lazy" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <SiteCard key={item.title} variant="compact">
                <h4 className="font-display text-sm uppercase text-navy mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </SiteCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string>(projectOptions[0].id);

  useEffect(() => {
    const element = document.getElementById(selectedProject);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedProject]);

  return (
    <>
      <SplitHero
        tag="Projects"
        title="Browse our flagship logistics projects."
        subtitle="Choose a project from the dropdown below and the page will jump directly to its case study."
        action={
          <ScrollCue
            toId="projects-selection"
            Icon={ChevronDown}
            label="Pick a project"
            subLabel="Jump to the relevant project section"
            variant="solid"
          />
        }
      />

      <section id="projects-selection" className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Projects</span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase font-extrabold text-navy mt-4 leading-tight">
                  Jump straight to the project you need.
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                  The project selector below takes you to the exact case study without an extra card click, while keeping the experience consistent with the site theme.
                </p>
              </div>

              <div className="w-full max-w-sm">
                <label htmlFor="project-select" className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">
                  Select a project
                </label>
                <select
                  id="project-select"
                  value={selectedProject}
                  onChange={(event) => setSelectedProject(event.target.value)}
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-navy outline-none focus:border-cyan"
                >
                  {projectOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {projectSections.map((project) => (
              <ProjectShowcase key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
