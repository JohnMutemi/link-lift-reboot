import { createFileRoute } from "@tanstack/react-router";
import { BookingsPage } from "@/components/admin/bookings/BookingsPage";

export const Route = createFileRoute("/admin/_layout/bookings")({
  head: () => ({
    meta: [
      { title: "Bookings — Admin Dashboard" },
      { name: "description", content: "Manage freight bookings" },
    ],
  }),
  component: BookingsPage,
});