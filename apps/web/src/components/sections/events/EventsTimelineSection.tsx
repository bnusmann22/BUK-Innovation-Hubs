import { Bell, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Event {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  type: string;
  attendees: number;
  speaker: string;
  tags: string[];
}

interface EventsTimelineSectionProps {
  filteredEvents: Event[];
}

export default function EventsTimelineSection({ filteredEvents }: EventsTimelineSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {filteredEvents.length > 0 ? (
          <div className="space-y-6">
            {filteredEvents.map((event, idx) => (
              <div
                key={event.id}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-white group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Date Card */}
                  <div className="md:w-40 flex-shrink-0">
                    <div className="rounded-lg bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10 p-4 text-center">
                      <p className="text-[#1b5e2b] font-bold text-lg">{event.date.split(" ")[1]}</p>
                      <p className="text-[#5a6b57] text-sm font-semibold">
                        {event.date.split(" ").slice(-1)[0]}
                      </p>
                      <p className="text-[#61705d] text-xs mt-2">{event.time}</p>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full mb-2">
                          {event.type}
                        </span>
                        <h3 className="text-2xl font-bold text-[#172018] group-hover:text-[#1b5e2b] transition">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[#61705d] mb-4 line-clamp-2">{event.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm text-[#61705d]">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1b5e2b]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1b5e2b]" />
                        <span>{event.attendees} interested</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Bell className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1b5e2b]" />
                        <span className="text-xs font-semibold text-[#1b5e2b]">Speaker: {event.speaker}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-[#f5f7f2] text-[#5a6b57] rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <Link
                        href="#"
                        className="flex items-center justify-center gap-2 rounded-md bg-[#1b5e2b] px-4 py-2 text-sm font-bold text-white hover:bg-[#154a22] transition"
                      >
                        RSVP <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1b5e2b] px-4 py-2 text-sm font-bold text-[#1b5e2b] hover:bg-[#1b5e2b]/5 transition">
                        <Bell className="w-4 h-4" /> Remind Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-[#61705d]">No events found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}