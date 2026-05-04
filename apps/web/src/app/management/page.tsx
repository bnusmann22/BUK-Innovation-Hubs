"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/social-icons";

export default function ManagementPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Muhammad Ali",
      role: "Director",
      title: "Founder & Chief Innovation Officer",
      bio: "Former tech entrepreneur with 15+ years in innovation ecosystem development. Led multiple tech ventures and established partnerships with Fortune 500 companies.",
      image: "👨‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
    },
    {
      id: 2,
      name: "Fatima Hassan",
      role: "Head of Programs",
      title: "Senior Program Director",
      bio: "Expert in startup acceleration with track record of 20+ successful exits. Passionate about mentoring entrepreneurs and developing innovative programs.",
      image: "👩‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
    },
    {
      id: 3,
      name: "Kadir Sani",
      role: "Director of Operations",
      title: "Operations & Facilities Manager",
      bio: "Operations specialist with expertise in managing large-scale innovation ecosystems. Currently managing 7 hubs and 500+ daily active users.",
      image: "👨‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
    },
    {
      id: 4,
      name: "Hadiza Ibrahim",
      role: "Head of Partnerships",
      title: "Strategic Partnerships Lead",
      bio: "Strategic partner with proven ability to establish partnerships with Fortune 500 companies and leading global venture capitalists.",
      image: "👩‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
    },
    {
      id: 5,
      name: "Ahmed Yusuf",
      role: "Head of AI & Robotics",
      title: "AI & Robotics Hub Lead",
      bio: "PhD in Computer Science with research focus on machine learning. Published 30+ papers and mentored 50+ AI researchers.",
      image: "👨‍💻",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
    },
    {
      id: 6,
      name: "Aisha Malik",
      role: "Head of Design & Innovation",
      title: "Design & Innovation Hub Lead",
      bio: "Award-winning designer with 12 years of experience in UX/UI and product design. Led design teams at multiple tech startups.",
      image: "👩‍🎨",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
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
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Leadership Team</h1>
          <p className="text-lg text-[#61705d] max-w-2xl">
            Meet the visionary leaders driving innovation and excellence at BUK Innovation Hubs.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-lg border border-[#dfe6d7] overflow-hidden hover:shadow-lg transition bg-gradient-to-br from-white to-[#f5f7f2]/50"
              >
                {/* Image Section */}
                <div className="h-48 bg-gradient-to-br from-[#1b5e2b]/20 to-[#006b85]/20 flex items-center justify-center text-7xl">
                  {member.image}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Name and Role */}
                  <h3 className="text-2xl font-bold text-[#172018] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#1b5e2b] font-semibold text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#61705d] font-medium mb-3">
                    {member.title}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-[#61705d] leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-[#dfe6d7]">
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#61705d] hover:text-[#1b5e2b] transition"
                      title="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#61705d] hover:text-[#1b5e2b] transition"
                      title="Twitter"
                    >
                      <TwitterIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#61705d] hover:text-[#1b5e2b] transition"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#61705d] hover:text-[#1b5e2b] transition"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 text-white/90">
            Connect with our leadership team and be part of Africa's leading innovation ecosystem.
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
