import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:gap-6">
        <Logo />

        <div className="hidden lg:flex items-center gap-7 xl:gap-9 font-medium text-sm uppercase tracking-wider justify-self-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-navy/80 hover:text-cyan transition-colors relative py-1"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-cyan after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-cyan" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-5 lg:px-6 py-2.5 rounded-sm font-bold text-xs lg:text-sm uppercase tracking-widest transition-all shadow-md shadow-orange/20"
          >
            Get A Quote <ArrowRight className="size-3.5" />
          </Link>

          <button
            className="lg:hidden text-navy size-10 grid place-items-center rounded-sm hover:bg-slate-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-navy py-3 font-medium uppercase tracking-wider text-sm border-b border-slate-100 last:border-0"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-cyan" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="sm:hidden mt-4 bg-orange text-white text-center px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-widest"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
