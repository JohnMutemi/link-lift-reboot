import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApprovalCard } from "@/components/admin/common";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listApprovals, approveBooking, rejectBooking } from "@/lib/api/admin.functions";

type ApprovalItem = {
  bookingNumber: string;
  client: string;
  container: string;
  driver?: string;
  pickup?: string;
  destination: string;
  date?: string;
  status: string;
  priority: "high" | "medium" | "low";
};

export function ApprovalsPage() {
  const qc = useQueryClient();
  const { data: all = [], isLoading } = useQuery<ApprovalItem[]>({
    queryKey: ["approvals"],
    queryFn: () => listApprovals().then((r: any) => (Array.isArray(r) ? r : [])),
  });

  const approvals: ApprovalItem[] = all.map((item: any) => ({
    bookingNumber: item.bookingNumber ?? item.booking_number ?? "Unknown",
    client: item.client ?? item.customer ?? "Unknown Client",
    container: item.container ?? "N/A",
    driver: item.driver ?? item.assigned_driver ?? "Unassigned",
    pickup: item.pickup ?? item.origin ?? undefined,
    destination: item.destination ?? item.route ?? item.destination ?? "Unknown destination",
    date: item.date ?? item.created_at ?? undefined,
    status: item.status ?? "pending",
    priority:
      item.priority ??
      (item.status === "pending"
        ? "high"
        : item.status === "rejected"
        ? "medium"
        : "low"),
  }));

  const pending = approvals.filter((a) => a.status === "pending");
  const approved = approvals.filter((a) => a.status === "approved");
  const rejected = approvals.filter((a) => a.status === "rejected");

  const approveMut = useMutation({
    mutationFn: (id: string) => approveBooking({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["approvals"] }),
  });

  const rejectMut = useMutation({
    mutationFn: (id: string) => rejectBooking({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["approvals"] }),
  });

  const handleApprove = (bookingNumber: string) => approveMut.mutate(bookingNumber);
  const handleReject = (bookingNumber: string) => rejectMut.mutate(bookingNumber);

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
    items: ApprovalItem[];
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
                bookingNumber={item.bookingNumber}
                client={item.client}
                container={item.container}
                driver={item.driver}
                pickup={item.pickup}
                destination={item.destination}
                priority={item.priority}
                status={item.status}
                date={item.date}
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
