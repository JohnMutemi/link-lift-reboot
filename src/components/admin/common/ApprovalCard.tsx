import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface ApprovalCardProps {
  bookingNumber: string;
  client: string;
  container: string;
  driver?: string;
  pickup?: string;
  destination: string;
  priority?: "high" | "medium" | "low";
  status?: string;
  date?: string;
  onApprove?: () => void;
  onReject?: () => void;
}

const priorityConfig = {
  high: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  medium: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  low: { bg: "bg-slate-50", text: "text-slate-700", dot: "bg-slate-500" },
};

export function ApprovalCard({
  bookingNumber,
  client,
  container,
  driver,
  pickup,
  destination,
  priority,
  status,
  date,
  onApprove,
  onReject,
}: ApprovalCardProps) {
  const resolvedPriority =
    priority ??
    (status === "pending"
      ? "high"
      : status === "rejected"
      ? "medium"
      : "low");
  const priorityStyle = priorityConfig[resolvedPriority];

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <p className="font-semibold text-slate-900">{bookingNumber}</p>
            <div
              className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${priorityStyle.bg} ${priorityStyle.text}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${priorityStyle.dot}`} />
              {resolvedPriority.charAt(0).toUpperCase() + resolvedPriority.slice(1)}
            </div>
          </div>
          <p className="text-sm text-slate-600">{client}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-100">
        <div className="text-sm">
          <p className="text-slate-600 mb-1">Container</p>
          <p className="font-medium text-slate-900">{container}</p>
        </div>
        <div className="text-sm">
          <p className="text-slate-600 mb-1">Driver</p>
          <p className="font-medium text-slate-900">{driver ?? "Unassigned"}</p>
        </div>
        <div className="text-sm col-span-2">
          <p className="text-slate-600 mb-1">Route</p>
          <p className="font-medium text-slate-900">
            {pickup ? `${pickup} → ${destination}` : destination}
          </p>
        </div>
        {date && (
          <div className="text-sm col-span-2">
            <p className="text-slate-600 mb-1">Date</p>
            <p className="font-medium text-slate-900">{date}</p>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onApprove}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-9 flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          Approve
        </Button>
        <Button
          onClick={onReject}
          variant="outline"
          className="flex-1 border-red-200 text-red-600 hover:bg-red-50 rounded-lg h-9 flex items-center justify-center gap-2"
        >
          <XCircle className="w-4 h-4" />
          Reject
        </Button>
      </div>
    </div>
  );
}
