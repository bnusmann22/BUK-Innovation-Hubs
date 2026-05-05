export default function PrivacyNotice() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f7f2]">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-[#dfe6d7] p-6 bg-white">
          <h3 className="font-bold text-[#172018] mb-2">Your Privacy Matters</h3>
          <p className="text-sm text-[#61705d]">
            We take your privacy seriously. We'll only email you with content you've opted into and never
            sell your information. You can unsubscribe or update your preferences anytime. Read our{" "}
            <a href="#" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
              Privacy Policy
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
}