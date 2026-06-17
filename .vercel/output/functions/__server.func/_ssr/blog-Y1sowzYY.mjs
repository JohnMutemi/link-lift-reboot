import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, C as CTA } from "./router-_Whew9s-.mjs";
import { S as SiteCard } from "./SiteCard-CYDsREj2.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const posts = [{
  tag: "Logistics",
  date: "May 12, 2026",
  title: "Why reefer logistics is reshaping East African horticulture exports",
  excerpt: "Demand for chilled flowers, avocados and pharma is driving a quiet revolution in how the corridor moves cold cargo."
}, {
  tag: "Operations",
  date: "Apr 28, 2026",
  title: "Inside the Northern Corridor: cutting transit time Mombasa → Kampala",
  excerpt: "How upgraded weighbridges, OSBP processing and predictive dispatch shaved 36 hours off our average run."
}, {
  tag: "Industry",
  date: "Mar 15, 2026",
  title: "Gensets explained: keeping the cold chain alive on long-haul road freight",
  excerpt: "A practical breakdown of clip-on vs undermount gensets and why fuel choice matters more than you think."
}, {
  tag: "Compliance",
  date: "Feb 02, 2026",
  title: "Customs clearance in East Africa: what every importer should know in 2026",
  excerpt: "The new digital filing rules across KRA, URA and RRA — and how to avoid the most common delays."
}, {
  tag: "People",
  date: "Jan 18, 2026",
  title: "Meet the dispatch team behind Link Freight's 99.8% on-time rate",
  excerpt: "A look inside the 24/7 control tower in Nairobi that keeps every container accounted for."
}, {
  tag: "Sustainability",
  date: "Dec 10, 2025",
  title: "Greener freight: our first steps toward a lower-carbon corridor",
  excerpt: "Route optimisation, fleet renewal and what we're learning about emissions on the Mombasa run."
}];
function BlogPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { tag: "Latest Blogs", title: "Insights from the corridor.", subtitle: "Field notes on logistics, cold chain, customs and the people moving East Africa's freight." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { as: "article", variant: "elevated", className: "flex flex-col bg-slate-50/90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange font-bold", children: p.tag }),
        " · ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl uppercase text-navy leading-snug group-hover:text-cyan transition-colors", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 mt-4 leading-relaxed flex-1", children: p.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-navy group-hover:text-cyan transition-colors", children: [
        "Read Article ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
      ] })
    ] }, p.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
export {
  BlogPage as component
};
