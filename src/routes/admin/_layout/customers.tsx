import { createFileRoute } from "@tanstack/react-router";
import { CustomersPage } from "@/components/admin/customers/CustomersPage";

export const Route = createFileRoute("/admin/_layout/customers")({
  head: () => ({
    meta: [
      { title: "Customers — Admin Dashboard" },
      { name: "description", content: "Manage customers" },
    ],
  }),
  component: CustomersPage,
});