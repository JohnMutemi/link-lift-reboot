import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, C as CTA } from "./router-_Whew9s-.mjs";
import { S as SiteCard } from "./SiteCard-CYDsREj2.mjs";
import { C as Container, S as Snowflake, Z as Zap, R as Route, e as Truck, a as MapPin, f as FileCheck, W as Wrench, g as ShieldCheck, B as Building2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const genset = "/feature.jpg";
const truck = "/hero-carousel-1.jpg";
const yard = "/hero-carousel-3.jpg";
const serviceCategories = [{
  id: "long-distance",
  tag: "Long Distance",
  Icon: Route,
  image: truck,
  title: "Long Distance Haulage",
  desc: "Cross-border and corridor freight across the Northern Corridor — Mombasa to Nairobi, Kampala, Kigali, Juba, and Goma. Dry, reefer, and genset-backed loads with GPS tracking and on-time delivery.",
  points: ["Northern Corridor routes", "Cross-border documentation support", "480–540 HP prime movers", "Dry, reefer & genset equipment"],
  equipment: [{
    Icon: Container,
    title: "Dry Containers",
    desc: "20ft and 40ft dry units for general cargo across long-haul corridors."
  }, {
    Icon: Snowflake,
    title: "Reefer Containers",
    desc: "Temperature-controlled units from −25°C to +25°C for perishables and pharma."
  }, {
    Icon: Zap,
    title: "Gensets",
    desc: "Clip-on and undermount power to protect the cold chain on long inland legs."
  }]
}, {
  id: "short-distance",
  tag: "Short Distance",
  Icon: Truck,
  image: yard,
  title: "Short Distance Haulage",
  desc: "Local and regional moves within Kenya — port shuttles, yard transfers, last-mile delivery to warehouses, factories, and project sites in Nairobi, Mombasa, and surrounding hubs.",
  points: ["Port-to-yard transfers", "Nairobi & Mombasa local runs", "Last-mile warehouse delivery", "Flexible scheduling"],
  equipment: [{
    Icon: Truck,
    title: "Inland Haulage",
    desc: "Prime-mover fleet for short-haul and metro-area container moves."
  }, {
    Icon: MapPin,
    title: "Last-Mile Delivery",
    desc: "Final delivery to warehouses, factories, and project sites."
  }]
}, {
  id: "associated",
  tag: "Associated Services",
  Icon: Building2,
  image: genset,
  title: "Associated Services",
  desc: "End-to-end support beyond the truck — documentation, clearance, insurance, and specialised cargo handling so your shipment moves without friction.",
  points: ["Customs & bond handling", "Project & oversized cargo", "Cargo insurance", "Documentation support"],
  equipment: [{
    Icon: FileCheck,
    title: "Customs Clearance",
    desc: "Full documentation, customs, and bond handling across East African borders."
  }, {
    Icon: Wrench,
    title: "Project Cargo",
    desc: "Specialised handling for heavy, oversized, and high-value industrial cargo."
  }, {
    Icon: ShieldCheck,
    title: "Cargo Insurance",
    desc: "Coverage tailored to the value and risk of every shipment."
  }]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { tag: "Our Services", title: "Long distance. Short distance. Full support.", subtitle: "Three service pillars — corridor haulage, local transport, and associated logistics — engineered for East African trade." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 lg:space-y-24", children: serviceCategories.map(({
      id,
      tag,
      Icon,
      image,
      title,
      desc,
      points,
      equipment
    }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id, className: `scroll-mt-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: title, className: "w-full aspect-[4/3] object-cover lg:sticky lg:top-28", loading: "lazy", width: 1280, height: 900 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-cyan/10 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 text-cyan" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-mono tracking-[0.2em] text-orange", children: tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl uppercase mt-3 font-extrabold text-navy", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mt-6 leading-relaxed", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-navy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 bg-orange shrink-0" }),
          " ",
          p
        ] }, p)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-4", children: equipment.map(({
          Icon: EqIcon,
          title: eqTitle,
          desc: eqDesc
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { variant: "compact", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EqIcon, { className: "size-5 text-navy mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase text-navy mb-2", children: eqTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-600 leading-relaxed", children: eqDesc })
        ] }, eqTitle)) }),
        "              "
      ] })
    ] }, id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
export {
  ServicesPage as component
};
