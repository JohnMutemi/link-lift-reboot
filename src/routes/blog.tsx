import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, CTA } from "./about";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Link Freight Logistics Ltd" },
      { name: "description", content: "Insights on East African logistics, cold chain, customs and corridor operations from the Link Freight team." },
      { property: "og:title", content: "Link Freight Blog" },
      { property: "og:description", content: "Logistics insights from the team moving East Africa." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { tag: "Logistics", date: "May 12, 2026", title: "Why reefer logistics is reshaping East African horticulture exports", excerpt: "Demand for chilled flowers, avocados and pharma is driving a quiet revolution in how the corridor moves cold cargo." },
  { tag: "Operations", date: "Apr 28, 2026", title: "Inside the Northern Corridor: cutting transit time Mombasa → Kampala", excerpt: "How upgraded weighbridges, OSBP processing and predictive dispatch shaved 36 hours off our average run." },
  { tag: "Industry", date: "Mar 15, 2026", title: "Gensets explained: keeping the cold chain alive on long-haul road freight", excerpt: "A practical breakdown of clip-on vs undermount gensets and why fuel choice matters more than you think." },
  { tag: "Compliance", date: "Feb 02, 2026", title: "Customs clearance in East Africa: what every importer should know in 2026", excerpt: "The new digital filing rules across KRA, URA and RRA — and how to avoid the most common delays." },
  { tag: "People", date: "Jan 18, 2026", title: "Meet the dispatch team behind Link Freight's 99.8% on-time rate", excerpt: "A look inside the 24/7 control tower in Nairobi that keeps every container accounted for." },
  { tag: "Sustainability", date: "Dec 10, 2025", title: "Greener freight: our first steps toward a lower-carbon corridor", excerpt: "Route optimisation, fleet renewal and what we're learning about emissions on the Mombasa run." },
];

function BlogPage() {
  return (
    <>
      <PageHero
        tag="Latest Blogs"
        title="Insights from the corridor."
        subtitle="Field notes on logistics, cold chain, customs and the people moving East Africa's freight."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="bg-slate-50 p-8 border-b-4 border-slate-200 hover:border-cyan transition-all shadow-sm hover:shadow-lg group flex flex-col">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500 mb-4">
                  <span className="text-orange font-bold">{p.tag}</span> &middot; <span>{p.date}</span>
                </div>
                <h3 className="font-display text-xl uppercase text-navy leading-snug group-hover:text-cyan transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed flex-1">{p.excerpt}</p>
                <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-navy group-hover:text-cyan transition-colors">
                  Read Article <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
