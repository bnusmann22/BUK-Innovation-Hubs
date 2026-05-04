"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowLeft,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

// Mock data - replace with real data fetching
const hubsData = {
  1: {
    name: "AI & Robotics Hub",
    description: "Cutting-edge AI, machine learning, and robotics research and innovation",
    imageEmoji: "🤖",
    focus: "AI, Machine Learning, Robotics",
    established: "2022",
    location: "BUK Campus, Building A, Room 101",
    team: 45,
    programCount: 5,
    facilities:
      "GPU Clusters, Laboratory Space, Testing Ground, High-Speed Internet, Robotics Lab",
    contact: {
      email: "ai-hub@buk-hubs.edu.ng",
      phone: "+234 (0) 800 000 0001",
      website: "ai-hub.buk-hubs.edu.ng",
    },
    leadership: [
      { name: "Dr. Amina Sani", title: "Hub Director", avatar: "👩‍💼" },
      { name: "Prof. Ibrahim Ahmed", title: "Technical Lead", avatar: "👨‍💼" },
    ],
    programs: [
      {
        name: "AI Research Fellowship",
        status: "Open",
        deadline: "June 30, 2026",
        description: "6-month program for AI researchers",
      },
      {
        name: "Robotics Bootcamp",
        status: "Open",
        deadline: "May 31, 2026",
        description: "12-week intensive robotics training",
      },
      {
        name: "AI Internship",
        status: "Rolling",
        deadline: "N/A",
        description: "3-6 month internship opportunities",
      },
    ],
    successStories: [
      { title: "EduTech AI Platform", description: "AI for personalized learning" },
      { title: "Robotics Arm Project", description: "Industrial automation solution" },
    ],
    upcomingEvents: [
      { date: "May 15, 2026", title: "AI & Innovation Workshop", time: "2:00 PM" },
      { date: "June 5, 2026", title: "Research Presentation Day", time: "10:00 AM" },
    ],
  },
};

export default function HubProfilePage() {
  const params = useParams();
  const hubId = params?.id as string;
  const hub = hubsData[parseInt(hubId) as keyof typeof hubsData];

  if (!hub) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#172018] mb-4">Hub Not Found</h1>
          <p className="text-[#61705d] mb-8">The hub you're looking for doesn't exist.</p>
          <Link
            href="/hubs"
            className="inline-flex items-center gap-2 bg-[#1b5e2b] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#154a22] transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Hubs
          </Link>
        </div>
      </div>
    );
  }

  const programsList = hub.programs || [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#dfe6d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/hubs"
            className="inline-flex items-center gap-2 text-[#1b5e2b] font-semibold hover:text-[#154a22] mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hubs
          </Link>

          <div className="flex items-start gap-6">
            <div className="text-7xl">{hub.imageEmoji}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-[#172018] mb-2">{hub.name}</h1>
              <p className="text-lg text-[#61705d] mb-4">{hub.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 text-[#5a6b57]">
                  <MapPin className="w-4 h-4" />
                  {hub.location}
                </span>
                <span className="inline-flex items-center gap-2 text-[#5a6b57]">
                  <Calendar className="w-4 h-4" />
                  Established {hub.established}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Team Members", value: hub.team },
              { label: "Active Programs", value: hub.programs.length },
              { label: "Success Stories", value: hub.successStories.length },
              { label: "Upcoming Events", value: hub.upcomingEvents.length },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-lg border border-[#dfe6d7] p-4 text-center">
                <div className="text-3xl font-bold text-[#1b5e2b] mb-1">{stat.value}</div>
                <p className="text-sm text-[#61705d]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#172018] mb-4">About This Hub</h2>
            <div className="space-y-4 text-[#61705d]">
              <div>
                <p className="font-bold text-[#172018] mb-1">Focus Area:</p>
                <p>{hub.focus}</p>
              </div>
              <div>
                <p className="font-bold text-[#172018] mb-1">Facilities:</p>
                <p>{hub.facilities}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#172018] mb-4">Contact & Connect</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1b5e2b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#5a6b57] font-semibold mb-1">Email</p>
                  <a
                    href={`mailto:${hub.contact.email}`}
                    className="text-[#1b5e2b] hover:text-[#154a22] transition"
                  >
                    {hub.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1b5e2b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#5a6b57] font-semibold mb-1">Phone</p>
                  <a
                    href={`tel:${hub.contact.phone}`}
                    className="text-[#1b5e2b] hover:text-[#154a22] transition"
                  >
                    {hub.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#1b5e2b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#5a6b57] font-semibold mb-1">Website</p>
                  <a
                    href={`https://${hub.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1b5e2b] hover:text-[#154a22] transition inline-flex items-center gap-1"
                  >
                    {hub.contact.website}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hub.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 text-center bg-gradient-to-br from-white to-[#f5f7f2]/50"
              >
                <div className="text-5xl mb-3">{leader.avatar}</div>
                <h3 className="font-bold text-[#172018] mb-1">{leader.name}</h3>
                <p className="text-sm text-[#1b5e2b] font-semibold">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Active Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programsList.map((program, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#172018]">{program.name}</h3>
                  <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                    {program.status}
                  </span>
                </div>
                <p className="text-[#61705d] text-sm mb-3">{program.description}</p>
                <p className="text-xs text-[#5a6b57] font-semibold">
                  Deadline: {program.deadline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hub.successStories.map((story, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-[#172018] mb-2">{story.title}</h3>
                <p className="text-[#61705d]">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Upcoming Events</h2>
          <div className="space-y-4">
            {hub.upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#1b5e2b]" />
                      <span className="text-sm font-semibold text-[#5a6b57]">
                        {event.date} @ {event.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#172018]">{event.title}</h3>
                  </div>
                  <Link
                    href="/events"
                    className="text-[#1b5e2b] font-semibold hover:text-[#154a22] transition flex-shrink-0"
                  >
                    RSVP →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join {hub.name}?</h2>
          <p className="text-lg mb-8 text-white/90">
            Explore our programs and become part of this innovation community.
          </p>
          <Link
            href="/programs"
            className="inline-block bg-white text-[#1b5e2b] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition"
          >
            View Programs
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto rounded-lg border border-[#dfe6d7] p-8 text-center">
          <h2 className="text-2xl font-bold text-[#172018] mb-2">Stay Updated</h2>
          <p className="text-[#61705d] mb-6">
            Subscribe to {hub.name} updates and never miss an opportunity.
          </p>
          <Link
            href="/newsletter"
            className="inline-block bg-[#1b5e2b] text-white px-6 py-3 rounded-md font-bold hover:bg-[#154a22] transition"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
