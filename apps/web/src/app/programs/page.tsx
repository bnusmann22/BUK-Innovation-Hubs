"use client";

import { useState } from "react";
import {
  HeroSection,
  FilterSection,
  ProgramsListSection,
  RegistrationSection,
} from "@/components/sections/programs";

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
      <HeroSection />
      <FilterSection
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProgramsListSection programs={filteredPrograms} />
      <RegistrationSection />
    </div>
  );
}
