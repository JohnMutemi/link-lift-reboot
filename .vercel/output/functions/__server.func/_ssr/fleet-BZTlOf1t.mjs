import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, C as CTA } from "./router-_Whew9s-.mjs";
import { S as SiteCard } from "./SiteCard-CYDsREj2.mjs";
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
import "../_libs/lucide-react.mjs";
const truck = "/hero-carousel-1.jpg";
const reefer = "/hero-carousel-5.jpg";
const genset = "/feature.jpg";
const yard = "/hero-carousel-2.jpg";
const fleet = [{
  image: truck,
  id: "PM-044",
  name: "Prime Movers",
  specs: [["Horsepower", "480–540 HP"], ["Payload", "60–80 tons"], ["Fleet Size", "85 units"]]
}, {
  image: reefer,
  id: "RF-882",
  name: "Reefer Containers",
  specs: [["Temp Range", "−25°C to +25°C"], ["Capacity", "67.7 CBM"], ["Fleet Size", "60 units"]]
}, {
  image: yard,
  id: "DC-201",
  name: "Dry Containers",
  specs: [["Sizes", "20ft / 40ft / HC"], ["Max Payload", "28,200 kg"], ["Fleet Size", "120 units"]]
}, {
  image: genset,
  id: "GS-209",
  name: "Genset Trailers",
  specs: [["Power", "15–25 kW"], ["Runtime", "Continuous duty"], ["Fleet Size", "35 units"]]
}];
function FleetPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { tag: "Our Fleet", title: "Engineered hardware for serious freight.", subtitle: "A modern, maintained, GPS-tracked fleet built for the demands of the East African corridor — from coastal port to inland hub." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 sm:gap-8", children: [
      fleet.map((unit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { as: "article", variant: "media", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: unit.image, alt: unit.name, className: "w-full h-full object-cover transition-transform duration-700", loading: "lazy", width: 1280, height: 720 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl uppercase text-navy font-extrabold", children: unit.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-orange bg-orange/10 px-2 py-1 shrink-0", children: unit.id })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200", children: unit.specs.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] uppercase tracking-widest text-slate-500", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-mono text-sm text-navy mt-1", children: v })
          ] }, k)) })
        ] })
      ] }, unit.id)),
      "          "
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 sm:py-20 bg-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl uppercase font-extrabold", children: [
        "Every unit, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "live tracked" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mt-6", children: "Our fleet operates under a 24/7 control tower: GPS telemetry, temperature monitoring on reefer units, fuel and route optimisation, and proactive maintenance scheduling — so your cargo is always accounted for." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
export {
  FleetPage as component
};
