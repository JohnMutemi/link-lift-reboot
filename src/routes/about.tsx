import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import { SiteCard } from "@/components/site/SiteCard";

const yard = "/about-1.jpg";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Link Freight Logistics Ltd" },
      { name: "description", content: "Learn about Link Freight Logistics — our mission, story, and people moving East Africa's freight with precision and care." },
      { property: "og:title", content: "About Link Freight Logistics" },
      { property: "og:description", content: "Our mission, story and people powering precision freight across East Africa." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Target, title: "Mission", text: "To deliver tailored, dependable freight solutions that empower African trade and connect markets across the continent." },
  { Icon: Eye, title: "Vision", text: "To be East Africa's most trusted logistics partner — recognised for precision, integrity, and operational excellence." },
  { Icon: Heart, title: "Values", text: "Reliability. Safety. Transparency. Long-term partnership over short-term wins, every shipment." },
];

const milestones = [
  { year: "2008", text: "Link Freight founded in Nairobi, focused on dry container haulage." },
  { year: "2014", text: "Reefer fleet launched to serve horticulture and pharmaceutical exporters." },
  { year: "2019", text: "Cross-border expansion to Uganda, Rwanda and South Sudan corridors." },
  { year: "2023", text: "Genset-backed cold chain network rolled out across the Northern Corridor." },
  { year: "2026", text: "Digital tracking platform launched for real-time shipment visibility." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        title="Built on trust. Driven by precision."
        subtitle="Since 2008, Link Freight Logistics has been moving East Africa's most critical shipments — engineered for the journey, tailored for the client."
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative overflow-hidden ring-1 ring-slate-200/80 shadow-lg shadow-navy/10">
            <img
              src={yard}
              alt="Link Freight operations and fleet yard"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={1280}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/15 via-transparent to-transparent pointer-events-none" />
          </div>          <div>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-cyan">Our Story</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy leading-tight">Logistics, the way it should work.</h2>
            <p className="text-slate-600 mt-6 leading-relaxed">
              We started with a simple conviction: clients deserve a freight partner who treats every
              container as if it were their own. From a single truck on the Mombasa–Nairobi highway,
              we've grown into a multi-modal operator running dry, reefer and genset-backed loads across
              East Africa.
            </p>
            <p className="text-slate-600 mt-4 leading-relaxed">
              What hasn't changed is our standard. Every shipment is matched to the right equipment,
              tracked end-to-end, and handed over on time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-orange">What Drives Us</span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase mt-3 font-extrabold text-navy leading-tight">Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, text }) => (
              <SiteCard key={title} variant="accent">
                <Icon className="size-10 text-cyan mb-6" />
                <h3 className="font-display text-2xl uppercase text-navy mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </SiteCard>
            ))}
          </div>        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-10 sm:mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-cyan">Milestones</span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase mt-3 font-extrabold">Almost two decades on the road.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="border-l-2 border-cyan pl-5">
                <div className="font-display text-3xl font-extrabold text-cyan">{m.year}</div>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          {[
            { Icon: Award, value: "15+", label: "Years in Operation" },
            { Icon: Users, value: "120+", label: "Team Members" },
            { Icon: TrendingUp, value: "10k+", label: "Shipments Delivered" },
          ].map(({ Icon, value, label }) => (
            <SiteCard key={label} variant="stat">
              <Icon className="size-8 text-orange mx-auto mb-4" />
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-navy">{value}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-2">{label}</div>
            </SiteCard>
          ))}        </div>
      </section>

      <CTA />
    </>
  );
}

export function PageHero({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <section className="relative bg-navy py-12 sm:py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,#1ea7e1_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-block bg-cyan px-3 py-1 mb-6">
          <span className="text-navy text-xs font-bold uppercase tracking-widest">{tag}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.92] font-extrabold max-w-3xl">{title}</h1>
        <p className="text-slate-300 mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-orange">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-white font-extrabold max-w-2xl text-center md:text-left leading-tight">
          Ready to move with a partner who delivers?
        </h2>
        <Link to="/quote" className="bg-white text-navy px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-navy hover:text-white transition-all whitespace-nowrap w-full sm:w-auto text-center">
          Get A Quote
        </Link>
      </div>
    </section>
  );
}
