"use client";

import { useState } from "react";
import {
  HeroSection,
  FilterSection,
  ResultsSummarySection,
  HubsListSection,
  StatsSection,
  LeadershipSection,
  CTASection,
} from "@/components/sections/hubs";

const hubsData = [
  {
    id: 1,
    name: "BUK-BOI Innovation Hub",
    category: "Innovation",
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
      <HeroSection />
      <FilterSection
        categories={categories}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
      />
      <ResultsSummarySection count={filteredHubs.length} />
      <HubsListSection
        hubs={filteredHubs}
        onClearFilters={() => {
          setSearchQuery("");
          setSelectedCategory("All");
        }}
      />
      <StatsSection />
      <LeadershipSection />
      <CTASection />
    </div>
  );
}