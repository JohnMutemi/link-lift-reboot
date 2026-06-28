import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FleetCard } from "@/components/admin/common";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, type FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listFleet, createFleet, deleteFleet, updateFleet } from "@/lib/api/admin.functions";

export function FleetPage() {
  const qc = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<any | null>(null);
  const [form, setForm] = useState({
    truckNumber: "",
    driver: "",
    mileage: "",
    status: "available",
    nextServiceDate: "",
    currentLocation: "",
  });
  const { data: trucks = [], isLoading } = useQuery<any[]>({
    queryKey: ["fleet"],
    queryFn: () => listFleet().then((r: any) => (Array.isArray(r) ? r : [])),
  });

  const deleteMut = useMutation({
    mutationFn: (id: string) => deleteFleet({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["fleet"] }),
  });
  const createMut = useMutation({
    mutationFn: (payload: any) => createFleet({ data: { vehicle: payload } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["fleet"] });
      setIsDialogOpen(false);
      setEditingVehicle(null);
      setForm({ truckNumber: "", driver: "", mileage: "", status: "available", nextServiceDate: "", currentLocation: "" });
    },
  });
  const updateMut = useMutation({
    mutationFn: (payload: any) => updateFleet({ data: payload }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["fleet"] });
      setIsDialogOpen(false);
      setEditingVehicle(null);
      setForm({ truckNumber: "", driver: "", mileage: "", status: "available", nextServiceDate: "", currentLocation: "" });
    },
  });

  const stats = {
    total: trucks.length,
    available: trucks.filter((t: any) => t.status === "available").length,
    onTrip: trucks.filter((t: any) => t.status === "on-trip").length,
    maintenance: trucks.filter((t: any) => t.status === "maintenance").length,
  };

  const openCreateDialog = () => {
    setEditingVehicle(null);
    setForm({ truckNumber: "", driver: "", mileage: "", status: "available", nextServiceDate: "", currentLocation: "" });
    setIsDialogOpen(true);
  };

  const openEditDialog = (vehicle: any) => {
    setEditingVehicle(vehicle);
    setForm({
      truckNumber: vehicle.truckNumber ?? vehicle.truck_number ?? "",
      driver: vehicle.driver ?? "",
      mileage: vehicle.mileage ?? "",
      status: vehicle.status ?? "available",
      nextServiceDate: vehicle.nextServiceDate ?? "",
      currentLocation: vehicle.currentLocation ?? "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      truckNumber: form.truckNumber,
      driver: form.driver,
      mileage: form.mileage,
      status: form.status,
      nextServiceDate: form.nextServiceDate,
      currentLocation: form.currentLocation,
    };

    if (editingVehicle) {
      updateMut.mutate({ id: editingVehicle.id, vehicle: payload });
    } else {
      createMut.mutate({ vehicle: payload });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Fleet Management</h1>
          <p className="text-slate-600 mt-1">Monitor and manage your vehicle fleet.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10" onClick={openCreateDialog}>
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
        {trucks.map((truck: any) => (
          <FleetCard
            key={truck.truck_number ?? truck.truckNumber}
            {...truck}
            onViewDetails={() => openEditDialog(truck)}
            onAssignDriver={() => openEditDialog(truck)}
            onScheduleService={() => openEditDialog(truck)}
          />
        ))}
      </div>
    </div>
  );
}
