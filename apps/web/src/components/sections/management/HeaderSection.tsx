import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HeaderSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10 border-b border-[#dfe6d7]">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[#1b5e2b] font-semibold mb-3 text-xs hover:gap-2 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </Link>
        <h1 className="text-xl font-bold text-[#172018] mb-2">Leadership Team</h1>
        <p className="text-xs text-[#61705d] max-w-2xl">
          Meet the visionary leaders driving innovation and excellence at BUK Innovation Hubs.
        </p>
      </div>
    </section>
  );
}