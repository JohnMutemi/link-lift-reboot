import { createFileRoute, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { getAdminSession } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Link Freight Logistics Ltd" },
      { name: "description", content: "Internal booking dashboard for manual enquiries and booking tracking." },
      { property: "og:title", content: "Link Freight Admin Dashboard" },
      { property: "og:description", content: "Manage manual bookings and enquiry details within the Link Freight platform." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentSession = getAdminSession();
    if (!currentSession) {
      navigate({ to: "/admin-login", replace: true });
      return;
    }
  }, [location.pathname, navigate]);

  return <Outlet />;
}
