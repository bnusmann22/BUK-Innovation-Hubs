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
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-sm font-bold text-[#172018] mb-6 text-center">Institutional Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-3 text-center hover:shadow-lg transition"
            >
              <div className="text-2xl mb-1.5">{partner.logo}</div>
              <p className="font-semibold text-[#172018] text-[10px]">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}