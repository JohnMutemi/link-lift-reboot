import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SITE } from "./router-_Whew9s-.mjs";
import { S as SiteCard, a as SiteCardIcon } from "./SiteCard-CYDsREj2.mjs";
import { C as Container, S as Snowflake, Z as Zap, e as Truck, A as ArrowRight, g as ShieldCheck, h as Clock, m as Earth, Q as Quote } from "../_libs/lucide-react.mjs";
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
const slides = [
  {
    image: "/hero-carousel-1.jpg",
    tag: "Corridor Haulage",
    title: "Reliability in Delivery",
    subtitle: "Prime movers on the Northern Corridor at golden hour — dry, reefer, and genset freight across East and Central Africa."
  },
  {
    image: "/hero-carousel-2.jpg",
    tag: "Fleet Capacity",
    title: "Scale You Can Count On",
    subtitle: "200+ units ready for dispatch — from Mombasa port shuttles to cross-border runs into Uganda, Rwanda, and South Sudan."
  },
  {
    image: "/hero-carousel-3.jpg",
    tag: "Port & Yard Ops",
    title: "From Quay to Consignee",
    subtitle: "Container handling at port and yard — forklift-to-trailer transfers that keep your cargo moving without delay."
  },
  {
    image: "/hero-carousel-4.jpg",
    tag: "Warehousing",
    title: "End-to-End Logistics",
    subtitle: "High-bay storage and distribution hubs that bridge port arrival and final delivery across Kenya's industrial corridors."
  },
  {
    image: "/hero-carousel-5.jpg",
    tag: "On the Road",
    title: "Delivering with Integrity",
    subtitle: "GPS-tracked prime movers on every leg — your trusted logistics partner from Nairobi with precision at every mile."
  }
];
function HeroCarousel() {
  const [active, setActive] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[480px] sm:min-h-[560px] md:min-h-[640px] lg:h-[85vh] flex items-center overflow-hidden bg-navy py-16 sm:py-20 lg:py-0", children: [
    slides.map((slide, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: slide.image,
        alt: "",
        "aria-hidden": i !== active,
        width: 1920,
        height: 1080,
        fetchPriority: i === 0 ? "high" : void 0,
        loading: i === 0 ? "eager" : "lazy",
        className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`
      },
      slide.image
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/40 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl lf-reveal relative min-h-[280px] sm:min-h-[320px]", children: [
      slides.map((slide, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `transition-all duration-700 ${i === active ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-4 absolute inset-x-0 top-0 pointer-events-none"}`,
          "aria-hidden": i !== active,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block bg-cyan px-3 py-1 mb-5 sm:mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy text-[10px] sm:text-xs font-bold uppercase tracking-widest", children: slide.tag }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.95] mb-6 sm:mb-8 font-extrabold drop-shadow-sm", children: slide.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-white/90 mb-4 sm:mb-5 max-w-lg drop-shadow-sm", children: slide.subtitle }),
            i === active && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-cyan font-medium tracking-wide mb-8 sm:mb-10 drop-shadow-sm", children: SITE.tagline })
          ]
        },
        slide.title
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/services",
            className: "bg-white text-navy px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-cyan hover:text-white transition-all text-center",
            children: "Explore Services"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/quote",
            className: "border border-white/50 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white/15 transition-all text-center backdrop-blur-sm",
            children: "Get A Quote"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-8 sm:mt-10", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": `Go to slide ${i + 1}`,
          "aria-current": i === active ? "true" : void 0,
          onClick: () => setActive(i),
          className: "relative size-11 -m-2 grid place-items-center touch-manipulation",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `block h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-cyan" : "w-4 bg-white/40"}`
            }
          )
        },
        i
      )) })
    ] }) })
  ] });
}
const yard = "/about-1.jpg";
const services = [{
  Icon: Container,
  title: "Dry Containers",
  desc: "Standard 20ft & 40ft shipping for non-perishable goods, with global reach and door-to-door tracking."
}, {
  Icon: Snowflake,
  title: "Reefer Containers",
  desc: "Climate-controlled logistics for sensitive perishables and pharmaceuticals across long distances."
}, {
  Icon: Zap,
  title: "Gensets",
  desc: "Continuous power solutions for refrigerated transport — keeping the cold chain unbroken."
}, {
  Icon: Truck,
  title: "Inland Haulage",
  desc: "Reliable road transport across Kenya and the Northern Corridor, bridging ports and hubs."
}];
const stats = [{
  value: "15+",
  label: "Years of Service"
}, {
  value: "200+",
  label: "Fleet Units"
}, {
  value: "99.8%",
  label: "On-Time Delivery"
}, {
  value: "08",
  label: "Active Corridors"
}];
const posts = [{
  tag: "Logistics",
  title: "Why reefer logistics is reshaping East African horticulture exports",
  date: "May 2026"
}, {
  tag: "Operations",
  title: "Inside the Northern Corridor: cutting transit time Mombasa → Kampala",
  date: "Apr 2026"
}, {
  tag: "Industry",
  title: "Gensets explained: keeping the cold chain alive on long-haul road freight",
  date: "Mar 2026"
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white border-b border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 sm:py-10 px-3 sm:px-6 text-center bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-medium leading-snug", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-mono tracking-[0.2em] text-orange", children: "What We Do" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy", children: [
            "Core Operational ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mt-4", children: "End-to-end freight solutions tailored for the Kenyan market and international transit corridors." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-slate-200 hidden md:block mx-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange font-bold text-sm uppercase tracking-widest", children: "Link Freight Ltd" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map(({
        Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { as: Link, to: "/services", variant: "elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SiteCardIcon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 text-navy group-hover:text-cyan transition-colors duration-300" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl uppercase mb-3 text-navy", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 leading-relaxed mb-6", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-navy group-hover:text-cyan transition-colors tracking-widest uppercase flex items-center gap-1", children: [
          "Learn More ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden ring-1 ring-slate-200/80 shadow-lg shadow-navy/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: yard, alt: "Link Freight fleet and operations yard", loading: "lazy", width: 1280, height: 900, className: "w-full aspect-[4/3] object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 sm:absolute sm:-bottom-6 sm:-right-6 bg-orange text-white p-4 sm:p-6 max-w-full sm:max-w-[220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-3xl font-extrabold", children: "Since 2008" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest mt-1", children: "Moving Africa's economy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-mono tracking-[0.2em] text-cyan", children: "Who We Are" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy", children: [
          "Engineered for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "unique" }),
          " shipments."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mt-6 leading-relaxed", children: "Link Freight Logistics Ltd specialises in the transportation of complex shipments, each tailored to meet the unique needs of our clients. Our versatility is evident in our deployment of dry containers, reefer containers, and gensets — selected for the specific requirements of every load we move." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 text-sm text-navy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5 text-cyan" }),
            " ISO-aligned safety and compliance protocols"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-5 text-cyan" }),
            " 24/7 dispatch with real-time tracking"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "size-5 text-cyan" }),
            " Cross-border presence: Kenya, Uganda, Rwanda, South Sudan"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "inline-flex items-center gap-2 mt-10 bg-navy text-white px-7 py-3.5 font-bold uppercase tracking-widest text-sm hover:bg-cyan transition-colors", children: [
          "About Link Freight ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-navy text-white relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-10 text-cyan mx-auto mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl leading-snug", children: "“Link Freight handles our cold chain shipments with surgical precision. Their reefer and genset deployment across the Northern Corridor has transformed our distribution in Kigali and Kampala.”" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-sm uppercase tracking-widest text-cyan font-bold", children: "Director of Logistics — Global Pharma East Africa" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-mono tracking-[0.2em] text-orange", children: "Insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl uppercase mt-3 font-extrabold text-navy", children: "Latest from the Yard" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "text-sm font-bold uppercase tracking-widest text-navy hover:text-cyan inline-flex items-center gap-2", children: [
          "All Posts ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { as: "article", variant: "elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange font-bold", children: p.tag }),
          " · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl uppercase text-navy leading-snug group-hover:text-cyan transition-colors", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-navy group-hover:text-cyan transition-colors", children: [
          "Read Article ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 sm:py-20 bg-orange", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl uppercase text-white font-extrabold max-w-2xl", children: "Got a shipment that needs precision? Let's move it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "bg-white text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-navy hover:text-white transition-all whitespace-nowrap", children: "Get A Quote" })
    ] }) })
  ] });
}
export {
  HomePage as component
};
