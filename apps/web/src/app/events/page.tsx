"use client";

import { useState } from "react";
import {
  HeroSection,
  SearchFilterSection,
  EventsTimelineSection,
  QuickStatsSection,
} from "@/components/sections/events";

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

const eventsData: Event[] = [
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
      <HeroSection />
      <SearchFilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        eventTypes={eventTypes}
      />
      <EventsTimelineSection filteredEvents={filteredEvents} />
      <QuickStatsSection filteredEvents={filteredEvents} />
    </div>
  );
}
