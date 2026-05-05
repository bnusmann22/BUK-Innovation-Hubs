"use client";

import { useState } from "react";
import {
  HeroSection,
  SearchFilterSection,
  StartupsGridSection,
  ImpactSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections/startups";

const startupsData = [
  {
    id: 1,
    name: "EduTech Solutions",
    stage: "Seed Stage",
    description: "AI-powered personalized education platform for African students",
    founded: "2024",
    team: 4,
    funding: "â‚¦50M",
    website: "edutech.example.com",
    founder: "Aisha Mohammed",
    tags: ["EdTech", "AI", "B2B"],
    impact: "5,000+ students",
    logo: "ðŸŽ“",
  },
  {
    id: 2,
    name: "GreenEnergy Hub",
    stage: "Series A",
    description: "Affordable renewable energy solutions for SMEs and households",
    founded: "2023",
    team: 8,
    funding: "â‚¦250M",
    website: "greenenergy.example.com",
    founder: "Ibrahim Hassan",
    tags: ["CleanTech", "Energy", "B2B"],
    impact: "500+ homes",
    logo: "âš¡",
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
    logo: "ðŸ¥",
  },
  {
    id: 4,
    name: "AgriTech Innovations",
    stage: "Seed Stage",
    description: "Smart farming solutions using IoT and data analytics",
    founded: "2024",
    team: 5,
    funding: "â‚¦80M",
    website: "agritech.example.com",
    founder: "Khalid Adamu",
    tags: ["AgriTech", "IoT", "B2B"],
    impact: "200+ farms",
    logo: "ðŸŒ¾",
  },
  {
    id: 5,
    name: "FinnovaPay",
    stage: "Series A",
    description: "Mobile-first payment and financial services for unbanked population",
    founded: "2023",
    team: 12,
    funding: "â‚¦300M",
    website: "finnovapay.example.com",
    founder: "Amara Chukwu",
    tags: ["FinTech", "Payments", "B2C"],
    impact: "50,000+ users",
    logo: "ðŸ’³",
  },
  {
    id: 6,
    name: "LogiTrack Systems",
    stage: "Seed Stage",
    description: "Supply chain optimization using AI and real-time tracking",
    founded: "2024",
    team: 6,
    funding: "â‚¦120M",
    website: "logitrack.example.com",
    founder: "Usman Bello",
    tags: ["Logistics", "B2B", "AI"],
    impact: "100+ businesses",
    logo: "ðŸ“¦",
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
      <HeroSection />
      <SearchFilterSection
        stages={stages}
        selectedStage={selectedStage}
        searchQuery={searchQuery}
        onStageChange={setSelectedStage}
        onSearchChange={setSearchQuery}
      />
      <StartupsGridSection startups={filteredStartups} />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
