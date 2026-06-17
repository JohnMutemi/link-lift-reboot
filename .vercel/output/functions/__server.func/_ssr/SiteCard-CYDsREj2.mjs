import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-_Whew9s-.mjs";
const variantStyles = {
  elevated: "lf-card lf-card-elevated group bg-white p-8 border border-slate-100 border-b-4 border-b-slate-200 hover:border-b-cyan shadow-sm hover:shadow-xl hover:-translate-y-1",
  accent: "lf-card lf-card-accent bg-white p-10 border border-slate-100 border-b-4 border-b-cyan shadow-sm",
  media: "lf-card lf-card-media bg-white border border-slate-100 border-b-4 border-b-cyan overflow-hidden group shadow-sm hover:shadow-xl",
  info: "lf-card lf-card-info flex gap-4 p-6 bg-slate-50/80 border border-slate-100 border-l-4 border-l-cyan",
  compact: "lf-card lf-card-compact bg-slate-50/90 p-5 border border-slate-100 border-b-2 border-b-slate-200 hover:border-b-cyan transition-colors",
  stat: "lf-card lf-card-stat bg-slate-50/90 p-10 border border-slate-100 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
};
function SiteCard({
  as,
  variant = "elevated",
  children,
  className,
  ...props
}) {
  const Component = as ?? "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { className: cn(variantStyles[variant], className), ...props, children });
}
function SiteCardIcon({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "w-12 h-12 bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-cyan/10 transition-colors duration-300",
        className
      ),
      children
    }
  );
}
export {
  SiteCard as S,
  SiteCardIcon as a
};
