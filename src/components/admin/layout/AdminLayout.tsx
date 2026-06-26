import { ReactNode, useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

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

  return (
    <div className="flex min-h-screen flex-col lg:flex-row overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <AdminSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen overflow-hidden min-w-0">
        <AdminTopbar
          userInitial={userInitial}
          userName={userName}
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
        />

        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}