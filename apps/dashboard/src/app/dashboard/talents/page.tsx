"use client";

import { useEffect, useState } from "react";
import {
  Users,
  RefreshCw,
  Search,
  Loader2,
  Download,
  Trash2,
} from "lucide-react";
import * as XLSX from "xlsx";
import { getTalents, deleteTalent, type TalentProfile } from "@/lib/talents";

function exportTalentsToXlsx(talents: TalentProfile[]) {
  const rows = talents.map((t) => ({
    "Full Name": t.name,
    Department: t.department,
    "Reg Number": t.regNumber,
    "WhatsApp Number": t.whatsappNumber,
    "Email Address": t.email,
    Skillset: t.skillset,
    "Submitted At": new Date(t.createdAt).toLocaleDateString("en-NG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  }));

  const ws = XLSX.utils.json_to_sheet(rows);
  ws["!cols"] = [
    { wch: 26 },
    { wch: 26 },
    { wch: 18 },
    { wch: 18 },
    { wch: 30 },
    { wch: 40 },
    { wch: 16 },
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Talents");
  XLSX.writeFile(wb, `BUK_Talents_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

export default function TalentsPage() {
  const [talents, setTalents] = useState<TalentProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [exporting, setExporting] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchTalents = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getTalents();
      setTalents(res.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load talents");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTalents();
  }, []);

  const filtered = talents.filter(
    (t) =>
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.department.toLowerCase().includes(query.toLowerCase()) ||
      t.email.toLowerCase().includes(query.toLowerCase()) ||
      t.skillset.toLowerCase().includes(query.toLowerCase()),
  );

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      await deleteTalent(id);
      setTalents((prev) => prev.filter((t) => t.id !== id));
      setConfirmDeleteId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete talent");
    } finally {
      setDeleting(false);
    }
  };

  const handleExport = () => {
    setExporting(true);
    try {
      exportTalentsToXlsx(filtered.length < talents.length ? filtered : talents);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#172018]">Talent Discovery</h1>
          <p className="mt-1 text-sm text-[#61705d]">
            {loading
              ? "Loading…"
              : `${talents.length} talent profile${talents.length !== 1 ? "s" : ""} submitted`}
          </p>
        </div>

        {talents.length > 0 && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleExport}
              disabled={exporting}
              className="inline-flex items-center gap-2 rounded-lg border border-[#dfe6d7] bg-white px-4 py-2.5 text-sm font-bold text-[#172018] shadow-sm transition hover:bg-[#f5f7f2] disabled:opacity-50"
            >
              {exporting ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
              Export XLSX
            </button>
          </div>
        )}
      </div>

      {/* Search + Refresh */}
      {talents.length > 0 && (
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8d8e6]" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, department, email, or skillset…"
              className="w-full rounded-lg border border-[#dfe6d7] bg-white py-2.5 pl-9 pr-4 text-sm text-[#172018] outline-none transition focus:border-[#009fc3] focus:ring-2 focus:ring-[#009fc3]/30"
            />
          </div>
          <button
            type="button"
            onClick={fetchTalents}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-[#dfe6d7] bg-white px-4 py-2.5 text-sm font-semibold text-[#172018] transition hover:bg-[#f5f7f2] disabled:opacity-50"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      )}

      {/* States */}
      {loading ? (
        <div className="flex h-48 items-center justify-center gap-3 text-[#61705d]">
          <Loader2 size={24} className="animate-spin text-[#006b85]" />
          <span className="text-sm font-semibold">Loading talent profiles…</span>
        </div>
      ) : error ? (
        <div className="flex h-48 flex-col items-center justify-center gap-3">
          <p className="text-sm text-red-500">{error}</p>
          <button
            type="button"
            onClick={fetchTalents}
            className="text-sm font-semibold text-[#006b85] hover:underline"
          >
            Try again
          </button>
        </div>
      ) : talents.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-[#dfe6d7] bg-white py-16">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f4f8]">
            <Users className="text-[#006b85]" size={32} />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[#172018]">No talent profiles yet</h3>
            <p className="mt-1 text-sm text-[#61705d]">
              Profiles submitted via the website will appear here.
            </p>
          </div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-12 text-center">
          <p className="font-semibold text-[#172018]">No results for &ldquo;{query}&rdquo;</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-sm text-[#006b85] hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        /* Table */
        <div className="overflow-x-auto rounded-xl border border-[#dfe6d7] bg-white">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="border-b border-[#dfe6d7] bg-[#f5f7f2]">
                {[
                  "Full Name",
                  "Department",
                  "Reg Number",
                  "WhatsApp",
                  "Email",
                  "Skillset",
                  "Submitted",
                  "",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide text-[#5a6b57]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dfe6d7]">
              {filtered.map((t) => (
                <tr key={t.id} className="transition hover:bg-[#f5f7f2]">
                  <td className="px-4 py-3 font-semibold text-[#172018]">{t.name}</td>
                  <td className="px-4 py-3 text-[#61705d]">{t.department}</td>
                  <td className="px-4 py-3 font-mono text-xs text-[#61705d]">{t.regNumber}</td>
                  <td className="px-4 py-3 text-[#61705d]">{t.whatsappNumber}</td>
                  <td className="px-4 py-3 text-[#006b85]">
                    <a href={`mailto:${t.email}`} className="hover:underline">
                      {t.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 max-w-[200px]">
                    <span className="inline-block rounded-full bg-[#e8f4f8] px-2.5 py-1 text-xs font-semibold text-[#006b85]">
                      {t.skillset}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#a0a9a0]">
                    {new Date(t.createdAt).toLocaleDateString("en-NG", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    {confirmDeleteId === t.id ? (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleDelete(t.id)}
                          disabled={deleting}
                          className="rounded px-2 py-1 text-xs font-bold text-white bg-red-500 hover:bg-red-600 disabled:opacity-50 transition"
                        >
                          {deleting ? <Loader2 size={12} className="animate-spin" /> : "Confirm"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(null)}
                          disabled={deleting}
                          className="rounded px-2 py-1 text-xs font-semibold text-[#61705d] hover:bg-[#f5f7f2] transition"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(t.id)}
                        className="rounded p-1.5 text-[#a0a9a0] hover:bg-red-50 hover:text-red-500 transition"
                        title="Delete submission"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t border-[#dfe6d7] px-4 py-3 text-xs text-[#a0a9a0]">
            Showing {filtered.length} of {talents.length} profile{talents.length !== 1 ? "s" : ""}
          </div>
        </div>
      )}
    </div>
  );
}
