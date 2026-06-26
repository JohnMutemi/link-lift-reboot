import { createFileRoute } from "@tanstack/react-router";
import { DriversPage } from "@/components/admin/drivers/DriversPage";

export const Route = createFileRoute("/admin/_layout/drivers")({
  head: () => ({
    meta: [
      { title: "Drivers — Admin Dashboard" },
      { name: "description", content: "Manage drivers" },
    ],
  }),
  component: DriversPage,
});