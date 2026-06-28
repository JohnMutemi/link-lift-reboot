import { Plus, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable, SearchBar, StatusBadge } from "@/components/admin/common";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, type FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listBookings, createBooking, deleteBooking, updateBooking } from "@/lib/api/admin.functions";

// Data loaded from server

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any | null>(null);
  const [form, setForm] = useState({
    bookingNumber: "",
    customer: "",
    container: "",
    destination: "",
    status: "pending",
    date: "",
    value: "",
  });
  const qc = useQueryClient();
  const { data: bookings = [], isLoading } = useQuery<any[]>({
    queryKey: ["bookings"],
    queryFn: () => listBookings().then((r: any) => (Array.isArray(r) ? r : [])),
  });

  const deleteMut = useMutation({
    mutationFn: (id: string) => deleteBooking({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["bookings"] }),
  });

  const createMut = useMutation({
    mutationFn: (payload: any) => createBooking({ data: { booking: payload } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["bookings"] });
      setIsDialogOpen(false);
      setEditingBooking(null);
      setForm({
        bookingNumber: "",
        customer: "",
        container: "",
        destination: "",
        status: "pending",
        date: "",
        value: "",
      });
    },
  });

  const updateMut = useMutation({
    mutationFn: (payload: any) => updateBooking({ data: payload }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["bookings"] });
      setIsDialogOpen(false);
      setEditingBooking(null);
      setForm({
        bookingNumber: "",
        customer: "",
        container: "",
        destination: "",
        status: "pending",
        date: "",
        value: "",
      });
    },
  });

  const openCreateDialog = () => {
    setEditingBooking(null);
    setForm({
      bookingNumber: "",
      customer: "",
      container: "",
      destination: "",
      status: "pending",
      date: "",
      value: "",
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (booking: any) => {
    setEditingBooking(booking);
    setForm({
      bookingNumber: booking.bookingNumber ?? booking.booking_number ?? "",
      customer: booking.customer ?? "",
      container: booking.container ?? "",
      destination: booking.destination ?? "",
      status: booking.status ?? "pending",
      date: booking.date ?? "",
      value: booking.value ?? "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      ...form,
      value: Number(form.value) || 0,
      date: form.date || new Date().toISOString().slice(0, 10),
    };

    if (editingBooking) {
      updateMut.mutate({ id: editingBooking.id, booking: payload });
    } else {
      createMut.mutate({ booking: payload });
    }
  };

  const columns = [
    ...bookingColumns,
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
          <h1 className="text-3xl font-bold text-slate-900">Bookings Management</h1>
          <p className="text-slate-600 mt-1">View and manage all freight bookings.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg h-10">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10" onClick={openCreateDialog}>
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
      <DataTable columns={columns} data={bookings} loading={isLoading} />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editingBooking ? "Edit Booking" : "Create Booking"}</DialogTitle>
            <DialogDescription>
              {editingBooking ? "Update the booking details below." : "Add a new booking record to the admin panel."}
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Booking Number</label>
                <input required value={form.bookingNumber} onChange={(e) => setForm({ ...form, bookingNumber: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Customer</label>
                <input required value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Container</label>
                <input required value={form.container} onChange={(e) => setForm({ ...form, container: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Destination</label>
                <input required value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Status</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="in-transit">In Transit</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Date</label>
                <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Value</label>
                <input type="number" min="0" value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                {editingBooking ? "Save Changes" : "Create Booking"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
