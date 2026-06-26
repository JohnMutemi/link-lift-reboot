import {
  Bell,
  MessageSquare,
  Settings,
  LogOut,
  User,
  Search,
  Menu,
} from "lucide-react";
import { SearchBar } from "@/components/admin/common";
import { useState } from "react";
import { clearAdminSession } from "@/lib/auth";
import { Link } from "@tanstack/react-router";

interface AdminTopbarProps {
  userInitial?: string;
  userName?: string;
  onMenuToggle?: () => void;
  onLogout?: () => void;
}

export function AdminTopbar({
  userInitial = "A",
  userName = "Admin User",
  onMenuToggle,
  onLogout,
}: AdminTopbarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleLogout = () => {
    clearAdminSession();
    onLogout?.();
  };

  return (
    <div className="sticky top-0 z-40 flex-shrink-0 bg-white border-b border-slate-200 shadow-sm">
      <div className="px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-4">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors shrink-0"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5 text-slate-600" />
        </button>

        <div className="flex-1 min-w-0">
          <div className="hidden md:flex">
            <SearchBar
              placeholder="Search bookings, drivers, trucks..."
              value={searchValue}
              onChange={setSearchValue}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-slate-600" />
          </button>

          <div className="relative">
            <button
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                setProfileOpen(false);
              }}
              className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle notifications"
            >
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-[min(95vw,20rem)] bg-white border border-slate-200 rounded-2xl shadow-xl z-50">
                <div className="p-4 border-b border-slate-100">
                  <h3 className="font-semibold text-slate-900">Notifications</h3>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  <div className="p-4 space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-500" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900">New booking pending approval</p>
                        <p className="text-xs text-slate-600 mt-1">LF-0931 awaiting your review</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-100">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-slate-300" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-700">Truck maintenance due</p>
                        <p className="text-xs text-slate-600 mt-1">Truck TRK-001 due for service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="p-2 rounded-xl hover:bg-slate-100 transition-colors relative" aria-label="Messages">
            <MessageSquare className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-emerald-500" />
          </button>

          <div className="hidden sm:block h-6 w-px bg-slate-200" />

          <div className="relative">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotificationsOpen(false);
              }}
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Open profile menu"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                {userInitial}
              </div>
              <div className="hidden sm:block text-sm min-w-0">
                <p className="font-medium text-slate-900 truncate">{userName}</p>
              </div>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-[min(95vw,18rem)] bg-white border border-slate-200 rounded-2xl shadow-xl z-50">
                <div className="p-4 border-b border-slate-100">
                  <p className="font-medium text-slate-900 truncate">{userName}</p>
                  <p className="text-xs text-slate-500 mt-1">Administrator</p>
                </div>
                <div className="p-2 space-y-1">
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100 transition-colors">
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <Link
                    to="/admin/settings"
                    onClick={() => setProfileOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                </div>
                <div className="p-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}