import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-3xl rounded-lg border-2 border-[#1b5e2b] p-8 text-center">
        <h2 className="text-3xl font-bold text-[#172018] mb-4">Never Miss an Update</h2>
        <p className="text-lg text-[#61705d] mb-6">
          Subscribe to our newsletter to receive announcements, opportunities, and success stories directly in your inbox.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-[#1b5e2b] text-white px-6 py-3 rounded-md font-bold hover:bg-[#154a22] transition"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </section>
  );
}