import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/common";

const mockCustomersData = [
  {
    id: "1",
    company: "Silverline Exporters",
    contact: "John Smith",
    bookings: 28,
    revenue: "KES 1,250,000",
    outstanding: "KES 125,000",
    status: "active" as const,
  },
  {
    id: "2",
    company: "Jambo Foods Ltd",
    contact: "Sarah Mwangi",
    bookings: 15,
    revenue: "KES 650,000",
    outstanding: "KES 0",
    status: "active" as const,
  },
  {
    id: "3",
    company: "Green Cargo Co",
    contact: "Michael Omondi",
    bookings: 42,
    revenue: "KES 2,100,000",
    outstanding: "KES 350,000",
    status: "active" as const,
  },
];

const customerColumns = [
  { key: "company", label: "Company" },
  { key: "contact", label: "Contact" },
  { key: "bookings", label: "Bookings" },
  { key: "revenue", label: "Revenue" },
  { key: "outstanding", label: "Outstanding" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => (
      <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </span>
    ),
  },
];

export function CustomersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Customer Management</h1>
          <p className="text-slate-600 mt-1">View and manage customer accounts.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10">
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Customers</p>
          <p className="text-2xl font-bold text-slate-900">{mockCustomersData.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Bookings</p>
          <p className="text-2xl font-bold text-blue-600">
            {mockCustomersData.reduce((sum, c) => sum + c.bookings, 0)}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-emerald-600">KES 4M</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Outstanding</p>
          <p className="text-2xl font-bold text-amber-600">KES 475K</p>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={customerColumns} data={mockCustomersData} />
    </div>
  );
}
