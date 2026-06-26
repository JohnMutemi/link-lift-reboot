import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/reports")({
  head: () => ({
    meta: [
      { title: "Reports — Admin Dashboard" },
      { name: "description", content: "View analytics and reports" },
    ],
  }),
  component: ReportsPage,
});

function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
        <p className="text-slate-600 mt-1">View detailed analytics and business reports.</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
        <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-600">Reports section coming soon</p>
      </div>
    </div>
  );
}