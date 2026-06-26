import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/admin/dashboard";

export const Route = createFileRoute("/admin/_layout/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Link Freight Logistics Ltd" },
      { name: "description", content: "Internal booking dashboard for manual enquiries and booking tracking." },
      { property: "og:title", content: "Link Freight Admin Dashboard" },
      { property: "og:description", content: "Manage manual bookings and enquiry details within the Link Freight platform." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboard,
});
