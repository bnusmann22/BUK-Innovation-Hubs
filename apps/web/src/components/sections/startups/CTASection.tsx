import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Startup Journey?</h2>
        <p className="text-lg mb-8 text-white/90">
          Join our incubation program and become the next success story from BUK Innovation Hubs.
        </p>
        <Link
          href="/programs"
          className="inline-block bg-white text-[#1b5e2b] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition"
        >
          Start Your Journey
        </Link>
      </div>
    </section>
  );
}
