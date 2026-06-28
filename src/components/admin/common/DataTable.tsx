import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (value: any, row: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  emptyMessage?: string;
  loading?: boolean;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  className = "",
  emptyMessage = "No data available",
  loading = false,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className={`bg-white rounded-lg border border-slate-100 p-12 text-center ${className}`}>
        <p className="text-slate-500">Loading...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={`bg-white rounded-lg border border-slate-100 p-12 text-center ${className}`}>
        <p className="text-slate-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg border border-slate-100 overflow-hidden ${className}`}>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50 hover:bg-slate-50">
            {columns.map((column) => (
              <TableHead key={String(column.key)} className={`font-semibold text-slate-700 ${column.className || ""}`}>
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx} className="border-t border-slate-100 hover:bg-slate-50">
              {columns.map((column) => (
                <TableCell key={String(column.key)} className={`text-slate-700 ${column.className || ""}`}>
                  {column.render ? column.render(row[column.key as keyof T], row) : String(row[column.key as keyof T] || "-")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
