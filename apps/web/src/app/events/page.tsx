"use client";

import { Calendar, Clock, MapPin, Users, Bell, ArrowRight, Filter, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const eventsData = [
  {
    id: 1,
    date: "May 15, 2026",
    time: "2:00 PM - 5:00 PM",
    title: "AI & Innovation Workshop",
    description:
      "Learn cutting-edge AI techniques and applications from industry experts. Perfect for beginners and intermediate learners.",
    location: "Tech Hub, Room A101",
    type: "Workshop",
    attendees: 120,
    speaker: "Dr. Amina Sani (Google AI)",
    tags: ["AI", "ML", "Learning"],
  },
  {
    id: 2,
    date: "May 22, 2026",
    time: "10:00 AM - 1:00 PM",
    title: "Startup Pitch Session",
    description:
      "Pitch your startup idea to investors and industry leaders. Open to all stages of startups.",
    location: "Entrepreneurship Zone",
    type: "Pitch",
    attendees: 85,
    speaker: "Multiple Investors",
    tags: ["Startup", "Pitching", "Funding"],
  },
  {
    id: 3,
    date: "May 29, 2026",
    time: "4:00 PM - 6:00 PM",
    title: "Networking Mixer",
    description:
      "Meet fellow innovators, entrepreneurs, and industry professionals in a casual setting.",
    location: "Innovation Hub Lounge",
    type: "Networking",
    attendees: 200,
    speaker: "Community Leaders",
    tags: ["Networking", "Community"],
  },
  {
    id: 4,
    date: "June 5, 2026",
    time: "9:00 AM - 5:00 PM",
    title: "Product Design Masterclass",
    description:
      "Deep dive into user-centered design principles and prototyping methodologies.",
    location: "Design Hub Studio",
    type: "Masterclass",
    attendees: 60,
    speaker: "Prof. Ibrahim Hassan (MIT)",
    tags: ["Design", "UX/UI", "Prototyping"],
  },
  {
    id: 5,
    date: "June 12, 2026",
    time: "1:00 PM - 4:00 PM",
    title: "Blockchain Bootcamp",
    description:
      "Introduction to blockchain technology, smart contracts, and Web3 applications.",
    location: "Blockchain Hub",
    type: "Bootcamp",
    attendees: 150,
    speaker: "Crypto Experts Panel",
    tags: ["Blockchain", "Web3", "Development"],
  },
  {
    id: 6,
    date: "June 20, 2026",
    time: "All Day",
    title: "Innovation Summit 2026",
    description:
      "Annual flagship event featuring keynotes, workshops, expo, and networking with 1000+ participants.",
    location: "Grand Convention Center",
    type: "Conference",
    attendees: 1000,
    speaker: "International Thought Leaders",
    tags: ["Conference", "Networking", "Innovation"],
  },
];

const eventTypes = ["All", ...new Set(eventsData.map((e) => e.type))];

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = eventsData.filter((event) => {
    const matchesType = selectedType === "All" || event.type === selectedType;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Events & Activities</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Join workshops, seminars, networking events, and competitions. Connect with
            the innovation community and stay updated on the latest opportunities.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-[#dfe6d7] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-[#5a6b57]" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-[#5a6b57] flex-shrink-0" />
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition ${
                  selectedType === type
                    ? "bg-[#1b5e2b] text-white"
                    : "bg-[#f5f7f2] text-[#172018] hover:bg-[#dfe6d7]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline */}
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

      {/* Calendar View Section */}
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
    </div>
  );
}
