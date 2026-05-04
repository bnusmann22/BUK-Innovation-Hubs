"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  const galleryItems = [
    {
      category: "AI & Robotics Hub",
      items: [
        {
          id: "ai-1",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
          title: "GPU Cluster Lab",
          description: "High-performance computing infrastructure for AI research"
        },
        {
          id: "ai-2",
          image: "https://images.unsplash.com/photo-1677442d019de50563a86dbac8a94b7d474c5d4d?w=800&h=600&fit=crop",
          title: "Robotics Testing Ground",
          description: "Dedicated space for robot development and testing"
        },
        {
          id: "ai-3",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
          title: "Research Workstations",
          description: "Individual workstations equipped with latest AI tools"
        },
      ]
    },
    {
      category: "Software Development Center",
      items: [
        {
          id: "dev-1",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
          title: "Main Development Lab",
          description: "Full-stack development environment with cloud infrastructure"
        },
        {
          id: "dev-2",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
          title: "Collaborative Workspace",
          description: "Open space for team collaboration and pair programming"
        },
        {
          id: "dev-3",
          image: "https://images.unsplash.com/photo-1677442d019de50563a86dbac8a94b7d474c5d4d?w=800&h=600&fit=crop",
          title: "Code Review Area",
          description: "Specialized zone for code reviews and quality assurance"
        },
      ]
    },
    {
      category: "Entrepreneurship Zone",
      items: [
        {
          id: "ent-1",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
          title: "Pitch Arena",
          description: "Professional stage for startup pitch events and competitions"
        },
        {
          id: "ent-2",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
          title: "Incubation Office",
          description: "Private office spaces for early-stage startups"
        },
        {
          id: "ent-3",
          image: "https://images.unsplash.com/photo-1677442d019de50563a86dbac8a94b7d474c5d4d?w=800&h=600&fit=crop",
          title: "Mentoring Lounge",
          description: "Comfortable space for mentorship sessions"
        },
      ]
    },
    {
      category: "Design & Innovation Hub",
      items: [
        {
          id: "des-1",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
          title: "Design Studio",
          description: "Modern design workspace with professional tools"
        },
        {
          id: "des-2",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
          title: "Prototyping Lab",
          description: "Equipment for rapid prototyping and design validation"
        },
        {
          id: "des-3",
          image: "https://images.unsplash.com/photo-1677442d019de50563a86dbac8a94b7d474c5d4d?w=800&h=600&fit=crop",
          title: "Creative Showcase",
          description: "Display area for finished designs and innovations"
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10 border-b border-[#dfe6d7]">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1b5e2b] font-semibold mb-4 hover:gap-3 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Our Facilities & Hubs</h1>
          <p className="text-lg text-[#61705d] max-w-2xl">
            Explore our state-of-the-art facilities, innovative spaces, and collaborative environments designed to support your growth.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {galleryItems.map((category, catIdx) => (
            <div key={catIdx} className="mb-20">
              <h2 className="text-3xl font-bold text-[#172018] mb-8 pb-4 border-b-2 border-[#1b5e2b]">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg overflow-hidden border border-[#dfe6d7] hover:shadow-lg transition group"
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#172018] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#61705d] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to innovate?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join BUK Innovation Hubs today and gain access to all our facilities and resources.
          </p>
          <Link
            href="/hubs"
            className="inline-block bg-white text-[#1b5e2b] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition"
          >
            Explore Our Hubs
          </Link>
        </div>
      </section>
    </div>
  );
}
