"use client";
import Logo from "@repo/ui/logo";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  PlusSquare,
  Settings,
  FileText,
  Calendar,
  Mail,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Users,
} from "lucide-react";

const sidebarActions = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Add Hub", icon: PlusSquare, href: "/dashboard/add-hub" },
  { label: "Manage Hubs", icon: Settings, href: "/dashboard/manage-hubs" },
  { label: "Talents", icon: Users, href: "/dashboard/talents" },
  { label: "Newsletter", icon: Mail, href: "/dashboard/newsletter" },
  { label: "Events", icon: Calendar, href: "/dashboard/events" },
  { label: "Reports", icon: BarChart3, href: "/dashboard/reports" },
  { label: "Settings", icon: FileText, href: "/dashboard/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <aside
      className={`bg-[#006b85] text-white transition-all duration-300
      ${collapsed ? "w-20" : "w-72"}
      lg:sticky lg:top-0 lg:h-screen border-r border-[#0a4a5a]`}
    >
      <div className="flex h-full flex-col justify-between p-4">
        {/* TOP */}
        <div>
          {/* Logo + Collapse */}
          <div className="flex items-center justify-between">
            {!collapsed && (
              <Logo size="sm" showText textColor="light" />
            )}

            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="rounded-md p-2 hover:bg-white/10"
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          </div>

          {/* Nav */}
          <nav className="mt-8 flex flex-col gap-2">
            {sidebarActions.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold transition
                  ${
                    active
                      ? "bg-white text-[#006b85]"
                      : "text-[#d0f0ff] hover:bg-white/10"
                  }`}
                >
                  <Icon size={18} />

                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">
                        {item.label}
                      </span>
                      {active && (
                        <span className="text-xs opacity-70">Live</span>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM USER */}
        <div className="border-t border-[#0a4a5a] pt-4">
          <div
            className={`flex items-center gap-3 rounded-lg bg-[#0d5a6e] p-3 ${
              collapsed ? "justify-center" : ""
            }`}
          >
            {/* Avatar */}
            <img
              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${user?.name || "Admin"}`}
              alt={user?.name || "user"}
              className="h-10 w-10 rounded-full"
            />

            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-semibold">
                  {user?.name || "Admin User."}
                </p>
                <p className="truncate text-xs text-[#a8d8e6]">
                  {user?.email || "admin@buk.edu.ng"}
                </p>
              </div>
            )}

            {!collapsed && (
              <button
                onClick={handleLogout}
                className="rounded p-1 hover:bg-white/10 text-[#a8d8e6] hover:text-white transition"
                title="Logout"
              >
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
