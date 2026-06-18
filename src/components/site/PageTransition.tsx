import { Outlet, useRouterState } from "@tanstack/react-router";
import { useRef } from "react";

const SLIDE_DOWN = "lf-slide-down";   // new page enters from top
const SLIDE_UP   = "lf-slide-up";     // new page enters from bottom

export function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPath = useRef<string>(pathname);
  const directionRef = useRef<string>(SLIDE_DOWN);

  if (prevPath.current !== pathname) {
    // Alternate direction on every navigation
    directionRef.current =
      directionRef.current === SLIDE_DOWN ? SLIDE_UP : SLIDE_DOWN;
    prevPath.current = pathname;
  }

  return (
    <div key={pathname} className={directionRef.current}>
      <Outlet />
    </div>
  );
}