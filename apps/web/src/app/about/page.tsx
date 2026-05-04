"use client";

import { Award, Target, Users, Globe, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">About BUK Innovation Hubs</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Empowering the next generation of innovators, entrepreneurs, and
            researchers to create meaningful impact through cutting-edge innovation
            spaces and comprehensive support programs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-lg border border-[#dfe6d7] p-8 bg-gradient-to-br from-white to-[#f5f7f2]/50">
              <Target className="w-12 h-12 text-[#1b5e2b] mb-4" />
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Our Mission</h2>
              <p className="text-[#61705d] leading-relaxed">
                To foster a vibrant innovation ecosystem at Bayero University
                Kano that transforms ideas into tangible solutions, empowers
                students and researchers to pursue their entrepreneurial dreams,
                and drives socio-economic development through technology and
                innovation.
              </p>
            </div>

            <div className="rounded-lg border border-[#dfe6d7] p-8 bg-gradient-to-br from-white to-[#f5f7f2]/50">
              <Zap className="w-12 h-12 text-[#1b5e2b] mb-4" />
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Our Vision</h2>
              <p className="text-[#61705d] leading-relaxed">
                To position Bayero University Kano as a leading innovation hub
                in Africa, recognized for producing world-class startups,
                breakthroughs in research, and innovative solutions that address
                global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Our History</h2>

          <div className="space-y-12">
            {[
              {
                year: "2020",
                title: "Foundation",
                description:
                  "BUK Innovation Hubs was established with the vision to create a world-class innovation ecosystem within the university.",
              },
              {
                year: "2021",
                title: "First Hub Launch",
                description:
                  "The Software Development Center was inaugurated, providing state-of-the-art facilities for tech entrepreneurs.",
              },
              {
                year: "2022",
                title: "Expansion Phase",
                description:
                  "Launched AI & Robotics Hub and Entrepreneurship Zone, expanding our support for diverse innovation areas.",
              },
              {
                year: "2023",
                title: "Community Growth",
                description:
                  "Reached over 500 active members and incubated 15 startups generating over ₦2B in combined revenue.",
              },
              {
                year: "2024",
                title: "Global Recognition",
                description:
                  "Featured in international innovation rankings and established partnerships with global tech companies.",
              },
              {
                year: "2026",
                title: "Today",
                description:
                  "Operating 7 specialized innovation hubs with 2,000+ members and 50+ successful startups.",
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1b5e2b] text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  {idx < 5 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-[#1b5e2b] to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-12">
                  <p className="text-sm font-bold text-[#1b5e2b] mb-1">{milestone.year}</p>
                  <h3 className="text-2xl font-bold text-[#172018] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-[#61705d] max-w-2xl">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Strategic Goals</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                goal: "Community Building",
                description: "Create a thriving community of 5,000+ active innovators and entrepreneurs by 2027.",
              },
              {
                icon: TrendingUp,
                goal: "Startup Success",
                description: "Incubate and scale 100+ startups generating ₦100B+ in combined revenue.",
              },
              {
                icon: Globe,
                goal: "Global Impact",
                description:
                  "Establish partnerships with leading global tech companies and innovation hubs worldwide.",
              },
              {
                icon: Award,
                goal: "Recognition",
                description:
                  "Become Africa's top 5 university innovation hub recognized for excellence and impact.",
              },
              {
                icon: Zap,
                goal: "Research Commercialization",
                description:
                  "Transform 50+ academic research projects into market-ready solutions annually.",
              },
              {
                icon: Target,
                goal: "Skills Development",
                description:
                  "Train 1,000+ students annually in innovation, entrepreneurship, and emerging technologies.",
              },
            ].map((goal, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition"
              >
                <goal.icon className="w-10 h-10 text-[#1b5e2b] mb-3" />
                <h3 className="text-lg font-bold text-[#172018] mb-2">{goal.goal}</h3>
                <p className="text-[#61705d]">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
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
            ].map((leader, idx) => (
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

      {/* Institutional Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Institutional Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "Tech Giant Corp", logo: "🏢" },
              { name: "Global Ventures", logo: "💼" },
              { name: "Innovation Fund", logo: "💰" },
              { name: "Research Institute", logo: "🔬" },
              { name: "Industry Leaders", logo: "⚙️" },
              { name: "Government Agency", logo: "🏛️" },
              { name: "Education Body", logo: "📚" },
              { name: "Community Partner", logo: "🤝" },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-3">{partner.logo}</div>
                <p className="font-semibold text-[#172018] text-sm">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Our Roadmap</h2>

          <div className="rounded-lg border border-[#dfe6d7] p-8 bg-gradient-to-br from-white to-[#f5f7f2]/50">
            <div className="space-y-6">
              {[
                {
                  quarter: "Q2 2026",
                  items: [
                    "Launch Blockchain & Web3 Innovation Hub",
                    "Open new 2,000 sq ft co-working space",
                    "Establish 5 international partnerships",
                  ],
                },
                {
                  quarter: "Q3 2026",
                  items: [
                    "Hackathon 2026 with ₦10M prize pool",
                    "Launch advanced AI research lab",
                    "Expand to 1,000+ active members",
                  ],
                },
                {
                  quarter: "Q4 2026",
                  items: [
                    "Open satellite hub in Abuja",
                    "Launch venture fund (₦500M)",
                    "Annual innovation summit with 1,000+ participants",
                  ],
                },
                {
                  quarter: "2027+",
                  items: [
                    "Expand to 10 regional hubs across Nigeria",
                    "Establish BUK Innovation Fund with ₦1B",
                    "Create unicorn pipeline with global mentors",
                  ],
                },
              ].map((phase, idx) => (
                <div key={idx} className="pb-6 border-b border-[#dfe6d7] last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-[#1b5e2b] mb-3">{phase.quarter}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#61705d]">
                        <span className="text-[#1b5e2b] font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Ecosystem</h2>
          <p className="text-lg mb-8 text-white/90">
            Be part of Africa's leading innovation hub and help shape the future.
          </p>
          <Link
            href="/programs"
            className="inline-block bg-white text-[#1b5e2b] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition"
          >
            Explore Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
