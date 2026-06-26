import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable, StatusBadge } from "@/components/admin/common";

const mockDriversData = [
  {
    id: "1",
    name: "John Kamau",
    phone: "+254 721 456 789",
    truck: "TRK-001",
    licenseExpiry: "2027-06-15",
    tripsCompleted: 145,
    status: "available" as const,
  },
  {
    id: "2",
    name: "Peter Njoroge",
    phone: "+254 722 567 890",
    truck: "TRK-002",
    licenseExpiry: "2026-12-20",
    tripsCompleted: 203,
    status: "on-trip" as const,
  },
  {
    id: "3",
    name: "Samuel Ochieng",
    phone: "+254 723 678 901",
    truck: "TRK-004",
    licenseExpiry: "2028-03-10",
    tripsCompleted: 87,
    status: "available" as const,
  },
];

const driverColumns = [
  { key: "name", label: "Driver" },
  { key: "phone", label: "Phone" },
  { key: "truck", label: "Truck" },
  { key: "licenseExpiry", label: "License Expiry" },
  { key: "tripsCompleted", label: "Trips" },
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
];

export function DriversPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Driver Management</h1>
          <p className="text-slate-600 mt-1">Manage your delivery drivers and personnel.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10">
          <Plus className="w-4 h-4 mr-2" />
          Add Driver
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Drivers</p>
          <p className="text-2xl font-bold text-slate-900">{mockDriversData.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Available</p>
          <p className="text-2xl font-bold text-emerald-600">
            {mockDriversData.filter((d) => d.status === "available").length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">On Trip</p>
          <p className="text-2xl font-bold text-blue-600">
            {mockDriversData.filter((d) => d.status === "on-trip").length}
          </p>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={driverColumns} data={mockDriversData} />
    </div>
  );
}
