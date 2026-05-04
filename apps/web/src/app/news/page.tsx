"use client";

import { Calendar, ArrowRight, Search, Filter } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">News & Announcements</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Stay updated with the latest news, announcements, opportunities, and success stories from
            BUK Innovation Hubs. Freshness is mandatory - outdated content kills credibility.
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-[#172018] mb-8">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <Link
                  key={news.id}
                  href="#"
                  className="group rounded-lg border-2 border-[#1b5e2b] overflow-hidden hover:shadow-xl transition bg-white flex flex-col"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#1b5e2b]/20 to-[#006b85]/20 flex items-center justify-center text-6xl group-hover:scale-105 transition">
                    {news.image}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#1b5e2b] text-white text-xs font-semibold rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-[#5a6b57]">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-[#61705d] text-sm flex-1 line-clamp-3 mb-4">
                      {news.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#1b5e2b] font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-[#dfe6d7] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-[#5a6b57]" />
              <input
                type="text"
                placeholder="Search news and announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto">
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

      {/* News List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {filteredNews.map((news) => (
            <Link
              key={news.id}
              href="#"
              className="group rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg hover:border-[#1b5e2b] transition bg-white flex gap-6"
            >
              <div className="text-5xl flex-shrink-0">{news.image}</div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                  <span className="text-xs text-[#5a6b57] flex-shrink-0">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    {news.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-[#61705d] text-sm line-clamp-2 mb-3">{news.excerpt}</p>

                <span className="inline-flex items-center gap-1 text-[#1b5e2b] font-semibold text-sm group-hover:gap-2 transition">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#61705d]">No news found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl rounded-lg border-2 border-[#1b5e2b] p-8 text-center">
          <h2 className="text-3xl font-bold text-[#172018] mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg text-[#61705d] mb-6">
            Subscribe to our newsletter to receive announcements, opportunities, and success stories directly in your inbox.
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
