import { createFileRoute } from "@tanstack/react-router";
import { ApprovalsPage } from "@/components/admin/approvals/ApprovalsPage";

export const Route = createFileRoute("/admin/_layout/approvals")({
  head: () => ({
    meta: [
      { title: "Approvals — Admin Dashboard" },
      { name: "description", content: "Review and approve bookings" },
    ],
  }),
  component: ApprovalsPage,
});