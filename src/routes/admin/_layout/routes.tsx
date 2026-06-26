import { createFileRoute } from "@tanstack/react-router";
import { Route as RouteIcon } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/routes")({
  head: () => ({
    meta: [
      { title: "Routes — Admin Dashboard" },
      { name: "description", content: "Manage delivery routes" },
    ],
  }),
  component: RoutesPage,
});

function RoutesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Route Management</h1>
        <p className="text-slate-600 mt-1">Optimize and manage delivery routes.</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
        <RouteIcon className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-600">Route management coming soon</p>
      </div>
    </div>
  );
}