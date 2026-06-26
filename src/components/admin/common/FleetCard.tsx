import { MapPin, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";

interface FleetCardProps {
  truckNumber: string;
  driver?: string;
  mileage: string;
  status: "available" | "on-trip" | "maintenance";
  nextServiceDate: string;
  currentLocation: string;
  onViewDetails?: () => void;
  onAssignDriver?: () => void;
  onScheduleService?: () => void;
}

export function FleetCard({
  truckNumber,
  driver,
  mileage,
  status,
  nextServiceDate,
  currentLocation,
  onViewDetails,
  onAssignDriver,
  onScheduleService,
}: FleetCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-900">{truckNumber}</h3>
          <StatusBadge status={status} label={status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {driver && (
          <div className="text-sm">
            <p className="text-slate-600 mb-1">Current Driver</p>
            <p className="font-medium text-slate-900">{driver}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="text-sm">
            <p className="text-slate-600 mb-1 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" /> Mileage
            </p>
            <p className="font-medium text-slate-900">{mileage}</p>
          </div>
          <div className="text-sm">
            <p className="text-slate-600 mb-1">Next Service</p>
            <p className="font-medium text-slate-900">{nextServiceDate}</p>
          </div>
        </div>

        <div className="text-sm pt-2 border-t border-slate-100">
          <p className="text-slate-600 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Location
          </p>
          <p className="font-medium text-slate-900">{currentLocation}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 pb-4 pt-0 space-y-2">
        <Button onClick={onViewDetails} className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-9">
          View Details
        </Button>
        {status === "available" && (
          <Button onClick={onAssignDriver} variant="outline" className="w-full rounded-lg h-9">
            Assign Driver
          </Button>
        )}
        {status !== "maintenance" && (
          <Button onClick={onScheduleService} variant="outline" className="w-full rounded-lg h-9">
            <Wrench className="w-3.5 h-3.5 mr-1.5" /> Schedule Service
          </Button>
        )}
      </div>
    </div>
  );
}
