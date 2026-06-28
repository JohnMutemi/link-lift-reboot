import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable, StatusBadge } from "@/components/admin/common";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, type FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listDrivers, createDriver, deleteDriver, updateDriver } from "@/lib/api/admin.functions";

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
  const qc = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDriver, setEditingDriver] = useState<any | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    truck: "",
    licenseExpiry: "",
    tripsCompleted: "",
    status: "available",
  });
  const { data: drivers = [], isLoading } = useQuery<any[]>({
    queryKey: ["drivers"],
    queryFn: () => listDrivers().then((r: any) => (Array.isArray(r) ? r : [])),
  });

  const deleteMut = useMutation({
    mutationFn: (id: string) => deleteDriver({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["drivers"] }),
  });
  const createMut = useMutation({
    mutationFn: (payload: any) => createDriver({ data: { driver: payload } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["drivers"] });
      setIsDialogOpen(false);
      setEditingDriver(null);
      setForm({ name: "", phone: "", truck: "", licenseExpiry: "", tripsCompleted: "", status: "available" });
    },
  });
  const updateMut = useMutation({
    mutationFn: (payload: any) => updateDriver({ data: payload }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["drivers"] });
      setIsDialogOpen(false);
      setEditingDriver(null);
      setForm({ name: "", phone: "", truck: "", licenseExpiry: "", tripsCompleted: "", status: "available" });
    },
  });

  const stats = {
    total: drivers.length,
    available: drivers.filter((d: any) => d.status === "available").length,
    onTrip: drivers.filter((d: any) => d.status === "on-trip").length,
  };

  const openCreateDialog = () => {
    setEditingDriver(null);
    setForm({ name: "", phone: "", truck: "", licenseExpiry: "", tripsCompleted: "", status: "available" });
    setIsDialogOpen(true);
  };

  const openEditDialog = (driver: any) => {
    setEditingDriver(driver);
    setForm({
      name: driver.name ?? "",
      phone: driver.phone ?? "",
      truck: driver.truck ?? "",
      licenseExpiry: driver.licenseExpiry ?? "",
      tripsCompleted: driver.tripsCompleted ?? "",
      status: driver.status ?? "available",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      name: form.name,
      phone: form.phone,
      truck: form.truck,
      licenseExpiry: form.licenseExpiry,
      tripsCompleted: Number(form.tripsCompleted) || 0,
      status: form.status,
    };

    if (editingDriver) {
      updateMut.mutate({ id: editingDriver.id, driver: payload });
    } else {
      createMut.mutate({ driver: payload });
    }
  };

  const columns = [
    ...driverColumns,
    {
      key: "actions",
      label: "Actions",
      render: (_: any, row: any) => (
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => openEditDialog(row)}>
            Edit
          </Button>
          <Button variant="destructive" onClick={() => deleteMut.mutate(row.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Driver Management</h1>
          <p className="text-slate-600 mt-1">Manage your delivery drivers and personnel.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10" onClick={openCreateDialog}>
          <Plus className="w-4 h-4 mr-2" />
          Add Driver
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Drivers</p>
          <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Available</p>
          <p className="text-2xl font-bold text-emerald-600">
            {stats.available}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">On Trip</p>
          <p className="text-2xl font-bold text-blue-600">
            {stats.onTrip}
          </p>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={columns} data={drivers} loading={isLoading} />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editingDriver ? "Edit Driver" : "Create Driver"}</DialogTitle>
            <DialogDescription>
              {editingDriver ? "Update the driver record below." : "Add a new driver to the fleet roster."}
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Phone</label>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Truck</label>
                <input required value={form.truck} onChange={(e) => setForm({ ...form, truck: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">License Expiry</label>
                <input type="date" value={form.licenseExpiry} onChange={(e) => setForm({ ...form, licenseExpiry: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Trips Completed</label>
                <input type="number" min="0" value={form.tripsCompleted} onChange={(e) => setForm({ ...form, tripsCompleted: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Status</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option value="available">Available</option>
                  <option value="on-trip">On Trip</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                {editingDriver ? "Save Changes" : "Create Driver"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
