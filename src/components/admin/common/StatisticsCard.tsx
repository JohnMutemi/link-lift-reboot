import { ReactNode } from "react";

interface StatisticsCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    direction: "up" | "down";
  };
  color?: "blue" | "emerald" | "amber" | "red";
}

const colorConfig = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", accent: "bg-blue-100" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", accent: "bg-emerald-100" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", accent: "bg-amber-100" },
  red: { bg: "bg-red-50", text: "text-red-700", accent: "bg-red-100" },
};

export function StatisticsCard({
  label,
  value,
  icon,
  trend,
  color = "blue",
}: StatisticsCardProps) {
  const config = colorConfig[color];

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-medium text-slate-600 uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        </div>
        {icon && <div className={`p-2.5 rounded-lg ${config.accent}`}>{icon}</div>}
      </div>

      {trend && (
        <div className={`text-xs font-medium ${trend.direction === "up" ? "text-emerald-600" : "text-red-600"}`}>
          {trend.direction === "up" ? "↑" : "↓"} {trend.value}% this period
        </div>
      )}
    </div>
  );
}
