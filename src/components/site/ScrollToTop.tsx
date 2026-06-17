import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`lf-fixed-bottom z-40 right-4 sm:right-8 size-11 sm:size-12 grid place-items-center rounded-full bg-orange text-white shadow-lg shadow-orange/30 ring-1 ring-orange-600/30 hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
