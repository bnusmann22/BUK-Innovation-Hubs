"use client";

import { Search, Filter, MapPin, Users, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const hubsData = [
  {
    id: 1,
    name: "AI & Robotics Hub",
    category: "AI",
    description: "Cutting-edge AI, machine learning, and robotics research",
    focus: "AI, ML, Robotics",
    team: 45,
    programs: 5,
    facilities: "Lab Space, GPU Clusters, Testing Ground",
    image: "🤖",
  },
  {
    id: 2,
    name: "Software Development Center",
    category: "Software",
    description: "Full-stack development and web/mobile app creation",
    focus: "Web Dev, Mobile, Cloud",
    team: 60,
    programs: 8,
    facilities: "Dev Lab, Servers, Cloud Credits",
    image: "💻",
  },
  {
    id: 3,
    name: "Entrepreneurship Zone",
    category: "Entrepreneurship",
    description: "Startup incubation and business development",
    focus: "Startups, Business",
    team: 35,
    programs: 6,
    facilities: "Office Space, Meeting Rooms, Pitch Arena",
    image: "🚀",
  },
  {
    id: 4,
    name: "Design & Innovation Hub",
    category: "Design",
    description: "Product design, UX/UI, and creative innovation",
    focus: "Design, UX/UI",
    team: 25,
    programs: 4,
    facilities: "Studio Space, Design Tools, Prototyping",
    image: "🎨",
  },
  {
    id: 5,
    name: "Research & Commercialization Lab",
    category: "Research",
    description: "Academic research transformation into market solutions",
    focus: "Research, Patents",
    team: 40,
    programs: 5,
    facilities: "Research Lab, IP Support",
    image: "🔬",
  },
  {
    id: 6,
    name: "Hardware Innovation Lab",
    category: "Hardware",
    description: "IoT, embedded systems, and hardware prototyping",
    focus: "IoT, Hardware",
    team: 20,
    programs: 3,
    facilities: "Workshop, Tools, Components",
    image: "⚙️",
  },
  {
    id: 7,
    name: "Blockchain & Web3 Hub",
    category: "Blockchain",
    description: "Cryptocurrency, smart contracts, and decentralized apps",
    focus: "Blockchain, Web3",
    team: 30,
    programs: 4,
    facilities: "Dev Environment, Testnet Access",
    image: "⛓️",
  },
];

const categories = ["All", "AI", "Software", "Entrepreneurship", "Design", "Research", "Hardware", "Blockchain"];

export default function HubsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHubs = hubsData.filter((hub) => {
    const matchesCategory = selectedCategory === "All" || hub.category === selectedCategory;
    const matchesSearch = hub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">
            Innovation Hubs Directory
          </h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Explore our diverse ecosystem of specialized innovation spaces, each
            designed to support different aspects of your entrepreneurial and
            research journey.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-[#dfe6d7] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-[#5a6b57]" />
              <input
                type="text"
                placeholder="Search hubs, facilities, or programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-[#5a6b57] flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? "bg-[#1b5e2b] text-white"
                      : "bg-[#f5f7f2] text-[#172018] hover:bg-[#dfe6d7]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-[#61705d]">
            Showing <span className="font-bold text-[#172018]">{filteredHubs.length}</span> hub
            {filteredHubs.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Hubs Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredHubs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHubs.map((hub) => (
                <Link
                  key={hub.id}
                  href={`/hubs/${hub.id}`}
                  className="group rounded-lg border border-[#dfe6d7] p-6 hover:shadow-xl hover:border-[#1b5e2b] transition bg-white flex flex-col"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition">{hub.image}</div>

                  <h3 className="text-xl font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition">
                    {hub.name}
                  </h3>

                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                      {hub.category}
                    </span>
                  </div>

                  <p className="text-[#61705d] mb-4 text-sm flex-1">
                    {hub.description}
                  </p>

                  <div className="space-y-3 mb-6 pt-4 border-t border-[#dfe6d7]">
                    <div className="flex items-center gap-2 text-sm text-[#61705d]">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{hub.team} team members</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#61705d]">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{hub.programs} active programs</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#61705d]">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{hub.facilities}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#1b5e2b] font-semibold text-sm group-hover:gap-3 transition">
                    View Hub <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-[#61705d] mb-4">No hubs found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-[#1b5e2b] font-semibold hover:text-[#154a22] transition"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Hub Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#172018] mb-12 text-center">Hub Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "7", label: "Active Hubs" },
              { stat: "2,000+", label: "Active Members" },
              { stat: "35+", label: "Programs" },
              { stat: "50+", label: "Startups Incubated" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-8 text-center bg-gradient-to-br from-white to-[#f5f7f2]/50"
              >
                <div className="text-4xl font-bold text-[#1b5e2b] mb-2">{item.stat}</div>
                <p className="text-[#61705d] font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#172018] mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-[#61705d] max-w-2xl mx-auto">
              Our experienced team is dedicated to fostering innovation and supporting your success.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/management"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1b5e2b] px-6 py-3 text-base font-bold text-white hover:bg-[#154a22] transition"
            >
              View Leadership Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Hub</h2>
          <p className="text-lg mb-8 text-white/90">
            Each hub is designed to support your specific innovation journey.
            Connect with a community of like-minded innovators today.
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1b5e2b] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition"
          >
            Join a Program <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
