export default function RoadmapSection() {
  const roadmap = [
    {
      quarter: "Q2 2026",
      items: [
        "Launch Blockchain & Web3 Innovation Hub",
        "Open new 2,000 sq ft co-working space",
        "Establish 5 international partnerships",
      ],
    },
    {
      quarter: "Q3 2026",
      items: [
        "Hackathon 2026 with â‚¦10M prize pool",
        "Launch advanced AI research lab",
        "Expand to 1,000+ active members",
      ],
    },
    {
      quarter: "Q4 2026",
      items: [
        "Open satellite hub in Abuja",
        "Launch venture fund (â‚¦500M)",
        "Annual innovation summit with 1,000+ participants",
      ],
    },
    {
      quarter: "2027+",
      items: [
        "Expand to 10 regional hubs across Nigeria",
        "Establish BUK Innovation Fund with â‚¦1B",
        "Create unicorn pipeline with global mentors",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Our Roadmap</h2>
        <div className="rounded-lg border border-[#dfe6d7] p-8 bg-gradient-to-br from-white to-[#f5f7f2]/50">
          <div className="space-y-6">
            {roadmap.map((phase, idx) => (
              <div key={idx} className="pb-6 border-b border-[#dfe6d7] last:border-0 last:pb-0">
                <h3 className="text-lg font-bold text-[#1b5e2b] mb-3">{phase.quarter}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#61705d]">
                      <span className="text-[#1b5e2b] font-bold">âœ“</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
