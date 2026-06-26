import { Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardCard, DataTable, ApprovalCard, StatusBadge } from "@/components/admin/common";
import {
  TrendingUp,
  Clock,
  Truck,
  DollarSign,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { BookingsChart, StatusChart, RevenueChart } from "./Charts";

// Mock data
const mockBookings = [
  {
    id: "1",
    bookingNumber: "LF-0931",
    customer: "Silverline Exporters",
    container: "REF-001",
    destination: "Kampala",
    status: "in-transit" as const,
    date: "2026-06-12",
  },
  {
    id: "2",
    bookingNumber: "LF-1047",
    customer: "Jambo Foods Ltd.",
    container: "DRY-002",
    destination: "Dar es Salaam",
    status: "pending" as const,
    date: "2026-06-18",
  },
  {
    id: "3",
    bookingNumber: "LF-0988",
    customer: "Green Cargo Co.",
    container: "GEN-003",
    destination: "Kigali",
    status: "delivered" as const,
    date: "2026-06-03",
  },
];

const mockApprovals = [
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
];

const bookingColumns = [
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
          value="1,284"
          change={{ percentage: 12, trend: "up" }}
        />
        <DashboardCard
          icon={Clock}
          title="Pending Approvals"
          value="24"
          change={{ percentage: 8, trend: "up" }}
        />
        <DashboardCard
          icon={Truck}
          title="Active Trips"
          value="42"
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
        <DataTable columns={bookingColumns} data={mockBookings} />
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
          {mockApprovals.map((approval) => (
            <ApprovalCard
              key={approval.bookingNumber}
              {...approval}
              onApprove={() => console.log("Approve:", approval.bookingNumber)}
              onReject={() => console.log("Reject:", approval.bookingNumber)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
