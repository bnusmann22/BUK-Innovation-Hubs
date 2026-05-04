"use client";

import { Clock, Users, CheckCircle, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const programsData = [
  {
    id: 1,
    title: "Startup Incubation Program",
    description: "12-month intensive program for early-stage startups",
    duration: "12 months",
    deadline: "June 30, 2026",
    participants: "Limited to 20",
    status: "Open",
    requirements: [
      "Valid business idea or MVP",
      "Committed founding team (min 2)",
      "Registered as startup/company (preferred)",
    ],
    documents: ["Business Plan", "Pitch Deck", "Financial Projections", "Team Resumes"],
    category: "Incubation",
  },
  {
    id: 2,
    title: "Innovation Fellowship",
    description: "6-month intensive training for aspiring entrepreneurs",
    duration: "6 months",
    deadline: "May 31, 2026",
    participants: "100 fellows",
    status: "Open",
    requirements: [
      "University student or recent graduate",
      "Passion for entrepreneurship",
      "Available for full commitment",
    ],
    documents: ["Application Form", "Essay", "CV", "Letter of Recommendation"],
    category: "Training",
  },
  {
    id: 3,
    title: "Hackathon 2026",
    description: "48-hour innovation challenge with ₦5M prize pool",
    duration: "2 days",
    deadline: "June 1, 2026",
    participants: "500 developers",
    status: "Open",
    requirements: [
      "Basic programming skills",
      "Team of 2-4 members",
      "Creative problem-solving mindset",
    ],
    documents: ["Team Registration", "Project Brief (after event)"],
    category: "Competition",
  },
  {
    id: 4,
    title: "Research Commercialization",
    description: "Transform academic research into market-ready solutions",
    duration: "Ongoing",
    deadline: "Rolling",
    participants: "Unlimited",
    status: "Open",
    requirements: [
      "Peer-reviewed research or prototype",
      "Clear commercialization potential",
      "Academic affiliation",
    ],
    documents: ["Research Paper", "Patent Info", "Commercialization Plan"],
    category: "Research",
  },
  {
    id: 5,
    title: "Mentorship Program",
    description: "Connect with industry experts and successful founders",
    duration: "3 months",
    deadline: "Ongoing",
    participants: "Unlimited",
    status: "Open",
    requirements: ["Clear goals", "Commitment to meetings"],
    documents: ["Mentee Application", "Goals Document"],
    category: "Mentoring",
  },
  {
    id: 6,
    title: "Grants & Funding",
    description: "Access ₦10M+ in grants for innovative projects",
    duration: "Rolling basis",
    deadline: "Ongoing",
    participants: "Unlimited",
    status: "Open",
    requirements: [
      "Project proposal",
      "Budget breakdown",
      "Expected impact",
    ],
    documents: ["Grant Application", "Budget", "Impact Assessment"],
    category: "Funding",
  },
];

const categories = ["All", ...new Set(programsData.map((p) => p.category))];

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrograms = programsData.filter(
    (program) => selectedCategory === "All" || program.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">
            Programs & Opportunities
          </h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Choose the program that aligns with your goals and join our
            community of innovators. Registration is where your journey begins.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-[#dfe6d7] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="w-5 h-5 text-[#5a6b57] flex-shrink-0" />
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
      </section>

      {/* Programs List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="rounded-lg border border-[#dfe6d7] p-8 hover:shadow-lg transition bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                      {program.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {program.status}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#172018] mb-2">
                    {program.title}
                  </h2>
                  <p className="text-lg text-[#61705d] mb-4">{program.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-[#5a6b57] font-semibold mb-1">Duration</p>
                      <p className="text-sm font-bold text-[#172018]">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#5a6b57] font-semibold mb-1">Deadline</p>
                      <p className="text-sm font-bold text-[#172018]">{program.deadline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#5a6b57] font-semibold mb-1">Participants</p>
                      <p className="text-sm font-bold text-[#172018]">{program.participants}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6 py-6 border-t border-b border-[#dfe6d7]">
                <div>
                  <h4 className="font-bold text-[#172018] mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#61705d]">
                        <CheckCircle className="w-4 h-4 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#172018] mb-3">Required Documents</h4>
                  <ul className="space-y-2">
                    {program.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#61705d]">
                        <CheckCircle className="w-4 h-4 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#register"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#1b5e2b] px-6 py-3 text-base font-bold text-white hover:bg-[#154a22] transition"
                >
                  Register Now <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1b5e2b] px-6 py-3 text-base font-bold text-[#1b5e2b] hover:bg-[#1b5e2b]/5 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-[#dfe6d7] p-8">
            <h2 className="text-3xl font-bold text-[#172018] mb-2">Ready to Join?</h2>
            <p className="text-[#61705d] mb-8">
              Fill out the form below to express your interest and we'll get back to you within 48 hours.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#172018] mb-2">
                  Select Program
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]">
                  <option>Choose a program...</option>
                  {programsData.map((prog) => (
                    <option key={prog.id}>{prog.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#172018] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#172018] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#172018] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#172018] mb-2">
                  Tell us about yourself (500 chars max)
                </label>
                <textarea
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                  placeholder="What are your goals? What do you hope to achieve?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1b5e2b] text-white py-3 rounded-lg font-bold hover:bg-[#154a22] transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
