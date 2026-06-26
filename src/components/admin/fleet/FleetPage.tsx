import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FleetCard } from "@/components/admin/common";
import { useState } from "react";

const mockFleetData = [
  {
    truckNumber: "TRK-001",
    driver: "John Kamau",
    mileage: "145,230 km",
    status: "available" as const,
    nextServiceDate: "2026-08-15",
    currentLocation: "Nairobi",
  },
  {
    truckNumber: "TRK-002",
    driver: "Peter Njoroge",
    mileage: "198,450 km",
    status: "on-trip" as const,
    nextServiceDate: "2026-09-20",
    currentLocation: "Mombasa Road",
  },
  {
    truckNumber: "TRK-003",
    mileage: "92,100 km",
    status: "maintenance" as const,
    nextServiceDate: "2026-07-01",
    currentLocation: "Service Center",
  },
  {
    truckNumber: "TRK-004",
    driver: "Samuel Ochieng",
    mileage: "176,800 km",
    status: "available" as const,
    nextServiceDate: "2026-08-30",
    currentLocation: "Nairobi",
  },
];

export function FleetPage() {
  const [trucks, setTrucks] = useState(mockFleetData);

  const stats = {
    total: trucks.length,
    available: trucks.filter((t) => t.status === "available").length,
    onTrip: trucks.filter((t) => t.status === "on-trip").length,
    maintenance: trucks.filter((t) => t.status === "maintenance").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Fleet Management</h1>
          <p className="text-slate-600 mt-1">Monitor and manage your vehicle fleet.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10">
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Vehicles</p>
          <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Available</p>
          <p className="text-2xl font-bold text-emerald-600">{stats.available}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">On Trip</p>
          <p className="text-2xl font-bold text-blue-600">{stats.onTrip}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Maintenance</p>
          <p className="text-2xl font-bold text-amber-600">{stats.maintenance}</p>
        </div>
      </div>

      {/* Fleet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trucks.map((truck) => (
          <FleetCard
            key={truck.truckNumber}
            {...truck}
            onViewDetails={() => console.log("View:", truck.truckNumber)}
            onAssignDriver={() => console.log("Assign driver:", truck.truckNumber)}
            onScheduleService={() => console.log("Schedule service:", truck.truckNumber)}
          />
        ))}
      </div>
    </div>
  );
}
