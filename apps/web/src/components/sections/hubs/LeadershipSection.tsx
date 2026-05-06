import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadershipSection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#172018] mb-2">Meet Our Leadership</h2>
          <p className="text-xs text-[#61705d] max-w-2xl mx-auto">
            Our experienced team is dedicated to fostering innovation and supporting your success.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/management"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#1b5e2b] px-4 py-2 text-xs font-bold text-white hover:bg-[#154a22] transition"
          >
            View Leadership Team <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
