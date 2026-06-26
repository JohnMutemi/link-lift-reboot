import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function ChartCard({ title, subtitle, children, action, className = "" }: ChartCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div>{children}</div>
    </div>
  );
}
