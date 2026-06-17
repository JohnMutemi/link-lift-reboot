import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Container, Snowflake, Zap, Truck, ShieldCheck, Clock, Globe2, Quote } from "lucide-react";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { SiteCard, SiteCardIcon } from "@/components/site/SiteCard";

const HERO_OG_IMAGE = "/hero-carousel-1.jpg";
const yard = "/about-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Link Freight Logistics Ltd — Precision Freight Across East Africa" },
      {
        name: "description",
        content:
          "End-to-end freight solutions from Nairobi: dry containers, reefer units, gensets, and inland haulage tailored to every shipment.",
      },
      { property: "og:title", content: "Link Freight Logistics Ltd" },
      {
        property: "og:description",
        content: "Precision freight across East Africa — dry, reefer, gensets, haulage.",
      },
      { property: "og:image", content: HERO_OG_IMAGE },
      { property: "twitter:image", content: HERO_OG_IMAGE },
    ],
  }),
  component: HomePage,
});

const services = [
  { Icon: Container, title: "Dry Containers", desc: "Standard 20ft & 40ft shipping for non-perishable goods, with global reach and door-to-door tracking." },
  { Icon: Snowflake, title: "Reefer Containers", desc: "Climate-controlled logistics for sensitive perishables and pharmaceuticals across long distances." },
  { Icon: Zap, title: "Gensets", desc: "Continuous power solutions for refrigerated transport — keeping the cold chain unbroken." },
  { Icon: Truck, title: "Inland Haulage", desc: "Reliable road transport across Kenya and the Northern Corridor, bridging ports and hubs." },
];

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "200+", label: "Fleet Units" },
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "08", label: "Active Corridors" },
];

const posts = [
  { tag: "Logistics", title: "Why reefer logistics is reshaping East African horticulture exports", date: "May 2026" },
  { tag: "Operations", title: "Inside the Northern Corridor: cutting transit time Mombasa → Kampala", date: "Apr 2026" },
  { tag: "Industry", title: "Gensets explained: keeping the cold chain alive on long-haul road freight", date: "Mar 2026" },
];

function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
          {stats.map((s) => (
            <div key={s.label} className="py-8 sm:py-10 px-3 sm:px-6 text-center bg-white">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy">{s.value}</div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-medium leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-orange">What We Do</span>
              <h2 className="font-display text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy">
                Core Operational <span className="text-cyan">Services</span>
              </h2>
              <p className="text-slate-600 mt-4">
                End-to-end freight solutions tailored for the Kenyan market and international transit corridors.
              </p>
            </div>
            <div className="h-px flex-1 bg-slate-200 hidden md:block mx-12" />
            <div className="text-orange font-bold text-sm uppercase tracking-widest">Link Freight Ltd</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ Icon, title, desc }) => (
              <SiteCard key={title} as={Link} to="/services" variant="elevated">
                <SiteCardIcon>
                  <Icon className="size-6 text-navy group-hover:text-cyan transition-colors duration-300" />
                </SiteCardIcon>
                <h3 className="font-display text-xl uppercase mb-3 text-navy">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{desc}</p>
                <div className="text-xs font-bold text-navy group-hover:text-cyan transition-colors tracking-widest uppercase flex items-center gap-1">
                  Learn More <ArrowRight className="size-3.5" />
                </div>
              </SiteCard>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BAND */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden ring-1 ring-slate-200/80 shadow-lg shadow-navy/10">
              <img
                src={yard}
                alt="Link Freight fleet and operations yard"
                loading="lazy"
                width={1280}
                height={900}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="mt-4 sm:absolute sm:-bottom-6 sm:-right-6 bg-orange text-white p-4 sm:p-6 max-w-full sm:max-w-[220px]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold">Since 2008</div>
              <div className="text-xs uppercase tracking-widest mt-1">Moving Africa's economy</div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-cyan">Who We Are</span>
            <h2 className="font-display text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy">
              Engineered for <span className="text-cyan">unique</span> shipments.
            </h2>
            <p className="text-slate-600 mt-6 leading-relaxed">
              Link Freight Logistics Ltd specialises in the transportation of complex shipments, each tailored
              to meet the unique needs of our clients. Our versatility is evident in our deployment of
              dry containers, reefer containers, and gensets — selected for the specific requirements of
              every load we move.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-navy">
              <li className="flex items-center gap-3"><ShieldCheck className="size-5 text-cyan" /> ISO-aligned safety and compliance protocols</li>
              <li className="flex items-center gap-3"><Clock className="size-5 text-cyan" /> 24/7 dispatch with real-time tracking</li>
              <li className="flex items-center gap-3"><Globe2 className="size-5 text-cyan" /> Cross-border presence: Kenya, Uganda, Rwanda, South Sudan</li>
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-10 bg-navy text-white px-7 py-3.5 font-bold uppercase tracking-widest text-sm hover:bg-cyan transition-colors"
            >
              About Link Freight <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <Quote className="size-10 text-cyan mx-auto mb-6" />
          <p className="font-display text-2xl md:text-3xl leading-snug">
            “Link Freight handles our cold chain shipments with surgical precision. Their reefer
            and genset deployment across the Northern Corridor has transformed our distribution
            in Kigali and Kampala.”
          </p>
          <div className="mt-8 text-sm uppercase tracking-widest text-cyan font-bold">
            Director of Logistics &mdash; Global Pharma East Africa
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-orange">Insights</span>
              <h2 className="font-display text-4xl uppercase mt-3 font-extrabold text-navy">Latest from the Yard</h2>
            </div>
            <Link to="/blog" className="text-sm font-bold uppercase tracking-widest text-navy hover:text-cyan inline-flex items-center gap-2">
              All Posts <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <SiteCard key={p.title} as="article" variant="elevated">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500 mb-4">
                  <span className="text-orange font-bold">{p.tag}</span> &middot; <span>{p.date}</span>
                </div>
                <h3 className="font-display text-xl uppercase text-navy leading-snug group-hover:text-cyan transition-colors">{p.title}</h3>
                <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-navy group-hover:text-cyan transition-colors">
                  Read Article <ArrowRight className="size-3.5" />
                </Link>
              </SiteCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-orange">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <h2 className="font-display text-3xl md:text-4xl uppercase text-white font-extrabold max-w-2xl">
            Got a shipment that needs precision? Let's move it.
          </h2>
          <Link
            to="/quote"
            className="bg-white text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-navy hover:text-white transition-all whitespace-nowrap"
          >
            Get A Quote
          </Link>
        </div>
      </section>
    </>
  );
}
