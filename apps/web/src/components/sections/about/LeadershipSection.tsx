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
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-sm font-bold text-[#172018] mb-6 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#dfe6d7] p-4 bg-gradient-to-br from-white to-[#f5f7f2]/50 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#1b5e2b]/20 flex items-center justify-center mx-auto mb-2.5 text-xl">
                👤
              </div>
              <h3 className="text-xs font-bold text-[#172018] mb-0.5">{leader.name}</h3>
              <p className="text-[10px] font-semibold text-[#1b5e2b] mb-1.5">{leader.title}</p>
              <p className="text-[10px] text-[#61705d]">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}