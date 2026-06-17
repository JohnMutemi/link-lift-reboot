import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, S as SITE } from "./router-_Whew9s-.mjs";
import { S as SiteCard } from "./SiteCard-CYDsREj2.mjs";
import { P as Phone, b as Mail, h as Clock, i as Send } from "../_libs/lucide-react.mjs";
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
function QuoteForm() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      className: "bg-navy text-white p-6 sm:p-8 lg:p-10",
      onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl uppercase font-extrabold mb-2", children: "Request a Quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mb-8", children: "Tell us about your shipment and we'll get back within 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-cyan font-bold", children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-navy", children: "Long Distance Haulage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-navy", children: "Short Distance Haulage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-navy", children: "Dry Containers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-navy", children: "Reefer Containers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-navy", children: "Gensets" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-navy", children: "Associated Services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-cyan font-bold", children: "Shipment Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 5,
              className: "mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            className: "mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" }),
              " Send Enquiry"
            ]
          }
        ),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cyan text-sm", children: "Thanks — your enquiry has been received. We'll be in touch shortly." })
      ]
    }
  );
}
function Field({ label, name, type = "text" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-cyan font-bold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name,
        type,
        required: true,
        className: "mt-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-base sm:text-sm focus:outline-none focus:border-cyan"
      }
    )
  ] });
}
function QuotePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { tag: "Get a Quote", title: "Tell us what you're moving.", subtitle: "Share your route, cargo type, and timeline — our team will respond with a tailored quote within one business day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { variant: "info", className: "!block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg uppercase text-navy font-bold mb-2", children: "What to include" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-slate-600 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Origin and destination" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cargo type and weight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Container size (20ft / 40ft / reefer)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Preferred pickup or delivery date" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { variant: "info", className: "border-l-orange", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-6 text-orange shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg uppercase text-navy font-bold", children: "Prefer to call?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SITE.phoneTel}`, className: "text-sm text-slate-600 mt-1 hover:text-cyan transition-colors", children: SITE.phone })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { variant: "info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-6 text-orange shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg uppercase text-navy font-bold", children: "Email us directly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${SITE.email}`, className: "text-sm text-slate-600 mt-1 hover:text-cyan transition-colors", children: SITE.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteCard, { variant: "info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-6 text-orange shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg uppercase text-navy font-bold", children: "Response time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-600 mt-1", children: "Mon–Fri within 24 hours" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500", children: [
          "General enquiries?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-cyan hover:underline", children: "Visit our contact page" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteForm, {}) })
    ] }) })
  ] });
}
export {
  QuotePage as component
};
