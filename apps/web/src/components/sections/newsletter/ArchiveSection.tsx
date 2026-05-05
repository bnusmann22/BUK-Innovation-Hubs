export default function ArchiveSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#172018] mb-12 text-center">Recent Newsletters</h2>

        <div className="space-y-4">
          {[
            { date: "April 30, 2026", subject: "May Opportunities & New Programs Launch" },
            { date: "April 23, 2026", subject: "Hackathon Registration Open - 500 Spots Available" },
            { date: "April 16, 2026", subject: "Featured Startup Success: EduTech Closes Seed Round" },
            { date: "April 9, 2026", subject: "New Partnership: Global Tech Leaders Join BUK Hubs" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-4 hover:shadow-md transition bg-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#5a6b57] font-semibold mb-1">{item.date}</p>
                  <p className="font-semibold text-[#172018]">{item.subject}</p>
                </div>
                <a
                  href="#"
                  className="text-[#1b5e2b] font-semibold hover:text-[#154a22] transition flex-shrink-0"
                >
                  Read →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}