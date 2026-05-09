import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

type DashboardShellProps = Readonly<{
  children: ReactNode;
}>;

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-[#172018]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col">
          <header className="border-b border-[#dfe6d7] bg-white/80 px-5 py-5 backdrop-blur sm:px-8">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5a6b57]">
                  Dashboard
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-[#172018] sm:text-4xl">
                  BUK hub operations overview
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#61705d]">
                  Monitor innovation spaces, project activity, student
                  participation, newsletter tasks, and administrative actions in
                  one place.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  className="rounded-md border border-[#c9d5c3] bg-white px-4 py-2.5 text-sm font-bold text-[#172018] transition hover:border-[#809176]"
                  type="button"
                >
                  Export report
                </button>
                <Link
                  href="/dashboard/add-hub"
                  className="rounded-md bg-[#1b5e2b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#154a22]"
                >
                  Add new hub
                </Link>
              </div>
            </div>
          </header>

          <div className="flex-1 space-y-6 p-5 sm:p-8">{children}</div>
          <Footer />
        </section>
      </div>
    </main>
  );
}
