import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApprovalCard } from "@/components/admin/common";

const mockApprovalsData = [
  {
    bookingNumber: "LF-2024-001",
    client: "Fresh Exports Ltd",
    container: "REF-005",
    driver: "John Kamau",
    pickup: "Nairobi",
    destination: "Mombasa",
    priority: "high" as const,
  },
  {
    bookingNumber: "LF-2024-002",
    client: "Tech Logistics",
    container: "DRY-010",
    driver: "Peter Njoroge",
    pickup: "Nairobi",
    destination: "Kisumu",
    priority: "medium" as const,
  },
  {
    bookingNumber: "LF-2024-003",
    client: "Cargo Solutions",
    container: "GEN-008",
    driver: "Samuel Ochieng",
    pickup: "Mombasa",
    destination: "Nairobi",
    priority: "low" as const,
  },
];

export function ApprovalsPage() {
  const [pending, setPending] = useState(mockApprovalsData);
  const [approved, setApproved] = useState(mockApprovalsData.slice(0, 1));
  const [rejected, setRejected] = useState<typeof mockApprovalsData>([]);

  const handleApprove = (bookingNumber: string) => {
    const item = pending.find((p) => p.bookingNumber === bookingNumber);
    if (item) {
      setPending(pending.filter((p) => p.bookingNumber !== bookingNumber));
      setApproved([...approved, item]);
    }
  };

  const handleReject = (bookingNumber: string) => {
    const item = pending.find((p) => p.bookingNumber === bookingNumber);
    if (item) {
      setPending(pending.filter((p) => p.bookingNumber !== bookingNumber));
      setRejected([...rejected, item]);
    }
  };

  const KanbanColumn = ({
    title,
    count,
    items,
    onApprove,
    onReject,
    variant,
  }: {
    title: string;
    count: number;
    items: typeof mockApprovalsData;
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
    variant: "pending" | "approved" | "rejected";
  }) => {
    const colorConfig = {
      pending: "bg-amber-50 border-amber-200",
      approved: "bg-emerald-50 border-emerald-200",
      rejected: "bg-red-50 border-red-200",
    };

    const headerConfig = {
      pending: "text-amber-900",
      approved: "text-emerald-900",
      rejected: "text-red-900",
    };

    return (
      <div className={`rounded-xl border ${colorConfig[variant]} p-4`}>
        <div className={`flex items-center justify-between mb-4 pb-3 border-b ${headerConfig[variant]} border-opacity-20`}>
          <h3 className={`font-semibold ${headerConfig[variant]}`}>{title}</h3>
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${headerConfig[variant]} bg-white/50`}>
            {count}
          </span>
        </div>

        <div className="space-y-3">
          {items.length === 0 ? (
            <div className={`text-center py-8 text-sm ${headerConfig[variant]}`}>
              <p>No bookings</p>
            </div>
          ) : (
            items.map((item) => (
              <ApprovalCard
                key={item.bookingNumber}
                {...item}
                onApprove={onApprove ? () => onApprove(item.bookingNumber) : undefined}
                onReject={onReject ? () => onReject(item.bookingNumber) : undefined}
              />
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Approval Center</h1>
          <p className="text-slate-600 mt-1">Review and approve pending booking requests.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10">
          <Plus className="w-4 h-4 mr-2" />
          New Approval
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KanbanColumn
          title="Pending Review"
          count={pending.length}
          items={pending}
          onApprove={handleApprove}
          onReject={handleReject}
          variant="pending"
        />
        <KanbanColumn
          title="Approved"
          count={approved.length}
          items={approved}
          variant="approved"
        />
        <KanbanColumn
          title="Rejected"
          count={rejected.length}
          items={rejected}
          variant="rejected"
        />
      </div>
    </div>
  );
}
