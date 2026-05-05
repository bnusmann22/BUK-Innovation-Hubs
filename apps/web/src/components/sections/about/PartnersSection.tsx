export default function PartnersSection() {
  const partners = [
    { name: "Tech Giant Corp", logo: "🏢" },
    { name: "Global Ventures", logo: "💼" },
    { name: "Innovation Fund", logo: "💰" },
    { name: "Research Institute", logo: "🔬" },
    { name: "Industry Leaders", logo: "⚙️" },
    { name: "Government Agency", logo: "🏛️" },
    { name: "Education Body", logo: "📚" },
    { name: "Community Partner", logo: "🤝" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Institutional Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-3">{partner.logo}</div>
              <p className="font-semibold text-[#172018] text-sm">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}