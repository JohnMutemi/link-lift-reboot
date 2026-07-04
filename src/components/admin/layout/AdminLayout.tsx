import { ReactNode, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";
import { clearAdminSession } from "@/lib/auth";

interface AdminLayoutProps {
  children: ReactNode;
  userInitial?: string;
  userName?: string;
}

export function AdminLayout({
  children,
  userInitial = "A",
  userName = "Admin User",
}: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminSession();
    navigate({ to: "/admin-login", replace: true });
  };

  return (
    <div className="flex h-full flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <AdminSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      {/* Glass Divider Effect */}
      <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50" />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-0 min-w-0 relative">
        <AdminTopbar
          userInitial={userInitial}
          userName={userName}
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
          onLogout={handleLogout}
        />

        <main className="flex-1 min-h-0 overflow-y-scroll admin-scrollbar">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}