import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

export function BookingsChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50 hover:shadow-lg hover:border-blue-200 transition-all">
      <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
        Bookings Over Time
      </h3>
      <div className="h-[300px] flex items-center justify-center text-slate-400">
        <p>No data available yet</p>
      </div>
    </div>
  );
}

export function StatusChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50 hover:shadow-lg hover:border-amber-200 transition-all">
      <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
        <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-amber-400 rounded-full" />
        Booking Status Distribution
      </h3>
      <div className="h-[300px] flex items-center justify-center text-slate-400">
        <p>No data available yet</p>
      </div>
    </div>
  );
}

export function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50 hover:shadow-lg hover:border-emerald-200 transition-all">
      <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
        <div className="w-1 h-6 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full" />
        Monthly Revenue
      </h3>
      <div className="h-[300px] flex items-center justify-center text-slate-400">
        <p>Awaiting Neon database update</p>
      </div>
    </div>
  );
}
