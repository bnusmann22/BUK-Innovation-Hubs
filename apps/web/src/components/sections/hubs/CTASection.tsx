import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-lg font-bold mb-2">Find Your Perfect Hub</h2>
        <p className="text-xs mb-5 text-white/90">
          Each hub is designed to support your specific innovation journey. Connect with a community of like-minded innovators today.
        </p>
        <Link
          href="/programs"
          className="inline-flex items-center justify-center gap-1.5 bg-white text-[#1b5e2b] px-4 py-2 rounded-md font-bold hover:bg-gray-100 transition text-xs"
        >
          Join a Program <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}