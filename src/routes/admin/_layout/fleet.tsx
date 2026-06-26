import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/components/admin/fleet/FleetPage";

export const Route = createFileRoute("/admin/_layout/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet — Admin Dashboard" },
      { name: "description", content: "Manage fleet vehicles" },
    ],
  }),
  component: FleetPage,
});