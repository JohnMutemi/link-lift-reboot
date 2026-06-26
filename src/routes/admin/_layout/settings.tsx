import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Admin Dashboard" },
      { name: "description", content: "Manage settings" },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage account and system settings.</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
        <Settings className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-600">Settings section coming soon</p>
      </div>
    </div>
  );
}