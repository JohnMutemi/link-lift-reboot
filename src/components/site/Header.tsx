import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet Gallery" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const quoteLinkClass =
  "inline-flex items-center gap-2 bg-cyan hover:bg-cyan-600 text-white px-3 lg:px-4 py-2 rounded-sm font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all shadow-md shadow-cyan/25 shrink-0 touch-manipulation";

const navLinkClass =
  "text-navy/80 hover:text-cyan transition-colors relative py-1 whitespace-nowrap";

const activeNavMap: Record<string, string> = {
  "/": "text-cyan after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-cyan",
  "/about": "text-cyan bg-cyan/10 rounded-full px-3 py-1",
  "/services": "text-orange bg-orange/10 rounded-full px-3 py-1",
  "/fleet": "text-cyan bg-cyan/10 rounded-full px-3 py-1",
  "/projects": "text-orange/600 bg-orange/10 rounded-full px-3 py-1",
  "/blog": "text-navy bg-navy/10 rounded-full px-3 py-1",
  "/contact": "text-cyan bg-cyan/10 rounded-full px-3 py-1",
};

const navPanelBackground: Record<string, string> = {
  "/about": "bg-white/95 shadow-sm border-slate-200",
  "/services": "bg-slate-50/95 shadow-sm border-slate-200",
  "/fleet": "bg-cyan/5 shadow-sm border-cyan/20",
  "/projects": "bg-orange/5 shadow-sm border-orange/20",
  "/blog": "bg-slate-50/95 shadow-sm border-slate-200",
  "/contact": "bg-white/95 shadow-sm border-slate-200",
};

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const navRef = useRef<HTMLElement | null>(null);
  const [navHeight, setNavHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateTopbarHeight = () => {
      const topbar = document.querySelector("[data-site-topbar]") as HTMLElement | null;
      setTopbarHeight(topbar?.offsetHeight ?? 0);
    };

    updateTopbarHeight();
    window.addEventListener("resize", updateTopbarHeight);
    return () => window.removeEventListener("resize", updateTopbarHeight);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setScrolled(currentY > Math.max(topbarHeight, 20));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [topbarHeight]);

  // Ensure header stays sticky and visible on scroll
  useEffect(() => {
    // Ensure nav stays visible — read current ref on each handler call
    const keepVisible = () => {
      const el = navRef.current;
      if (!el) return;
      el.style.transform = "translateY(0)";
    };

    // Apply initial styles if element exists now
    const initialEl = navRef.current;
    if (initialEl) {
      initialEl.style.transform = "translateY(0)";
      initialEl.style.willChange = "transform";
    }

    window.addEventListener("scroll", keepVisible, { passive: true });
    return () => window.removeEventListener("scroll", keepVisible);
  }, []);

  // Measure nav height and keep a spacer so fixed header doesn't overlap content
  useEffect(() => {
    function updateHeight() {
      const el = navRef.current;
      setNavHeight(el?.offsetHeight ?? null);
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    // also update on scroll because padding may change when scrolled class toggles
    window.addEventListener("scroll", updateHeight, { passive: true });
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  const isRoot = location.pathname === "/";
  const isTransparent = !scrolled && isRoot;

  const navPanelClass = isTransparent
    ? "bg-white/5 backdrop-blur-sm border-slate-200/20"
    : navPanelBackground[location.pathname] ?? "bg-white shadow-sm border-slate-200";

  const linkClass = isTransparent
    ? `text-white/95 hover:text-white/80 text-xs`
    : `${navLinkClass} text-xs`;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 right-0 z-50 translate-y-0 transition-all duration-300 border-t border-b ${navPanelClass}`}
        style={{
          WebkitBackfaceVisibility: "hidden",
          top: scrollY >= topbarHeight ? "0" : `${topbarHeight - scrollY}px`,
        }}
      >
      <div
        className={`container mx-auto px-4 sm:px-6 ${
          scrolled ? "py-1" : "py-1.5 sm:py-2"
        } grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-2 lg:gap-3`}
      >
        <div className="min-w-0">
          <Logo imgClassName={scrolled ? "h-7 sm:h-8" : "h-8 sm:h-9"} />
        </div>

        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-10 font-medium uppercase tracking-wider whitespace-nowrap">
          {navItems.map((item) => {
            const isHomeLink = item.to === "/";

            if (item.to === "/projects") {
              return (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setProjectsMenuOpen(true)}
                  onMouseLeave={() => setProjectsMenuOpen(false)}
                >
                  <Link
                    to={item.to}
                    className={linkClass}
                    activeOptions={{ exact: isHomeLink }}
                    activeProps={{ className: activeNavMap[item.to] ?? activeNavMap["/"] }}
                  >
                    {item.label}
                  </Link>
                  <div
                    className={`absolute left-0 top-full z-20 mt-3 min-w-[14rem] rounded-3xl border border-slate-200 bg-white p-3 shadow-xl transition-all duration-200 ${
                      projectsMenuOpen ? "block opacity-100" : "invisible opacity-0"
                    }`}
                    style={{ transitionProperty: "opacity, visibility", transitionDuration: "200ms" }}
                  >
                    <a
                      href="/projects#oil-gas"
                      className="block rounded-2xl px-4 py-3 text-sm text-navy transition-colors hover:bg-slate-100"
                    >
                      Oil & Gas
                    </a>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass}
                activeOptions={{ exact: isHomeLink }}
                activeProps={{ className: activeNavMap[item.to] ?? activeNavMap["/"] }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-end gap-2 shrink-0">
          <Link to="/quote" className={`${quoteLinkClass} hidden md:inline-flex`}>
            Get A Quote <ArrowRight className="size-3.5" />
          </Link>

          <button
            className={`lg:hidden size-9 grid place-items-center rounded-sm transition-colors touch-manipulation hover:bg-slate-100 ${
              isTransparent ? "text-white/95" : "text-navy"
            }`}
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
              className="mt-6 min-h-12 inline-flex items-center justify-center gap-2 bg-cyan text-white px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-widest touch-manipulation"
            >
              Get A Quote <ArrowRight className="size-4" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
      {/* Spacer to preserve document flow for the fixed header */}
      {navHeight !== null && <div aria-hidden style={{ height: navHeight }} />}
    </>
  );
}