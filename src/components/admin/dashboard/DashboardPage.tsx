import { Plus, RotateCcw } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { DashboardCard, ApprovalCard, StatusBadge } from "@/components/admin/common";
import {
  TrendingUp,
  Clock,
  Truck,
  DollarSign,
} from "lucide-react";
import { BookingsChart, StatusChart, RevenueChart } from "./Charts";
import { listBookings, listApprovals, resetAdminTables } from "@/lib/api/admin.functions";



export function AdminDashboard() {
  const qc = useQueryClient();
  const { data: bookings = [] } = useQuery<any[]>({
    queryKey: ["dashboardBookings"],
    queryFn: async () => {
      try {
        const r = await listBookings();
        return Array.isArray(r) ? r : [];
      } catch (err) {
        console.error("Dashboard bookings error:", err);
        return [];
      }
    },
  });

  const { data: approvals = [], isLoading: approvalsLoading, error: approvalsError } = useQuery<any[]>({
    queryKey: ["dashboardApprovals"],
    queryFn: async () => {
      try {
        const r = await listApprovals();
        return Array.isArray(r) ? r : [];
      } catch (err) {
        console.error("Dashboard approvals error:", err);
        return [];
      }
    },
  });

  const resetMut = useMutation({
    mutationFn: () => resetAdminTables(),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["dashboardBookings"] });
      qc.invalidateQueries({ queryKey: ["dashboardApprovals"] });
      qc.invalidateQueries({ queryKey: ["bookings"] });
      qc.invalidateQueries({ queryKey: ["customers"] });
      qc.invalidateQueries({ queryKey: ["drivers"] });
      qc.invalidateQueries({ queryKey: ["fleet"] });
      qc.invalidateQueries({ queryKey: ["approvals"] });
    },
  });

  const normalizedBookings = (bookings ?? []).map((booking: any) => ({
    ...booking,
    bookingNumber: booking.bookingNumber ?? booking.booking_number,
    customer: booking.customer ?? booking.client ?? booking.customer_name,
    container: booking.container ?? booking.container_number ?? "N/A",
    destination: booking.destination ?? booking.route ?? "Unknown",
    date: booking.date ?? booking.created_at?.slice(0, 10),
    status: booking.status ?? "pending",
    value: booking.value ?? 0,
  }));

  const normalizedApprovals = (approvals ?? []).map((item: any) => ({
    ...item,
    bookingNumber: item.bookingNumber ?? item.booking_number,
    client: item.client ?? item.customer ?? item.customer_name ?? "Unknown Client",
    container: item.container ?? item.container_number ?? "N/A",
    driver: item.driver ?? item.assigned_driver ?? "Unassigned",
    pickup: item.pickup ?? item.origin,
    destination: item.destination ?? item.route ?? "Unknown destination",
    date: item.date ?? item.created_at?.slice(0, 10),
    status: item.status ?? "pending",
    priority: item.priority ?? (item.status === "pending" ? "high" : item.status === "rejected" ? "medium" : "low"),
  }));

  const pendingApprovals = normalizedApprovals.filter((item: any) => item.status === "pending");
  const totalBookings = normalizedBookings.length;
  const activeTrips = normalizedBookings.filter((item: any) => item.status === "in-transit").length;
  const pendingCount = pendingApprovals.length;

  const hasErrors = approvalsError;

  return (
    <div className="space-y-8">
      {hasErrors && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-900">
          <p className="font-semibold">⚠️ Data connection issue</p>
          <p className="text-sm mt-1">Some data may be unavailable. Check server logs for details.</p>
        </div>
      )}
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-2">Welcome back! Here's your logistics overview.</p>
        </div>
        <div className="flex gap-2">
          <Button
            className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-lg h-10 transition-all"
            onClick={() => resetMut.mutate()}
            disabled={resetMut.isPending}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {resetMut.isPending ? "Resetting..." : "Reset Data"}
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg h-10 shadow-lg hover:shadow-xl transition-all">
            <Plus className="w-4 h-4 mr-2" />
            New Booking
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          icon={TrendingUp}
          title="Total Bookings"
          value={totalBookings.toString()}
        />
        <DashboardCard
          icon={Clock}
          title="Pending Approvals"
          value={pendingCount.toString()}
        />
        <DashboardCard
          icon={Truck}
          title="Active Trips"
          value={activeTrips.toString()}
        />
        <DashboardCard
          icon={DollarSign}
          title="Monthly Revenue"
          value="—"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BookingsChart />
        <StatusChart />
      </div>

      {/* Revenue Chart */}
      <RevenueChart />

      {/* Pending Approvals */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Pending Approvals</h3>
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 text-sm">
            View All →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pendingApprovals.length === 0 ? (
            <p className="text-slate-500">No pending approvals found.</p>
          ) : (
            pendingApprovals.map((approval) => (
              <ApprovalCard
                key={approval.bookingNumber}
                bookingNumber={approval.bookingNumber}
                client={approval.client}
                container={approval.container}
                driver={approval.driver}
                pickup={approval.pickup}
                destination={approval.destination}
                priority={approval.priority}
                status={approval.status}
                date={approval.date}
                onApprove={() => console.log("Approve:", approval.bookingNumber)}
                onReject={() => console.log("Reject:", approval.bookingNumber)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
