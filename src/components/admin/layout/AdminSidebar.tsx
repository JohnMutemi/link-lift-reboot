import { Link, useLocation } from "@tanstack/react-router";
import {
  LayoutDashboard,
  BookOpen,
  CheckCircle2,
  Users,
  Truck,
  Navigation,
  Package,
  Route,
  FileClock,
  BarChart3,
  ChevronRight,
  X,
} from "lucide-react";

const sidebarItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", exact: true },
  { to: "/admin/bookings", icon: BookOpen, label: "Bookings" },
  { to: "/admin/approvals", icon: CheckCircle2, label: "Approvals" },
  { to: "/admin/customers", icon: Users, label: "Customers" },
  { to: "/admin/fleet", icon: Truck, label: "Fleet" },
  { to: "/admin/drivers", icon: Navigation, label: "Drivers" },
  { to: "/admin/containers", icon: Package, label: "Containers" },
  { to: "/admin/routes", icon: Route, label: "Routes" },
  { to: "/admin/quotes", icon: FileClock, label: "Quotes" },
  { to: "/admin/reports", icon: BarChart3, label: "Reports" },
];

interface SidebarProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AdminSidebar({ open = false, onOpenChange }: SidebarProps) {
  const location = useLocation();

  const close = () => onOpenChange?.(false);

  const isActive = (to: string, exact?: boolean) => {
    if (exact) return location.pathname === to;
    if (to === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(to);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white w-full max-w-[18rem] border-r border-blue-600/20">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center justify-between border-b border-blue-600/20">
        <Link to="/admin" className="min-w-0">
          <img
            src="/link-freight-logo.png"
            alt="Link Freight Logistics"
            className="h-10 w-auto brightness-110 contrast-125"
          />
          <p className="text-xs text-blue-300 mt-2 font-medium">Admin dashboard</p>
        </Link>
        <button
          onClick={close}
          className="lg:hidden p-2 rounded-xl bg-slate-800/80 hover:bg-blue-600/30 text-slate-200 transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-scroll admin-scrollbar px-3 pb-6 pt-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.to, item.exact);

          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-300 hover:bg-slate-800/50 hover:text-blue-400 hover:border-l-2 hover:border-amber-500"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="truncate">{item.label}</span>
              {active && <ChevronRight className="w-4 h-4 ml-auto text-amber-400" />}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:flex h-screen w-72 shrink-0 flex-col overflow-hidden border-r border-slate-200">
        {sidebarContent}
      </aside>

      <div
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />
      <aside
        className={`fixed left-0 top-0 h-screen z-40 lg:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } w-[min(85vw,18rem)]`}
        aria-hidden={!open}
      >
        {sidebarContent}
      </aside>
    </>
  );
}