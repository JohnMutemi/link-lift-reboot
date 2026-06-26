import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

// Sample data
const chartData = [
  { month: "Jan", bookings: 45, revenue: 4200 },
  { month: "Feb", bookings: 52, revenue: 4800 },
  { month: "Mar", bookings: 48, revenue: 4500 },
  { month: "Apr", bookings: 61, revenue: 5200 },
  { month: "May", bookings: 55, revenue: 4900 },
  { month: "Jun", bookings: 67, revenue: 5800 },
];

const statusData = [
  { name: "Pending", value: 25, fill: "#F59E0B" },
  { name: "Approved", value: 45, fill: "#3B82F6" },
  { name: "In Transit", value: 60, fill: "#8B5CF6" },
  { name: "Delivered", value: 120, fill: "#10B981" },
  { name: "Cancelled", value: 8, fill: "#EF4444" },
];

export function BookingsChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Bookings Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #0f4c81",
              borderRadius: "0.5rem",
            }}
            labelStyle={{ color: "#f1f5f9" }}
          />
          <Line
            type="monotone"
            dataKey="bookings"
            stroke="#0F4C81"
            dot={{ fill: "#0F4C81", r: 4 }}
            activeDot={{ r: 6 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function StatusChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Booking Status Distribution</h3>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-5 gap-4 w-full">
          {statusData.map((item) => (
            <div key={item.name} className="text-center">
              <div
                className="h-16 rounded-lg mb-2"
                style={{ backgroundColor: item.fill, opacity: 0.2 }}
              />
              <p className="text-xs font-medium text-slate-900">{item.name}</p>
              <p className="text-sm font-bold text-slate-700 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #f59e0b",
              borderRadius: "0.5rem",
            }}
            labelStyle={{ color: "#f1f5f9" }}
          />
          <Bar dataKey="revenue" fill="#F59E0B" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
