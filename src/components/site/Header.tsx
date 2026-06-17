import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const quoteLinkClass =
  "inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-5 xl:px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-orange/20 shrink-0 touch-manipulation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 lg:gap-8">
        <Logo />

        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 font-medium text-sm uppercase tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-navy/80 hover:text-cyan transition-colors relative py-1 whitespace-nowrap"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className:
                  "text-cyan after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-cyan",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <Link to="/quote" className={`${quoteLinkClass} hidden sm:inline-flex`}>
            Get A Quote <ArrowRight className="size-3.5" />
          </Link>

          <button
            className="lg:hidden text-navy size-11 grid place-items-center rounded-sm hover:bg-slate-100 transition-colors touch-manipulation"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-xs bg-white p-0 border-l border-slate-100 pt-14"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <nav className="flex flex-col px-4 pb-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-navy min-h-12 flex items-center font-medium uppercase tracking-wider text-sm border-b border-slate-100 last:border-0 touch-manipulation"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-cyan" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-6 min-h-12 inline-flex items-center justify-center gap-2 bg-orange text-white px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-widest touch-manipulation"
            >
              Get A Quote <ArrowRight className="size-4" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
