import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HeaderSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10 border-b border-[#dfe6d7]">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1b5e2b] font-semibold mb-4 hover:gap-3 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
        <h1 className="text-5xl font-bold text-[#172018] mb-4">Leadership Team</h1>
        <p className="text-lg text-[#61705d] max-w-2xl">
          Meet the visionary leaders driving innovation and excellence at BUK Innovation Hubs.
        </p>
      </div>
    </section>
  );
}