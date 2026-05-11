"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Building2,
  Plus,
  CheckCircle2,
  MapPin,
  Users,
  Target,
  ExternalLink,
  RefreshCw,
  Search,
  Loader2,
  Download,
} from "lucide-react";
import { getHubs, type Hub } from "@/lib/hubs";
import { exportHubsToXlsx } from "@/lib/exportHubs";

function HubStatusBadge({ isActive }: { isActive: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        isActive ? "bg-[#dcfce7] text-[#166534]" : "bg-[#f3f4f6] text-[#6b7280]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-[#22c55e]" : "bg-[#9ca3af]"}`} />
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}

function HubCard({ hub }: { hub: Hub }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#dfe6d7] bg-white p-5 transition hover:border-[#a8d8e6] hover:shadow-sm sm:flex-row sm:items-start">
      {/* Logo / Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#dfe6d7] bg-[#f5f7f2]">
        {hub.logo ? (
          <img src={hub.logo} alt={hub.name} className="h-full w-full object-cover" />
        ) : (
          <Building2 className="text-[#006b85]" size={24} />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="truncate font-bold text-[#172018]">{hub.name}</h3>
          <HubStatusBadge isActive={hub.isActive} />
        </div>

        <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#61705d]">{hub.description}</p>

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#61705d]">
          {hub.location && (
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-[#006b85]" />
              {hub.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Target size={12} className="text-[#006b85]" />
            {hub.focusArea}
          </span>
          {hub._count && (
            <span className="flex items-center gap-1">
              <Users size={12} className="text-[#006b85]" />
              {hub._count.staff} staff
            </span>
          )}
          {hub.manager && (
            <span className="flex items-center gap-1">
              Manager: <strong className="text-[#172018]">{hub.manager.name}</strong>
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
        <span className="text-xs text-[#a0a9a0]">
          {new Date(hub.createdAt).toLocaleDateString("en-NG", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-md border border-[#dfe6d7] bg-white px-3 py-1.5 text-xs font-semibold text-[#172018] transition hover:border-[#a8d8e6] hover:bg-[#f5f7f2]"
          >
            Edit
          </button>
          <button
            type="button"
            className="flex items-center gap-1 rounded-md bg-[#006b85] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#005a70]"
          >
            <ExternalLink size={11} />
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ManageHubsPage() {
  const searchParams = useSearchParams();
  const justCreated = searchParams.get("created") === "1";

  const [hubs, setHubs] = useState<Hub[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [showSuccess, setShowSuccess] = useState(justCreated);
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      exportHubsToXlsx(hubs);
    } finally {
      setExporting(false);
    }
  };

  const fetchHubs = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getHubs();
      setHubs(res.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load hubs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHubs();
  }, []);

  useEffect(() => {
    if (!showSuccess) return;
    const t = setTimeout(() => setShowSuccess(false), 6000);
    return () => clearTimeout(t);
  }, [showSuccess]);

  const filtered = hubs.filter(
    (h) =>
      h.name.toLowerCase().includes(query.toLowerCase()) ||
      h.focusArea.toLowerCase().includes(query.toLowerCase()) ||
      (h.location ?? "").toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Success Banner */}
      {showSuccess && (
        <div className="flex items-center gap-3 rounded-xl border border-[#86efac] bg-[#f0fdf4] px-5 py-4">
          <CheckCircle2 className="shrink-0 text-[#16a34a]" size={20} />
          <div>
            <p className="font-bold text-[#166534]">Hub created successfully!</p>
            <p className="text-sm text-[#166534]/80">
              Admin credentials have been sent to the assigned team members by email.
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#172018]">Manage Hubs</h1>
          <p className="mt-1 text-sm text-[#61705d]">
            {hubs.length > 0
              ? `${hubs.length} hub${hubs.length !== 1 ? "s" : ""} on the platform`
              : "No hubs yet — create your first hub."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {hubs.length > 0 && (
            <button
              type="button"
              onClick={handleExport}
              disabled={exporting}
              className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6d7] bg-white px-5 py-2.5 text-sm font-bold text-[#172018] shadow-sm transition hover:bg-[#f5f7f2] disabled:opacity-50"
            >
              {exporting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Download size={16} />
              )}
              Export XLSX
            </button>
          )}
          <Link
            href="/dashboard/add-hub"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1b5e2b] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#154a22]"
          >
            <Plus size={16} />
            Add Hub
          </Link>
        </div>
      </div>

      {/* Search + Refresh */}
      {hubs.length > 0 && (
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8d8e6]" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search hubs by name, focus area, or location…"
              className="w-full rounded-lg border border-[#dfe6d7] bg-white py-2.5 pl-9 pr-4 text-sm text-[#172018] outline-none transition focus:border-[#009fc3] focus:ring-2 focus:ring-[#009fc3]/30"
            />
          </div>
          <button
            type="button"
            onClick={fetchHubs}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-[#dfe6d7] bg-white px-4 py-2.5 text-sm font-semibold text-[#172018] transition hover:bg-[#f5f7f2] disabled:opacity-50"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className="flex h-48 items-center justify-center gap-3 text-[#61705d]">
          <Loader2 size={24} className="animate-spin text-[#006b85]" />
          <span className="text-sm font-semibold">Loading hubs…</span>
        </div>
      ) : error ? (
        <div className="flex h-48 flex-col items-center justify-center gap-3">
          <p className="text-sm text-red-500">{error}</p>
          <button
            type="button"
            onClick={fetchHubs}
            className="text-sm font-semibold text-[#006b85] hover:underline"
          >
            Try again
          </button>
        </div>
      ) : hubs.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-dashed border-[#dfe6d7] bg-white py-16">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f4f8]">
            <Building2 className="text-[#006b85]" size={32} />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[#172018]">No hubs yet</h3>
            <p className="mt-1 text-sm text-[#61705d]">
              Get started by creating the first innovation hub on the platform.
            </p>
          </div>
          <Link
            href="/dashboard/add-hub"
            className="inline-flex items-center gap-2 rounded-lg bg-[#006b85] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#005a70]"
          >
            <Plus size={16} />
            Create First Hub
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-12 text-center">
          <p className="font-semibold text-[#172018]">No hubs match &ldquo;{query}&rdquo;</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-sm text-[#006b85] hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((hub) => (
            <HubCard key={hub.id} hub={hub} />
          ))}
        </div>
      )}
    </div>
  );
}
