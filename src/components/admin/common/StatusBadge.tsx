type StatusVariant = "pending" | "approved" | "in-transit" | "delivered" | "cancelled" | "available" | "on-trip" | "maintenance" | "success" | "warning" | "error";

interface StatusBadgeProps {
  status: StatusVariant;
  label: string;
}

const statusConfig: Record<StatusVariant, { bg: string; text: string; dot: string }> = {
  pending: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  approved: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  "in-transit": { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  delivered: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  cancelled: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  available: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "on-trip": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  maintenance: { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
  success: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  warning: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  error: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <div className={`w-2 h-2 rounded-full ${config.dot}`} />
      {label}
    </div>
  );
}
