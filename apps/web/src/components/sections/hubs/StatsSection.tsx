export default function StatsSection() {
  const stats = [
    { stat: "7", label: "Active Hubs" },
    { stat: "2,000+", label: "Active Members" },
    { stat: "35+", label: "Programs" },
    { stat: "50+", label: "Startups Incubated" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-xl font-bold text-[#172018] mb-8 text-center">Hub Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-5 text-center bg-gradient-to-br from-white to-[#f5f7f2]/50"
            >
              <div className="text-2xl font-bold text-[#1b5e2b] mb-1.5">{item.stat}</div>
              <p className="text-[11px] text-[#61705d] font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}