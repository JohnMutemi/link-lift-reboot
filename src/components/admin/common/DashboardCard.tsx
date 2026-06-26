import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change?: {
    percentage: number;
    trend: "up" | "down" | "neutral";
  };
  children?: ReactNode;
  className?: string;
}

export function DashboardCard({
  icon: Icon,
  title,
  value,
  change,
  children,
  className = "",
}: DashboardCardProps) {
  const changeColor =
    change?.trend === "up"
      ? "text-emerald-600"
      : change?.trend === "down"
        ? "text-red-600"
        : "text-slate-600";

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {change && (
        <div className={`text-sm font-medium ${changeColor}`}>
          {change.trend === "up" ? "↑" : "↓"} {Math.abs(change.percentage)}% from last month
        </div>
      )}

      {children}
    </div>
  );
}
