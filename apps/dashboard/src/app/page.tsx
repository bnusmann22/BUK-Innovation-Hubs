"use client";

import LoginComponent from "../components/LoginComponent";
import Logo from "@repo/ui/logo";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[#f0f9fc] text-[#0c3b4a] lg:grid-cols-[1.05fr_0.95fr]">
      <section className="flex min-h-[42vh] flex-col justify-between bg-[#006b85] p-6 text-white sm:p-10 lg:min-h-screen">
        <Logo size="md" showText textColor="light" />

        <div className="max-w-2xl py-10 lg:py-0">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06b6d4]">
            Admin Portal
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Manage BUK hubs from one focused dashboard.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#a8d8e6]">
            Sign in to review hub activity, manage innovation spaces, approve
            newsletter updates, track programs, and keep Bayero University Kano
            hub records current.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[#a8d8e6] sm:grid-cols-3">
          <div className="rounded-lg bg-white/[0.08] p-4">
            <p className="text-2xl font-black text-white">8</p>
            <p className="mt-1">Active hubs</p>
          </div>
          <div className="rounded-lg bg-white/[0.08] p-4">
            <p className="text-2xl font-black text-white">146</p>
            <p className="mt-1">Projects tracked</p>
          </div>
          <div className="rounded-lg bg-white/[0.08] p-4">
            <p className="text-2xl font-black text-white">9.6k</p>
            <p className="mt-1">Newsletter reach</p>
          </div>
        </div>
      </section>

      <LoginComponent />
    </main>
  );
}
