import { createFileRoute } from "@tanstack/react-router";
import { FileClock } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/quotes")({
  head: () => ({
    meta: [
      { title: "Quotes — Admin Dashboard" },
      { name: "description", content: "Manage quotes" },
    ],
  }),
  component: QuotesPage,
});

function QuotesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Quote Management</h1>
        <p className="text-slate-600 mt-1">Manage customer quotes and pricing.</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
        <FileClock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-600">Quote management coming soon</p>
      </div>
    </div>
  );
}