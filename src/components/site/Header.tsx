import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm group-hover:bg-cyan transition-colors">
            <span className="text-orange font-bold text-xl font-display">L</span>
          </div>
          <span className="font-display text-2xl tracking-tighter uppercase font-extrabold text-navy">
            Link <span className="text-cyan">Freight</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-navy/80 hover:text-cyan transition-colors"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-cyan" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden sm:inline-flex bg-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-orange/20"
        >
          Get A Quote
        </Link>

        <button
          className="lg:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-navy py-2 font-medium uppercase tracking-wider text-sm"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-cyan" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
