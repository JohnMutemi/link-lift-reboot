import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation, e as useRouterState, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as Dialog, a as DialogPortal, b as DialogContent, c as DialogClose, d as DialogTitle, e as DialogOverlay, f as DialogDescription } from "../_libs/radix-ui__react-dialog.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { P as Phone, A as ArrowRight, M as Menu, Y as Youtube, I as Instagram, L as Linkedin, F as Facebook, T as Twitter, a as MapPin, b as Mail, c as ArrowUp, d as MessageCircle, X } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-DV9--DwZ.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const SITE = {
  tagline: "Delivering Possibilities, Connecting Worlds",
  phone: "+254 721 121 287",
  phoneTel: "+254721121287",
  phoneWhatsApp: "254721121287",
  email: "info@linkfreightltd.co.ke",
  address: ["Off Airport North Road", "Nairobi, Kenya"],
  /** Replace empty strings with real profile URLs when available */
  social: {
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    youtube: ""
  }
};
const socialLinks = [
  { key: "twitter", label: "Twitter / X" },
  { key: "facebook", label: "Facebook" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" }
];
const socialIcons$1 = {
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube
};
function ContactRow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 sm:gap-7 shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5 text-cyan shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Off Airport North Road, Nairobi" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+254721121287", className: "flex items-center gap-2 hover:text-cyan transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5 text-cyan shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+254 721 121 287" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@linkfreightltd.co.ke", className: "flex items-center gap-2 hover:text-cyan transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-3.5 text-cyan shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "info@linkfreightltd.co.ke" })
    ] })
  ] });
}
function Socials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 shrink-0", children: socialLinks.map(({ key, label }) => {
    const Icon = socialIcons$1[key];
    const href = SITE.social[key] || "#";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        "aria-label": label,
        ...SITE.social[key] ? { target: "_blank", rel: "noopener noreferrer" } : { "aria-disabled": true, tabIndex: -1 },
        className: "size-6 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-cyan hover:border-cyan transition-colors",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3" })
      },
      key
    );
  }) });
}
function TopBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-navy text-white/90 text-[11px] sm:text-xs border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-2 sm:py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:hidden items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+254721121287", className: "flex items-center gap-1.5 truncate", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3 text-cyan shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "+254 721 121 287" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Socials, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-w-0 overflow-hidden", children: isHome ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lf-marquee-track lf-marquee-animate", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, {})
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden md:block text-cyan/90 font-medium tracking-wide text-center whitespace-nowrap px-2", children: SITE.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "justify-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Socials, {}) })
    ] })
  ] }) });
}
const LOGO_SRC = "/link-freight-rams.png";
function Logo({
  variant = "dark",
  className = ""
}) {
  const isLight = variant === "light";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/",
      className: `flex items-center gap-2 sm:gap-3 group shrink-0 ${className}`,
      "aria-label": "Link Freight Logistics — Home",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: LOGO_SRC,
            alt: "Link Freight Logistics",
            width: 276,
            height: 57,
            className: "h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 border-0 bg-transparent p-0 shadow-none",
            style: { background: "transparent" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `font-display text-base sm:text-xl lg:text-2xl tracking-tight uppercase font-extrabold leading-none flex flex-col max-[380px]:hidden ${isLight ? "text-white" : "text-navy"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Link ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "Freight" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[9px] sm:text-[10px] font-medium tracking-[0.25em] mt-0.5 ${isLight ? "text-white/60" : "text-slate-500"}`,
                  children: "LOGISTICS LIMITED"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = Dialog;
const SheetPortal = DialogPortal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogOverlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = DialogContent.displayName;
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = DialogTitle.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = DialogDescription.displayName;
const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
const quoteLinkClass = "inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-5 xl:px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-orange/20 shrink-0 touch-manipulation";
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 lg:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center justify-center gap-8 xl:gap-10 font-medium text-sm uppercase tracking-wider", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: "text-navy/80 hover:text-cyan transition-colors relative py-1 whitespace-nowrap",
          activeOptions: { exact: item.to === "/" },
          activeProps: {
            className: "text-cyan after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-cyan"
          },
          children: item.label
        },
        item.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", className: `${quoteLinkClass} hidden sm:inline-flex`, children: [
          "Get A Quote ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "lg:hidden text-navy size-11 grid place-items-center rounded-sm hover:bg-slate-100 transition-colors touch-manipulation",
            onClick: () => setOpen(true),
            "aria-label": "Open menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-6" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SheetContent,
      {
        side: "right",
        className: "w-full sm:max-w-xs bg-white p-0 border-l border-slate-100 pt-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "sr-only", children: "Navigation menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-4 pb-8", children: [
            navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: item.to,
                onClick: () => setOpen(false),
                className: "text-navy min-h-12 flex items-center font-medium uppercase tracking-wider text-sm border-b border-slate-100 last:border-0 touch-manipulation",
                activeOptions: { exact: item.to === "/" },
                activeProps: { className: "text-cyan" },
                children: item.label
              },
              item.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/quote",
                onClick: () => setOpen(false),
                className: "mt-6 min-h-12 inline-flex items-center justify-center gap-2 bg-orange text-white px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-widest touch-manipulation",
                children: [
                  "Get A Quote ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
                ]
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
const socialIcons = {
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube
};
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-navy text-white/70 pt-16 sm:pt-20 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "light" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cyan/90 text-sm font-medium mb-3", children: SITE.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-6", children: "Specialized freight and logistics across East Africa — dry containers, reefer units, gensets, and inland haulage tailored to every shipment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socialLinks.map(({ key, label }) => {
          const Icon = socialIcons[key];
          const href = SITE.social[key] || "#";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              "aria-label": label,
              ...SITE.social[key] ? { target: "_blank", rel: "noopener noreferrer" } : { "aria-disabled": true, tabIndex: -1 },
              className: "size-9 grid place-items-center border border-white/15 hover:border-cyan hover:text-cyan hover:bg-cyan/10 transition-colors rounded-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" })
            },
            key
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-bold uppercase tracking-widest mb-6 text-xs", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-cyan transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-cyan transition-colors", children: "Our Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/fleet", className: "hover:text-cyan transition-colors", children: "Our Fleet" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-cyan transition-colors", children: "Latest Blogs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "hover:text-cyan transition-colors", children: "Get a Quote" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-cyan transition-colors", children: "Contact Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-bold uppercase tracking-widest mb-6 text-xs", children: "Operating Hours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Mon – Fri: 08:00 – 17:00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sat: 08:00 – 13:00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sun: Closed" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-bold uppercase tracking-widest mb-6 text-xs", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-cyan shrink-0 mt-0.5" }),
            " Off Airport North Road, Nairobi"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-cyan shrink-0" }),
            " +254 721 121 287"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-cyan shrink-0" }),
            " info@linkfreightltd.co.ke"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Link Freight Logistics Limited. All Rights Reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 uppercase tracking-widest font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "Dry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reefer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gensets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Haulage" })
      ] })
    ] })
  ] }) });
}
function ScrollToTop() {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "aria-label": "Scroll to top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      className: `lf-fixed-bottom z-40 right-4 sm:right-8 size-11 sm:size-12 grid place-items-center rounded-full bg-orange text-white shadow-lg shadow-orange/30 ring-1 ring-orange-600/30 hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "size-5" })
    }
  );
}
const DEFAULT_PROMPT = "Hello Link Freight, I'd like to enquire about your freight and logistics services.";
function buildWhatsAppUrl(message) {
  const digits = SITE.phoneWhatsApp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
function WhatsAppWidget() {
  const [open, setOpen] = reactExports.useState(false);
  const [message, setMessage] = reactExports.useState(DEFAULT_PROMPT);
  const startChat = () => {
    window.open(buildWhatsAppUrl(message.trim() || DEFAULT_PROMPT), "_blank", "noopener,noreferrer");
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lf-fixed-corner z-50 flex flex-col items-end gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "w-[min(100vw-3rem,340px)] origin-bottom-right transition-all duration-300",
          open ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-2 pointer-events-none"
        ),
        "aria-hidden": !open,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white shadow-2xl shadow-navy/15 ring-1 ring-slate-200 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#25D366] px-5 py-4 flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-white/20 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg uppercase font-bold text-white leading-tight truncate", children: "Link Freight" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/90", children: "Typically replies within an hour" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Close chat prompt",
                onClick: () => setOpen(false),
                className: "size-8 rounded-full hover:bg-white/15 grid place-items-center text-white transition-colors shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl rounded-tl-sm bg-slate-50 px-4 py-3 text-sm text-slate-700 leading-relaxed border border-slate-100", children: "Hi there! Tell us about your shipment and we'll connect you with our team on WhatsApp." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "whatsapp-message", className: "text-xs uppercase tracking-widest text-navy font-bold", children: "Your message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "whatsapp-message",
                  rows: 3,
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  className: "mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-base sm:text-sm text-slate-700 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: startChat,
                className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 font-bold uppercase tracking-widest text-xs transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-4" }),
                  "Start Chat"
                ]
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": open ? "Close WhatsApp chat" : "Chat on WhatsApp",
        "aria-expanded": open,
        onClick: () => setOpen((v) => !v),
        className: cn(
          "size-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 ring-1 ring-[#1ebe5d]/40 touch-manipulation",
          "hover:bg-[#1ebe5d] hover:scale-105 active:scale-95 transition-all duration-300 grid place-items-center"
        ),
        children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "size-7" })
      }
    )
  ] });
}
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) });
}
function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lf-page-swing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }, pathname);
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0a1f44" },
      { title: `Link Freight Logistics Ltd — ${SITE.tagline}` },
      {
        name: "description",
        content: "Link Freight Logistics Ltd specialises in dry containers, reefer containers, gensets and inland haulage across East Africa. Reliable, engineered logistics from Nairobi."
      },
      { name: "author", content: "Link Freight Logistics Ltd" },
      { property: "og:title", content: "Link Freight Logistics Ltd" },
      {
        property: "og:description",
        content: "Specialised freight, reefer and dry container transport across East Africa."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", href: "/link-freight-rams.png", type: "image/png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppWidget, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./services-CsguWAsx.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Our Services — Link Freight Logistics Ltd"
    }, {
      name: "description",
      content: "Long distance haulage, short distance transport, and associated logistics services across East Africa."
    }, {
      property: "og:title",
      content: "Services — Link Freight Logistics"
    }, {
      property: "og:description",
      content: "Long distance, short distance, and associated freight solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./quote-DmhIFZXC.mjs");
const Route$5 = createFileRoute("/quote")({
  head: () => ({
    meta: [{
      title: "Get a Quote — Link Freight Logistics Ltd"
    }, {
      name: "description",
      content: "Request a freight quote from Link Freight Logistics. Long distance, short distance, and associated logistics services across East Africa."
    }, {
      property: "og:title",
      content: "Get a Quote — Link Freight Logistics"
    }, {
      property: "og:description",
      content: "Request a tailored freight quote within 24 hours."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./fleet-BZTlOf1t.mjs");
const Route$4 = createFileRoute("/fleet")({
  head: () => ({
    meta: [{
      title: "Our Fleet — Link Freight Logistics Ltd"
    }, {
      name: "description",
      content: "Prime movers, reefer containers, dry containers and genset trailers — engineered for the Northern Corridor."
    }, {
      property: "og:title",
      content: "Our Fleet"
    }, {
      property: "og:description",
      content: "Engineered hardware for serious freight."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-C-W0i5tx.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Link Freight Logistics Ltd"
    }, {
      name: "description",
      content: "Get in touch with Link Freight Logistics. Track a shipment, partner with us, or reach our Nairobi office."
    }, {
      property: "og:title",
      content: "Contact Link Freight Logistics"
    }, {
      property: "og:description",
      content: "Get in touch with our team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-Y1sowzYY.mjs");
const Route$2 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Blog — Link Freight Logistics Ltd"
    }, {
      name: "description",
      content: "Insights on East African logistics, cold chain, customs and corridor operations from the Link Freight team."
    }, {
      property: "og:title",
      content: "Link Freight Blog"
    }, {
      property: "og:description",
      content: "Logistics insights from the team moving East Africa."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-1js8Ab8p.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Link Freight Logistics Ltd"
    }, {
      name: "description",
      content: "Learn about Link Freight Logistics — our mission, story, and people moving East Africa's freight with precision and care."
    }, {
      property: "og:title",
      content: "About Link Freight Logistics"
    }, {
      property: "og:description",
      content: "Our mission, story and people powering precision freight across East Africa."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
function PageHero({
  tag,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-navy py-16 sm:py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,#1ea7e1_0%,transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block bg-cyan px-3 py-1 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-navy text-xs font-bold uppercase tracking-widest", children: tag }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl md:text-7xl text-white uppercase leading-[0.9] font-extrabold max-w-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg", children: subtitle })
    ] })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 sm:py-20 bg-orange", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl uppercase text-white font-extrabold max-w-2xl", children: "Ready to move with a partner who delivers?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "bg-white text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-navy hover:text-white transition-all whitespace-nowrap", children: "Get A Quote" })
  ] }) });
}
const $$splitComponentImporter = () => import("./index-IQ1sHwRN.mjs");
const HERO_OG_IMAGE = "/hero-carousel-1.jpg";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Link Freight Logistics Ltd — Precision Freight Across East Africa"
    }, {
      name: "description",
      content: "End-to-end freight solutions from Nairobi: dry containers, reefer units, gensets, and inland haulage tailored to every shipment."
    }, {
      property: "og:title",
      content: "Link Freight Logistics Ltd"
    }, {
      property: "og:description",
      content: "Precision freight across East Africa — dry, reefer, gensets, haulage."
    }, {
      property: "og:image",
      content: HERO_OG_IMAGE
    }, {
      property: "twitter:image",
      content: HERO_OG_IMAGE
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const QuoteRoute = Route$5.update({
  id: "/quote",
  path: "/quote",
  getParentRoute: () => Route$7
});
const FleetRoute = Route$4.update({
  id: "/fleet",
  path: "/fleet",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const BlogRoute = Route$2.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  ContactRoute,
  FleetRoute,
  QuoteRoute,
  ServicesRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CTA as C,
  PageHero as P,
  SITE as S,
  cn as c,
  router as r
};
