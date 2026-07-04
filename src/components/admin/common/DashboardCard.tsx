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
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-blue-200 transition-all duration-200 group ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-2 group-hover:text-blue-600 transition-colors">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-amber-50 p-3 rounded-xl border border-blue-200/50 group-hover:shadow-lg transition-all">
          <Icon className="w-6 h-6 text-blue-600 group-hover:text-amber-500 transition-colors" />
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
