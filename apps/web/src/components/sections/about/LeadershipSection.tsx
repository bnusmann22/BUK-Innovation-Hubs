export default function LeadershipSection() {
  const leaders = [
    {
      name: "Dr. Muhammad Ali",
      title: "Director",
      bio: "Former tech entrepreneur with 15+ years in innovation ecosystem development.",
    },
    {
      name: "Fatima Hassan",
      title: "Head of Programs",
      bio: "Expert in startup acceleration with track record of 20+ successful exits.",
    },
    {
      name: "Kadir Sani",
      title: "Director of Operations",
      bio: "Operations specialist managing 7 hubs and 500+ daily active users.",
    },
    {
      name: "Hadiza Ibrahim",
      title: "Head of Partnerships",
      bio: "Established partnerships with Fortune 500 companies and global VCs.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-6 bg-gradient-to-br from-white to-[#f5f7f2]/50 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#1b5e2b]/20 flex items-center justify-center mx-auto mb-4 text-4xl">
                👤
              </div>
              <h3 className="text-lg font-bold text-[#172018] mb-1">{leader.name}</h3>
              <p className="text-sm font-semibold text-[#1b5e2b] mb-3">{leader.title}</p>
              <p className="text-sm text-[#61705d]">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}