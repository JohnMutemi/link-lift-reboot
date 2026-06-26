import { createFileRoute } from "@tanstack/react-router";
import { AdminLoginPage } from "@/components/site/AdminLoginPage";
// Seeding moved to client-side component to avoid SSR accessing localStorage

export const Route = createFileRoute("/admin-login")({
  head: () => ({
    meta: [
      { title: "Admin Login — Link Freight Logistics Ltd" },
      { name: "description", content: "Admin portal login for Link Freight booking dashboard." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLoginPage,
});
