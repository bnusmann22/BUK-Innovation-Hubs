"use client";
import Logo from "@repo/ui/logo";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  PlusSquare,
  Settings,
  FileText,
  Calendar,
  Mail,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sidebarActions = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { label: "View Hubs", icon: Building2, href: "/dashboard/view-hubs" },
  { label: "Add Hub", icon: PlusSquare, href: "/dashboard/add-hub" },
  { label: "Manage Hubs", icon: Settings, href: "/dashboard/manage-hubs" },
  { label: "Newsletter", icon: Mail, href: "/dashboard/newsletter" },
  { label: "Events", icon: Calendar, href: "/dashboard/events" },
  { label: "Reports", icon: BarChart3, href: "/dashboard/reports" },
  { label: "Settings", icon: FileText, href: "/dashboard/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

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
            {sidebarActions.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold transition
                  ${
                    index === 0
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
                      <span className="text-xs opacity-70">
                        {index === 0 ? "Live" : "Open"}
                      </span>
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
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Admin"
              alt="user"
              className="h-10 w-10 rounded-full"
            />

            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-[#a8d8e6]">
                  admin@buk.edu.ng
                </p>
              </div>
            )}

            {!collapsed && <ChevronRight size={16} className="opacity-60" />}
          </div>
        </div>
      </div>
    </aside>
  );
}