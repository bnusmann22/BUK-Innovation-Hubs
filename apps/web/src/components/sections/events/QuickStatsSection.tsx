interface Event {
  attendees: number;
}

interface QuickStatsSectionProps {
  filteredEvents: Event[];
}

export default function QuickStatsSection({ filteredEvents }: QuickStatsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#172018] mb-8">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg border border-[#dfe6d7] p-8 text-center">
            <p className="text-4xl font-bold text-[#1b5e2b] mb-2">{filteredEvents.length}</p>
            <p className="text-[#61705d] font-semibold">Upcoming Events</p>
          </div>
          <div className="rounded-lg border border-[#dfe6d7] p-8 text-center">
            <p className="text-4xl font-bold text-[#1b5e2b] mb-2">
              {filteredEvents.reduce((sum, e) => sum + e.attendees, 0)}+
            </p>
            <p className="text-[#61705d] font-semibold">Expected Participants</p>
          </div>
          <div className="rounded-lg border border-[#dfe6d7] p-8 text-center">
            <p className="text-4xl font-bold text-[#1b5e2b] mb-2">Free</p>
            <p className="text-[#61705d] font-semibold">Event Registration</p>
          </div>
        </div>
      </div>
    </section>
  );
}