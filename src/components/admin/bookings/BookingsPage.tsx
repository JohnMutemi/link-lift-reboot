import { Plus, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable, SearchBar, StatusBadge } from "@/components/admin/common";
import { useState } from "react";

const mockBookingsData = [
  {
    id: "1",
    bookingNumber: "LF-0931",
    customer: "Silverline Exporters",
    container: "REF-001",
    destination: "Kampala",
    status: "in-transit" as const,
    date: "2026-06-12",
    value: "KES 45,000",
  },
  {
    id: "2",
    bookingNumber: "LF-1047",
    customer: "Jambo Foods Ltd.",
    container: "DRY-002",
    destination: "Dar es Salaam",
    status: "pending" as const,
    date: "2026-06-18",
    value: "KES 38,500",
  },
  {
    id: "3",
    bookingNumber: "LF-0988",
    customer: "Green Cargo Co.",
    container: "GEN-003",
    destination: "Kigali",
    status: "delivered" as const,
    date: "2026-06-03",
    value: "KES 52,000",
  },
];

const bookingColumns = [
  { key: "bookingNumber", label: "Booking #" },
  { key: "customer", label: "Customer" },
  { key: "container", label: "Container" },
  { key: "destination", label: "Destination" },
  { key: "value", label: "Value" },
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

export function BookingsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Bookings Management</h1>
          <p className="text-slate-600 mt-1">View and manage all freight bookings.</p>
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

      {/* Toolbar */}
      <div className="bg-white rounded-xl border border-slate-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <SearchBar
            placeholder="Search bookings, customers..."
            value={searchValue}
            onChange={setSearchValue}
            className="md:col-span-2"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="in-transit">In Transit</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={bookingColumns} data={mockBookingsData} />
    </div>
  );
}
