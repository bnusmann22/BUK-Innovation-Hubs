export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#172018] mb-12 text-center">What You'll Get</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "📢",
              title: "Timely Announcements",
              description:
                "First to know about new hubs, programs, funding opportunities, and partnerships.",
            },
            {
              icon: "🎉",
              title: "Event Invitations",
              description:
                "Early access to workshops, hackathons, networking events, and seminar registrations.",
            },
            {
              icon: "💰",
              title: "Funding Alerts",
              description:
                "Curated grant opportunities, investor profiles, and funding news relevant to your interests.",
            },
            {
              icon: "👥",
              title: "Success Stories",
              description:
                "Inspiring stories from our community of successful founders, researchers, and innovators.",
            },
            {
              icon: "🚀",
              title: "Exclusive Resources",
              description:
                "Access to guides, templates, and resources to help you succeed in your innovation journey.",
            },
            {
              icon: "🌐",
              title: "Community Updates",
              description:
                "Behind-the-scenes insights and updates from across all BUK Innovation Hubs.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#172018] mb-2">{item.title}</h3>
              <p className="text-[#61705d]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}