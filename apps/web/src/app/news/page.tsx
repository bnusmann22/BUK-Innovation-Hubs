"use client";

import { useState } from "react";
import {
  HeroSection,
  FeaturedNewsSection,
  SearchFilterSection,
  NewsListSection,
  CTASection,
} from "@/components/sections/news";

const newsData = [
  {
    id: 1,
    date: "May 3, 2026",
    category: "Announcement",
    title: "New AI Lab Opening This Summer - ₦200M Investment",
    excerpt:
      "We're excited to announce the opening of our state-of-the-art AI laboratory with investment of ₦200M from leading tech companies. This facility will feature GPU clusters, research labs, and mentorship from world-class AI researchers.",
    content:
      "The new AI Lab will be a game-changer for our innovation hub. It will provide students and researchers with access to cutting-edge equipment and expertise needed to advance AI research and applications.",
    image: "🤖",
    featured: true,
  },
  {
    id: 2,
    date: "May 1, 2026",
    category: "Partnership",
    title: "Strategic Partnership with Global Tech Leaders",
    excerpt:
      "BUK Innovation Hubs partners with leading global tech companies to enhance our programs and resources. This collaboration will bring expert mentors, internship opportunities, and technology access to our community.",
    content: "This partnership opens doors for our startups and researchers to connect with global opportunities.",
    image: "🤝",
    featured: true,
  },
  {
    id: 3,
    date: "April 28, 2026",
    category: "Opportunity",
    title: "₦50M Funding Initiative for Early-Stage Startups",
    excerpt:
      "Applications are now open for our new startup funding initiative supporting innovative ideas in EdTech, HealthTech, AgriTech, and CleanTech. Founder-friendly terms and dedicated mentorship included.",
    content:
      "This is a great opportunity for early-stage founders to secure seed funding without excessive dilution.",
    image: "💰",
    featured: false,
  },
  {
    id: 4,
    date: "April 25, 2026",
    category: "Achievement",
    title: "Student Startup Wins International Award",
    excerpt:
      "Congratulations to our incubated startup, EduTech Solutions, for winning the Global Innovation Challenge 2026. The team competed against 500+ startups from 50 countries.",
    content:
      "This is a testament to the quality of entrepreneurs and innovations coming out of BUK Innovation Hubs.",
    image: "🏆",
    featured: false,
  },
  {
    id: 5,
    date: "April 22, 2026",
    category: "Event",
    title: "Hackathon 2026 Registration Opens - ₦5M Prize Pool",
    excerpt:
      "Calling all developers, designers, and innovators! Register your team for Hackathon 2026 happening June 1-3. Work on real-world problems and compete for ₦5M in prizes.",
    content:
      "This year's hackathon will focus on solving problems in healthcare, education, and agriculture.",
    image: "💻",
    featured: false,
  },
  {
    id: 6,
    date: "April 20, 2026",
    category: "Update",
    title: "Hub Facilities Expanded - New 2,000 sq ft Co-working Space",
    excerpt:
      "We've expanded our facilities with a new 2,000 sq ft co-working space, high-speed internet, meeting rooms, and a cafe. Available for all hub members.",
    content:
      "The expansion reflects our commitment to providing world-class facilities for our innovation community.",
    image: "🏢",
    featured: false,
  },
];

const categories = ["All", ...new Set(newsData.map((n) => n.category))];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter((item) => item.featured);

  return (
    <div className="min-h-screen">
      <HeroSection />
      {featuredNews.length > 0 && <FeaturedNewsSection featuredNews={featuredNews} />}
      <SearchFilterSection
        selectedCategory={selectedCategory}
        categories={categories}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
      />
      <NewsListSection news={filteredNews} />
      <CTASection />
    </div>
  );
}
