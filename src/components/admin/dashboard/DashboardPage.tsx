import { Plus, Download } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { DashboardCard, DataTable, ApprovalCard, StatusBadge } from "@/components/admin/common";
import {
  TrendingUp,
  Clock,
  Truck,
  DollarSign,
} from "lucide-react";
import { BookingsChart, StatusChart, RevenueChart } from "./Charts";
import { listBookings, listApprovals } from "@/lib/api/admin.functions";

const dashboardBookingColumns = [
  { key: "bookingNumber", label: "Booking #" },
  { key: "customer", label: "Customer" },
  { key: "container", label: "Container" },
  { key: "destination", label: "Destination" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => (
      <StatusBadge
        status={value as any}
        label={value.charAt(0).toUpperCase() + value.slice(1).replace("-", " ")}
      />
    ),
  },
  { key: "date", label: "Date" },
];

export function AdminDashboard() {
  const { data: bookings = [], isLoading: bookingsLoading } = useQuery<any[]>(
    { queryKey: ["dashboardBookings"], queryFn: () => listBookings().then((r: any) => (Array.isArray(r) ? r : [])) }
  );

  const { data: approvals = [], isLoading: approvalsLoading } = useQuery<any[]>(
    { queryKey: ["dashboardApprovals"], queryFn: () => listApprovals().then((r: any) => (Array.isArray(r) ? r : [])) }
  );

  const pendingApprovals = approvals.filter((item: any) => item.status === "pending");
  const totalBookings = bookings.length;
  const activeTrips = bookings.filter((item: any) => item.status === "in-transit").length;
  const pendingCount = pendingApprovals.length;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-1">Welcome back! Here's your logistics overview.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg h-10">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10">
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
          change={{ percentage: 12, trend: "up" }}
        />
        <DashboardCard
          icon={Clock}
          title="Pending Approvals"
          value={pendingCount.toString()}
          change={{ percentage: 8, trend: "up" }}
        />
        <DashboardCard
          icon={Truck}
          title="Active Trips"
          value={activeTrips.toString()}
          change={{ percentage: 5, trend: "down" }}
        />
        <DashboardCard
          icon={DollarSign}
          title="Monthly Revenue"
          value="KES 2.4M"
          change={{ percentage: 18, trend: "up" }}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BookingsChart />
        <StatusChart />
      </div>

      {/* Revenue Chart */}
      <RevenueChart />

      {/* Latest Bookings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Latest Bookings</h3>
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 text-sm">
            View All →
          </Button>
        </div>
        <DataTable columns={dashboardBookingColumns} data={bookings} loading={bookingsLoading} />
      </div>

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
