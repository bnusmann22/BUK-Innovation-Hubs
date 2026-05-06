export default function HistorySection() {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "BUK Innovation Hubs was established with the vision to create a world-class innovation ecosystem within the university.",
    },
    {
      year: "2021",
      title: "First Hub Launch",
      description:
        "The Software Development Center was inaugurated, providing state-of-the-art facilities for tech entrepreneurs.",
    },
    {
      year: "2022",
      title: "Expansion Phase",
      description:
        "Launched AI & Robotics Hub and Entrepreneurship Zone, expanding our support for diverse innovation areas.",
    },
    {
      year: "2023",
      title: "Community Growth",
      description:
        "Reached over 500 active members and incubated 15 startups generating over ₦2B in combined revenue.",
    },
    {
      year: "2024",
      title: "Global Recognition",
      description:
        "Featured in international innovation rankings and established partnerships with global tech companies.",
    },
    {
      year: "2026",
      title: "Today",
      description:
        "Operating 7 specialized innovation hubs with 2,000+ members and 50+ successful startups.",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-xl font-bold text-[#172018] mb-8 text-center">Our History</h2>
        <div className="space-y-8">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#1b5e2b] text-white flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                {idx < milestones.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-[#1b5e2b] to-transparent mt-1.5" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-[10px] font-bold text-[#1b5e2b] mb-0.5">{milestone.year}</p>
                <h3 className="text-sm font-bold text-[#172018] mb-1">{milestone.title}</h3>
                <p className="text-xs text-[#61705d] max-w-2xl">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}