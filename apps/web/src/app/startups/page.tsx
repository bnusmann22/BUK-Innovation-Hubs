"use client";

import { TrendingUp, Users, Award, Target, Search, Filter, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const startupsData = [
  {
    id: 1,
    name: "EduTech Solutions",
    stage: "Seed Stage",
    description: "AI-powered personalized education platform for African students",
    founded: "2024",
    team: 4,
    funding: "₦50M",
    website: "edutech.example.com",
    founder: "Aisha Mohammed",
    tags: ["EdTech", "AI", "B2B"],
    impact: "5,000+ students",
    logo: "🎓",
  },
  {
    id: 2,
    name: "GreenEnergy Hub",
    stage: "Series A",
    description: "Affordable renewable energy solutions for SMEs and households",
    founded: "2023",
    team: 8,
    funding: "₦250M",
    website: "greenenergy.example.com",
    founder: "Ibrahim Hassan",
    tags: ["CleanTech", "Energy", "B2B"],
    impact: "500+ homes",
    logo: "⚡",
  },
  {
    id: 3,
    name: "HealthConnect",
    stage: "Pre-seed",
    description: "Telemedicine platform connecting rural communities with healthcare",
    founded: "2025",
    team: 3,
    funding: "Bootstrapped",
    website: "healthconnect.example.com",
    founder: "Dr. Zainab Okafor",
    tags: ["HealthTech", "Telehealth", "B2C"],
    impact: "2,000+ patients",
    logo: "🏥",
  },
  {
    id: 4,
    name: "AgriTech Innovations",
    stage: "Seed Stage",
    description: "Smart farming solutions using IoT and data analytics",
    founded: "2024",
    team: 5,
    funding: "₦80M",
    website: "agritech.example.com",
    founder: "Khalid Adamu",
    tags: ["AgriTech", "IoT", "B2B"],
    impact: "200+ farms",
    logo: "🌾",
  },
  {
    id: 5,
    name: "FinnovaPay",
    stage: "Series A",
    description: "Mobile-first payment and financial services for unbanked population",
    founded: "2023",
    team: 12,
    funding: "₦300M",
    website: "finnovapay.example.com",
    founder: "Amara Chukwu",
    tags: ["FinTech", "Payments", "B2C"],
    impact: "50,000+ users",
    logo: "💳",
  },
  {
    id: 6,
    name: "LogiTrack Systems",
    stage: "Seed Stage",
    description: "Supply chain optimization using AI and real-time tracking",
    founded: "2024",
    team: 6,
    funding: "₦120M",
    website: "logitrack.example.com",
    founder: "Usman Bello",
    tags: ["Logistics", "B2B", "AI"],
    impact: "100+ businesses",
    logo: "📦",
  },
];

const stages = ["All", ...new Set(startupsData.map((s) => s.stage))];

export default function StartupsPage() {
  const [selectedStage, setSelectedStage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStartups = startupsData.filter((startup) => {
    const matchesStage = selectedStage === "All" || startup.stage === selectedStage;
    const matchesSearch =
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStage && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Success Stories & Startups</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Meet the innovative startups, projects, and companies born from BUK Innovation
            Hubs. Discover the entrepreneurs and innovators transforming ideas into impact.
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
                placeholder="Search startups or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
              />
            </div>
          </div>

          {/* Stage Filter */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-[#5a6b57] flex-shrink-0" />
            {stages.map((stage) => (
              <button
                key={stage}
                onClick={() => setSelectedStage(stage)}
                className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition ${
                  selectedStage === stage
                    ? "bg-[#1b5e2b] text-white"
                    : "bg-[#f5f7f2] text-[#172018] hover:bg-[#dfe6d7]"
                }`}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup) => (
              <div
                key={startup.id}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-xl hover:border-[#1b5e2b] transition bg-white flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{startup.logo}</div>
                  <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                    {startup.stage}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#172018] mb-1">{startup.name}</h3>
                <p className="text-sm text-[#5a6b57] font-semibold mb-3">Founded {startup.founded}</p>

                <p className="text-[#61705d] text-sm mb-4 flex-1 line-clamp-2">
                  {startup.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-b border-[#dfe6d7]">
                  <div>
                    <p className="text-xs text-[#5a6b57] font-semibold mb-1">Funding</p>
                    <p className="text-sm font-bold text-[#172018]">{startup.funding}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#5a6b57] font-semibold mb-1">Team</p>
                    <p className="text-sm font-bold text-[#172018]">{startup.team} people</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#5a6b57] font-semibold mb-1">Founder</p>
                    <p className="text-sm font-bold text-[#172018]">{startup.founder}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#5a6b57] font-semibold mb-1">Impact</p>
                    <p className="text-sm font-bold text-[#172018]">{startup.impact}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {startup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#f5f7f2] text-[#5a6b57] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1b5e2b] px-4 py-2 text-sm font-bold text-[#1b5e2b] hover:bg-[#1b5e2b]/5 transition w-full"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#172018] mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "50+", label: "Active Startups" },
              { metric: "₦2B+", label: "Combined Revenue" },
              { metric: "500+", label: "Jobs Created" },
              { metric: "₦800M", label: "Raised Funding" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-8 text-center bg-gradient-to-br from-white to-[#f5f7f2]/50"
              >
                <div className="text-4xl font-bold text-[#1b5e2b] mb-2">{item.metric}</div>
                <p className="text-[#61705d] font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#172018] mb-12 text-center">Founder Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((story, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-8 bg-gradient-to-br from-white to-[#f5f7f2]/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {"⭐⭐⭐⭐⭐".split("").map((star, i) => (
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Startup Journey?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join our incubation program and become the next success story from BUK Innovation Hubs.
          </p>
          <Link
            href="/programs"
            className="inline-block bg-white text-[#1b5e2b] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
