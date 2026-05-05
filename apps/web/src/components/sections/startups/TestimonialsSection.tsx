export default function TestimonialsSection() {
  const stories = [
    {
      quote:
        "BUK Innovation Hubs gave us the infrastructure and mentorship we needed to scale our product. Within 18 months, we reached 5,000 students.",
      founder: "Aisha Mohammed",
      company: "EduTech Solutions",
      achievement: "Seed Round Closed",
    },
    {
      quote:
        "The ecosystem here is unmatched. We connected with investors, customers, and partners all in one place. This accelerated our growth by 10x.",
      founder: "Ibrahim Hassan",
      company: "GreenEnergy Hub",
      achievement: "Series A Funded",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#172018] mb-12 text-center">Founder Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-8 bg-gradient-to-br from-white to-[#f5f7f2]/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {"â­â­â­â­â­".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-lg text-[#172018] font-semibold mb-6 italic">
                "{story.quote}"
              </p>
              <div className="pt-4 border-t border-[#dfe6d7]">
                <p className="font-bold text-[#172018]">{story.founder}</p>
                <p className="text-sm text-[#1b5e2b] font-semibold mb-1">{story.company}</p>
                <p className="text-xs text-[#5a6b57]">{story.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
