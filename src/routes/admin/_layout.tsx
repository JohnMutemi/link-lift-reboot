import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { getAdminSession } from "@/lib/auth";
import { AdminLayout } from "@/components/admin/layout";

export const Route = createFileRoute("/admin/_layout")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Link Freight Logistics Ltd" },
      { name: "description", content: "Internal booking dashboard for manual enquiries and booking tracking." },
      { property: "og:title", content: "Link Freight Admin Dashboard" },
      { property: "og:description", content: "Manage manual bookings and enquiry details within the Link Freight platform." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLayoutComponent,
});

function AdminLayoutComponent() {
  const session = getAdminSession();

  useEffect(() => {
    if (!session) {
      window.location.href = "/admin-login";
    }
  }, []);

  // Don't render anything while redirecting
  if (!session) return null;

  return (
    <AdminLayout
      userInitial={session.email?.[0]?.toUpperCase() ?? "A"}
      userName={session.email ?? "Admin User"}
    >
      <Outlet />
    </AdminLayout>
  );
}