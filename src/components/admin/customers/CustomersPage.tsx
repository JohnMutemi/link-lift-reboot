import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/admin/common";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, type FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listCustomers, createCustomer, deleteCustomer, updateCustomer } from "@/lib/api/admin.functions";

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
  const qc = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<any | null>(null);
  const [form, setForm] = useState({
    company: "",
    contact: "",
    bookings: "",
    revenue: "",
    outstanding: "",
    status: "active",
  });
  const { data: customers = [], isLoading } = useQuery<any[]>({
    queryKey: ["customers"],
    queryFn: () => listCustomers().then((r: any) => (Array.isArray(r) ? r : [])),
  });

  const deleteMut = useMutation({
    mutationFn: (id: string) => deleteCustomer({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["customers"] }),
  });
  const createMut = useMutation({
    mutationFn: (payload: any) => createCustomer({ data: { customer: payload } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["customers"] });
      setIsDialogOpen(false);
      setEditingCustomer(null);
      setForm({ company: "", contact: "", bookings: "", revenue: "", outstanding: "", status: "active" });
    },
  });
  const updateMut = useMutation({
    mutationFn: (payload: any) => updateCustomer({ data: payload }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["customers"] });
      setIsDialogOpen(false);
      setEditingCustomer(null);
      setForm({ company: "", contact: "", bookings: "", revenue: "", outstanding: "", status: "active" });
    },
  });

  const totalBookings = customers.reduce((sum: number, c: any) => sum + (c.bookings ?? 0), 0);

  const openCreateDialog = () => {
    setEditingCustomer(null);
    setForm({ company: "", contact: "", bookings: "", revenue: "", outstanding: "", status: "active" });
    setIsDialogOpen(true);
  };

  const openEditDialog = (customer: any) => {
    setEditingCustomer(customer);
    setForm({
      company: customer.company ?? customer.name ?? "",
      contact: customer.contact ?? "",
      bookings: customer.bookings ?? "",
      revenue: customer.revenue ?? "",
      outstanding: customer.outstanding ?? "",
      status: customer.status ?? "active",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      company: form.company,
      contact: form.contact,
      bookings: Number(form.bookings) || 0,
      revenue: Number(form.revenue) || 0,
      outstanding: Number(form.outstanding) || 0,
      status: form.status,
    };

    if (editingCustomer) {
      updateMut.mutate({ id: editingCustomer.id, customer: payload });
    } else {
      createMut.mutate({ customer: payload });
    }
  };

  const columns = [
    ...customerColumns,
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
          <h1 className="text-3xl font-bold text-slate-900">Customer Management</h1>
          <p className="text-slate-600 mt-1">View and manage customer accounts.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10" onClick={openCreateDialog}>
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Customers</p>
          <p className="text-2xl font-bold text-slate-900">{customers.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Bookings</p>
          <p className="text-2xl font-bold text-blue-600">
            {totalBookings}
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
      <DataTable columns={columns} data={customers} loading={isLoading} />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editingCustomer ? "Edit Customer" : "Create Customer"}</DialogTitle>
            <DialogDescription>
              {editingCustomer ? "Update the customer account details below." : "Create a new customer record."}
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Company</label>
                <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Contact</label>
                <input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Bookings</label>
                <input type="number" min="0" value={form.bookings} onChange={(e) => setForm({ ...form, bookings: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Revenue</label>
                <input type="number" min="0" value={form.revenue} onChange={(e) => setForm({ ...form, revenue: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Outstanding</label>
                <input type="number" min="0" value={form.outstanding} onChange={(e) => setForm({ ...form, outstanding: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Status</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="prospect">Prospect</option>
                </select>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                {editingCustomer ? "Save Changes" : "Create Customer"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
