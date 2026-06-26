import { LucideIcon, X } from "lucide-react";
import { ReactNode } from "react";

interface NotificationItemProps {
  icon: LucideIcon;
  title: string;
  message: string;
  timestamp: string;
  unread?: boolean;
  action?: ReactNode;
  onClose?: () => void;
  type?: "info" | "success" | "warning" | "error";
}

const typeConfig = {
  info: "bg-blue-50 border-blue-200",
  success: "bg-emerald-50 border-emerald-200",
  warning: "bg-amber-50 border-amber-200",
  error: "bg-red-50 border-red-200",
};

const iconConfig = {
  info: "text-blue-600",
  success: "text-emerald-600",
  warning: "text-amber-600",
  error: "text-red-600",
};

export function NotificationItem({
  icon: Icon,
  title,
  message,
  timestamp,
  unread = false,
  action,
  onClose,
  type = "info",
}: NotificationItemProps) {
  return (
    <div className={`flex gap-3 p-4 rounded-lg border ${typeConfig[type]} ${unread ? "bg-opacity-100" : "bg-opacity-50"}`}>
      <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${iconConfig[type]}`} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-medium text-slate-900">{title}</p>
          {unread && <div className="w-2 h-2 rounded-full bg-blue-500" />}
        </div>
        <p className="text-sm text-slate-600 mb-2">{message}</p>
        <p className="text-xs text-slate-500">{timestamp}</p>

        {action && <div className="mt-3">{action}</div>}
      </div>

      {onClose && (
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors shrink-0">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
