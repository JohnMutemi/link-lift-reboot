import { createFileRoute } from "@tanstack/react-router";
import { Package } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/containers")({
  head: () => ({
    meta: [
      { title: "Containers — Admin Dashboard" },
      { name: "description", content: "Manage containers" },
    ],
  }),
  component: ContainersPage,
});

function ContainersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Container Management</h1>
        <p className="text-slate-600 mt-1">Track and manage your shipping containers.</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
        <Package className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-600">Container management coming soon</p>
      </div>
    </div>
  );
}