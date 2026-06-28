import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTA } from "../about";
import { SplitHero } from "@/components/site/SplitHero";
import { SplitSection } from "@/components/site/SplitSection";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
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

const TAG_COLORS: Record<string, string> = {
  Logistics: "bg-cyan/10 text-cyan-600",
  Operations: "bg-navy/10 text-navy",
  Industry: "bg-slate-100 text-slate-600",
  Compliance: "bg-orange/10 text-orange-600",
  People: "bg-emerald-50 text-emerald-700",
  Sustainability: "bg-green-50 text-green-700",
};

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${TAG_COLORS[tag] ?? "bg-slate-100 text-slate-600"}`}>
      {tag}
    </span>
  );
}

function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <SplitHero
        tag="Insights"
        title="From the corridor."
        subtitle="Field notes on logistics, cold chain, customs and the people moving East Africa's freight."
      />

      <SplitSection
        tag="Blog"
        title="Insights that connect logistics with business."
        description="Practical field stories, customs advice and corridor intelligence from the Link Freight team."
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Featured post */}
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group block mb-10 sm:mb-14 border border-slate-100 border-b-4 border-b-cyan bg-slate-50/60 hover:bg-slate-50 hover:shadow-lg transition-all duration-300 p-8 sm:p-10 lg:p-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <TagBadge tag={featured.tag} />
              <span className="text-xs text-slate-400 uppercase tracking-widest">{featured.date}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase text-navy leading-tight group-hover:text-cyan transition-colors duration-200 max-w-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-navy group-hover:text-cyan transition-colors">
              Read Article <ArrowRight className="size-3.5" />
            </span>
          </Link>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col bg-white p-6 sm:p-8 hover:bg-slate-50/80 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TagBadge tag={p.tag} />
                  <span className="text-xs text-slate-400 uppercase tracking-widest">{p.date}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl uppercase text-navy leading-snug group-hover:text-cyan transition-colors duration-200 flex-1">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed line-clamp-2">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-cyan transition-colors">
                  Read <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <CTA />
    </>
  );
}