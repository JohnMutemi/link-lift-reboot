# 👨‍💻 Admin Dashboard Developer Guide

## Quick Start

### **File Locations**
- **Layout Components**: `src/components/admin/layout/`
- **Reusable Components**: `src/components/admin/common/`
- **Page Components**: `src/components/admin/[section]/`
- **Routes**: `src/routes/admin/`

### **Creating a New Admin Page**

1. **Create the page component**:
```tsx
// src/components/admin/newsection/NewSectionPage.tsx
export function NewSectionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Page Title</h1>
        <p className="text-slate-600 mt-1">Description</p>
      </div>
      {/* Page content */}
    </div>
  );
}
```

2. **Create the route**:
```tsx
// src/routes/admin/newsection.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { getAdminSession } from "@/lib/auth";
import { AdminLayout } from "@/components/admin/layout";
import { NewSectionPage } from "@/components/admin/newsection/NewSectionPage";

export const Route = createFileRoute("/admin/newsection")({
  head: () => ({
    meta: [{ title: "New Section — Admin Dashboard" }],
  }),
  component: AdminNewSectionPage,
});

function AdminNewSectionPage() {
  const session = getAdminSession();
  useEffect(() => {
    if (!session) window.location.href = "/admin-login";
  }, [session]);

  return (
    <AdminLayout
      userInitial={session?.email?.[0]?.toUpperCase() ?? "A"}
      userName={session?.email ?? "Admin User"}
    >
      <NewSectionPage />
    </AdminLayout>
  );
}
```

3. **Add to sidebar** - Update `AdminSidebar.tsx`:
```tsx
const sidebarItems = [
  // ... existing items
  { to: "/admin/newsection", icon: YourIcon, label: "New Section" },
];
```

---

## 🎨 Component Usage Examples

### **StatusBadge**
```tsx
import { StatusBadge } from "@/components/admin/common";

<StatusBadge 
  status="pending" 
  label="Pending Approval" 
/>
```

**Available statuses**: `pending`, `approved`, `in-transit`, `delivered`, `cancelled`, `available`, `on-trip`, `maintenance`, `success`, `warning`, `error`

### **DashboardCard**
```tsx
import { DashboardCard } from "@/components/admin/common";
import { TrendingUp } from "lucide-react";

<DashboardCard
  icon={TrendingUp}
  title="Total Bookings"
  value="1,284"
  change={{ percentage: 12, trend: "up" }}
/>
```

### **DataTable**
```tsx
import { DataTable } from "@/components/admin/common";

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  {
    key: "status",
    label: "Status",
    render: (value) => <StatusBadge status={value} label={value} />
  }
];

<DataTable columns={columns} data={data} />
```

### **SearchBar**
```tsx
import { SearchBar } from "@/components/admin/common";
import { useState } from "react";

const [search, setSearch] = useState("");
<SearchBar 
  placeholder="Search..." 
  value={search}
  onChange={setSearch}
/>
```

### **ApprovalCard**
```tsx
import { ApprovalCard } from "@/components/admin/common";

<ApprovalCard
  bookingNumber="LF-2024-001"
  client="Fresh Exports Ltd"
  container="REF-005"
  driver="John Kamau"
  pickup="Nairobi"
  destination="Mombasa"
  priority="high"
  onApprove={() => handleApprove()}
  onReject={() => handleReject()}
/>
```

### **FleetCard**
```tsx
import { FleetCard } from "@/components/admin/common";

<FleetCard
  truckNumber="TRK-001"
  driver="John Kamau"
  mileage="145,230 km"
  status="available"
  nextServiceDate="2026-08-15"
  currentLocation="Nairobi"
  onViewDetails={() => {}}
  onAssignDriver={() => {}}
  onScheduleService={() => {}}
/>
```

---

## 🎯 Layout Structure

### **Page Layout Pattern**
```tsx
<div className="space-y-6">
  {/* Header Section */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Title</h1>
      <p className="text-slate-600 mt-1">Subtitle</p>
    </div>
    <div className="flex gap-2">
      {/* Action buttons */}
    </div>
  </div>

  {/* Main Content */}
  {/* Tables, Cards, Charts, etc. */}
</div>
```

---

## 🎨 Tailwind CSS Utilities

### **Common Classes**

**Text**:
```css
text-3xl font-bold text-slate-900    /* Large heading */
text-lg font-semibold text-slate-900 /* Section title */
text-sm text-slate-600               /* Secondary text */
text-xs text-slate-500               /* Tertiary text */
```

**Backgrounds**:
```css
bg-white                 /* Card/content background */
bg-slate-50              /* Page background */
bg-blue-600              /* Primary button */
bg-white/95              /* Semi-transparent white */
```

**Spacing**:
```css
p-4   /* Padding */
px-6  /* Horizontal padding */
py-4  /* Vertical padding */
gap-4 /* Gap between items */
mb-4  /* Margin bottom */
mt-1  /* Margin top */
```

**Borders & Shadows**:
```css
border border-slate-100           /* Light border */
rounded-lg                         /* Small rounded */
rounded-2xl                        /* Large rounded */
shadow-sm                          /* Subtle shadow */
hover:shadow-md                    /* Hover shadow */
```

---

## 🔌 Connecting to APIs

### **Example: Fetching Bookings**
```tsx
import { useState, useEffect } from "react";
import { DataTable } from "@/components/admin/common";

export function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/bookings");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return <DataTable columns={columns} data={bookings} />;
}
```

---

## 📋 Color Reference

### **Status Colors**
- **Pending**: `bg-amber-50` / `text-amber-700`
- **Approved**: `bg-blue-50` / `text-blue-700`
- **In Transit**: `bg-purple-50` / `text-purple-700`
- **Delivered**: `bg-emerald-50` / `text-emerald-700`
- **Cancelled**: `bg-red-50` / `text-red-700`
- **Available**: `bg-emerald-50` / `text-emerald-700`
- **On Trip**: `bg-blue-50` / `text-blue-700`
- **Maintenance**: `bg-orange-50` / `text-orange-700`

### **Button Styles**
```tsx
// Primary action
className="bg-blue-600 hover:bg-blue-700 text-white"

// Secondary action
className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"

// Danger action
className="bg-red-600 hover:bg-red-700 text-white"

// Ghost action
className="text-slate-700 hover:bg-slate-100"
```

---

## 🔄 State Management Patterns

### **Simple Form State**
```tsx
const [formState, setFormState] = useState({
  name: "",
  email: "",
  status: "pending"
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormState(prev => ({ ...prev, [name]: value }));
};
```

### **Multiple States**
```tsx
const [pending, setPending] = useState([]);
const [approved, setApproved] = useState([]);
const [rejected, setRejected] = useState([]);

// Move item from pending to approved
const handleApprove = (id) => {
  const item = pending.find(p => p.id === id);
  setPending(pending.filter(p => p.id !== id));
  setApproved([...approved, item]);
};
```

---

## 📱 Responsive Breakpoints

```tsx
// Tailwind breakpoints used:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px

// Example
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// Mobile: 1 column
// Tablet+: 2 columns
// Desktop: 3 columns
```

---

## 🚀 Performance Tips

1. **Use React.memo** for expensive components:
```tsx
export const FleetCard = React.memo(function FleetCard(props) {
  // Component code
});
```

2. **Lazy load lists** with virtual scrolling for 100+ items
3. **Debounce search** input to reduce API calls
4. **Cache API responses** to avoid redundant requests
5. **Optimize images** before adding them to cards

---

## 🐛 Debugging

### **Check Active Route**
```tsx
import { useLocation } from "@tanstack/react-router";

function MyComponent() {
  const location = useLocation();
  console.log("Current path:", location.pathname);
}
```

### **Test Component in Isolation**
```tsx
// Create a test route or use Storybook
import { FleetCard } from "@/components/admin/common";

export default function TestFleetCard() {
  return (
    <FleetCard
      truckNumber="TRK-001"
      driver="Test Driver"
      mileage="100,000 km"
      status="available"
      nextServiceDate="2026-08-15"
      currentLocation="Nairobi"
    />
  );
}
```

---

## 📚 Available Icons from Lucide React

```tsx
// Already imported and used:
LayoutDashboard, BookOpen, CheckCircle2, Users, Truck,
Navigation, Package, Route, FileClock, BarChart3, Settings,
Plus, Download, Filter, Search, Bell, MessageSquare, LogOut,
User, TrendingUp, Clock, DollarSign, AlertCircle, CheckCircle,
XCircle, MapPin, Wrench, Menu, X, ArrowRight, ChevronDown

// And 100+ more available from lucide-react
```

---

## 🎓 Best Practices

1. **Keep components small** - Each component should do one thing
2. **Use meaningful names** - Clear component and function names
3. **Document props** - Add JSDoc comments for component props
4. **Handle errors** - Always have error states and fallbacks
5. **Test responsiveness** - Check mobile, tablet, and desktop views
6. **Maintain consistency** - Follow established patterns
7. **Optimize rerenders** - Use React.memo and useCallback where needed
8. **Accessibility** - Use semantic HTML and ARIA labels

---

## 📞 Support

For questions or issues:
1. Check the component implementations in `/components/admin/`
2. Review existing page implementations for patterns
3. Refer to Tailwind CSS and Lucide React documentation
4. Test in browser DevTools

Happy coding! 🚀
