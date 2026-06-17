import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, S as SITE } from "./router-_Whew9s-.mjs";
import { S as SiteCard } from "./SiteCard-CYDsREj2.mjs";
import { a as MapPin, P as Phone, b as Mail, h as Clock, i as Send } from "../_libs/lucide-react.mjs";
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
const channels = [{
  Icon: MapPin,
  title: "Office",
  lines: SITE.address
}, {
  Icon: Phone,
  title: "Phone",
  lines: [SITE.phone]
}, {
  Icon: Mail,
  title: "Email",
  lines: [SITE.email]
}, {
  Icon: Clock,
  title: "Hours",
  lines: ["Mon–Fri: 08:00–17:00", "Sat: 08:00–13:00"]
}];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { tag: "Contact Us", title: "Let's move your shipment.", subtitle: "Whether you need a tracking update or want to partner with us — our team is on standby. For pricing, use our dedicated quote form." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        channels.map(({
          Icon,
          title,
          lines
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { variant: "info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 text-orange shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg uppercase text-navy font-bold", children: title }),
            lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-600 mt-1", children: l }, l))
          ] })
        ] }, title)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { variant: "info", className: "bg-orange/10 border-l-orange", children: [
          "              ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg uppercase text-navy font-bold mb-2", children: "Need a quote?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 mb-4", children: "Share your route and cargo details on our quote page for a tailored response within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-colors", children: "Get a Quote" })
        ] }),
        "          "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "lg:col-span-3 bg-navy text-white p-6 sm:p-8 lg:p-10", onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl uppercase font-extrabold mb-2", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mb-8", children: "General enquiries, partnerships, or shipment updates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-cyan font-bold", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "subject", required: true, className: "mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-cyan font-bold", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" }),
          " Send Message"
        ] }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cyan text-sm", children: "Thanks — your message has been received. We'll be in touch shortly." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-slate-50 pb-16 sm:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] sm:aspect-[16/7] w-full bg-navy/5 overflow-hidden border-b-4 border-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Link Freight office location", src: "https://www.openstreetmap.org/export/embed.html?bbox=36.8950%2C-1.3450%2C36.9450%2C-1.3050&layer=mapnik", className: "w-full h-full", loading: "lazy" }) }) }) })
  ] });
}
function Field({
  label,
  name,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-cyan font-bold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required: true, className: "mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan" })
  ] });
}
export {
  ContactPage as component
};
