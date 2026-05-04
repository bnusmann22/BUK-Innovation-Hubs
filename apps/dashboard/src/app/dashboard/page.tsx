const stats = [
  {
    label: "Active Hubs",
    value: "8",
    helper: "Across BUK faculties",
    trend: "+2 this semester",
  },
  {
    label: "Registered Innovators",
    value: "1,284",
    helper: "Students and mentors",
    trend: "+18% monthly",
  },
  {
    label: "Projects Incubated",
    value: "146",
    helper: "Research and startup ideas",
    trend: "31 ready for demo",
  },
  {
    label: "Newsletter Reach",
    value: "9.6k",
    helper: "Subscribers and alumni",
    trend: "+740 new readers",
  },
];

const hubs = [
  {
    name: "AI and Data Science Hub",
    faculty: "Computing",
    lead: "Dr. Amina Yusuf",
    members: 218,
    occupancy: 88,
    status: "High demand",
  },
  {
    name: "Renewable Energy Lab",
    faculty: "Engineering",
    lead: "Engr. Musa Lawal",
    members: 172,
    occupancy: 74,
    status: "Open slots",
  },
  {
    name: "Health Innovation Studio",
    faculty: "Clinical Sciences",
    lead: "Dr. Sadiq Bello",
    members: 139,
    occupancy: 67,
    status: "Growing",
  },
  {
    name: "Agritech and Food Systems Hub",
    faculty: "Agriculture",
    lead: "Prof. Halima Umar",
    members: 194,
    occupancy: 81,
    status: "Field active",
  },
];

const monthlyActivity = [
  { month: "Nov", projects: 28, events: 8 },
  { month: "Dec", projects: 35, events: 11 },
  { month: "Jan", projects: 42, events: 9 },
  { month: "Feb", projects: 57, events: 14 },
  { month: "Mar", projects: 69, events: 18 },
  { month: "Apr", projects: 84, events: 21 },
];

const priorityActions = [
  "Publish April innovation digest",
  "Feature 4 student founders",
  "Send call for hub mentors",
];

const recentActions = [
  "AI Hub approved 12 new project teams",
  "Agritech Hub uploaded field demo report",
  "Energy Lab scheduled solar prototype review",
  "Health Studio opened medical device cohort",
];

export default function DashboardPage() {
  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article
            className="rounded-lg border border-[#a8d8e6] bg-white p-5 shadow-sm"
            key={item.label}
          >
            <p className="text-sm font-semibold text-[#0f766e]">{item.label}</p>
            <p className="mt-3 text-3xl font-black text-[#006b85]">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-[#0f766e]">{item.helper}</p>
            <p className="mt-4 rounded-md bg-[#d0f0ff] px-3 py-2 text-xs font-bold text-[#009fc3]">
              {item.trend}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <article className="rounded-lg border border-[#a8d8e6] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-black">Projects and events</h3>
              <p className="text-sm text-[#0f766e]">
                Monthly activity across registered BUK innovation hubs.
              </p>
            </div>
            <p className="text-sm font-semibold text-[#009fc3]">
              April peak: 84 projects
            </p>
          </div>

          <div className="mt-8 grid h-72 grid-cols-6 items-end gap-3 border-b border-l border-[#a8d8e6] pl-3">
            {monthlyActivity.map((item) => (
              <div
                className="flex h-full flex-col justify-end gap-2"
                key={item.month}
              >
                <div className="flex items-end justify-center gap-1">
                  <div
                    aria-label={`${item.projects} projects in ${item.month}`}
                    className="w-7 rounded-t-md bg-[#009fc3]"
                    style={{ height: `${item.projects * 2.4}px` }}
                  />
                  <div
                    aria-label={`${item.events} events in ${item.month}`}
                    className="w-7 rounded-t-md bg-[#10b981]"
                    style={{ height: `${item.events * 6}px` }}
                  />
                </div>
                <p className="text-center text-xs font-bold text-[#0f766e]">
                  {item.month}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#0f766e]">
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-sm bg-[#009fc3]" />
              Projects
            </span>
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-sm bg-[#10b981]" />
              Events
            </span>
          </div>
        </article>

        <article className="rounded-lg border border-[#a8d8e6] bg-[#006b85] p-5 text-white shadow-sm">
          <h3 className="text-xl font-black">Priority actions</h3>
          <p className="mt-2 text-sm leading-6 text-[#a8d8e6]">
            Operational tasks that need attention from the hub management team
            this week.
          </p>
          <div className="mt-6 space-y-3">
            {priorityActions.map((item, index) => (
              <button
                className="flex w-full items-center gap-3 rounded-md bg-white/[0.08] p-3 text-left text-sm font-semibold transition hover:bg-white/[0.12]"
                key={item}
                type="button"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#06b6d4] text-xs font-black text-white">
                  {index + 1}
                </span>
                {item}
              </button>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
        <article className="rounded-lg border border-[#a8d8e6] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black">Hub capacity</h3>
              <p className="text-sm text-[#0f766e]">
                Membership, leads, and current occupancy by hub.
              </p>
            </div>
            <button
              className="rounded-md border border-[#a8d8e6] px-3 py-2 text-sm font-bold text-[#006b85] transition hover:border-[#009fc3]"
              type="button"
            >
              Manage hubs
            </button>
          </div>

          <div className="mt-6 overflow-x-auto rounded-lg border border-[#a8d8e6]">
            <div className="min-w-[680px]">
              <div className="grid grid-cols-[1.2fr_0.8fr_0.55fr] bg-[#f0f9fc] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#0f766e]">
                <span>Hub</span>
                <span>Lead</span>
                <span>Capacity</span>
              </div>
              {hubs.map((hub) => (
                <div
                  className="grid grid-cols-[1.2fr_0.8fr_0.55fr] gap-4 border-t border-[#a8d8e6] px-4 py-4 text-sm"
                  key={hub.name}
                >
                  <div>
                    <p className="font-bold text-[#006b85]">{hub.name}</p>
                    <p className="mt-1 text-xs text-[#0f766e]">
                      {hub.faculty} - {hub.members} members - {hub.status}
                    </p>
                  </div>
                  <p className="font-semibold text-[#0f766e]">{hub.lead}</p>
                  <div>
                    <p className="text-xs font-bold text-[#009fc3]">
                      {hub.occupancy}%
                    </p>
                    <div className="mt-2 h-2 rounded-full bg-[#a8d8e6]">
                      <div
                        className="h-2 rounded-full bg-[#009fc3]"
                        style={{ width: `${hub.occupancy}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-[#a8d8e6] bg-white p-5 shadow-sm">
          <h3 className="text-xl font-black">Recent activity</h3>
          <p className="mt-2 text-sm text-[#0f766e]">
            Latest updates from hub coordinators and program managers.
          </p>
          <div className="mt-6 space-y-4">
            {recentActions.map((action) => (
              <div className="flex gap-3" key={action}>
                <span className="mt-1 size-3 shrink-0 rounded-full bg-[#009fc3]" />
                <p className="text-sm font-medium leading-6 text-[#0f766e]">
                  {action}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-[#d0f0ff] p-4">
            <p className="text-sm font-black text-[#006b85]">
              Next leadership review
            </p>
            <p className="mt-2 text-sm leading-6 text-[#0f766e]">
              Thursday, 7 May 2026 at 10:00 AM. Agenda: project milestones,
              newsletter approval, and mentor allocation.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
